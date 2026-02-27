import { Check } from "lucide-react";
import { useState } from "react";
import ContactFormDialog from "./ContactFormDialog";

const offers = [
  {
    name: "Découverte Gratuite",
    price: "Gratuit",
    duration: "~1h",
    description: "Lecture d'âme et mini activation pour découvrir ton potentiel.",
    features: [
      "Lecture d'âme (carte du ciel + bodygraph)",
      "Mini soin de bannissement",
      "Mini activation Kundalini",
      "Élimination des blocages",
    ],
    highlighted: false,
    free: true,
  },
  {
    name: "Découverte",
    price: "111",
    duration: "2h",
    description: "Vision claire de ton incarnation et début d'activation.",
    features: [
      "1h entretien profond",
      "1h soin énergétique + activation kundalini",
      "Lecture d'âme (carte du ciel + bodygraph)",
      "Bannissement des énergies négatives illimité",
      "Questions et appels illimités",
    ],
    highlighted: false,
    free: false,
  },
  {
    name: "Accompagnement",
    price: "333",
    duration: "4–6 semaines",
    description: "Nettoyage et activation en profondeur avec suivi régulier.",
    features: [
      "3 soins énergétiques",
      "5 guidances (tirages)",
      "Lecture d'âme complète (carte du ciel + bodygraph)",
      "Lecture au pendule",
      "1h discussion stratégique",
      "Exercices quotidiens",
      "Bannissement des énergies négatives illimité",
      "Questions et appels illimités",
    ],
    highlighted: false,
    free: false,
  },
  {
    name: "Premium",
    price: "555",
    duration: "8–10 semaines",
    description: "Transformation complète avec protocole 21 jours et suivi étendu.",
    features: [
      "6 soins énergétiques",
      "15 guidances",
      "Lecture d'âme approfondie (carte du ciel + bodygraph)",
      "Lecture au pendule",
      "Protocole transformation 21 jours",
      "3h de discussion stratégique",
      "Bannissement des énergies négatives illimité",
      "Questions et appels illimités",
    ],
    highlighted: true,
    free: false,
  },
];

const alaCarteOffers = [
  {
    name: "Initiation Reiki Kundalini",
    price: "300",
    duration: "4 niveaux · Programme complet",
    description: "Une mini formation transformatrice pour apprendre à donner des soins énergétiques puissants. À distance ou en présentiel, avec suivi personnalisé.",
    features: [
      "4 niveaux d'initiation progressifs",
      "Activation à distance ou en présentiel",
      "Toutes les techniques enseignées",
      "Programme complet pour pratiquer les soins",
      "Suivi personnalisé inclus",
      "Énergie Kundalini d'une puissance exceptionnelle",
    ],
    special: true,
  },
  {
    name: "Nettoyage de Maison",
    price: "80",
    duration: "~1h",
    description: "Purification énergétique complète de votre espace de vie. En présentiel ou à distance (envoi de photos de chaque pièce).",
    features: [
      "Élimination des entités et énergies négatives",
      "Purification des murs et mémoire des lieux",
      "Contrôle des réseaux Hartmann",
      "Détection des perturbations électromagnétiques",
      "En présentiel ou à distance (photos)",
    ],
    special: false,
  },
  {
    name: "Soin Énergétique",
    price: "80",
    duration: "~1h",
    description: "Soin profond pour rééquilibrer votre champ énergétique et libérer les blocages.",
    features: [
      "Respiration alchimique",
      "Activation de la Kundalini",
      "Techniques énergétiques avancées",
      "Nettoyage et rééquilibrage du corps énergétique",
    ],
    special: false,
  },
  {
    name: "Lecture d'Âme au Pendule",
    price: "80",
    duration: "~1h",
    description: "Analyse complète de votre incarnation pour identifier les blocages et ouvrir votre chemin de vie.",
    features: [
      "Identification des blocages",
      "Analyse des chemins de vie",
      "Détection des parasites énergétiques",
      "Maladies chroniques et problèmes d'incarnation",
      "Guidance personnalisée",
    ],
    special: false,
  },
  {
    name: "Bannissement & Nettoyage Énergétique",
    price: "60",
    duration: "À distance ou en présentiel",
    description: "Dissolution de pactes conscients ou inconscients, magie noire, sorcellerie, charmes, envoûtements et exorcisme.",
    features: [
      "Dissolution de pactes conscients ou inconscients",
      "Magie noire et sorcellerie",
      "Charmes et envoûtements",
      "Exorcisme",
      "Nettoyage énergétique complet",
    ],
    special: false,
  },
  {
    name: "Guidances",
    price: "20",
    duration: "Par écrit · WhatsApp ou PDF",
    description: "Des questions sur votre vie ? Vos blocages ? En amour ? Personnes toxiques ? Je vous envoie les guidances par écrit sur WhatsApp ou en PDF.",
    features: [
      "3 questions — 20 CHF",
      "5 questions — 30 CHF",
      "10 questions — 50 CHF",
      "Réponses envoyées par WhatsApp ou PDF",
      "Guidances personnalisées",
    ],
    special: false,
    priceLabel: "dès",
  },
];

const OffersSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState("");

  const handleChoose = (offerName: string) => {
    setSelectedOffer(offerName);
    setDialogOpen(true);
  };

  return (
    <section id="offres" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          Les offres
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-light mb-4 text-foreground">
          Choisis ton <span className="text-gradient-gold italic">niveau d'engagement</span>
        </h2>
        <div className="glow-line w-24 mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, i) => (
            <div
              key={i}
              className={`relative rounded-sm p-8 border transition-all duration-500 flex flex-col ${
                offer.highlighted
                  ? "border-primary/50 bg-card shadow-gold"
                  : "border-border bg-card/60 hover:border-primary/20"
              }`}
            >
              {offer.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground font-body text-xs font-semibold tracking-wider uppercase px-4 py-1 rounded-sm">
                  Recommandé
                </div>
              )}
              {offer.free && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-body text-xs font-semibold tracking-wider uppercase px-4 py-1 rounded-sm">
                  Gratuit
                </div>
              )}

              <h3 className="font-heading text-2xl text-foreground mb-1">{offer.name}</h3>
              <p className="text-muted-foreground font-body text-sm mb-6">{offer.duration}</p>

              <div className="mb-6">
                {offer.free ? (
                  <span className="font-heading text-4xl text-gradient-gold">Gratuit</span>
                ) : (
                  <>
                    <span className="font-heading text-5xl text-gradient-gold">{offer.price}</span>
                    <span className="text-muted-foreground font-body text-sm ml-2">CHF</span>
                  </>
                )}
              </div>

              <p className="text-foreground/70 font-body text-sm mb-8 leading-relaxed">{offer.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {offer.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleChoose(offer.name)}
                className={`block w-full text-center font-body text-sm font-semibold tracking-wider uppercase py-3 rounded-sm transition-all duration-300 ${
                  offer.highlighted
                    ? "bg-gradient-gold text-primary-foreground hover:shadow-gold"
                    : "border border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                Choisir cette offre
              </button>
            </div>
          ))}
        </div>

        {/* Services à la carte */}
        <div className="mt-20">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
            Services individuels
          </p>
          <h3 className="font-heading text-3xl md:text-4xl text-center font-light mb-4 text-foreground">
            À la <span className="text-gradient-gold italic">carte</span>
          </h3>
          <div className="glow-line w-16 mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alaCarteOffers.map((offer, i) => (
              <div
                key={i}
                className={`relative rounded-sm p-8 border transition-all duration-500 flex flex-col ${
                  offer.special
                    ? "border-primary/50 bg-card shadow-gold"
                    : "border-border bg-card/60 hover:border-primary/20"
                }`}
              >
                {offer.special && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground font-body text-xs font-semibold tracking-wider uppercase px-4 py-1 rounded-sm whitespace-nowrap">
                    Formation
                  </div>
                )}

                <h3 className="font-heading text-2xl text-foreground mb-1">{offer.name}</h3>
                <p className="text-muted-foreground font-body text-sm mb-6">{offer.duration}</p>

                <div className="mb-6">
                  {offer.priceLabel && (
                    <span className="text-muted-foreground font-body text-sm mr-1">{offer.priceLabel}</span>
                  )}
                  <span className="font-heading text-5xl text-gradient-gold">{offer.price}</span>
                  <span className="text-muted-foreground font-body text-sm ml-2">CHF</span>
                </div>

                <p className="text-foreground/70 font-body text-sm mb-8 leading-relaxed">{offer.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {offer.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleChoose(offer.name)}
                  className={`block w-full text-center font-body text-sm font-semibold tracking-wider uppercase py-3 rounded-sm transition-all duration-300 ${
                    offer.special
                      ? "bg-gradient-gold text-primary-foreground hover:shadow-gold"
                      : "border border-primary/30 text-primary hover:bg-primary/10"
                  }`}
                >
                  {offer.special ? "Commencer la formation" : "Réserver ce service"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactFormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        offerName={selectedOffer}
      />
    </section>
  );
};

export default OffersSection;
