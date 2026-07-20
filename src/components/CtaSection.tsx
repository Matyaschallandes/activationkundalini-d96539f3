import { useState } from "react";
import ContactFormDialog from "./ContactFormDialog";

const CtaSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="contact" data-build-trigger="2026-03-13" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />

      <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
          🎁 Offert · 30 minutes
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light mb-6 text-foreground">
          Réservez votre <span className="text-gradient-gold italic">appel découverte gratuit</span>
        </h2>
        <div className="glow-line w-24 mx-auto mb-8" />

        <p className="font-body text-muted-foreground text-lg mb-6 leading-relaxed">
          Un entretien offert de 30 minutes pour :
        </p>
        <ul className="text-left max-w-xl mx-auto space-y-3 mb-8 font-body text-foreground/85">
          <li className="flex gap-3"><span className="text-primary">→</span> Découvrir ma technique et poser toutes vos questions.</li>
          <li className="flex gap-3"><span className="text-primary">→</span> Ressentir concrètement l'énergie grâce à un mini-soin gratuit.</li>
          <li className="flex gap-3"><span className="text-primary">→</span> Identifier l'origine d'un blocage grâce au test énergétique.</li>
        </ul>
        <p className="font-body text-muted-foreground/70 text-sm mb-12">
          En présentiel à Bevaix ou à distance (Zoom · WhatsApp vidéo · sur photo).
        </p>

        <button
          onClick={() => setDialogOpen(true)}
          className="inline-block bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-12 py-5 rounded-sm hover:shadow-gold transition-all duration-500"
        >
          Réserver mon appel découverte gratuit
        </button>
      </div>

      <ContactFormDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default CtaSection;
