import { Feather, Eye, Shield, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Désenvoûtement",
    text: "Dissolution des envoûtements, charmes, magie noire et influences énergétiques nuisibles qui pèsent sur ta vie.",
  },
  {
    icon: Sparkles,
    title: "Recouvrement d'âme",
    text: "Récupération des fragments d'âme perdus lors de chocs ou de traumatismes, pour retrouver ta puissance et ta complétude.",
  },
  {
    icon: Eye,
    title: "Vision intuitive",
    text: "Lecture des mémoires, des mondes subtils et des messages de tes guides pour éclairer ton chemin de vie.",
  },
  {
    icon: Feather,
    title: "Dégagement d'entités",
    text: "Libération des entités, parasites énergétiques et présences qui perturbent ton champ vibratoire.",
  },
];

const ShamanismSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          Soins Chamaniques
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-light mb-4 text-foreground">
          Le <span className="text-gradient-gold italic">chamanisme</span> — voyager entre les mondes
        </h2>
        <div className="glow-line w-24 mx-auto mb-8" />

        <p className="font-body text-foreground/80 text-center max-w-3xl mx-auto leading-relaxed mb-16">
          Le chamanisme est l'une des plus anciennes traditions spirituelles de l'humanité. Le chamane travaille avec les mondes subtils, les esprits de la nature, les guides et les mémoires de l'âme pour <span className="text-primary">nettoyer, libérer et reconnecter</span>. En complément de l'activation Kundalini et des soins énergétiques, je propose des soins chamaniques traditionnels adaptés à notre époque — en présentiel ou à distance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="p-8 rounded-sm border border-border bg-card/60 hover:border-primary/30 hover:shadow-gold transition-all duration-500"
            >
              <p.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-3">{p.title}</h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-body mt-12 italic">
          Un travail sacré, respectueux, en lien avec les forces de la nature et les guides.
        </p>
      </div>
    </section>
  );
};

export default ShamanismSection;
