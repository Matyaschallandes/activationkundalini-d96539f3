import { useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import matyasPhoto from "@/assets/matyas-photo.jpg";
import ContactFormDialog from "./ContactFormDialog";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-center">
          {/* Texte */}
          <div className="text-center md:text-left">
            <p className="text-foreground font-body font-semibold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 animate-fade-in">
              🔥 Guérisseur · Activation Kundalini · Chamanisme · Kinésiologie
            </p>

            <h1 className="font-heading text-4xl md:text-6xl font-light leading-tight mb-6 animate-fade-in-up text-foreground">
              Sortir du <span className="text-gradient-gold italic font-medium">burn-out</span>, de la fatigue et de la déconnexion — pour enfin vivre votre <span className="text-gradient-gold italic font-medium">mission de vie</span>.
            </h1>

            <p className="font-body text-foreground/90 text-base md:text-lg leading-relaxed mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Vous vous sentez épuisé(e), désaligné(e), vide de sens ? Vous traversez un <strong>burn-out</strong>, une <strong>dépression</strong> ou une <strong>fatigue chronique</strong> qui ne passe plus ?
              Je suis <strong>Matyas Challandes</strong>, guérisseur énergétique à Bevaix (Neuchâtel). J'accompagne les personnes déconnectées d'elles-mêmes à se réaligner, retrouver leur feu intérieur, et incarner la raison profonde pour laquelle elles sont venues sur Terre.
            </p>

            <p className="font-body text-foreground/80 text-sm md:text-base leading-relaxed mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Ma spécialité : <span className="text-foreground font-semibold">l'activation Kundalini et le chamanisme</span> (désenvoûtement, recouvrement d'âme, dégagement d'entités). Je pratique aussi la <span className="text-foreground font-semibold">kinésiologie</span> pour libérer les mémoires cellulaires bloquées. En présentiel à Bevaix ou à distance dans toute la Suisse romande.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <button
                onClick={() => setDialogOpen(true)}
                className="bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
              >
                Réserver un appel découverte
              </button>
              <Link
                to="/rendez-vous"
                className="border border-primary/50 text-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:bg-primary/10 transition-all duration-500"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-gold opacity-30 blur-2xl rounded-full" aria-hidden />
              <img
                src={matyasPhoto}
                alt="Matyas Challandes, guérisseur énergétique et chamane à Bevaix (Neuchâtel), spécialiste de l'activation Kundalini"
                className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-2 border-primary/40 shadow-gold"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          {[
            "Vous sortez d'un burn-out et rien ne repart",
            "Vous êtes déconnecté(e), sans élan, sans direction",
            "Vous cherchez à réaliser votre mission de vie",
          ].map((text, i) => (
            <div key={i} className="border border-border rounded-sm px-6 py-4 bg-card/60 backdrop-blur-sm text-center">
              <p className="font-body text-sm text-foreground/85">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <ContactFormDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default HeroSection;
