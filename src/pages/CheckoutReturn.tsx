import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, Loader2, Mail, AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { supabase } from "@/integrations/supabase/client";
import { getStripeEnvironment } from "@/lib/stripe";

const CheckoutReturn = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const product = searchParams.get("product");
  const [status, setStatus] = useState<"loading" | "delivered" | "pending" | "error" | "idle">(
    product === "livre_secret_initie" ? "loading" : "idle",
  );
  const [email, setEmail] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (product !== "livre_secret_initie" || !sessionId) return;
    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("deliver-ebook", {
          body: { sessionId, environment: getStripeEnvironment() },
        });
        if (error) throw new Error(error.message);
        if (data?.delivered) {
          setEmail(data.email);
          setStatus("delivered");
        } else {
          setStatus("pending");
        }
      } catch (e) {
        setErrorMsg(e instanceof Error ? e.message : "Erreur inconnue");
        setStatus("error");
      }
    })();
  }, [sessionId, product]);

  return (
    <Layout>
      <Seo title="Merci — Paiement confirmé" description="Confirmation de votre commande." path="/checkout/return" />
      <section className="py-32 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          {status === "loading" && (
            <>
              <Loader2 className="w-16 h-16 text-primary mx-auto mb-6 animate-spin" />
              <h1 className="font-heading text-3xl md:text-4xl font-light mb-4">Envoi de votre livre…</h1>
              <p className="font-body text-foreground/70">Merci de patienter quelques secondes.</p>
            </>
          )}

          {(status === "delivered" || status === "idle") && (
            <>
              <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="font-heading text-4xl md:text-5xl font-light mb-4">
                Merci <span className="text-gradient-gold italic">infiniment</span>
              </h1>
              {status === "delivered" ? (
                <>
                  <p className="font-body text-foreground/80 mb-6 leading-relaxed">
                    Votre livre <em className="text-primary">Le Secret de l'Initié</em> vient d'être envoyé à :
                  </p>
                  <div className="inline-flex items-center gap-3 border border-primary/30 bg-card px-6 py-3 rounded-sm mb-8">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-body text-foreground">{email}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-8">
                    Pensez à vérifier vos courriers indésirables si vous ne le voyez pas arriver.
                  </p>
                </>
              ) : (
                <p className="font-body text-foreground/70 mb-8 leading-relaxed">
                  Votre paiement a bien été reçu. Je te contacte très vite par email.
                </p>
              )}
              <Link
                to="/"
                className="inline-block bg-gradient-gold text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase px-8 py-3 rounded-sm hover:shadow-gold transition-all"
              >
                Retour à l'accueil
              </Link>
            </>
          )}

          {status === "pending" && (
            <>
              <Loader2 className="w-16 h-16 text-primary mx-auto mb-6 animate-spin" />
              <h1 className="font-heading text-3xl md:text-4xl font-light mb-4">Paiement en cours de validation</h1>
              <p className="font-body text-foreground/70 mb-8">
                Votre livre vous sera envoyé par email dès la confirmation du paiement.
              </p>
              <Link to="/" className="text-primary underline">Retour à l'accueil</Link>
            </>
          )}

          {status === "error" && (
            <>
              <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
              <h1 className="font-heading text-3xl md:text-4xl font-light mb-4">Un souci est survenu</h1>
              <p className="font-body text-foreground/70 mb-2">Votre paiement est enregistré, mais l'envoi automatique a échoué.</p>
              <p className="font-body text-sm text-muted-foreground mb-8">
                Contactez-moi via WhatsApp (+41 76 244 55 52) et je vous envoie le livre immédiatement.
              </p>
              {errorMsg && <p className="text-xs text-muted-foreground mb-6">{errorMsg}</p>}
              <Link to="/" className="text-primary underline">Retour à l'accueil</Link>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutReturn;
