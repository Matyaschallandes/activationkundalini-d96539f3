/**
 * Vrais avis Google — à compléter à la main.
 * Ne jamais reformuler, compléter ou inventer un avis : copie le texte exact.
 * Une carte n'est affichée que si `text` est rempli.
 */
export type GoogleReview = {
  author: string; // "Prénom N."
  rating: number; // 1-5
  date: string; // "mars 2026"
  text: string; // texte exact
  proofUrl?: string; // lien « Partager l'avis » Google Maps
  screenshot?: string; // capture optionnelle
};

/** Lien vers la liste des avis sur Google. */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=avis+sur+karmaequilego+-+soin+%C3%A9nerg%C3%A9tique+chamanique+%E2%80%93+activation+kundalini+%E2%80%93+neuch%C3%A2tel,+suisse+romande";

/** Lien direct « Laisser un avis » — [À COMPLÉTER] (sinon la fiche Google est utilisée). */
export const GOOGLE_LEAVE_REVIEW_URL = "";

export const GOOGLE_RATING = "4,9";
/** Nombre total d'avis — [À COMPLÉTER]. Laisse vide pour ne pas afficher de nombre. */
export const GOOGLE_REVIEW_COUNT = "";

export const googleReviews: GoogleReview[] = [
  // { author: "Prénom N.", rating: 5, date: "mois année", text: "texte exact", proofUrl: "https://maps.app.goo.gl/..." },
];
