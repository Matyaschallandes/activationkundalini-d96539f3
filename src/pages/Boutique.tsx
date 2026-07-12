import { BookOpen, Sparkles, ShieldCheck, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { useStripeCheckout } from "@/hooks/useStripeCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { isPaymentsConfigured } from "@/lib/stripe";
import cover from "@/assets/secret-initie-cover.asset.json";

const Boutique = () => {
  const { openCheckout, checkoutElement } = useStripeCheckout();

  const handleBuy = () => {
    openCheckout({
      priceId: "livre_secret_initie_chf",
      quantity: 1,
      title: "Le Secret de l'Initié — 7 CHF",
      returnUrl: `${window.location.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}&product=livre_secret_initie`,
    });
  };

  return (
    <Layout>
      <Seo
        title="Le Secret de l'Initié — Livre numérique 7 CHF | Karmaequilego"
        description="Achetez et téléchargez immédiatement Le Secret de l'Initié : Haute Magie pour reprendre son pouvoir souverain. Livre PDF livré par email. 7 CHF."
        path="/boutique"
      />
      <PaymentTestModeBanner />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">Boutique</p>
          <h1 className="font-heading text-4xl md:text-6xl text-center font-light mb-6 text-foreground">
            Le <span className="text-gradient-gold italic">Secret</span> de l'Initié
          </h1>
          <div className="glow-line w-24 mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* 3D Book */}
            <div className="flex justify-center perspective-1000">
              <div className="book-3d relative">
                <div className="book-3d-inner">
                  <img
                    src={cover.url}
                    alt="Couverture du livre Le Secret de l'Initié"
                    className="book-3d-cover"
                  />
                  <div className="book-3d-spine" />
                  <div className="book-3d-pages" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-3">Édition initiatique</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light mb-4 text-foreground">
                Haute Magie pour reprendre son <em className="text-gradient-gold">pouvoir souverain</em>
              </h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-6 italic">
                Et si ce qui vous retient n'avait jamais été réel ?
              </p>
              <p className="font-body text-foreground/70 leading-relaxed mb-8">
                Un manuel opératif qui combine la Haute Magie hermétique, la psychologie des profondeurs et les
                rituels d'initiation traditionnels pour vous donner les clés concrètes d'une reconquête intérieure totale.
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-heading text-5xl text-gradient-gold">7</span>
                <span className="font-body text-xl text-foreground/80">CHF</span>
                <span className="font-body text-sm text-muted-foreground ml-2">· Livre PDF</span>
              </div>

              {isPaymentsConfigured() ? (
                <button
                  onClick={handleBuy}
                  className="w-full md:w-auto bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
                >
                  Acheter et recevoir par email
                </button>
              ) : (
                <p className="text-sm text-muted-foreground italic">Paiement bientôt disponible.</p>
              )}

              <div className="mt-8 space-y-3 text-sm text-foreground/70">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Livraison immédiate du PDF à votre adresse email après paiement</span>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Paiement sécurisé par Stripe (carte, TWINT, Apple Pay…)</span>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Format PDF — lisible sur tous les appareils</span>
                </div>
              </div>
            </div>
          </div>

          {/* What's inside */}
          <div className="mt-24">
            <h3 className="font-heading text-2xl md:text-3xl text-center font-light mb-12 text-foreground">
              Ce que vous allez <span className="text-gradient-gold italic">découvrir</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { emoji: "🔓", title: "Partie I — Comprendre la Cage", desc: "Identifiez les mécanismes invisibles — peur, comparaison, dispersion — qui vous éloignent de votre autorité." },
                { emoji: "⚡", title: "Partie II — Les Sept Lois de la Haute Magie", desc: "Mentalisme, Correspondance, Vibration, Polarité, Rythme, Cause à Effet, Genre — traduits en pratiques concrètes." },
                { emoji: "🕯️", title: "Partie III — Le Chemin de l'Initiation", desc: "Purification, Illumination, Union — traversez les trois degrés initiatiques." },
                { emoji: "👑", title: "Partie IV — Rituels de Souveraineté", desc: "Rupture des liens énergétiques, couronnement souverain, Prière du Souverain, journal de l'initié." },
              ].map((item, i) => (
                <div key={i} className="border border-border bg-card/60 rounded-sm p-6 hover:border-primary/30 transition-all">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h4 className="font-heading text-xl mb-2 text-foreground">{item.title}</h4>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center border border-primary/30 bg-card rounded-sm p-10 shadow-gold">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="font-heading text-xl md:text-2xl italic text-foreground/90 max-w-2xl mx-auto">
              « Vous n'avez pas besoin qu'on vous couronne. Vous n'avez besoin que de vous en souvenir. »
            </p>
            <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mt-4">Karmaequilego</p>
          </div>
        </div>
      </section>

      {checkoutElement}
    </Layout>
  );
};

export default Boutique;
