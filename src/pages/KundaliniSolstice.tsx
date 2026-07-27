import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const KundaliniSolstice = () => (
  <Layout>
    <Seo
      title="Kundalini & Solstice — Rituel énergétique de bascule saisonnière"
      description="Solstice d'été, solstice d'hiver, équinoxes : comment aligner l'activation Kundalini avec les portails énergétiques de l'année. Rituels, séances et accompagnement en Suisse romande."
      path="/kundalini-solstice"
      keywords="kundalini solstice, rituel solstice été, rituel solstice hiver, équinoxe énergétique, portail énergétique, activation kundalini solstice, rituel énergétique Suisse romande"
    />
    <article className="container mx-auto px-6 py-24 max-w-3xl">
      <h1 className="font-heading text-4xl md:text-5xl font-light mb-8 text-foreground">
        Kundalini & Solstice — <span className="text-gradient-gold italic">rituel énergétique de bascule saisonnière</span>
      </h1>

      <p className="font-body text-foreground/85 text-lg leading-relaxed mb-6">
        Depuis toujours, les traditions initiatiques savent que <strong>les solstices et les équinoxes ne sont pas de simples dates du calendrier</strong> : ce sont des portails énergétiques. Des seuils où la Terre elle-même change de vibration, où le champ collectif s'ouvre, et où l'énergie Kundalini circule plus facilement dans les corps prêts à l'accueillir.
      </p>

      <h2 className="font-heading text-2xl md:text-3xl mt-12 mb-4 text-foreground">Pourquoi le solstice amplifie l'énergie Kundalini</h2>
      <p className="font-body text-foreground/80 leading-relaxed mb-4">
        Au moment du solstice d'été (21 juin) comme du solstice d'hiver (21 décembre), le mouvement du Soleil semble s'arrêter. Cette pause cosmique se ressent dans le corps : le système nerveux se réorganise, les rêves deviennent plus vifs, les intuitions plus nettes. C'est un moment idéal pour <Link to="/la-kundalini" className="text-primary underline">activer la Kundalini</Link>, car l'énergie de la Terre soutient la montée le long de la colonne vertébrale.
      </p>

      <h2 className="font-heading text-2xl md:text-3xl mt-12 mb-4 text-foreground">Les 4 grands portails de l'année</h2>
      <ul className="font-body text-foreground/80 leading-relaxed space-y-3 mb-6 list-disc pl-6">
        <li><strong>Solstice d'hiver (21 décembre)</strong> — Renaissance de la lumière intérieure. Rituel de vision : que veux-tu incarner l'année qui vient ?</li>
        <li><strong>Équinoxe de printemps (21 mars)</strong> — Explosion vitale. Activation du chakra racine et du feu de vie.</li>
        <li><strong>Solstice d'été (21 juin)</strong> — Apogée solaire. Ouverture du chakra du cœur, expansion de la Kundalini.</li>
        <li><strong>Équinoxe d'automne (21 septembre)</strong> — Récolte et discernement. Nettoyage énergétique, libération karmique.</li>
      </ul>

      <h2 className="font-heading text-2xl md:text-3xl mt-12 mb-4 text-foreground">Un rituel simple à faire chez toi</h2>
      <p className="font-body text-foreground/80 leading-relaxed mb-4">
        À la veille du solstice, prends 30 minutes seul(e). Éteins ton téléphone. Assis(e), le dos droit, allume une bougie. Pose ta main droite sur ton cœur, la gauche sur ton ventre. Respire longuement par le nez pendant 10 minutes, en visualisant une lumière dorée qui monte de ton périnée jusqu'au sommet de ton crâne. Écris ensuite ce qui monte — pas ce que tu veux penser, ce qui monte vraiment.
      </p>

      <h2 className="font-heading text-2xl md:text-3xl mt-12 mb-4 text-foreground">Séances accompagnées autour des solstices</h2>
      <p className="font-body text-foreground/80 leading-relaxed mb-6">
        Dans mon cabinet à Bevaix (Neuchâtel) et à distance dans toute la Suisse romande, je propose des séances renforcées autour des quatre portails : <strong>activation Kundalini de solstice</strong>, <strong>nettoyage énergétique d'équinoxe</strong>, <strong>rituel chamanique de bascule</strong>. Ces rendez-vous saisonniers marquent l'année et créent des points d'ancrage durables.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link to="/rendez-vous" className="bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:shadow-gold transition-all">
          Réserver une séance de solstice
        </Link>
        <Link to="/la-kundalini" className="border border-primary/50 text-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:bg-primary/10 transition-all">
          Comprendre la Kundalini
        </Link>
      </div>
    </article>
  </Layout>
);

export default KundaliniSolstice;
