import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { CerclePhoto } from "@/data/cerclePhotos";

type CercleGalleryProps = {
  photos: CerclePhoto[];
};

const CercleGallery = ({ photos }: CercleGalleryProps) => {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i + photos.length - 1) % photos.length)),
    [photos.length]
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(i)}
            className="group relative overflow-hidden rounded-sm border border-border aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Agrandir : ${photo.alt}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo agrandie"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-5 right-5 text-foreground hover:text-primary transition-colors"
            aria-label="Fermer"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 md:left-8 text-foreground hover:text-primary transition-colors"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="w-9 h-9" />
          </button>
          <figure className="max-w-4xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[active].src}
              alt={photos[active].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-sm border border-border"
            />
            <figcaption className="mt-4 font-body text-sm text-muted-foreground text-center">
              {photos[active].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 md:right-8 text-foreground hover:text-primary transition-colors"
            aria-label="Photo suivante"
          >
            <ChevronRight className="w-9 h-9" />
          </button>
        </div>
      )}
    </>
  );
};

export default CercleGallery;
