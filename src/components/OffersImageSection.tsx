import offresImage from "@/assets/offres-premium.png";
import { Gift, Sparkles, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const OffersImageSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          Mes offres
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-light mb-4 text-foreground">
          3 offres pour ta <span className="text-gradient-gold italic">transformation</span>
        </h2>
        <div className="glow-line w-24 mx-auto mb-12" />

        <div className="rounded-lg overflow-hidden shadow-gold border border-primary/20 mb-16">
          <img
            src={offresImage}
            alt="Karmaequilego – 3 offres pour ta transformation : Découverte 111 CHF, Transformation 333 CHF, Premium 555 CHF"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>


        {/* PDF Welcome Gift */}
        <div className="mt-12 rounded-lg border border-primary/30 bg-muted/30 p-8 md:p-10 text-center">
          <Gift className="w-8 h-8 text-primary mx-auto mb-4" />
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-3">
            Cadeau de bienvenue
          </p>
          <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-3">
            Livre de <span className="text-gradient-gold italic">prières</span> pour libérer ton karma
          </h3>
          <p className="font-body text-muted-foreground text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            Un recueil de prières puissantes offert gratuitement pour t'accompagner dans ta libération karmique. À télécharger et à utiliser dès aujourd'hui.
          </p>
          <a
            href="/livre-de-prieres.pdf"
            download
            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-3 rounded-sm transition-all duration-300"
          >
            📖 Télécharger le PDF gratuit
          </a>
        </div>
      </div>
    </section>
  );
};

export default OffersImageSection;
