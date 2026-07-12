import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, Loader2, Mail, AlertCircle, Download, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import pdfAsset from "@/assets/secret-initie-pdf.asset.json";

const WHATSAPP_URL = "https://wa.me/41762445552";
const CONTACT_EMAIL = "matyas.challandes@gmail.com";

const ContactHelp = () => (
  <div className="mt-10 pt-8 border-t border-border">
    <p className="font-body text-sm text-muted-foreground mb-4">Un problème ? Contactez-moi directement :</p>
    <div className="flex flex-wrap justify-center gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-primary/40 text-foreground font-body text-sm px-5 py-2 rounded-sm hover:bg-primary/10 transition-all"
      >
        <MessageCircle className="w-4 h-4 text-primary" />
        WhatsApp
      </a>
      <a
        href={`mailto:${CONTACT_EMAIL}?subject=Le%20Secret%20de%20l'Initi%C3%A9`}
        className="inline-flex items-center gap-2 border border-primary/40 text-foreground font-body text-sm px-5 py-2 rounded-sm hover:bg-primary/10 transition-all"
      >
        <Mail className="w-4 h-4 text-primary" />
        {CONTACT_EMAIL}
      </a>
    </div>
  </div>
);

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

          {status === "delivered" && (
            <>
              <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="font-heading text-4xl md:text-5xl font-light mb-4">
                Merci <span className="text-gradient-gold italic">infiniment</span>
              </h1>
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
              <div className="mt-6 mb-2">
                <a
                  href={pdfAsset.url}
                  download="Le-Secret-de-l-Initie.pdf"
                  className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase px-8 py-3 rounded-sm hover:shadow-gold transition-all mr-3"
                >
                  <Download className="w-4 h-4" />
                  Télécharger le livre
                </a>
                <Link
                  to="/"
                  className="inline-block border border-primary/40 text-foreground font-body text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-sm hover:bg-primary/10 transition-all"
                >
                  Accueil
                </Link>
              </div>
              <ContactHelp />
            </>
          )}

          {status === "idle" && (
            <>
              <AlertCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="font-heading text-3xl md:text-4xl font-light mb-4">Aucune commande trouvée</h1>
              <p className="font-body text-foreground/70 mb-8">
                Le téléchargement du livre est disponible uniquement après le paiement.
              </p>
              <Link
                to="/boutique"
                className="inline-block bg-gradient-gold text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase px-8 py-3 rounded-sm hover:shadow-gold transition-all"
              >
                Retour à la boutique
              </Link>
              <ContactHelp />
            </>
          )}

          {status === "pending" && (
            <>
              <Loader2 className="w-16 h-16 text-primary mx-auto mb-6 animate-spin" />
              <h1 className="font-heading text-3xl md:text-4xl font-light mb-4">Paiement en cours de validation</h1>
              <p className="font-body text-foreground/70 mb-6">
                Dès que votre paiement est confirmé, le livre vous sera envoyé par email et le lien de téléchargement apparaîtra ici. Merci de patienter quelques instants et de rafraîchir cette page si besoin.
              </p>
              <ContactHelp />
            </>
          )}

          {status === "error" && (
            <>
              <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
              <h1 className="font-heading text-3xl md:text-4xl font-light mb-4">Un souci est survenu</h1>
              <p className="font-body text-foreground/70 mb-6">
                Votre paiement est enregistré. Vous pouvez télécharger le livre immédiatement ci-dessous :
              </p>
              <a
                href={pdfAsset.url}
                download="Le-Secret-de-l-Initie.pdf"
                className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase px-8 py-3 rounded-sm hover:shadow-gold transition-all"
              >
                <Download className="w-4 h-4" />
                Télécharger le livre
              </a>
              {errorMsg && <p className="text-xs text-muted-foreground mt-6">{errorMsg}</p>}
              <ContactHelp />
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutReturn;
