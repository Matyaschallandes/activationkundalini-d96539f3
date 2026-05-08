import matyasPhoto from "@/assets/matyas-photo.jpg";

const WhyMeSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          À propos de moi — Basé en Suisse romande
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-light mb-4 text-foreground">
          Pourquoi je fais <span className="text-gradient-gold italic">ce travail</span>
        </h2>
        <div className="glow-line w-24 mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-sm overflow-hidden shadow-gold">
              <img src={matyasPhoto} alt="Matyas — Praticien énergétique" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-sm -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="font-body text-foreground/70 leading-relaxed mb-6">
              Je ne fais pas cela pour "faire de l'argent". Je fais cela parce que la Kundalini est entrée dans ma vie et m'a transformé profondément.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed mb-6">
              Elle m'a réveillé. Elle m'a bousculé. Elle m'a confronté. Elle m'a obligé à me regarder en face.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed mb-6">
              Elle m'a amené à me poser des questions radicales : Pourquoi est-ce que je vis comme ça ? Pourquoi est-ce que j'accepte ce qui ne me respecte pas ? Qui suis-je vraiment derrière mes peurs et mes conditionnements ?
            </p>
            <p className="font-body text-foreground/70 leading-relaxed mb-8">
              Ce n'est pas toujours confortable. Mais c'est libérateur. Et aujourd'hui, je souhaite offrir à d'autres la possibilité de vivre cette transformation — de manière accompagnée, sécurisée et intégrée.
            </p>

            <div className="space-y-4">
              {[
                "Traversé mes propres ombres",
                "Intégré des montées d'énergie intenses",
                "Transformé mes crises en ancrage",
                "Accompagnement structuré et sécurisé",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="font-body text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="font-heading text-2xl italic text-foreground/80 leading-relaxed">
            "Mon intention est simple : vous aider à devenir <span className="text-gradient-gold">stable dans votre puissance</span>."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
