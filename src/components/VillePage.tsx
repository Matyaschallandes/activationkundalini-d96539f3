import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

export type VillePageProps = {
  slug: string;
  ville: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  intro: string;
  /** Unique 300–400 word body — one paragraph per element */
  paragraphs: { heading?: string; text: string }[];
};

const VillePage = ({
  slug,
  ville,
  title,
  description,
  keywords,
  h1,
  intro,
  paragraphs,
}: VillePageProps) => {
  const url = `https://www.activationkundalini.ch${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Activation Kundalini — ${ville}`,
      serviceType: "Activation Kundalini, soins énergétiques, chamanisme",
      provider: { "@id": "https://www.activationkundalini.ch/#organization" },
      areaServed: { "@type": "City", name: ville },
      url,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CHF",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "0",
          priceCurrency: "CHF",
          description: "Prix libre — donation consciente",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.activationkundalini.ch/" },
        { "@type": "ListItem", position: 2, name: "Offres", item: "https://www.activationkundalini.ch/offres" },
        { "@type": "ListItem", position: 3, name: ville, item: url },
      ],
    },
  ];

  return (
    <Layout>
      <Seo title={title} description={description} path={slug} keywords={keywords} jsonLd={jsonLd} />

      <header className="pt-24 pb-10 md:pt-32 md:pb-14 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
            {ville} — Suisse romande
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-6">{h1}</h1>
          <div className="glow-line w-20 mx-auto mb-8" />
          <p className="font-body text-foreground/75 leading-relaxed max-w-2xl mx-auto">{intro}</p>
        </div>
      </header>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {paragraphs.map((p, i) => (
            <div key={i}>
              {p.heading && (
                <h2 className="font-heading text-2xl md:text-3xl font-light mt-10 mb-4 text-foreground">
                  {p.heading}
                </h2>
              )}
              <p className="font-body text-foreground/75 leading-relaxed mb-4">{p.text}</p>
            </div>
          ))}

          <div className="flex flex-wrap gap-4 mt-12">
            <Link
              to="/rendez-vous"
              className="inline-flex items-center px-8 py-4 border border-primary/40 rounded-full font-body text-sm tracking-widest uppercase text-primary hover:bg-primary/10 transition"
            >
              Prendre rendez-vous
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-border rounded-full font-body text-sm tracking-widest uppercase text-foreground hover:bg-card/50 transition"
            >
              Me contacter
            </Link>
            <Link
              to="/offres"
              className="inline-flex items-center px-8 py-4 border border-border rounded-full font-body text-sm tracking-widest uppercase text-foreground hover:bg-card/50 transition"
            >
              Voir les offres
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VillePage;
