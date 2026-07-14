import { BookOpen, ShieldCheck, Mail, FileText, Languages, Download, Sparkles } from "lucide-react";
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
  paragraphs: string[];
  highlights: { emoji: string; label: string }[];
  pages: number;
  checkoutTitle: string;
  originalPrice?: number;
}

const books: Book[] = [
  {
    productKey: "livre_secret_initie",
    priceId: "livre_secret_initie_chf_7",
    cover: secretCover.url,
    eyebrow: "Édition initiatique",
    title: <>Le <span className="text-gradient-gold italic">Secret</span> de l'Initié</>,
    subtitle: <>Haute Magie pour reprendre son <em className="text-gradient-gold">pouvoir souverain</em></>,
    tagline: "Et si ce qui vous retient n'avait jamais été réel ?",
    paragraphs: [
      "Un manuel opératif qui combine la Haute Magie hermétique, la psychologie des profondeurs et les rituels d'initiation traditionnels pour vous donner les clés concrètes d'une reconquête intérieure totale.",
      "Vous allez identifier les mécanismes invisibles — peur, comparaison, dispersion — qui vous éloignent de votre autorité, puis traverser les Sept Lois de la Haute Magie (Mentalisme, Correspondance, Vibration, Polarité, Rythme, Cause à Effet, Genre) traduites en pratiques concrètes.",
      "Le livre vous accompagne ensuite à travers les trois degrés initiatiques — Purification, Illumination, Union — avant de vous transmettre une série de rituels de souveraineté : rupture des liens énergétiques, couronnement souverain, Prière du Souverain et journal de l'initié.",
      "Ce n'est pas un livre à survoler. C'est un chemin structuré, à pratiquer une étape après l'autre, pour cesser d'attendre qu'on vous couronne — et vous en souvenir.",
    ],
    highlights: [
      { emoji: "🔓", label: "Comprendre la Cage — mécanismes invisibles de la peur" },
      { emoji: "⚡", label: "Les 7 Lois de la Haute Magie décodées en pratiques" },
      { emoji: "🕯️", label: "Purification, Illumination, Union — les 3 degrés" },
      { emoji: "👑", label: "4 rituels de souveraineté à mettre en action" },
    ],
    pages: 27,
    checkoutTitle: "Le Secret de l'Initié — 7 CHF",
    originalPrice: 9,
  },
  {
    productKey: "livre_lois_universelles",
    priceId: "livre_lois_universelles_chf_7",
    cover: loisCover.url,
    eyebrow: "Manuel pratique",
    title: <>Les <span className="text-gradient-gold italic">Lois</span> Universelles</>,
    subtitle: <>Comprendre, activer sa <em className="text-gradient-gold">mission de vie</em> et manifester</>,
    tagline: "Pas un livre de plus à lire — un outil à appliquer.",
    paragraphs: [
      "Un manuel pratique pour comprendre les 12 lois qui gouvernent l'existence, clarifier votre mission de vie et manifester consciemment votre réalité — avec un exercice et un point de réflexion à chaque étape.",
      "Les 12 lois — Unité, Vibration, Correspondance, Polarité, Rythme, Cause à Effet, Genre, Attraction, Action Inspirée, Transmutation, Relativité, Compensation — sont expliquées simplement et reliées à votre vie réelle, pas seulement à la théorie.",
      "Vous découvrirez comment reconnaître votre mission de vie au-delà du métier ou du statut social grâce à un protocole d'alignement en 4 piliers (talent, sens, demande, compensation), puis une méthode de manifestation en 5 étapes pour transformer une intention en résultat concret — sans magie ni pensée positive naïve.",
      "Chaque loi est suivie d'un exercice à réaliser sous 24 à 72 heures et d'un point de réflexion à consigner. Le contenu est pensé pour être pratiquer une semaine par loi, sur environ 3 mois — pas englouti en une soirée.",
    ],
    highlights: [
      { emoji: "📜", label: "Les 12 lois universelles décodées une à une" },
      { emoji: "🧭", label: "Protocole d'alignement en 4 piliers pour votre mission" },
      { emoji: "✨", label: "Méthode de manifestation en 5 étapes concrètes" },
      { emoji: "📓", label: "12 exercices + 12 points de réflexion à consigner" },
    ],
    pages: 27,
    checkoutTitle: "Les Lois Universelles — 7 CHF",
    originalPrice: 9,
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
        description="Livres numériques de Karmaequilego : Le Secret de l'Initié et Les Lois Universelles. PDF disponibles en téléchargement après paiement."
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
                  <p className="font-body text-foreground/80 leading-relaxed mb-5 italic">{book.tagline}</p>

                  <div className="space-y-4 mb-6">
                    {book.paragraphs.map((p, i) => (
                      <p key={i} className="font-body text-foreground/70 leading-relaxed">{p}</p>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-8 border-l-2 border-primary/30 pl-4">
                    {book.highlights.map((h, i) => (
                      <li key={i} className="font-body text-sm text-foreground/80 flex items-start gap-3">
                        <span className="text-base leading-tight">{h.emoji}</span>
                        <span>{h.label}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground font-body tracking-wide uppercase mb-8">
                    <span className="inline-flex items-center gap-2"><FileText className="w-3.5 h-3.5 text-primary" /> {book.pages} pages</span>
                    <span className="inline-flex items-center gap-2"><Download className="w-3.5 h-3.5 text-primary" /> PDF numérique</span>
                    <span className="inline-flex items-center gap-2"><Languages className="w-3.5 h-3.5 text-primary" /> Français</span>
                    <span className="inline-flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-primary" /> Accès immédiat</span>
                  </div>

                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
                    <span className="font-heading text-5xl text-gradient-gold">7</span>
                    <span className="font-body text-xl text-foreground/80">CHF</span>
                    {book.originalPrice && (
                      <span className="font-body text-lg text-muted-foreground line-through">
                        {book.originalPrice} CHF
                      </span>
                    )}
                    <span className="ml-auto inline-flex items-center rounded-sm bg-primary/10 px-2.5 py-1 text-xs font-body font-semibold tracking-wide text-primary uppercase">
                      Promo
                    </span>
                  </div>
                  <p className="font-body text-sm text-primary/90 mb-8">
                    7 CHF au lieu de {book.originalPrice} CHF — offre limitée
                  </p>

                  {isPaymentsConfigured() ? (
                    <button
                      onClick={() => handleBuy(book)}
                      className="w-full md:w-auto bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
                    >
                      Acheter et télécharger
                    </button>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">Paiement bientôt disponible.</p>
                  )}

                  <div className="mt-8 space-y-3 text-sm text-foreground/70">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                       <span>Téléchargement immédiat du PDF après paiement</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Paiement sécurisé — carte, TWINT, Apple Pay, Google Pay</span>
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
