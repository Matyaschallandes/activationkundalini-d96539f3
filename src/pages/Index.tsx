import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import FrustrationsSection from "@/components/FrustrationsSection";
import TransformationSection from "@/components/TransformationSection";
import VideoSection from "@/components/VideoSection";
import OffersImageSection from "@/components/OffersImageSection";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.activationkundalini.ch/#organization",
  "name": "Karmaequilego — Activation Kundalini & Soins Énergétiques",
  "alternateName": "Matyas Challandes — Guérisseur Énergétique",
  "description": "Guérisseur énergétique en Suisse romande : activation kundalini, accompagnement burn-out, traumatismes, angoisses et reconnexion à soi.",
  "url": "https://www.activationkundalini.ch",
  "telephone": "+41762445552",
  "email": "matyas.challandes@gmail.com",
  "priceRange": "Prix libre",
  "image": "https://www.activationkundalini.ch/og-image.jpg",
  "areaServed": ["Bevaix", "La Grande Béroche", "Neuchâtel", "Suisse romande", "Lausanne", "Genève", "Zurich", "Fribourg", "Vaud", "Suisse"],
  "serviceType": [
    "Activation Kundalini", "Guérisseur énergétique", "Soins énergétiques",
    "Accompagnement burn-out", "Libération des traumatismes", "Gestion des angoisses",
    "Reconnexion à soi", "Harmonisation des chakras", "Libération karmique",
    "Kinésiologie", "Soins à distance"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chemin du Cuard 22",
    "addressLocality": "Bevaix",
    "addressRegion": "Neuchâtel",
    "postalCode": "2022",
    "addressCountry": "CH"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "46.9294", "longitude": "6.6906" },
  "sameAs": ["https://www.activationkundalini.ch"]
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.activationkundalini.ch",
  "name": "Activation Kundalini — Karmaequilego",
  "inLanguage": "fr-CH",
  "publisher": { "@id": "https://www.activationkundalini.ch/#organization" }
};

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Guérisseur Énergétique Suisse Romande | Activation Kundalini, Burn-out & Angoisses — Bevaix"
        description="Guérisseur énergétique à Bevaix (Neuchâtel). Activation Kundalini, accompagnement burn-out, traumatismes, angoisses et reconnexion à soi. Séances en présentiel et à distance en Suisse romande."
        path="/"
        keywords="guérisseur énergétique Suisse romande, activation kundalini, burn out, traumatisme, angoisse, reconnexion à soi, soins énergétiques Neuchâtel, Bevaix"
        jsonLd={[organizationLd, websiteLd]}
      />
      <HeroSection />
      <FrustrationsSection />
      <VideoSection />
      <TransformationSection />
      <OffersImageSection />
    </Layout>
  );
};

export default Index;

