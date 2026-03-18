import { useState } from "react";
import matyasPhoto from "@/assets/matyas-photo.jpg";
import ContactFormDialog from "./ContactFormDialog";

const DiscoveryOfferSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const offerItems = [
    {
      icon: "🔮",
      title: "Lecture d'âme complète",
      desc: "Grâce à ta carte du ciel et ton profil Human Design, je révèle ton archétype, ta mission d'incarnation et tes blocages profonds.",
    },
    {
      icon: "🔥",
      title: "Mini activation Kundalini",
      desc: "Je reconnecte ton archétype à ton incarnation et j'active le feu sacré pour dissoudre tes blocages.",
    },
    {
      icon: "✨",
      title: "Soin énergétique & bannissement",
      desc: "Mini soin énergétique suivi d'un bannissement des énergies extérieures qui te parasitent.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block bg-primary/10 border border-primary/30 text-primary font-body text-xs tracking-[0.25em] uppercase px-6 py-2 rounded-sm animate-glow-pulse">
            🎁 Séance découverte · Prix libre
          </span>
        </div>

        <h2 className="font-heading text-4xl md:text-6xl text-center font-light mb-4 text-foreground animate-fade-in-up">
          Ton <span className="text-gradient-gold italic font-medium">éveil</span> commence ici
        </h2>
        <p className="font-body text-muted-foreground text-center text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Une séance pour conscientiser tes blessures, tes blocages — puis activer ton feu sacré.
        </p>
        <p className="font-body text-muted-foreground/80 text-center text-sm max-w-xl mx-auto mb-12 italic leading-relaxed">
          Cette séance fonctionne au prix libre. En énergétique, l'échange — même symbolique — est essentiel pour que la transformation opère pleinement. Donne ce qui te semble juste. Si tu traverses une période difficile, on en parle.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Photo + intro - 2 cols */}
          <div className="lg:col-span-2 flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/30 shadow-gold">
                <img
                  src={matyasPhoto}
                  alt="Matyas — Praticien en activation Kundalini"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-48 h-48 md:w-56 md:h-56 rounded-full border border-primary/10 -z-10" />
            </div>
            <p className="font-heading text-xl text-foreground/90 italic mb-2">Matyas</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              La Kundalini m'a transformé. Aujourd'hui, j'offre à d'autres cette possibilité — de manière accompagnée et sécurisée.
            </p>
          </div>

          {/* Offer details - 3 cols */}
          <div className="lg:col-span-3 space-y-5">
            {offerItems.map((item, i) => (
              <div
                key={i}
                className="group border border-border hover:border-primary/40 rounded-sm p-6 bg-card/60 backdrop-blur-sm transition-all duration-500 hover:shadow-gold"
              >
                <div className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-4 text-center lg:text-left">
              <button
                onClick={() => setDialogOpen(true)}
                className="bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-sm hover:shadow-gold transition-all duration-500 w-full lg:w-auto"
              >
                Je veux ma séance gratuite
              </button>
              <p className="font-body text-xs text-muted-foreground mt-3">
                Sans engagement · Séance en visio ou en présentiel
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactFormDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default DiscoveryOfferSection;
