import HeroSection from "@/components/HeroSection";
import FrustrationsSection from "@/components/FrustrationsSection";
import TransformationSection from "@/components/TransformationSection";
import KundaliniSection from "@/components/KundaliniSection";
import SoinSection from "@/components/SoinSection";
import MethodSection from "@/components/MethodSection";
import OffersSection from "@/components/OffersSection";
import Programme21Section from "@/components/Programme21Section";
import JourneySection from "@/components/JourneySection";
import WhyMeSection from "@/components/WhyMeSection";
import CtaSection from "@/components/CtaSection";
import GoogleReviewsBadge from "@/components/GoogleReviewsBadge";
import Footer from "@/components/Footer";
import SeoKeywords from "@/components/SeoKeywords";

const seoJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Karmaequilego – Activation Kundalini & Soins Énergétiques",
  "description": "Activation kundalini, éveil spirituel, soins énergétiques, harmonisation des chakras, libération karmique et transformation spirituelle en Suisse. Séances en présentiel et à distance.",
  "url": "https://activationkundalini.lovable.app",
  "telephone": "+41762445552",
  "email": "matyas.challandes@gmail.com",
  "areaServed": ["Neuchâtel", "Lausanne", "Genève", "Zurich", "Fribourg", "Vaud", "Suisse"],
  "serviceType": [
    "Activation Kundalini",
    "Soins énergétiques",
    "Harmonisation des chakras",
    "Nettoyage énergétique",
    "Libération karmique",
    "Thérapie énergétique",
    "Méditation guidée",
    "Soins à distance",
    "Guérison holistique",
    "Rééquilibrage énergétique"
  ],
  "knowsAbout": [
    "Kundalini", "Chakras", "Énergie vitale", "Éveil spirituel", "Soins holistiques",
    "Yoga kundalini", "Méditation énergétique", "Purification énergétique", "Alchimie intérieure",
    "Biorésonance énergétique", "Soin quantique", "Élévation vibrationnelle"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Neuchâtel",
    "addressCountry": "CH"
  }
};

const Index = () => {
  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoJsonLd) }}
      />
      <HeroSection />
      <FrustrationsSection />
      <TransformationSection />
      <KundaliniSection />
      <SoinSection />
      <MethodSection />
      <OffersSection />
      <Programme21Section />
      <JourneySection />
      <WhyMeSection />
      <GoogleReviewsBadge />
      <CtaSection />
      <Footer />
      <SeoKeywords />
    </main>
  );
};

export default Index;
