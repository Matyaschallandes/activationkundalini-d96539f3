import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FrustrationsSection from "@/components/FrustrationsSection";
import TransformationSection from "@/components/TransformationSection";
import VideoSection from "@/components/VideoSection";

const seoJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Karmaequilego – Activation Kundalini & Soins Énergétiques",
  "description": "Activation kundalini, éveil spirituel, soins énergétiques, harmonisation des chakras, libération karmique et transformation spirituelle en Suisse romande, à Bevaix dans le canton de Neuchâtel (La Grande Béroche). Séances en présentiel et à distance.",
  "url": "https://www.activationkundalini.ch",
  "telephone": "+41762445552",
  "email": "matyas.challandes@gmail.com",
  "areaServed": ["Bevaix", "La Grande Béroche", "Neuchâtel", "Suisse romande", "Lausanne", "Genève", "Zurich", "Fribourg", "Vaud", "Suisse"],
  "serviceType": [
    "Activation Kundalini", "Soins énergétiques", "Harmonisation des chakras",
    "Nettoyage énergétique", "Libération karmique", "Thérapie énergétique",
    "Méditation guidée", "Soins à distance", "Guérison holistique", "Rééquilibrage énergétique"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chemin du Cuard 22",
    "addressLocality": "Bevaix",
    "addressRegion": "Neuchâtel",
    "postalCode": "2022",
    "addressCountry": "CH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "46.9294",
    "longitude": "6.6906"
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
      
      <FrustrationsSection />
      <VideoSection />
      <TransformationSection />
    </Layout>
  );
};

export default Index;
