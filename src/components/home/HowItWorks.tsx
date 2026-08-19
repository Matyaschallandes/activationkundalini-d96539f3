import { Link } from "react-router-dom";

const steps = [
  { n: "1", title: "Vous réservez", text: "Vous choisissez votre créneau." },
  { n: "2", title: "Nous échangeons", text: "Vous m'expliquez ce que vous vivez." },
  { n: "3", title: "Nous explorons", text: "Nous cherchons ensemble les mécanismes et blocages qui peuvent vous freiner." },
  { n: "4", title: "Vous repartez avec une première clé", text: "Une première compréhension et des pistes personnalisées." },
];

const HowItWorks = () => (
  <section id="deroulement" className="py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-3 text-foreground">
        Comment ça se <span className="text-gradient-gold italic">passe</span> ?
      </h2>
      <div className="glow-line w-20 mx-auto mb-14" />

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s) => (
          <li key={s.n}>
            <span className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/40 text-primary font-body text-sm mb-4">
              {s.n}
            </span>
            <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
            <p className="font-body text-sm text-foreground/75 leading-relaxed">{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="text-center mt-12">
        <Link
          to="/offre-decouverte-gratuite"
          className="inline-block bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-9 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
        >
          Réserver ma découverte gratuite
        </Link>
      </div>
    </div>
  </section>
);

export default HowItWorks;
