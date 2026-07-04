import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const CheckoutReturn = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <Layout>
      <Seo title="Merci — Paiement confirmé" description="Confirmation de votre commande." path="/checkout/return" />
      <section className="py-32 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="font-heading text-4xl md:text-5xl font-light mb-4">
            Merci <span className="text-gradient-gold italic">infiniment</span>
          </h1>
          <p className="font-body text-foreground/70 mb-8 leading-relaxed">
            Votre paiement a bien été reçu. Je te contacte très vite par email ou WhatsApp pour convenir
            de la suite de ton accompagnement.
          </p>
          {sessionId && (
            <p className="text-xs text-muted-foreground font-body mb-8">
              Référence : {sessionId}
            </p>
          )}
          <Link
            to="/"
            className="inline-block bg-gradient-gold text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase px-8 py-3 rounded-sm hover:shadow-gold transition-all"
          >
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutReturn;
