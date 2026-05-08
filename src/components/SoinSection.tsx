import { Wind, Waves, Monitor, Camera, Users } from "lucide-react";

const experiences = [
  "Des tremblements (signe de libération du système nerveux)",
  "Des pleurs ou de la colère",
  "Des souvenirs qui remontent",
  "Des sensations de chaleur dans la colonne",
  "Des états de paix profonde",
];

const SoinSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          🌀 Le processus — Soins en Suisse romande
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-light mb-4 text-foreground">
          Comment se déroule <span className="text-gradient-gold italic">un soin</span> ?
        </h2>
        <div className="glow-line w-24 mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Breathing */}
          <div>
            <h3 className="font-heading text-2xl text-foreground mb-6 flex items-center gap-3">
              <Wind className="w-6 h-6 text-primary" />
              La respiration alchimique
            </h3>
            <p className="font-body text-foreground/70 leading-relaxed mb-6">
              Vous êtes allongé ou assis, les yeux fermés. Vous respirez de manière consciente, rythmée. Cette respiration vous reconnecte à votre corps et crée un espace de libération sécurisé.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Je travaille sur votre champ énergétique",
                "Je dissous les blocages",
                "Je nettoie les interférences",
                "J'accompagne l'activation progressive de la Kundalini",
                "Je stabilise la montée d'énergie",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary font-body text-sm">🔹</span>
                  <span className="font-body text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              {[
                { icon: Monitor, label: "En visio" },
                { icon: Camera, label: "À distance" },
                { icon: Users, label: "En présence" },
              ].map((m, i) => (
                <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary font-body text-xs">
                  <m.icon className="w-3 h-3" />
                  {m.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right - What can happen */}
          <div>
            <h3 className="font-heading text-2xl text-foreground mb-6 flex items-center gap-3">
              <Waves className="w-6 h-6 text-primary" />
              Ce qui peut se passer
            </h3>
            <p className="font-body text-foreground/70 leading-relaxed mb-6">
              Chaque personne vit quelque chose de différent. Quand des émotions sortent, c'est que le corps libère. Vous n'êtes jamais seul.
            </p>
            <div className="space-y-3 mb-8">
              {experiences.map((exp, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-sm bg-card/40 border border-border">
                  <span className="font-body text-sm text-foreground/80">{exp}</span>
                </div>
              ))}
            </div>

            <div className="bg-card/60 border border-primary/20 rounded-sm p-6">
              <p className="font-heading text-lg italic text-foreground/90">
                En général, <span className="text-gradient-gold">1 à 3 séances suffisent</span> pour débloquer profondément un système.
              </p>
              <p className="font-body text-sm text-foreground/60 mt-2">
                L'objectif est que vous retrouviez votre autonomie énergétique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoinSection;
