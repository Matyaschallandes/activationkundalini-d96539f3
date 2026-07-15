import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Accompagnement énergétique en cas de fatigue chronique",
  "serviceType": "Accompagnement bien-être & harmonisation énergétique",
  "provider": { "@id": "https://www.activationkundalini.ch/#organization" },
  "areaServed": "Suisse romande",
  "url": "https://www.activationkundalini.ch/retrouver-energie-fatigue-chronique",
};

const FatigueChroniquePage = () => (
  <Layout>
    <Seo
      title="Fatigue Chronique — Retrouver Son Énergie Vitale | Suisse Romande"
      description="Fatigue chronique : accompagnement énergétique pour retrouver vitalité et clarté en Suisse romande. Approche holistique complémentaire d'un suivi médical. Séances à Bevaix (NE) ou à distance."
      path="/retrouver-energie-fatigue-chronique"
      keywords="fatigue chronique Suisse romande, retrouver énergie vitale, fatigue persistante accompagnement, épuisement énergétique, soin énergétique fatigue, fatigue intense sans raison"
      jsonLd={jsonLd}
    />

    <header className="pt-24 pb-10 md:pt-32 md:pb-14 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
          Vitalité · Ancrage · Reconnexion à soi
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-6">
          Retrouver son <span className="text-gradient-gold italic">énergie vitale</span> face à la fatigue chronique
        </h1>
        <div className="glow-line w-20 mx-auto mb-8" />
        <p className="font-body text-foreground/75 leading-relaxed max-w-2xl mx-auto">
          Quand la fatigue s'installe et que le repos ne suffit plus, un accompagnement énergétique peut aider à retrouver un flux vital plus clair — en complément d'un bilan médical.
        </p>
      </div>
    </header>

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-4xl">

        <h2 className="font-heading text-3xl md:text-4xl font-light mb-6 text-foreground">
          Quand la <span className="text-gradient-gold italic">fatigue</span> devient un compagnon permanent
        </h2>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Se réveiller déjà fatigué·e. Traîner sa journée. Sentir que le repos ne recharge plus. La fatigue chronique ne se limite pas au corps physique — elle a presque toujours une composante énergétique et émotionnelle qui échappe aux examens médicaux classiques.
        </p>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Avant tout : un bilan médical est indispensable pour écarter les causes physiques (thyroïde, anémie, carences, etc.). L'accompagnement énergétique se place ensuite en complément, pour travailler sur ce qui « fuit » ton énergie au quotidien.
        </p>

        <h3 className="font-heading text-2xl font-light mt-10 mb-4 text-foreground">Ce qui vide ton énergie sans que tu le voies</h3>
        <ul className="space-y-2 mb-8">
          {[
            "Charge émotionnelle non-digérée (deuils, ruptures, non-dits)",
            "Système nerveux en hyper-vigilance permanente",
            "Blocages énergétiques dans certains chakras",
            "Environnements ou relations qui « pompent »",
            "Perte de sens et absence d'élan intérieur",
            "Mémoires anciennes ancrées dans le corps",
          ].map((s) => (
            <li key={s} className="flex items-start gap-3">
              <span className="text-primary text-sm mt-1">✦</span>
              <span className="font-body text-sm text-foreground/80">{s}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-heading text-3xl md:text-4xl font-light mt-14 mb-6 text-foreground">
          Un travail en profondeur pour <span className="text-gradient-gold italic">recharger la source</span>
        </h2>

        <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">Nettoyage énergétique</h3>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          On identifie et on libère ce qui n'est plus toi — attachements, mémoires anciennes, résidus émotionnels — pour que ton énergie puisse à nouveau circuler librement.
        </p>

        <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">Harmonisation des chakras</h3>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Les centres énergétiques sont rééquilibrés un par un, avec une attention particulière au chakra racine (ancrage, vitalité) et au chakra du plexus solaire (feu intérieur).
        </p>

        <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">Activation Kundalini</h3>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Progressive et respectueuse, elle réveille l'énergie vitale endormie et redonne accès à une source intérieure plus stable et plus dense — c'est souvent ce qui manque quand la fatigue devient chronique.
        </p>

        <h2 className="font-heading text-3xl md:text-4xl font-light mt-14 mb-6 text-foreground">
          Prendre rendez-vous
        </h2>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Séances au cabinet à Bevaix (Neuchâtel) ou à distance partout en Suisse romande. Prix libre.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link to="/rendez-vous" className="inline-flex items-center px-8 py-4 border border-primary/40 rounded-full font-body text-sm tracking-widest uppercase text-primary hover:bg-primary/10 transition">
            Prendre rendez-vous
          </Link>
          <Link to="/accompagnement-burn-out-suisse-romande" className="inline-flex items-center px-8 py-4 border border-border rounded-full font-body text-sm tracking-widest uppercase text-foreground hover:bg-card/50 transition">
            Voir : Burn-out
          </Link>
        </div>

        <p className="font-body text-foreground/50 text-xs italic mt-16">
          Un bilan médical préalable est fortement recommandé. Cet accompagnement énergétique ne remplace pas un diagnostic ni un traitement médical.
        </p>
      </div>
    </section>
  </Layout>
);

export default FatigueChroniquePage;
