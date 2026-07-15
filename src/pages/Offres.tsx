import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import KundaliniSection from "@/components/KundaliniSection";
import SoinSection from "@/components/SoinSection";
import ShamanismSection from "@/components/ShamanismSection";
import MethodSection from "@/components/MethodSection";
import OffersSection from "@/components/OffersSection";
import OffersImageSection from "@/components/OffersImageSection";
import Programme21Section from "@/components/Programme21Section";

const serviceLd = {
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'une activation Kundalini ?",
      "acceptedAnswer": { "@type": "Answer", "text": "L'activation Kundalini est un processus énergétique qui vise à libérer l'énergie vitale endormie à la base de la colonne vertébrale afin de favoriser la reconnexion à soi, la clarté intérieure et le bien-être global." }
    },
    {
      "@type": "Question",
      "name": "Où se déroulent les séances de soins énergétiques ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Les séances ont lieu en présentiel à Bevaix, dans le canton de Neuchâtel (Suisse romande), et également à distance partout en Suisse et en Europe francophone." }
    },
    {
      "@type": "Question",
      "name": "Quel est le tarif d'une séance ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Toutes les séances sont proposées en prix libre : chacun contribue selon ses moyens et sa conscience. Des montants indicatifs sont proposés à titre de repère." }
    },
    {
      "@type": "Question",
      "name": "Faut-il une préparation particulière avant une séance ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Aucune préparation n'est nécessaire. Il est simplement recommandé d'arriver reposé, hydraté, et d'éviter les repas lourds avant la séance." }
    }
  ]
};

const jsonLd = [serviceLd, faqLd];

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
      <ShamanismSection />
      <MethodSection />
      <OffersImageSection />
      <OffersSection />
      <Programme21Section />
    </Layout>
  );
};

export default Offres;

