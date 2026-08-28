import { Link } from "react-router-dom";

type LinkItem = { to: string; label: string; text: string };

const ALL: LinkItem[] = [
  {
    to: "/la-kundalini",
    label: "Découvrir l'Activation Kundalini",
    text: "Comprendre l'énergie Kundalini et le déroulement d'une séance à Neuchâtel ou à distance.",
  },
  {
    to: "/chamanisme-neuchatel",
    label: "En savoir plus sur l'accompagnement chamanique",
    text: "Soins chamaniques à Bevaix : recouvrement d'âme, coupure de liens, nettoyage énergétique.",
  },
  {
    to: "/kinesiologie-neuchatel",
    label: "Découvrir la kinésiologie à Neuchâtel",
    text: "Le test musculaire pour identifier ce qui bloque et libérer les mémoires émotionnelles.",
  },
  {
    to: "/offre-decouverte-gratuite",
    label: "Réserver la découverte gratuite",
    text: "Une heure offerte pour explorer votre situation et voir si mon approche vous correspond.",
  },
  {
    to: "/deroulement-seance",
    label: "Voir le déroulement d'une séance",
    text: "Les étapes, de l'accueil à l'intégration, expliquées pas à pas.",
  },
  {
    to: "/contact",
    label: "Prendre contact avec Matyas",
    text: "Poser vos questions ou convenir d'un rendez-vous à Bevaix (canton de Neuchâtel).",
  },
];

/** Réseau de liens internes vers les pages piliers. `exclude` = chemins à masquer. */
const MaillageInterne = ({
  exclude = [],
  title = "Poursuivre la lecture",
}: {
  exclude?: string[];
  title?: string;
}) => {
  const items = ALL.filter((l) => !exclude.includes(l.to)).slice(0, 4);

  return (
    <nav aria-label="Liens vers les pages principales" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-heading text-2xl md:text-3xl font-light mb-8 text-foreground">{title}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="block h-full p-5 rounded-sm border border-border bg-card/40 hover:border-primary/40 transition-colors duration-300"
              >
                <span className="font-body font-medium text-primary block mb-1">{l.label}</span>
                <span className="font-body text-sm text-foreground/70 leading-relaxed">{l.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MaillageInterne;
