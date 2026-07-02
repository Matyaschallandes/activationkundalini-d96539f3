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

        {/* Free Discovery Offer */}
        <div className="relative rounded-lg border-2 border-primary/40 bg-card p-8 md:p-12 shadow-gold">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground font-body text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2 rounded-sm whitespace-nowrap flex items-center gap-2">
            <Gift className="w-3 h-3" /> Offert · 20 minutes
          </div>

          <div className="text-center mb-8 mt-2">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-3">
              Premier entretien <span className="text-gradient-gold italic">gratuit</span>
            </h3>
            <p className="font-body text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Un premier échange offert pour faire connaissance, ressentir l'énergie et découvrir ce qui bloque en toi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 rounded-md bg-muted/40">
              <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="font-heading text-lg text-foreground mb-2">Échange 20 minutes</p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Faire connaissance et clarifier ta demande
              </p>
            </div>
            <div className="text-center p-6 rounded-md bg-muted/40">
              <Zap className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="font-heading text-lg text-foreground mb-2">Détection des 3 blocages</p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Test énergétique pour révéler tes 3 blocages principaux
              </p>
            </div>
            <div className="text-center p-6 rounded-md bg-muted/40">
              <Shield className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="font-heading text-lg text-foreground mb-2">Rituel de protection</p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Bannissement énergétique offert
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/rendez-vous"
              className="inline-block bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
            >
              Réserver mon entretien gratuit
            </Link>
          </div>
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
