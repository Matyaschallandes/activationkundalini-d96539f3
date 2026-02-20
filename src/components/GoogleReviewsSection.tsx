import { Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Karmaequilego#lrd=0x0:0x0,1,,,";

const GoogleReviewsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
          Témoignages
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light mb-8 text-foreground">
          Ce qu'ils en <span className="text-gradient-gold italic">disent</span>
        </h2>
        <div className="glow-line w-24 mx-auto mb-12" />

        <div className="bg-card border border-border rounded-sm p-10 shadow-gold/10">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-7 h-7 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
              />
            ))}
          </div>
          <p className="font-heading text-5xl text-gradient-gold mb-2">4.9</p>
          <p className="text-muted-foreground font-body text-sm mb-8">
            basé sur 20 avis Google
          </p>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-3 rounded-sm hover:shadow-gold transition-all duration-300"
          >
            Voir tous les avis
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
