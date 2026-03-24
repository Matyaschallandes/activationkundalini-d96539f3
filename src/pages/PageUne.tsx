import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const PageUne = () => {
  return (
    <Layout>
      <Helmet>
        <title>Soins énergétiques, guérison naturelle et libération des blocages | Activation Kundalini</title>
        <meta name="description" content="Soins énergétiques en Suisse romande : libération des blocages physiques et émotionnels, rééquilibrage des chakras, respiration alchimique, activation kundalini. Séances à distance ou en présentiel à Bevaix, Neuchâtel." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-light mb-8 text-foreground">
            Soins énergétiques, guérison naturelle et{" "}
            <span className="text-gradient-gold italic">libération des blocages</span>{" "}
            physiques et émotionnels
          </h1>

          <p className="font-body text-foreground/70 leading-relaxed mb-6">
            Les soins énergétiques proposés permettent d'agir en profondeur sur les déséquilibres du corps, de l'esprit et des émotions. Grâce à une approche holistique combinant différentes techniques vibratoires, énergétiques et de respiration consciente, il est possible de retrouver un état d'harmonie globale, de soulager les douleurs et d'accompagner le processus naturel de guérison.
          </p>

          <p className="font-body text-foreground/70 leading-relaxed mb-12">
            Les séances de soins énergétiques s'adressent à toute personne souhaitant améliorer son bien-être, réduire le stress, libérer des blocages émotionnels ou énergétiques, ou encore retrouver un équilibre intérieur durable. Ces soins peuvent également accompagner les personnes souffrant de douleurs physiques, de fatigue chronique, d'angoisses, de troubles du sommeil, de tensions nerveuses ou de déséquilibres énergétiques.
          </p>

          <h2 className="font-heading text-3xl font-light mb-6 text-foreground">
            Techniques utilisées dans les soins énergétiques
          </h2>
          <p className="font-body text-foreground/70 leading-relaxed mb-4">
            Les soins proposés combinent plusieurs approches complémentaires :
          </p>
          <ul className="space-y-2 mb-12">
            {[
              "Énergétique vibratoire et soins à distance",
              "Rééquilibrage des centres énergétiques (chakras)",
              "Nettoyage et purification des corps subtils",
              "Libération des mémoires émotionnelles et traumatiques",
              "Respiration alchimique et transformation intérieure",
              "Activation énergétique et montée vibratoire",
              "Biorésonance et fréquences de guérison",
              "Magnétisme et transmission d'énergie",
              "Protocoles de libération émotionnelle",
              "Harmonisation du champ énergétique",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary text-sm mt-1">✦</span>
                <span className="font-body text-sm text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-foreground/70 leading-relaxed mb-12">
            Cette approche permet de travailler à la fois sur le plan physique, émotionnel, mental et spirituel.
          </p>

          <h2 className="font-heading text-3xl font-light mb-6 text-foreground">
            Soulagement des douleurs et accompagnement des maladies
          </h2>
          <p className="font-body text-foreground/70 leading-relaxed mb-4">
            Les soins énergétiques peuvent contribuer à soulager de nombreuses problématiques :
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Douleurs chroniques (dos, articulations, migraines)",
              "Stress, anxiété, dépression",
              "Fatigue, burn-out, manque d'énergie",
              "Troubles du sommeil",
              "Problèmes digestifs",
              "Déséquilibres hormonaux",
              "Addictions et dépendances",
              "Blocages émotionnels et traumatismes",
              "Troubles psychosomatiques",
              "Faiblesse du système immunitaire",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary text-sm mt-1">✦</span>
                <span className="font-body text-sm text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-foreground/60 text-sm italic mb-12">
            Les soins ne remplacent pas un traitement médical, mais viennent en complément pour soutenir le processus de guérison naturelle du corps.
          </p>

          <h2 className="font-heading text-3xl font-light mb-6 text-foreground">
            Libération émotionnelle et transformation intérieure
          </h2>
          <p className="font-body text-foreground/70 leading-relaxed mb-6">
            Chaque séance permet d'identifier les causes profondes des blocages, qu'ils soient liés à des expériences passées, des mémoires inconscientes ou des schémas répétitifs. Grâce à des techniques spécifiques, il est possible de libérer ces charges émotionnelles et de retrouver un état de paix intérieure.
          </p>
          <p className="font-body text-foreground/70 leading-relaxed mb-12">
            La respiration alchimique et les pratiques énergétiques favorisent également une transformation profonde de l'être, permettant de se reconnecter à soi-même, à son potentiel et à son chemin de vie.
          </p>

          <h2 className="font-heading text-3xl font-light mb-6 text-foreground">
            Séances de soins énergétiques à distance ou en présentiel
          </h2>
          <p className="font-body text-foreground/70 leading-relaxed mb-4">
            Les soins peuvent être réalisés :
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary text-sm mt-1">✦</span>
              <span className="font-body text-sm text-foreground/80">À distance (efficacité équivalente grâce au travail énergétique)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-sm mt-1">✦</span>
              <span className="font-body text-sm text-foreground/80">En présentiel pour un accompagnement plus direct</span>
            </li>
          </ul>
          <p className="font-body text-foreground/70 leading-relaxed mb-12">
            Chaque séance est personnalisée en fonction des besoins de la personne.
          </p>

          <h2 className="font-heading text-3xl font-light mb-6 text-foreground">
            Prendre rendez-vous pour un soin énergétique
          </h2>
          <p className="font-body text-foreground/70 leading-relaxed mb-4">
            Si vous ressentez le besoin de vous libérer de douleurs, de blocages ou de retrouver un équilibre intérieur, il est possible de prendre rendez-vous pour une séance de soin énergétique.
          </p>
          <p className="font-body text-foreground/70 leading-relaxed mb-4">
            Les séances permettent de :
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "Retrouver de l'énergie et de la vitalité",
              "Apaiser le mental et les émotions",
              "Soulager les douleurs physiques",
              "Se reconnecter à soi-même",
              "Accélérer les processus de guérison",
              "Élever son niveau vibratoire",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary text-sm mt-1">✦</span>
                <span className="font-body text-sm text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-foreground/70 leading-relaxed mb-12">
            Prendre rendez-vous pour un soin énergétique est une étape vers une transformation profonde et un mieux-être durable.
          </p>

          <p className="font-body text-foreground/40 text-xs">
            Bevaix · St-Aubin · Cortaillod · La Béroche · La Grande Béroche · Areuse · Neuchâtel · Boudry · Cortaillod · District de Boudry · Gorgier
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PageUne;
