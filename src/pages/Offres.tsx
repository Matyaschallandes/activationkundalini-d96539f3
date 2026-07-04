import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import KundaliniSection from "@/components/KundaliniSection";
import SoinSection from "@/components/SoinSection";
import MethodSection from "@/components/MethodSection";
import OffersSection from "@/components/OffersSection";
import OffersImageSection from "@/components/OffersImageSection";
import Programme21Section from "@/components/Programme21Section";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Soins énergétiques et Activation Kundalini",
  "provider": { "@id": "https://www.activationkundalini.ch/#organization" },
  "areaServed": "Suisse romande",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "CHF",
    "priceSpecification": { "@type": "PriceSpecification", "price": "0", "priceCurrency": "CHF", "description": "Prix libre — donation consciente" }
  }
};

const Offres = () => {
  return (
    <Layout>
      <Seo
        title="Offres & Tarifs — Soins Énergétiques, Kundalini, Kinésiologie | Prix Libre"
        description="Découvrez les offres de soins énergétiques, activation Kundalini, kinésiologie et accompagnement burn-out en Suisse romande. Prix libre. Séances en présentiel à Bevaix ou à distance."
        path="/offres"
        keywords="tarifs soins énergétiques, prix activation kundalini, kinésiologie Neuchâtel, accompagnement burn out Suisse romande"
        jsonLd={jsonLd}
      />
      <KundaliniSection />
      <SoinSection />
      <MethodSection />
      <OffersImageSection />
      <OffersSection />
      <Programme21Section />
    </Layout>
  );
};

export default Offres;

