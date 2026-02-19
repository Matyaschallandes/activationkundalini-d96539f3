import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import ContactFormDialog from "./ContactFormDialog";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 text-center max-w-4xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
          🌿 Programme d'Activation & de Transformation
        </p>

        <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight mb-8 animate-fade-in-up text-foreground">
          Active ta <span className="text-gradient-gold italic font-medium">Kundalini</span> et incarne pleinement ton{" "}
          <span className="text-gradient-gold italic font-medium">pouvoir souverain</span>
        </h1>

        <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Un accompagnement structuré pour éliminer tes blocages, comprendre ton incarnation et activer ton feu sacré.
        </p>

        <button
          onClick={() => setDialogOpen(true)}
          className="inline-block bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-sm hover:shadow-gold transition-all duration-500 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Réserver un appel découverte
        </button>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          {[
            "Tu te sens bloqué(e) énergétiquement",
            "Tu veux comprendre ton incarnation",
            "Tu veux une transformation réelle",
          ].map((text, i) => (
            <div key={i} className="border border-border rounded-sm px-6 py-4 bg-card/50 backdrop-blur-sm">
              <p className="font-body text-sm text-foreground/80">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <ContactFormDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default HeroSection;
