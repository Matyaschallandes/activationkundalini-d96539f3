import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import HeroTunnel from "@/components/home/HeroTunnel";
import TrustSection from "@/components/home/TrustSection";
import BlocagesSection from "@/components/home/BlocagesSection";
import DialogueSection from "@/components/home/DialogueSection";
import KundaliniSection from "@/components/home/KundaliniSection";
import RecognizeSection from "@/components/home/RecognizeSection";
import AboutMatyas from "@/components/home/AboutMatyas";
import ToolsSection from "@/components/home/ToolsSection";
import FaqShort, { homeFaqJsonLd } from "@/components/home/FaqShort";
import FinalCta from "@/components/home/FinalCta";
import YearEndOffer from "@/components/home/YearEndOffer";
import OfferBanner from "@/components/home/OfferBanner";
import HomeEssentials, { AboutShort, RdvButton } from "@/components/home/HomeEssentials";
import LatestPosts from "@/components/home/LatestPosts";
import Precautions from "@/components/Precautions";
import RealReviews from "@/components/RealReviews";
import { GOOGLE_BUSINESS_URL } from "@/lib/links";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://www.activationkundalini.ch/#organization",
  "name": "Karmaequilego",
  "founder": { "@type": "Person", "name": "Matyas Challandes" },
  "description": "Activation Kundalini, soins énergétiques et chamanisme à Bevaix (Neuchâtel), en présentiel ou à distance en Suisse romande.",
  "url": "https://www.activationkundalini.ch",
  "telephone": "+41762445552",
  "email": "matyas.challandes@gmail.com",
  "priceRange": "Prix libre",
  "image": "https://www.activationkundalini.ch/og-image.jpg",
  "areaServed": ["Neuchâtel", "Vaud", "Fribourg", "Genève", "Valais", "Jura", "Berne francophone"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chemin du Cuard 22",
    "addressLocality": "Bevaix",
    "addressRegion": "NE",
    "postalCode": "2022",
    "addressCountry": "CH"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 46.9294, "longitude": 6.6906 },
  "sameAs": [GOOGLE_BUSINESS_URL]
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
        title="Guérisseur & Chamane à Neuchâtel | Activation Kundalini"
        description="Matyas Challandes, guérisseur et chamane à Bevaix (NE) : activation Kundalini, soins énergétiques. 1re heure offerte. ★ 4,9/5 sur Google"
        path="/"
        keywords="activation kundalini Neuchâtel, chamanisme Neuchâtel, kinésiologie Neuchâtel, Karmaequilego, Matyas Challandes, Bevaix"
        jsonLd={[organizationLd, websiteLd, homeFaqJsonLd]}
      />
      <OfferBanner />
      <YearEndOffer />
      <HeroTunnel />
      <TrustSection />
      <HomeEssentials />
      <BlocagesSection />
      <DialogueSection />
      <KundaliniSection />
      <RecognizeSection />
      <AboutMatyas />
      <AboutShort />
      <Precautions />
      <RealReviews />
      <ToolsSection />
      <FaqShort />
      <LatestPosts />
      <FinalCta />
      <div className="text-center pb-16"><RdvButton /></div>
    </Layout>
  );
};

export default Index;
