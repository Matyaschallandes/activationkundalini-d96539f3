import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import WhyMeSection from "@/components/WhyMeSection";
import JourneySection from "@/components/JourneySection";
import GoogleReviewsBadge from "@/components/GoogleReviewsBadge";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Matyas Challandes",
  "jobTitle": "Praticien énergétique & Guérisseur",
  "description": "Praticien énergétique en Suisse romande, spécialisé en activation Kundalini, kinésiologie, libération des traumatismes et accompagnement burn-out.",
  "worksFor": { "@id": "https://www.activationkundalini.ch/#organization" },
  "address": { "@type": "PostalAddress", "addressLocality": "Bevaix", "addressRegion": "Neuchâtel", "addressCountry": "CH" },
  "knowsAbout": ["Kundalini", "Kinésiologie", "Reiki Kundalini", "Lahochi", "Biorésonance", "Libération émotionnelle"]
};

const APropos = () => {
  return (
    <Layout>
      <Seo
        title="À propos — Matyas Challandes | Guérisseur Énergétique Suisse Romande"
        description="Matyas Challandes, praticien énergétique à Bevaix (Neuchâtel). Formé en Reiki Kundalini, Lahochi, kinésiologie et biorésonance. Accompagnement burn-out, traumatismes, angoisses."
        path="/a-propos"
        keywords="Matyas Challandes, guérisseur énergétique Neuchâtel, praticien kundalini Suisse romande"
        jsonLd={jsonLd}
      />
      <WhyMeSection />
      <JourneySection />
      <GoogleReviewsBadge />
    </Layout>
  );
};

export default APropos;

