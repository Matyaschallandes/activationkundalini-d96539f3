import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

export type CantonPageProps = {
  slug: string;
  canton: string; // "Vaud", "Fribourg", "Berne (Jura bernois)"
  regionShort: string; // "canton de Vaud"
  cities: string[];
  distanceLine: string; // e.g. "à moins de 45 minutes de Bevaix"
  title: string;
  description: string;
  keywords: string;
  intro: string;
  h1: string;
  areaServed: string[];
};

const CantonPage = ({
  slug,
  canton,
  regionShort,
  cities,
  distanceLine,
  title,
  description,
  keywords,
  intro,
  h1,
  areaServed,
}: CantonPageProps) => {
  const url = `https://www.activationkundalini.ch${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Soins énergétiques & activation Kundalini — ${canton}`,
      "serviceType": "Soins énergétiques, activation Kundalini, kinésiologie, accompagnement burn-out",
      "provider": { "@id": "https://www.activationkundalini.ch/#organization" },
      "areaServed": areaServed.map((c) => ({ "@type": "City", "name": c })),
      "url": url,
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "CHF",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "0",
          "priceCurrency": "CHF",
          "description": "Prix libre — donation consciente",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.activationkundalini.ch/" },
        { "@type": "ListItem", "position": 2, "name": "Offres", "item": "https://www.activationkundalini.ch/offres" },
        { "@type": "ListItem", "position": 3, "name": canton, "item": url },
      ],
    },
  ];

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        path={slug}
        keywords={keywords}
        jsonLd={jsonLd}
      />

      <header className="pt-24 pb-10 md:pt-32 md:pb-14 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
            {regionShort} — Suisse romande
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-6">
            {h1}
          </h1>
          <div className="glow-line w-20 mx-auto mb-8" />
          <p className="font-body text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            {intro}
          </p>
        </div>
      </header>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-6 text-foreground">
            Un accompagnement énergétique <span className="text-gradient-gold italic">au plus près de chez vous</span>
          </h2>
          <p className="font-body text-foreground/75 leading-relaxed mb-4">
            Basé à Bevaix, dans le canton de Neuchâtel, Matyas Challandes reçoit régulièrement des personnes venant du {regionShort} pour des séances de soins énergétiques, d'activation Kundalini, de kinésiologie et d'accompagnement du stress ou du burn-out. Le cabinet est {distanceLine}, ce qui rend les séances en présentiel très accessibles pour les habitants du {regionShort}.
          </p>
          <p className="font-body text-foreground/75 leading-relaxed mb-4">
            Pour celles et ceux qui préfèrent rester chez eux, les séances à distance offrent la même qualité de travail énergétique — un simple téléphone ou une visioconférence suffisent.
          </p>

          <h3 className="font-heading text-2xl font-light mt-10 mb-4 text-foreground">
            Villes et régions desservies dans le {regionShort}
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
            {cities.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="text-primary text-sm mt-1">✦</span>
                <span className="font-body text-sm text-foreground/80">{c}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-3xl md:text-4xl font-light mt-14 mb-6 text-foreground">
            Ce que je propose aux habitants du {regionShort}
          </h2>

          <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">
            Activation Kundalini
          </h3>
          <p className="font-body text-foreground/75 leading-relaxed mb-4">
            L'activation Kundalini est un processus énergétique qui vise à libérer l'énergie vitale endormie à la base de la colonne vertébrale. Elle favorise la reconnexion à soi, la clarté intérieure et une profonde harmonisation du corps et de l'esprit. De nombreuses personnes du {regionShort} viennent spécifiquement pour cette approche, encore rare en Suisse romande.
          </p>

          <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">
            Soins énergétiques & harmonisation des chakras
          </h3>
          <p className="font-body text-foreground/75 leading-relaxed mb-4">
            Séances individuelles combinant respiration consciente, magnétisme, harmonisation des chakras et libération des tensions émotionnelles accumulées. Utile en cas de fatigue, stress chronique, ruminations, ou sentiment d'être « bloqué ».
          </p>

          <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">
            Accompagnement burn-out & angoisses
          </h3>
          <p className="font-body text-foreground/75 leading-relaxed mb-4">
            Un accompagnement bienveillant pour retrouver stabilité et clarté, sortir de la spirale de l'épuisement et reconstruire un socle intérieur durable. Complémentaire à un suivi médical ou psychologique.
          </p>

          <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">
            Lecture d'âme & guidance
          </h3>
          <p className="font-body text-foreground/75 leading-relaxed mb-4">
            Une écoute intuitive de votre trajectoire pour éclairer les questions importantes, identifier les schémas répétitifs et retrouver un axe personnel aligné avec votre chemin de vie.
          </p>

          <h2 className="font-heading text-3xl md:text-4xl font-light mt-14 mb-6 text-foreground">
            Séances en présentiel ou à distance
          </h2>
          <p className="font-body text-foreground/75 leading-relaxed mb-4">
            Les séances peuvent se dérouler au cabinet à Bevaix (Neuchâtel) ou à distance, partout dans le {regionShort} et en Suisse romande. Les séances à distance sont pleinement efficaces : l'énergie ne connaît pas les kilomètres.
          </p>
          <p className="font-body text-foreground/75 leading-relaxed mb-8">
            Toutes les séances sont proposées en <strong>prix libre</strong>, dans un esprit de conscience et d'accessibilité. Personne ne devrait renoncer à un accompagnement pour des raisons financières.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/rendez-vous"
              className="inline-flex items-center px-8 py-4 border border-primary/40 rounded-full font-body text-sm tracking-widest uppercase text-primary hover:bg-primary/10 transition"
            >
              Prendre rendez-vous
            </Link>
            <Link
              to="/offres"
              className="inline-flex items-center px-8 py-4 border border-border rounded-full font-body text-sm tracking-widest uppercase text-foreground hover:bg-card/50 transition"
            >
              Voir toutes les offres
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-border rounded-full font-body text-sm tracking-widest uppercase text-foreground hover:bg-card/50 transition"
            >
              Me contacter
            </Link>
          </div>

          <p className="font-body text-foreground/40 text-xs mt-16">
            {canton} · {cities.join(" · ")} · Suisse romande · soins énergétiques · activation Kundalini · kinésiologie · accompagnement burn-out · harmonisation des chakras · libération émotionnelle
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CantonPage;
