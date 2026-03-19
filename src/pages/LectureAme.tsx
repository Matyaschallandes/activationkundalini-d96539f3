import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const LectureAme = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
            Connaissance de soi
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-center font-light mb-4 text-foreground">
            <span className="text-gradient-gold italic">Lecture d'âme</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-center text-muted-foreground mb-4">
            Comprendre qui tu es avant d'activer ton feu intérieur
          </p>
          <div className="glow-line w-24 mx-auto mb-16" />

          {/* Intro */}
          <div className="space-y-8 font-body text-muted-foreground leading-relaxed text-lg">
            <p>
              La lecture d'âme est un <span className="text-foreground font-medium">espace de conscience et de révélation</span>.
            </p>
            <p>
              À travers l'analyse de tes données de naissance (astrologie, Human Design, numérologie et lecture énergétique), elle permet de mettre en lumière ta <span className="text-primary">nature profonde</span>, ton fonctionnement intérieur et les grands axes de ton incarnation.
            </p>
          </div>

          {/* Ce que ça permet */}
          <div className="mt-16 p-8 md:p-10 border border-border rounded-sm bg-card/60 backdrop-blur-sm">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
              🔮 Concrètement, cette lecture sert à :
            </h2>
            <ul className="space-y-4 font-body text-muted-foreground text-lg">
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">✦</span>
                <span>Comprendre qui tu es au-delà du mental et des conditionnements</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">✦</span>
                <span>Identifier tes forces naturelles et tes blocages inconscients</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">✦</span>
                <span>Mettre en lumière tes schémas émotionnels et karmiques</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">✦</span>
                <span>Clarifier ta mission de vie et ton chemin d'évolution</span>
              </li>
            </ul>
          </div>

          {/* Pourquoi c'est essentiel */}
          <div className="mt-16 space-y-6 font-body text-muted-foreground leading-relaxed text-lg">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground">
              ⚡ C'est une étape essentielle avant tout travail énergétique profond
            </h2>
            <p className="text-foreground font-medium text-xl">Pourquoi ?</p>
            <p>
              Parce qu'on ne peut pas activer pleinement son énergie si l'on ne se comprend pas soi-même.
            </p>
            <p>
              La lecture d'âme permet de <span className="text-primary">conscientiser ton être</span>, de te reconnecter à ton essence et de poser des bases solides.
            </p>
            <p>
              Elle prépare le terrain pour la suite : <span className="text-foreground font-medium">l'activation du feu sacré (kundalini)</span>.
            </p>
            <p>
              Une fois que tu comprends ton fonctionnement, ton corps et ton énergie peuvent s'ouvrir de manière plus fluide, plus consciente et plus sécurisée.
            </p>
          </div>

          {/* Bénéfices */}
          <div className="mt-16 p-8 md:p-10 border border-primary/20 rounded-sm bg-gradient-card">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
              🌟 Cette approche permet :
            </h2>
            <ul className="space-y-4 font-body text-muted-foreground text-lg">
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">✦</span>
                <span>D'éviter les résistances inconscientes</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">✦</span>
                <span>D'accueillir l'énergie avec plus de stabilité</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">✦</span>
                <span>D'ancrer les transformations dans la durée</span>
              </li>
            </ul>
          </div>

          {/* Résumé */}
          <div className="mt-16 text-center space-y-3 font-body text-lg">
            <p className="text-foreground font-heading text-2xl mb-6">En résumé :</p>
            <p><span className="text-primary font-medium">👉 La lecture d'âme éclaire</span></p>
            <p><span className="text-primary font-medium">👉 Le soin énergétique nettoie</span></p>
            <p><span className="text-primary font-medium">👉 L'activation de la kundalini transforme</span></p>
            <p className="text-muted-foreground mt-6 italic">
              C'est un chemin complet de reconnexion à soi, d'alignement et d'éveil intérieur.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-block bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
            >
              Réserver une lecture d'âme
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LectureAme;
