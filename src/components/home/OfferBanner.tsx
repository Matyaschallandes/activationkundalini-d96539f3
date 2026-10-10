import { KOALENDAR_URL, GOOGLE_BUSINESS_URL } from "@/lib/links";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/data/googleReviews";

const OfferBanner = () => (
  <div className="bg-card border-b border-primary/30">
    <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-3 text-center">
      <p className="font-body text-sm text-foreground">
        <strong>Première heure découverte offerte</strong>, en présentiel à Bevaix ou à distance ·{" "}
        <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">
          ★ {GOOGLE_RATING}/5{GOOGLE_REVIEW_COUNT ? ` sur ${GOOGLE_REVIEW_COUNT} avis` : ""} sur Google
        </a>
      </p>
      <a href={KOALENDAR_URL} target="_blank" rel="noopener noreferrer"
        className="inline-flex px-5 py-2 rounded-full bg-gradient-gold text-primary-foreground font-body text-sm font-semibold">
        Prendre rendez-vous
      </a>
    </div>
  </div>
);

export default OfferBanner;
