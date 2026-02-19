import { useState } from "react";
import ContactFormDialog from "./ContactFormDialog";

const CtaSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />

      <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
          🔥 Prêt(e) ?
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light mb-6 text-foreground">
          Si tu sens que ton feu sacré est prêt à{" "}
          <span className="text-gradient-gold italic">s'activer…</span>
        </h2>
        <div className="glow-line w-24 mx-auto mb-8" />

        <p className="font-body text-muted-foreground text-lg mb-12 leading-relaxed">
          Réserve ton appel découverte et commençons ensemble ta transformation profonde.
        </p>

        <button
          onClick={() => setDialogOpen(true)}
          className="inline-block bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-12 py-5 rounded-sm hover:shadow-gold transition-all duration-500"
        >
          Réserve ton appel découverte maintenant
        </button>
      </div>

      <ContactFormDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default CtaSection;
