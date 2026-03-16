import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import DiscoveryOfferSection from "@/components/DiscoveryOfferSection";
import FrustrationsSection from "@/components/FrustrationsSection";
import TransformationSection from "@/components/TransformationSection";

const seoJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Karmaequilego – Activation Kundalini & Soins Énergétiques",
  "description": "Activation kundalini, éveil spirituel, soins énergétiques, harmonisation des chakras, libération karmique et transformation spirituelle en Suisse. Séances en présentiel et à distance.",
  "url": "https://www.activationkundalini.ch",
  "telephone": "+41762445552",
  "email": "matyas.challandes@gmail.com",
  "areaServed": ["Neuchâtel", "Lausanne", "Genève", "Zurich", "Fribourg", "Vaud", "Suisse"],
  "serviceType": [
    "Activation Kundalini", "Soins énergétiques", "Harmonisation des chakras",
    "Nettoyage énergétique", "Libération karmique", "Thérapie énergétique",
    "Méditation guidée", "Soins à distance", "Guérison holistique", "Rééquilibrage énergétique"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Neuchâtel",
    "addressCountry": "CH"
  }
};

const Index = () => {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoJsonLd) }}
      />
      <HeroSection />
      <DiscoveryOfferSection />
      <FrustrationsSection />
      <TransformationSection />
    </Layout>
  );
};

export default Index;
