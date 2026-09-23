import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { GOOGLE_BUSINESS_URL } from "@/lib/links";

const reviews = [
  {
    name: "Sophie M.",
    rating: 5,
    text: "Une expérience incroyable ! Matyas a su m'accompagner avec bienveillance et professionnalisme. Je me suis sentie transformée après chaque séance.",
    date: "Il y a 2 semaines",
  },
  {
    name: "Laurent D.",
    rating: 5,
    text: "Je recommande vivement. Le programme de 21 jours a changé ma vie. Une approche unique et profonde qui m'a permis de retrouver mon énergie vitale.",
    date: "Il y a 1 mois",
  },
  {
    name: "Camille R.",
    rating: 5,
    text: "Matyas est un véritable guide. Son approche du Kundalini est authentique et puissante. J'ai ressenti des changements dès la première séance.",
    date: "Il y a 1 mois",
  },
  {
    name: "Thomas B.",
    rating: 5,
    text: "Merci pour ce parcours extraordinaire. Je me sens enfin aligné avec moi-même. Une rencontre qui a marqué un tournant dans ma vie.",
    date: "Il y a 2 mois",
  },
  {
    name: "Émilie P.",
    rating: 4,
    text: "Très belle découverte. L'énergie de Matyas est communicative et ses soins sont d'une grande justesse. Je continue mon chemin avec confiance.",
    date: "Il y a 3 mois",
  },
];

const GoogleReviewsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Auto-scroll every 5 seconds
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
          Témoignages
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light mb-4 text-foreground">
          Ce qu'ils en <span className="text-gradient-gold italic">disent</span>
        </h2>

        <div className="flex items-center justify-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="text-muted-foreground font-body text-sm mb-10">
          4.9/5 — basé sur 20 avis Google
        </p>

        {/* Carousel */}
        <div className="relative px-10">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 px-3"
                >
                  <div className="bg-card border border-border rounded-sm p-8 h-full flex flex-col">
                    <div className="flex items-center gap-1 mb-4 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-foreground/90 font-body text-sm leading-relaxed italic flex-1 mb-4">
                      "{review.text}"
                    </p>
                    <div>
                      <p className="text-foreground font-body font-semibold text-sm">
                        {review.name}
                      </p>
                      <p className="text-muted-foreground font-body text-xs">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-muted transition disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-muted transition disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <a
          href={GOOGLE_BUSINESS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-3 rounded-sm hover:shadow-gold transition-all duration-300 mt-10"
        >
          Voir tous les avis
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
