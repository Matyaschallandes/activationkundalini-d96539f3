import { useState } from "react";
import { Star, X } from "lucide-react";
import {
  googleReviews,
  GOOGLE_REVIEWS_URL,
  GOOGLE_LEAVE_REVIEW_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  type GoogleReview,
} from "@/data/googleReviews";
import { GOOGLE_BUSINESS_URL } from "@/lib/links";

const LIMIT = 260;

const ReviewCard = ({ r, onShot }: { r: GoogleReview; onShot: (r: GoogleReview) => void }) => {
  const [open, setOpen] = useState(false);
  const href = r.proofUrl || GOOGLE_BUSINESS_URL;
  const long = r.text.length > LIMIT;
  const first = r.author.split(" ")[0];
  const body = (
    <>
      <div className="flex gap-0.5 mb-3" aria-label={`${r.rating} sur 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < r.rating ? "fill-primary text-primary" : "text-border"}`} />
        ))}
      </div>
      <p className={`font-body text-sm text-foreground/80 leading-relaxed whitespace-pre-line ${long && !open ? "line-clamp-5" : ""}`}>
        « {r.text} »
      </p>
      {long && (
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(!open); }}
          className="mt-2 text-xs text-primary underline"
        >
          {open ? "Réduire" : "Lire la suite"}
        </button>
      )}
      <div className="mt-4 flex items-center justify-between text-xs text-foreground/60">
        <span><strong className="text-foreground/80">{r.author}</strong> · {r.date}</span>
        <span className="text-primary">Avis Google ✓</span>
      </div>
      <p className="mt-2 text-xs text-primary">Voir l'avis d'origine →</p>
    </>
  );
  const cls = "block text-left w-full p-6 rounded-2xl border border-border bg-card/60 hover:border-primary/50 transition focus:outline-none focus:ring-2 focus:ring-primary";
  return r.screenshot ? (
    <button type="button" onClick={() => onShot(r)} className={cls} aria-label={`Ouvrir l'avis de ${first} sur Google`}>{body}</button>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={`Ouvrir l'avis de ${first} sur Google`}>{body}</a>
  );
};

const RealReviews = () => {
  const [shot, setShot] = useState<GoogleReview | null>(null);
  const reviews = googleReviews.filter((r) => r.text.trim());
  return (
    <section id="avis" className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-3 text-foreground">
          Les <span className="text-gradient-gold italic">avis</span> sur Google
        </h2>
        <p className="text-center font-body text-foreground/70 mb-10">
          ★ {GOOGLE_RATING}/5{GOOGLE_REVIEW_COUNT ? ` sur ${GOOGLE_REVIEW_COUNT} avis` : ""} sur Google
        </p>
        {reviews.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3 mb-10">
            {reviews.map((r, i) => <ReviewCard key={i} r={r} onShot={setShot} />)}
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-body text-sm font-semibold">
            Voir tous les avis sur Google
          </a>
          <a href={GOOGLE_LEAVE_REVIEW_URL || GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full border border-primary/40 text-primary font-body text-sm">
            Laisser un avis
          </a>
        </div>
      </div>
      {shot && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-foreground/70 flex items-center justify-center p-4" onClick={() => setShot(null)}>
          <div className="bg-background rounded-2xl p-4 max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setShot(null)} aria-label="Fermer" className="float-right"><X className="w-5 h-5" /></button>
            <img src={shot.screenshot} alt={`Capture de l'avis de ${shot.author}`} className="w-full rounded-lg mb-4" loading="lazy" />
            <a href={shot.proofUrl || GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">Voir sur Google</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default RealReviews;
