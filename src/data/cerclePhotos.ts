import plexus from "@/assets/cercle/cercle-guerison-plexus.jpg.asset.json";
import dos from "@/assets/cercle/cercle-guerison-dos.png.asset.json";
import salle from "@/assets/cercle/cercle-guerison-salle.png.asset.json";
import chevilles from "@/assets/cercle/cercle-guerison-chevilles.png.asset.json";
import epaules from "@/assets/cercle/cercle-guerison-epaules.png.asset.json";
import solar from "@/assets/cercle/cercle-guerison-solar.png.asset.json";

export type CerclePhoto = {
  src: string;
  alt: string;
};

export const cerclePhotos: CerclePhoto[] = [
  {
    src: salle.url,
    alt: "Matyas Challandes guidant un cercle de guérison collectif à Bevaix, Neuchâtel",
  },
  {
    src: plexus.url,
    alt: "Soin énergétique sur le plexus solaire pendant un cercle de guérison à Bevaix",
  },
  {
    src: dos.url,
    alt: "Accompagnement énergétique par le toucher durant la respiration alchimique",
  },
  {
    src: chevilles.url,
    alt: "Travail énergétique d'ancrage sur les jambes en cercle de guérison collectif",
  },
  {
    src: epaules.url,
    alt: "Libération émotionnelle par le toucher pendant l'activation Kundalini en cercle",
  },
  {
    src: solar.url,
    alt: "Nettoyage énergétique du ventre et du plexus solaire en séance collective",
  },
];
