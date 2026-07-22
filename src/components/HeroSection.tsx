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
              Activation Kundalini · Chamanisme · Kinésiologie · Bevaix & Suisse romande
            </p>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 animate-fade-in-up text-foreground">
              Tu te sens <span className="text-gradient-gold italic font-medium">brisé(e)</span>, <span className="text-gradient-gold italic font-medium">fatigué(e)</span>, <span className="text-gradient-gold italic font-medium">déconnecté(e)</span> de toi-même ? Je t'accompagne avec la <span className="text-gradient-gold italic font-medium">Kundalini</span>, la <span className="text-gradient-gold italic font-medium">kinésiologie</span> et le <span className="text-gradient-gold italic font-medium">chamanisme</span>.
            </h1>

            <p className="font-body text-foreground/90 text-base md:text-lg leading-relaxed mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Peut-être que le <strong>stress</strong>, l'<strong>anxiété</strong>, un <strong>burn-out</strong> ou une <strong>fatigue chronique</strong> ont fini par t'éloigner de toi-même. Peut-être que des <strong>traumatismes</strong>, des <strong>addictions</strong> ou des <strong>blocages émotionnels</strong> te font vivre à côté de ta vie, comme si quelque chose de profond s'était arrêté. Tu donnes, tu tiens le coup, et pourtant tu sens qu'il te manque un fil — une direction, une essence, un sens.
            </p>

            <p className="font-body text-foreground/90 text-base md:text-lg leading-relaxed mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Tu n'es pas seul(e). Et si tu es ici, ce n'est probablement pas un hasard.
            </p>

            <p className="font-body text-foreground/80 text-sm md:text-base leading-relaxed mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              Je suis <strong>Matyas Challandes</strong>, guérisseur énergétique et chamane à Bevaix (Neuchâtel). Mon accompagnement mêle <span className="text-foreground font-semibold">kinésiologie</span> (en formation), <span className="text-foreground font-semibold">tests énergétiques</span>, <span className="text-foreground font-semibold">respiration alchimique</span>, <span className="text-foreground font-semibold">activation de la Kundalini</span>, <span className="text-foreground font-semibold">nettoyage énergétique</span> et pratiques chamaniques — recouvrement d'âme, libération transgénérationnelle, libération des mémoires des vies antérieures et désenvoûtement.
            </p>

            <p className="font-body text-foreground/80 text-sm md:text-base leading-relaxed mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              Ensemble, nous identifions les déséquilibres à conscientiser, nous libérons ce qui bloque ton élan, et nous réveillons la force qui dort en toi. Mon rôle n'est pas de te "soigner" : c'est de t'aider à te reconnecter à ton <strong>plein pouvoir</strong>, ton <strong>plein potentiel</strong> et ton <strong>essence profonde</strong>, pour que tu puisses reprendre alignment, avancer sereinement et réaliser ta mission de vie.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <button
                onClick={() => setDialogOpen(true)}
                className="bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
              >
                Appel découverte gratuit (30 min)
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
            "Stress, anxiété, burn-out ou fatigue",
            "Traumatismes, blocages émotionnels ou quête de sens",
            "Envie de se reconnecter à sa mission et son essence",
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
