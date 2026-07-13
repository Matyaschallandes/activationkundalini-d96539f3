import { type StripeEnv, createStripeClient } from "../_shared/stripe.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type ProductKey = "livre_secret_initie" | "livre_lois_universelles";

const PRODUCTS: Record<ProductKey, { title: string }> = {
  livre_secret_initie: { title: "Le Secret de l'Initié" },
  livre_lois_universelles: { title: "Les Lois Universelles" },
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: corsHeaders });

  try {
    const { sessionId, environment, product } = await req.json();
    if (!sessionId || typeof sessionId !== "string") throw new Error("sessionId requis");
    const env: StripeEnv = environment === "live" ? "live" : "sandbox";

    const stripe = createStripeClient(env);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new Response(JSON.stringify({ delivered: false, status: session.payment_status }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const productKey: ProductKey = (product && product in PRODUCTS ? product : "livre_secret_initie") as ProductKey;
    const p = PRODUCTS[productKey];

    return new Response(JSON.stringify({ delivered: true, product: productKey, title: p.title }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    console.error("deliver-ebook error:", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
