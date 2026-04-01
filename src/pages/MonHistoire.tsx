import Layout from "@/components/Layout";
import { useEffect } from "react";
import matyasPhoto from "@/assets/matyas-photo.jpg";

const MonHistoire = () => {
  useEffect(() => {
    document.title = "Mon Histoire — Matyas Challandes | Activation Kundalini";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Découvrez le parcours de Matyas Challandes, praticien énergétique en Suisse romande. Un chemin de transformation intérieure au service de votre guérison.");
    }
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
            Mon parcours
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-center font-light mb-4 text-foreground">
            Mon <span className="text-gradient-gold italic">Histoire</span>
          </h1>
          <div className="glow-line w-24 mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="rounded-sm overflow-hidden shadow-gold">
                <img src={matyasPhoto} alt="Matyas Challandes — Praticien énergétique" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-sm -z-10" />
            </div>

            <div>
              <p className="font-body text-foreground/70 leading-relaxed mb-6">
                Je m'appelle <strong className="text-foreground">Matyas Challandes</strong>, et mon parcours est avant tout un chemin de transformation intérieure.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed mb-6">
                Pendant plusieurs années, j'ai traversé des périodes difficiles, marquées par des déséquilibres émotionnels, des dépendances et une perte de repères. Ces expériences, bien qu'éprouvantes, ont été le point de départ d'une profonde remise en question et d'une quête de sens.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed mb-6">
                C'est à travers cette traversée que j'ai découvert le monde de l'énergétique — un univers qui m'a permis de me reconnecter à moi-même, de me libérer progressivement de mes blocages et de retrouver un équilibre intérieur.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed">
                Aujourd'hui, je considère ce parcours non pas comme une faiblesse, mais comme <strong className="text-foreground">une force</strong> : il me permet de comprendre en profondeur les personnes que j'accompagne, avec bienveillance, authenticité et sans jugement.
              </p>
            </div>
          </div>

          {/* Ce que je fais */}
          <div className="mb-20">
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-8 text-foreground">
              Ce que je <span className="text-gradient-gold italic">fais</span>
            </h2>
            <p className="font-body text-foreground/70 leading-relaxed mb-6">
              Je propose des accompagnements énergétiques visant à libérer les blocages, rééquilibrer les énergies et favoriser un retour à l'harmonie intérieure.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed mb-8">
              Je suis initié en <strong className="text-foreground">Lahochi</strong> et en <strong className="text-foreground">Reiki Kundalini</strong>, j'ai suivi une formation de Luc Bodin et j'utilise également des outils modernes comme la <strong className="text-foreground">biorésonance</strong> et les soins par fréquences, notamment avec le système Spooky2.
            </p>

            <p className="font-body text-foreground/80 font-medium mb-4">Mes séances peuvent aider à :</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Libérer les charges émotionnelles",
                "Apaiser le mental et réduire le stress",
                "Rééquilibrer les énergies du corps",
                "Travail sur le transgénérationnel et les vies antérieures",
                "Douleur, maladie et cancer",
                "Soins sur les animaux (très efficace)",
                "Accompagner les périodes de transformation personnelle",
                "Soutenir les processus de guérison globale",
                "Désenvoutement, recouvrement d'âme et exorcisme",
                "Dissolution du mauvais œil, des charmes, malédictions et magie noire",
                "Voyage entre les mondes et récupération de fragments d'âme (chamanisme)",
                "Traumatismes et chocs émotionnels",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="font-body text-sm text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-foreground/60 text-sm mt-6 italic">
              Chaque accompagnement est unique et s'adapte aux besoins de la personne, dans une approche globale de l'être.
            </p>
          </div>

          {/* Mon approche */}
          <div className="mb-20">
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-8 text-foreground">
              Mon <span className="text-gradient-gold italic">approche</span>
            </h2>
            <p className="font-body text-foreground/70 leading-relaxed mb-6">
              Mon approche repose sur l'écoute, l'intuition et la connexion aux dimensions énergétiques de l'être.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed">
              Je travaille avec l'intention d'aider chacun à se reconnecter à son essence profonde, à activer son potentiel et à avancer sur son chemin de vie avec plus de clarté et de sérénité.
            </p>
          </div>

          {/* En évolution constante */}
          <div className="bg-card border border-border rounded-sm p-8 md:p-12 mb-20">
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-6 text-foreground">
              En évolution <span className="text-gradient-gold italic">constante</span>
            </h2>
            <p className="font-body text-foreground/70 leading-relaxed mb-4">
              Actuellement, je suis en formation de <strong className="text-foreground">kinésiologie</strong> afin d'enrichir mes compétences et d'apporter un accompagnement encore plus précis et complet.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed">
              Cette formation me permet d'intégrer des outils concrets pour identifier les déséquilibres et travailler en profondeur sur les mémoires du corps.
            </p>
          </div>

          {/* Ma vision */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-8 text-foreground">
              Ma <span className="text-gradient-gold italic">vision</span>
            </h2>
            <p className="font-heading text-2xl italic text-foreground/80 leading-relaxed mb-6">
              "Je crois profondément que chacun possède en lui les ressources nécessaires pour <span className="text-gradient-gold">guérir, évoluer et s'accomplir</span>."
            </p>
            <p className="font-body text-foreground/70 leading-relaxed">
              Mon rôle est simplement d'accompagner ce processus, en facilitant la libération de ce qui entrave votre chemin et en vous aidant à retrouver votre propre pouvoir intérieur.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MonHistoire;
