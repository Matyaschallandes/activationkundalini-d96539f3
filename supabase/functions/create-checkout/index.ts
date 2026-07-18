import { type StripeEnv, createStripeClient } from "../_shared/stripe.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

async function createCheckoutSession(options: {
  priceId: string;
  quantity?: number;
  customerEmail?: string;
  returnUrl: string;
  environment: StripeEnv;
  collectShipping?: boolean;
  metadata?: Record<string, string>;
}) {
  if (!/^[a-zA-Z0-9_-]+$/.test(options.priceId)) throw new Error("Invalid priceId");
  const stripe = createStripeClient(options.environment);

  const prices = await stripe.prices.list({ lookup_keys: [options.priceId] });
  if (!prices.data.length) throw new Error("Price not found");
  const stripePrice = prices.data[0];
  const isRecurring = stripePrice.type === "recurring";

  let productDescription: string | undefined;
  if (!isRecurring) {
    const productId = typeof stripePrice.product === "string"
      ? stripePrice.product
      : stripePrice.product.id;
    const product = await stripe.products.retrieve(productId);
    productDescription = product.name;
  }

  // Sanitize metadata (Stripe requires string values, max ~500 chars)
  const cleanMetadata: Record<string, string> = {};
  if (options.metadata) {
    for (const [k, v] of Object.entries(options.metadata)) {
      if (typeof v === "string" && v.length > 0) cleanMetadata[k] = v.slice(0, 500);
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: stripePrice.id, quantity: options.quantity || 1 }],
    mode: isRecurring ? "subscription" : "payment",
    ui_mode: "embedded_page",
    return_url: options.returnUrl,
    ...(options.customerEmail && { customer_email: options.customerEmail }),
    ...(options.collectShipping && {
      shipping_address_collection: {
        allowed_countries: ["CH", "FR", "BE", "LU", "DE", "IT", "AT"],
      },
      phone_number_collection: { enabled: true },
    }),
    ...(Object.keys(cleanMetadata).length > 0 && {
      metadata: cleanMetadata,
      ...(!isRecurring && {
        payment_intent_data: { description: productDescription, metadata: cleanMetadata },
      }),
    }),
    ...(!isRecurring && !Object.keys(cleanMetadata).length && {
      payment_intent_data: { description: productDescription },
    }),
  });

  return session.client_secret;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }
  try {
    const body = await req.json();
    const environment: StripeEnv = body.environment === "live" ? "live" : "sandbox";
    const clientSecret = await createCheckoutSession({
      priceId: body.priceId,
      quantity: body.quantity,
      customerEmail: body.customerEmail,
      returnUrl: body.returnUrl,
      environment,
      collectShipping: body.collectShipping === true,
      metadata: body.metadata,
    });
    return new Response(JSON.stringify({ clientSecret }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("create-checkout error:", e);
    const message = e instanceof Error ? e.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
