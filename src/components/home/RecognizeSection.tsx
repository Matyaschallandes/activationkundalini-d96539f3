import { Link } from "react-router-dom";

const situations = [
  "Je répète toujours les mêmes schémas.",
  "Je ressens des émotions que je ne comprends pas.",
  "J'ai l'impression d'être bloqué malgré mes efforts.",
  "Je sais que quelque chose doit changer, mais je ne sais pas quoi.",
  "J'ai du mal à lâcher prise.",
  "Je ressens un décalage entre ce que je veux et ce que je vis.",
];

const RecognizeSection = () => (
  <section className="py-20 md:py-28 bg-muted/20">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-3 text-foreground">
        Peut-être que vous vous <span className="text-gradient-gold italic">reconnaissez…</span>
      </h2>
      <div className="glow-line w-20 mx-auto mb-12" />

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {situations.map((s) => (
          <li
            key={s}
            className="bg-card border border-border rounded-sm px-6 py-5 font-body text-foreground/90 leading-relaxed"
          >
            <span className="text-primary mr-2">✦</span>
            {s}
          </li>
        ))}
      </ul>

      <p className="font-body text-center text-foreground/80 text-lg leading-relaxed mt-12 max-w-2xl mx-auto">
        Si vous vous reconnaissez dans plusieurs de ces situations, une première rencontre peut
        déjà vous permettre d'y voir plus clair.
      </p>

      <div className="text-center mt-8">
        <Link
          to="/offre-decouverte-gratuite"
          className="inline-block bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-9 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
        >
          Découvrir gratuitement mon approche
        </Link>
      </div>
    </div>
  </section>
);

export default RecognizeSection;
