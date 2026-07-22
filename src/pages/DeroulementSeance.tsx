import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { Leaf, Wind, Feather, Zap, Sprout, Heart, MapPin, Phone } from "lucide-react";

const DeroulementSeance = () => {
  return (
    <Layout>
      <Seo
        title="Déroulement d'une séance | Kinésiologie, Respiration alchimique, Kundalini — Bevaix"
        description="Comment se déroule une séance avec Matyas Challandes à Bevaix (Neuchâtel) : échange, tests kinésiologiques, respiration alchimique, travail énergétique et chamanique, activation de la Kundalini. Durée 1h30 à 3h."
        path="/deroulement-seance"
        keywords="déroulement séance énergétique, respiration alchimique, kinésiologie Neuchâtel, activation Kundalini, chamanisme, recouvrement d'âme"
      />

      <article className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4 flex items-center justify-center gap-2">
            <Leaf className="w-3 h-3" /> Un voyage intérieur
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-center font-light mb-4 text-foreground">
            Déroulement d'une <span className="text-gradient-gold italic">séance</span>
          </h1>
          <div className="glow-line w-24 mx-auto mb-12" />

          <p className="font-body text-lg text-foreground/85 leading-relaxed mb-6">
            Tu te sens épuisé(e), perdu(e), déconnecté(e) de toi-même ? Tu ressens du stress, de l'anxiété, une fatigue chronique, un burn-out, des blocages émotionnels ou tu as simplement le sentiment de ne plus être pleinement toi-même ?
          </p>
          <p className="font-body text-foreground/80 leading-relaxed mb-6 italic">
            Et si ton corps connaissait déjà le chemin vers sa propre guérison et sa transformation ?
          </p>
          <p className="font-body text-foreground/80 leading-relaxed mb-6">
            Je t'accompagne à travers une approche qui réunit la <strong>kinésiologie</strong>, la <strong>respiration alchimique</strong> (inspirée de la respiration holotropique), le <strong>nettoyage énergétique</strong>, le <strong>chamanisme</strong> et l'<strong>activation de la Kundalini</strong>.
          </p>
          <p className="font-body text-foreground/80 leading-relaxed mb-12">
            Chaque séance est entièrement personnalisée. Je ne suis pas un protocole tout fait : c'est ton corps qui guide chaque étape. Mon rôle est d'agir comme un canal et un facilitateur, en écoutant ce que ton corps est prêt à révéler, à comprendre et à libérer.
          </p>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6 flex items-center gap-3">
              <Sprout className="w-6 h-6 text-primary" />
              Déroulement d'une séance (1h30 à 3h)
            </h2>
            <div className="space-y-4 font-body text-foreground/80 leading-relaxed">
              <p>Nous commençons toujours par un temps d'échange afin que tu puisses déposer ce que tu vis, tes difficultés, tes émotions, tes intentions et ce que tu souhaites transformer.</p>
              <p>Nous poursuivons avec une méditation d'ancrage ainsi que quelques exercices pour calmer le mental, revenir dans le corps et préparer l'espace intérieur.</p>
              <p>À partir de ce moment, j'utilise des <strong>tests énergétiques et kinésiologiques</strong> pour dialoguer avec ton corps. Ils me permettent de savoir ce qui est prêt à être amené à la conscience, libéré ou transformé.</p>
              <p>Il arrive que le corps nous conduise vers une période précise de la vie, un souvenir ou un événement marquant qui a laissé une empreinte. Lorsque cela se présente, nous accueillons ce qui est prêt à émerger afin de permettre une libération en douceur.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6 flex items-center gap-3">
              <Wind className="w-6 h-6 text-primary" />
              La respiration alchimique
            </h2>
            <div className="space-y-4 font-body text-foreground/80 leading-relaxed">
              <p>La respiration alchimique est inspirée de la respiration holotropique, une technique de respiration profonde et continue qui permet d'accéder à des états de conscience élargis.</p>
              <p>En augmentant l'oxygénation du corps et en mettant progressivement le mental au second plan, cette respiration favorise l'émergence d'émotions, de souvenirs, de tensions ou de mémoires qui sont prêtes à être libérées.</p>
              <p>Il est fréquent que le corps réagisse par des tremblements, mouvements spontanés, bâillements, contractions, changements de respiration, sensations de chaleur, de froid ou d'énergie qui circule. Ces réactions témoignent souvent d'un processus naturel de libération.</p>
              <p>Des émotions peuvent remonter : tristesse, colère, peur, joie, rires ou larmes. Certaines personnes ressentent une profonde paix intérieure, une reconnexion à elles-mêmes, ou vivent des expériences spirituelles intenses.</p>
              <p>Lorsque le corps le demande, j'utilise également des <strong>massages ciblés, points énergétiques et techniques de libération corporelle</strong> (ventre, plexus solaire, diaphragme, psoas, mâchoire, tête, pieds…) afin d'aider le corps à relâcher les tensions physiques, émotionnelles et énergétiques.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6 flex items-center gap-3">
              <Feather className="w-6 h-6 text-primary" />
              Le travail énergétique et chamanique
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">
              Tout au long de la séance, je me laisse guider par les informations transmises par ton corps. Selon ce qui est prêt à être libéré, il peut être proposé un travail autour :
            </p>
            <ul className="space-y-2 mb-4 font-body text-foreground/80">
              {[
                "des blocages émotionnels et énergétiques",
                "des liens toxiques",
                "des pactes ou engagements limitants",
                "du nettoyage énergétique",
                "des mémoires transgénérationnelles",
                "de mémoires profondes parfois vécues comme provenant d'autres vies",
                "du recouvrement de fragments d'âme après un traumatisme, un accident ou un choc émotionnel",
              ].map((it, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">
              Lorsque ce travail se présente, certaines personnes ressentent une profonde sensation de réunification, avec l'impression qu'une partie d'elles revient. Elles peuvent percevoir une énergie remontant par les pieds, traversant tout le corps jusqu'au cœur.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed">
              Il m'arrive également d'utiliser le <strong>tambour chamanique</strong> ainsi que des <strong>chants de médecine</strong>, lorsque cela soutient le processus.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              L'activation de la Kundalini
            </h2>
            <div className="space-y-4 font-body text-foreground/80 leading-relaxed">
              <p>En fin de séance, nous laissons l'énergie de la Kundalini se déployer naturellement.</p>
              <p><em>Ce n'est pas moi qui active cette énergie.</em> C'est ton propre corps, ton intelligence intérieure et ton énergie de vie qui ouvrent ce qui est prêt à l'être.</p>
              <p>La Kundalini agit comme une force de transformation. Elle peut contribuer à dissoudre certains verrous énergétiques, à remettre en mouvement des zones figées par les traumatismes et à favoriser une profonde reconnexion à soi. Chaque personne vit cette expérience de manière totalement unique.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6 flex items-center gap-3">
              <Sprout className="w-6 h-6 text-primary" />
              Après la séance
            </h2>
            <div className="space-y-4 font-body text-foreground/80 leading-relaxed">
              <p>Nous terminons toujours par un moment d'échange. Tu peux partager ce que tu as ressenti, les prises de conscience qui ont émergé, et je te partage également ce que j'ai perçu durant la séance.</p>
              <p>Dans les jours qui suivent, je rédige un <strong>rapport personnalisé</strong> que je t'envoie. Tu y retrouveras les éléments importants de la séance, les compréhensions, les messages, les prises de conscience ainsi que les différentes étapes du travail réalisé.</p>
              <p>Je te transmets également des clés de compréhension, des pistes de guérison, des conseils personnalisés ainsi que des outils et exercices (respiration, ancrage, pratiques énergétiques, exercices corporels…) afin de poursuivre le travail d'intégration chez toi.</p>
              <p>Mon souhait est que tu repartes avec une meilleure compréhension de toi-même et des outils concrets pour continuer ton chemin vers davantage d'équilibre, de liberté intérieure et d'autonomie.</p>
            </div>
          </section>

          <section className="mb-12 p-8 rounded-sm border border-primary/30 bg-card/60">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary" />
              Mon engagement
            </h2>
            <div className="space-y-4 font-body text-foreground/85 leading-relaxed">
              <p>Je ne prétends pas guérir à ta place.</p>
              <p>Je crée un espace profondément bienveillant où ton corps peut s'exprimer librement, retrouver son intelligence naturelle et libérer ce qu'il est prêt à transformer.</p>
              <p className="font-heading italic text-lg text-foreground/90">
                Chaque séance est une rencontre avec toi-même. Un voyage intérieur vers plus de conscience, de paix, d'amour et d'alignement.
              </p>
              <p>Si tu sens l'appel, je serai heureux de t'accompagner sur ce chemin.</p>
            </div>
          </section>

          <div className="text-center space-y-4 mb-8">
            <p className="font-body text-foreground/80 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Bevaix (Neuchâtel)
            </p>
            <p className="font-body text-foreground/80 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-primary" /> 076 244 55 52
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/rendez-vous"
              className="bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
            >
              Réserver une séance
            </Link>
            <Link
              to="/contact"
              className="border border-primary/50 text-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:bg-primary/10 transition-all duration-500"
            >
              Appel découverte gratuit
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default DeroulementSeance;
