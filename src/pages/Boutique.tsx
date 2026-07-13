import { BookOpen, ShieldCheck, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { useStripeCheckout } from "@/hooks/useStripeCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { isPaymentsConfigured } from "@/lib/stripe";
import secretCover from "@/assets/secret-initie-cover.asset.json";
import loisCover from "@/assets/lois-universelles-cover.asset.json";

interface Book {
  productKey: string;
  priceId: string;
  cover: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  tagline: string;
  description: string;
  checkoutTitle: string;
}

const books: Book[] = [
  {
    productKey: "livre_secret_initie",
    priceId: "livre_secret_initie_chf",
    cover: secretCover.url,
    eyebrow: "Édition initiatique",
    title: <>Le <span className="text-gradient-gold italic">Secret</span> de l'Initié</>,
    subtitle: <>Haute Magie pour reprendre son <em className="text-gradient-gold">pouvoir souverain</em></>,
    tagline: "Et si ce qui vous retient n'avait jamais été réel ?",
    description:
      "Un manuel opératif qui combine la Haute Magie hermétique, la psychologie des profondeurs et les rituels d'initiation traditionnels pour vous donner les clés concrètes d'une reconquête intérieure totale.",
    checkoutTitle: "Le Secret de l'Initié — 7 CHF",
  },
  {
    productKey: "livre_lois_universelles",
    priceId: "livre_lois_universelles_chf",
    cover: loisCover.url,
    eyebrow: "Manuel pratique",
    title: <>Les <span className="text-gradient-gold italic">Lois</span> Universelles</>,
    subtitle: <>Comprendre, activer sa <em className="text-gradient-gold">mission de vie</em> et manifester</>,
    tagline: "Pas un livre de plus à lire — un outil à appliquer.",
    description:
      "Les 12 lois universelles décodées et reliées à votre vie réelle. Un exercice pratique et un point de réflexion à chaque étape, un protocole d'alignement en 4 piliers et une méthode de manifestation en 5 étapes.",
    checkoutTitle: "Les Lois Universelles — 7 CHF",
  },
];

const Boutique = () => {
  const { openCheckout, checkoutElement } = useStripeCheckout();

  const handleBuy = (book: Book) => {
    openCheckout({
      priceId: book.priceId,
      quantity: 1,
      title: book.checkoutTitle,
      returnUrl: `${window.location.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}&product=${book.productKey}`,
    });
  };

  return (
    <Layout>
      <Seo
        title="Boutique — Livres numériques Karmaequilego"
        description="Livres numériques de Karmaequilego : Le Secret de l'Initié et Les Lois Universelles. PDF livrés par email après paiement. 7 CHF chacun."
        path="/boutique"
      />
      <PaymentTestModeBanner />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">Boutique</p>
          <h1 className="font-heading text-4xl md:text-6xl text-center font-light mb-6 text-foreground">
            Livres <span className="text-gradient-gold italic">numériques</span>
          </h1>
          <div className="glow-line w-24 mx-auto mb-16" />

          <div className="space-y-24">
            {books.map((book, idx) => (
              <div
                key={book.productKey}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${
                  idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="flex justify-center perspective-1000">
                  <div className="book-3d relative">
                    <div className="book-3d-inner">
                      <img src={book.cover} alt={`Couverture — ${book.checkoutTitle}`} className="book-3d-cover" />
                      <div className="book-3d-spine" />
                      <div className="book-3d-pages" />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-3">{book.eyebrow}</p>
                  <h2 className="font-heading text-3xl md:text-4xl font-light mb-4 text-foreground">{book.title}</h2>
                  <h3 className="font-heading text-xl md:text-2xl font-light mb-5 text-foreground/90">{book.subtitle}</h3>
                  <p className="font-body text-foreground/80 leading-relaxed mb-4 italic">{book.tagline}</p>
                  <p className="font-body text-foreground/70 leading-relaxed mb-8">{book.description}</p>

                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="font-heading text-5xl text-gradient-gold">7</span>
                    <span className="font-body text-xl text-foreground/80">CHF</span>
                    <span className="font-body text-sm text-muted-foreground ml-2">· Livre PDF</span>
                  </div>

                  {isPaymentsConfigured() ? (
                    <button
                      onClick={() => handleBuy(book)}
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
            ))}
          </div>
        </div>
      </section>

      {checkoutElement}
    </Layout>
  );
};

export default Boutique;
