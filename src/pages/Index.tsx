import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import HeroTunnel from "@/components/home/HeroTunnel";
import TrustSection from "@/components/home/TrustSection";
import BlocagesSection from "@/components/home/BlocagesSection";
import KundaliniSection from "@/components/home/KundaliniSection";
import RecognizeSection from "@/components/home/RecognizeSection";
import AboutMatyas from "@/components/home/AboutMatyas";
import ToolsSection from "@/components/home/ToolsSection";
import FaqShort, { homeFaqJsonLd } from "@/components/home/FaqShort";
import FinalCta from "@/components/home/FinalCta";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.activationkundalini.ch/#organization",
  "name": "Karmaequilego — Activation Kundalini & Soins Énergétiques",
  "alternateName": "Matyas Challandes — Accompagnement énergétique",
  "description": "Accompagnement énergétique en Suisse romande : découverte gratuite d'une heure en visioconférence pour explorer et mettre en lumière vos blocages. Activation Kundalini, chamanisme, kinésiologie, biorésonance.",
  "url": "https://www.activationkundalini.ch",
  "telephone": "+41762445552",
  "email": "matyas.challandes@gmail.com",
  "priceRange": "Prix libre",
  "image": "https://www.activationkundalini.ch/og-image.jpg",
  "areaServed": ["Bevaix", "La Grande Béroche", "Neuchâtel", "Suisse romande", "Lausanne", "Genève", "Zurich", "Fribourg", "Vaud", "Suisse"],
  "serviceType": [
    "Activation Kundalini", "Soins énergétiques", "Chamanisme", "Kinésiologie",
    "Biorésonance", "Reiki Kundalini", "Human Design", "Lecture d'âme",
    "Accompagnement burn-out", "Libération des blocages émotionnels",
    "Harmonisation des chakras", "Soins à distance"
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
        title="Activation Kundalini à Neuchâtel | Chamanisme &amp; Kinésiologie — Karmaequilego"
        description="Matyas Challandes, praticien à Bevaix (canton de Neuchâtel) : Activation Kundalini, chamanisme et kinésiologie. Découverte gratuite d'une heure, en présentiel ou à distance."
        path="/"
        keywords="activation kundalini Neuchâtel, chamanisme Neuchâtel, kinésiologie Neuchâtel, Karmaequilego, Matyas Challandes, Bevaix"
        jsonLd={[organizationLd, websiteLd, homeFaqJsonLd]}
      />
      <HeroTunnel />
      <TrustSection />
      <BlocagesSection />
      <KundaliniSection />
      <RecognizeSection />
      <AboutMatyas />
      <ToolsSection />
      <FaqShort />
      <FinalCta />
    </Layout>
  );
};

export default Index;
