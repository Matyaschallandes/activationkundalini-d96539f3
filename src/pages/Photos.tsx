import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import CercleGallery from "@/components/CercleGallery";
import { cerclePhotos } from "@/data/cerclePhotos";
import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

const Photos = () => {
  return (
    <Layout>
      <Seo
        title="Photos — Cercles de Guérison & Séances Kundalini | Bevaix, Neuchâtel"
        description="Photos des cercles de guérison collectifs et séances d'activation Kundalini animés par Matyas Challandes à Bevaix (Neuchâtel). Respiration alchimique, toucher énergétique, libération émotionnelle."
        path="/photos"
        keywords="photos cercle de guérison Neuchâtel, activation kundalini Bevaix, séance énergétique collective Suisse"
      />

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
            Galerie
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-center font-light mb-6 text-foreground">
            Le Cercle de <span className="text-gradient-gold italic">Guérison</span> en images
          </h1>
          <div className="glow-line w-24 mx-auto mb-8" />
          <p className="font-body text-lg text-muted-foreground text-center italic mb-12 max-w-2xl mx-auto">
            Quelques instants capturés pendant les cercles collectifs : respiration alchimique,
            accompagnement par le toucher et activation de l'énergie vitale, dans un cadre
            sécurisé et bienveillant.
          </p>

          <CercleGallery photos={cerclePhotos} />

          <div className="bg-gradient-card border border-border rounded-sm p-8 md:p-10 mt-16 text-center">
            <h2 className="font-heading text-2xl text-foreground mb-4">Envie de vivre l'expérience ?</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Les cercles ont lieu régulièrement à Bevaix (Neuchâtel). Participation au chapeau,
              prix libre — chacun contribue selon ses possibilités.
            </p>
            <Link
              to="/cercle-de-guerison"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-3 rounded-sm hover:shadow-gold transition-all duration-500"
            >
              <Flame className="w-4 h-4" />
              Découvrir le cercle de guérison
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Photos;
