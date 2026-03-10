import { Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Karmaequilego";

const GoogleReviewsBadge = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
          Avis clients
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light mb-8 text-foreground">
          Noté <span className="text-gradient-gold italic">4.9/5</span> sur Google
        </h2>

        <div className="flex items-center justify-center gap-1.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-7 h-7 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="text-muted-foreground font-body text-sm mb-8">
          Basé sur les avis vérifiés Google Business
        </p>

        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-3 rounded-sm hover:shadow-gold transition-all duration-300"
        >
          Voir les avis Google
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default GoogleReviewsBadge;
