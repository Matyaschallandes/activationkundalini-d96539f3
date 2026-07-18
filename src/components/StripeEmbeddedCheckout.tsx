import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { getStripe, getStripeEnvironment } from "@/lib/stripe";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  priceId: string;
  quantity?: number;
  customerEmail?: string;
  returnUrl?: string;
  collectShipping?: boolean;
  metadata?: Record<string, string>;
}

export function StripeEmbeddedCheckout({ priceId, quantity, customerEmail, returnUrl, collectShipping, metadata }: Props) {
  const fetchClientSecret = async (): Promise<string> => {
    const finalReturnUrl =
      returnUrl ||
      `${window.location.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`;
    const { data, error } = await supabase.functions.invoke("create-checkout", {
      body: {
        priceId,
        quantity,
        customerEmail,
        returnUrl: finalReturnUrl,
        environment: getStripeEnvironment(),
        collectShipping,
        metadata,
      },
    });
    if (error || !data?.clientSecret) {
      throw new Error(error?.message || data?.error || "Impossible de créer la session de paiement");
    }
    return data.clientSecret;
  };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={getStripe()} options={{ fetchClientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
