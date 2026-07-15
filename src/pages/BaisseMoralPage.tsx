import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Accompagnement énergétique lors de périodes de baisse de moral",
  "serviceType": "Accompagnement bien-être & harmonisation énergétique",
  "provider": { "@id": "https://www.activationkundalini.ch/#organization" },
  "areaServed": "Suisse romande",
  "url": "https://www.activationkundalini.ch/retrouver-elan-baisse-de-moral",
};

const BaisseMoralPage = () => (
  <Layout>
    <Seo
      title="Retrouver l'Élan — Accompagnement Baisse de Moral & Déprime | Suisse Romande"
      description="Accompagnement énergétique lors de périodes de déprime, baisse de moral ou perte d'élan en Suisse romande. Approche complémentaire d'un suivi thérapeutique. Séances à Bevaix (NE) ou à distance."
      path="/retrouver-elan-baisse-de-moral"
      keywords="baisse de moral accompagnement, sortir de la déprime naturellement, retrouver élan de vie, perte de sens accompagnement Suisse, déclic reconnexion à soi, retrouver joie de vivre"
      jsonLd={jsonLd}
    />

    <header className="pt-24 pb-10 md:pt-32 md:pb-14 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
          Élan · Sens · Reconnexion
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-6">
          Retrouver son <span className="text-gradient-gold italic">élan de vie</span> après une période difficile
        </h1>
        <div className="glow-line w-20 mx-auto mb-8" />
        <p className="font-body text-foreground/75 leading-relaxed max-w-2xl mx-auto">
          Un accompagnement énergétique pour traverser une baisse de moral, retrouver du sens, et reconstruire un lien vivant avec soi — en complément d'un suivi thérapeutique.
        </p>
      </div>
    </header>

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <p className="font-body text-foreground/60 text-sm italic mb-8 p-4 border-l-2 border-primary/40 bg-card/30">
          Note importante : la dépression est une condition médicale qui nécessite un suivi par un professionnel de santé (médecin, psychiatre, psychologue). Cet accompagnement énergétique ne remplace <strong>jamais</strong> un traitement médical. Il vient en soutien, en complément, pour travailler la dimension énergétique et émotionnelle.
        </p>

        <h2 className="font-heading text-3xl md:text-4xl font-light mb-6 text-foreground">
          Quand la <span className="text-gradient-gold italic">lumière intérieure</span> semble s'éteindre
        </h2>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Perte d'envie, plus rien qui n'a de saveur, sentiment de traverser la vie « à côté » de soi. Une baisse de moral prolongée n'est pas une faiblesse — c'est souvent le signe d'un lien coupé : avec son corps, avec ses émotions, avec ce qui a du sens.
        </p>

        <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">Ce que peut apporter un accompagnement énergétique</h3>
        <ul className="space-y-2 mb-8">
          {[
            "Réveiller doucement l'énergie vitale endormie",
            "Libérer les charges émotionnelles anciennes",
            "Remettre en mouvement le chakra du cœur et du plexus solaire",
            "Reconnecter avec des sensations, un ressenti, un corps vivant",
            "Éclairer un axe personnel, un sens qui parle à ton âme",
          ].map((s) => (
            <li key={s} className="flex items-start gap-3">
              <span className="text-primary text-sm mt-1">✦</span>
              <span className="font-body text-sm text-foreground/80">{s}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-heading text-3xl md:text-4xl font-light mt-14 mb-6 text-foreground">
          Un travail doux et respectueux
        </h2>

        <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">Rythme adapté</h3>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Aucune brusquerie. Chaque séance respecte ton état du moment. On avance à ton rythme, avec beaucoup de bienveillance.
        </p>

        <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">Lecture d'âme</h3>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Parfois, une lecture intuitive de ta trajectoire aide à faire émerger un sens qui te ramène à toi et remet un souffle sur les braises encore chaudes.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <Link to="/rendez-vous" className="inline-flex items-center px-8 py-4 border border-primary/40 rounded-full font-body text-sm tracking-widest uppercase text-primary hover:bg-primary/10 transition">
            Prendre rendez-vous
          </Link>
          <Link to="/lecture-ame" className="inline-flex items-center px-8 py-4 border border-border rounded-full font-body text-sm tracking-widest uppercase text-foreground hover:bg-card/50 transition">
            Découvrir la lecture d'âme
          </Link>
        </div>

        <p className="font-body text-foreground/50 text-xs italic mt-16">
          En cas de pensées suicidaires ou de détresse aiguë : appelez la Main Tendue au 143 (24h/24) ou consultez immédiatement un médecin. Cet accompagnement énergétique n'est pas un traitement médical.
        </p>
      </div>
    </section>
  </Layout>
);

export default BaisseMoralPage;
