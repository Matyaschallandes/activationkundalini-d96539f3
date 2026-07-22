import { Link } from "react-router-dom";
import { MessageCircle, Wind, Feather, Zap, Sprout, Clock, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Échange & ancrage",
    text: "Tu déposes ce que tu vis. Méditation d'ancrage et tests kinésiologiques pour laisser ton corps guider la séance.",
  },
  {
    icon: Wind,
    title: "Respiration alchimique",
    text: "Inspirée de la respiration holotropique : elle ouvre un espace de libération émotionnelle et corporelle profonde.",
  },
  {
    icon: Feather,
    title: "Travail énergétique & chamanique",
    text: "Nettoyage énergétique, libération transgénérationnelle, recouvrement d'âme, tambour et chants de médecine si le corps le demande.",
  },
  {
    icon: Zap,
    title: "Activation de la Kundalini",
    text: "Ton intelligence intérieure laisse l'énergie de vie remonter, dissoudre les verrous et te reconnecter à ton essence.",
  },
  {
    icon: Sprout,
    title: "Intégration & rapport écrit",
    text: "Échange final puis rapport personnalisé envoyé dans les jours qui suivent, avec exercices et clés pour poursuivre chez toi.",
  },
];

const SeanceOverviewSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          🌿 Un voyage intérieur
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-light mb-4 text-foreground">
          Le déroulement d'une <span className="text-gradient-gold italic">séance</span>
        </h2>
        <div className="glow-line w-24 mx-auto mb-6" />
        <p className="text-center font-body text-foreground/80 text-lg max-w-2xl mx-auto mb-4">
          Et si ton corps connaissait déjà le chemin vers sa propre transformation ?
        </p>
        <p className="text-center font-body text-foreground/70 max-w-3xl mx-auto mb-12">
          Chaque séance est unique et entièrement personnalisée. Je mêle <strong>kinésiologie</strong>, <strong>respiration alchimique</strong>, <strong>nettoyage énergétique</strong>, <strong>chamanisme</strong> et <strong>activation de la Kundalini</strong>. Ce n'est pas moi qui décide : c'est ton corps qui guide, et j'agis comme un canal et un facilitateur.
        </p>

        <div className="flex items-center justify-center gap-2 mb-12 text-primary font-body text-sm tracking-wider uppercase">
          <Clock className="w-4 h-4" />
          Durée : 1h30 à 3h · À Bevaix, en visio ou à distance
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-sm border border-border bg-card/40 hover:border-primary/40 hover:shadow-gold transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-xs tracking-widest uppercase text-primary/80">
                  Étape {i + 1}
                </span>
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-card/60 border border-primary/20 rounded-sm p-8 text-center max-w-3xl mx-auto mb-10">
          <p className="font-heading text-xl md:text-2xl italic text-foreground/90 leading-relaxed mb-3">
            « Je ne prétends pas guérir à ta place. Je crée un espace où ton corps peut retrouver son <span className="text-gradient-gold">intelligence naturelle</span> et libérer ce qu'il est prêt à transformer. »
          </p>
          <p className="font-body text-sm text-muted-foreground">— Matyas</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/deroulement-seance"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
          >
            Découvrir le déroulement complet <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/rendez-vous"
            className="border border-primary/50 text-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:bg-primary/10 transition-all duration-500"
          >
            Réserver ma séance
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SeanceOverviewSection;
