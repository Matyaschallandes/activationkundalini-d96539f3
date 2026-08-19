import { Link } from "react-router-dom";

const tools: { name: string; text: string; to?: string }[] = [
  { name: "Biorésonance", text: "Une lecture des déséquilibres énergétiques pour orienter l'exploration." },
  { name: "Kinésiologie", text: "Le corps donne des indices sur ce qui se joue en profondeur.", to: "/kinesiologie-neuchatel" },
  { name: "Activation Kundalini", text: "Une remise en mouvement de l'énergie vitale.", to: "/la-kundalini" },
  { name: "Soins énergétiques", text: "Un temps d'harmonisation et d'apaisement.", to: "/offres" },
  { name: "Chamanisme", text: "Un travail sur les mémoires, les liens et l'ancrage.", to: "/chamanisme-neuchatel" },
  { name: "Reiki Kundalini", text: "Une transmission douce pour relâcher les tensions.", to: "/reiki-neuchatel" },
  { name: "Human Design", text: "Une lecture de votre fonctionnement naturel." },
];

const ToolsSection = () => (
  <section id="outils" className="py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-3 text-foreground">
        Les outils que <span className="text-gradient-gold italic">j'utilise</span>
      </h2>
      <p className="font-body text-center text-sm text-muted-foreground mb-12 max-w-xl mx-auto">
        Vous n'avez pas besoin de comprendre ces approches pour réserver : je les choisis selon
        ce dont vous avez besoin.
      </p>

      <ul className="divide-y divide-border border-y border-border">
        {tools.map((t) => (
          <li key={t.name} className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-heading text-lg text-foreground sm:w-52 shrink-0">{t.name}</span>
            <span className="font-body text-sm text-foreground/75 flex-1">{t.text}</span>
            {t.to && (
              <Link to={t.to} className="font-body text-xs uppercase tracking-wider text-primary hover:text-foreground transition-colors shrink-0">
                En savoir plus →
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ToolsSection;
