import { Link } from "react-router-dom";
import { Flame, Wind, Droplets, ArrowRight } from "lucide-react";
import { CARNET_PATH } from "@/lib/links";

const phases = [
  {
    icon: Wind,
    step: "01",
    title: "Le nettoyage — chamanisme & soins énergétiques",
    text: "Avant d'activer, on nettoie. Le test énergétique localise le blocage, sa date, son émotion. Puis le soin chamanique libère les fragments d'âme, referme les brèches et dissout ce qui n'a plus sa place. Le terrain est clair.",
  },
  {
    icon: Droplets,
    step: "02",
    title: "Le déblocage — l'activation Kundalini",
    text: "Quand l'énergie remonte le long de la colonne, elle vient dissoudre les blocages un par un. Ce que le corps n'a jamais pu exprimer — parfois depuis l'enfance, parfois depuis bien avant — peut enfin se décharger. Le corps relâche, l'énergie circule à nouveau.",
  },
];

const KundaliniSection = () => (
  <section className="py-20 md:py-28 bg-muted/20">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-14">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
          Comment ça fonctionne
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6 text-foreground">
          D'abord nettoyer.{" "}
          <span className="text-gradient-gold italic">Ensuite activer.</span>
        </h2>
        <p className="font-body text-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto">
          On n'allume pas un feu dans une cheminée obstruée. Le chamanisme et les soins énergétiques
          dégagent d'abord le passage — puis l'Activation Kundalini remonte et fait le reste.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {phases.map(({ icon: Icon, step, title, text }) => (
          <div
            key={step}
            className="border border-primary/30 bg-card/70 backdrop-blur-sm rounded-sm p-8 hover:border-primary transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full border border-primary/40 bg-background flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading text-3xl text-primary/30">{step}</span>
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-3">{title}</h3>
            <p className="font-body text-sm text-foreground/75 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <div className="border border-primary/30 bg-card/60 backdrop-blur-sm rounded-sm p-8 md:p-12 text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-5">
          <Flame className="w-8 h-8 text-primary" />
        </div>
        <p className="font-body text-foreground/90 text-lg md:text-xl leading-relaxed mb-5">
          Quand la Kundalini remonte, elle ne fait pas dans le détail. Elle traverse chaque blocage,
          le dissout, et laisse le corps exprimer — parfois par des tremblements, parfois par des
          sanglots, parfois par un silence immense — ce qu'il a porté en silence pendant des années.
        </p>
        <p className="font-body text-foreground/75 text-base leading-relaxed mb-6">
          Ce n'est pas une relaxation. C'est une libération. Ce qui sort ne revient pas.
        </p>
        <p className="font-body text-sm text-foreground/70 leading-relaxed mb-6">
          Pour préparer ce passage, remplir le{" "}
          <Link to={CARNET_PATH} className="text-primary underline underline-offset-4">
            carnet de préparation
          </Link>{" "}
          ouvre déjà les tiroirs. Et si vous voulez comprendre en profondeur, la page{" "}
          <Link to="/la-kundalini" className="text-primary underline underline-offset-4">
            Activation Kundalini
          </Link>{" "}
          détaille chaque étape.
        </p>
        <Link
          to="/offre-decouverte-gratuite"
          className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
        >
          Vivre l'expérience <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default KundaliniSection;
