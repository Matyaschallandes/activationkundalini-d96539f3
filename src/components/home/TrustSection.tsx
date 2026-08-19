import { Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Karmaequilego";

const TrustSection = () => (
  <section id="temoignages" className="py-20 md:py-28 bg-muted/20">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-light mb-3 text-foreground">
        Ils ont fait le <span className="text-gradient-gold italic">premier pas</span>
      </h2>
      <div className="glow-line w-20 mx-auto mb-10" />

      <div className="flex items-center justify-center gap-1.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="font-heading text-3xl text-foreground mb-1">4.9 / 5</p>
      <p className="font-body text-sm text-muted-foreground mb-8">
        Avis vérifiés sur la fiche Google Business Karmaequilego
      </p>

      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-primary/50 text-foreground font-body font-medium tracking-wider uppercase text-sm px-7 py-3 rounded-sm hover:bg-primary/10 transition-all duration-300"
      >
        Lire les avis Google
        <ExternalLink className="w-4 h-4" />
      </a>

      <p className="font-body text-foreground/85 text-lg leading-relaxed mt-12 max-w-2xl mx-auto">
        Vous n'avez pas besoin de savoir exactement ce qui vous bloque avant de venir. C'est
        justement ce que nous allons explorer ensemble.
      </p>

      <div className="mt-8">
        <Link
          to="/offre-decouverte-gratuite"
          className="inline-block bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-9 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
        >
          Je veux faire le premier pas
        </Link>
      </div>
    </div>
  </section>
);

export default TrustSection;
