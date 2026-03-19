import { Sparkles, Eye, Flame, Shield, Users } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Soins énergétiques puissants" },
  { icon: Flame, title: "Activation kundalini progressive" },
  { icon: Eye, title: "Lecture d'âme — comprendre qui tu es avant l'activation" },
  { icon: Shield, title: "Protocole transformation 21 jours" },
  { icon: Users, title: "Bannissements énergétiques illimités" },
];

const MethodSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          Ce que je propose
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-light mb-4 text-foreground">
          Un accompagnement <span className="text-gradient-gold italic">structuré et profond</span>
        </h2>
        <div className="glow-line w-24 mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-8 rounded-sm border border-border bg-gradient-card hover:border-primary/30 hover:shadow-gold transition-all duration-500 text-center"
            >
              <f.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-xl text-foreground">{f.title}</h3>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-body mt-12 text-lg">
          On travaille ensemble avec <span className="text-primary">structure</span> et <span className="text-primary">profondeur</span>.
        </p>
      </div>
    </section>
  );
};

export default MethodSection;
