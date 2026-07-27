import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const RituelEquinoxe = () => (
  <Layout>
    <Seo
      title="Rituel énergétique d'équinoxe — Nettoyage & alignement saisonnier"
      description="Équinoxe de printemps et d'automne : rituel énergétique de nettoyage, libération karmique et alignement. Séances à Bevaix (Neuchâtel) et à distance en Suisse romande."
      path="/rituel-equinoxe"
      keywords="rituel équinoxe, équinoxe printemps rituel, équinoxe automne rituel, nettoyage énergétique équinoxe, libération karmique équinoxe, rituel énergétique Suisse"
    />
    <article className="container mx-auto px-6 py-24 max-w-3xl">
      <h1 className="font-heading text-4xl md:text-5xl font-light mb-8 text-foreground">
        Rituel énergétique d'<span className="text-gradient-gold italic">équinoxe</span> — nettoyage et alignement saisonnier
      </h1>

      <p className="font-body text-foreground/85 text-lg leading-relaxed mb-6">
        Les équinoxes de printemps (21 mars) et d'automne (21 septembre) sont des moments d'<strong>équilibre parfait entre lumière et obscurité</strong>. Le jour et la nuit ont exactement la même durée. Énergétiquement, c'est une invitation puissante à faire le point : garder ce qui nourrit, libérer ce qui pèse, réaligner sa colonne intérieure avec sa mission de vie.
      </p>

      <h2 className="font-heading text-2xl md:text-3xl mt-12 mb-4 text-foreground">Équinoxe de printemps — le grand redémarrage</h2>
      <p className="font-body text-foreground/80 leading-relaxed mb-4">
        Après la longue nuit de l'hiver, l'énergie remonte. C'est le moment idéal pour un <Link to="/reiki-neuchatel" className="text-primary underline">soin énergétique</Link> ou une activation Kundalini : le corps est disponible, la sève monte, les projets veulent s'incarner. Un rituel simple : marcher pieds nus dans l'herbe humide au petit matin, respirer profondément, planter une intention comme on plante une graine.
      </p>

      <h2 className="font-heading text-2xl md:text-3xl mt-12 mb-4 text-foreground">Équinoxe d'automne — la grande libération</h2>
      <p className="font-body text-foreground/80 leading-relaxed mb-4">
        L'automne, c'est le moment de la récolte et du tri. Ce qui a été vécu pendant l'année, ce qui doit être digéré, ce qui doit partir. Un rituel de <Link to="/chamanisme-neuchatel" className="text-primary underline">nettoyage chamanique</Link> ou de libération karmique prend ici tout son sens. On écrit ce qu'on souhaite libérer, on brûle la feuille dans une coupelle, on remercie.
      </p>

      <h2 className="font-heading text-2xl md:text-3xl mt-12 mb-4 text-foreground">Un rituel personnel à faire chez toi</h2>
      <ol className="font-body text-foreground/80 leading-relaxed space-y-3 mb-6 list-decimal pl-6">
        <li>La veille de l'équinoxe, prépare un espace : bougie, encens, un verre d'eau, un carnet.</li>
        <li>Assis(e), respire 5 minutes en visualisant ton corps traversé par une lumière dorée.</li>
        <li>Écris tout ce que tu veux laisser derrière : peurs, relations toxiques, croyances, colères.</li>
        <li>Brûle la feuille (dans un endroit sûr) en remerciant chaque expérience de t'avoir appris quelque chose.</li>
        <li>Écris ensuite ce que tu veux accueillir pour les six mois à venir. Garde cette feuille près de toi.</li>
      </ol>

      <h2 className="font-heading text-2xl md:text-3xl mt-12 mb-4 text-foreground">Accompagnement personnalisé autour de l'équinoxe</h2>
      <p className="font-body text-foreground/80 leading-relaxed mb-6">
        Je propose des séances spéciales autour des équinoxes : <strong>lecture d'âme saisonnière</strong>, <strong>activation Kundalini d'alignement</strong>, <strong>rituel chamanique de libération</strong>. En cabinet à Bevaix (Neuchâtel) ou en visio dans toute la Suisse romande.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link to="/rendez-vous" className="bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:shadow-gold transition-all">
          Réserver un rituel d'équinoxe
        </Link>
        <Link to="/kundalini-solstice" className="border border-primary/50 text-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:bg-primary/10 transition-all">
          Voir la page Solstice
        </Link>
      </div>
    </article>
  </Layout>
);

export default RituelEquinoxe;
