import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const FinalCta = () => (
  <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[130px] animate-glow-pulse" aria-hidden />

    <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
      <h2 className="font-heading text-3xl md:text-5xl font-light mb-8 text-foreground leading-snug">
        Et si c'était simplement le moment de{" "}
        <span className="text-gradient-gold italic">faire le premier pas</span> ?
      </h2>

      <p className="font-body text-foreground/85 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
        Vous n'avez pas besoin d'avoir toutes les réponses avant de me contacter. Venez simplement
        avec ce que vous vivez aujourd'hui. Nous regarderons ensemble ce qui mérite d'être exploré.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
        <Link
          to="/offre-decouverte-gratuite"
          className="bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-10 py-5 rounded-sm hover:shadow-gold transition-all duration-500"
        >
          Je réserve ma découverte gratuite
        </Link>
        <a
          href="tel:+41762445552"
          className="inline-flex items-center justify-center gap-2 border border-primary/50 text-foreground font-body font-medium tracking-wider uppercase text-sm px-8 py-5 rounded-sm hover:bg-primary/10 transition-all duration-500"
        >
          <Phone className="w-4 h-4" /> Appeler Matyas — +41 76 244 55 52
        </a>
      </div>
    </div>
  </section>
);

export default FinalCta;
