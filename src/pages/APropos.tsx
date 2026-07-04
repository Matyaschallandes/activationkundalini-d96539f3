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
  "description": "Praticien énergétique et chamane en Suisse romande, spécialisé en activation Kundalini, soins chamaniques (désenvoûtement, recouvrement d'âme, dégagement d'entités), kinésiologie et accompagnement burn-out.",
  "worksFor": { "@id": "https://www.activationkundalini.ch/#organization" },
  "address": { "@type": "PostalAddress", "addressLocality": "Bevaix", "addressRegion": "Neuchâtel", "addressCountry": "CH" },
  "knowsAbout": ["Kundalini", "Chamanisme", "Désenvoûtement", "Recouvrement d'âme", "Dégagement d'entités", "Vision intuitive", "Kinésiologie", "Reiki Kundalini", "Lahochi", "Biorésonance", "Libération émotionnelle"]
};

const APropos = () => {
  return (
    <Layout>
      <Seo
        title="À propos — Matyas Challandes | Guérisseur Énergétique & Chamane Suisse Romande"
        description="Matyas Challandes, praticien énergétique et chamane à Bevaix (Neuchâtel). Activation Kundalini, soins chamaniques (désenvoûtement, recouvrement d'âme, dégagement d'entités), kinésiologie, accompagnement burn-out."
        path="/a-propos"
        keywords="Matyas Challandes, guérisseur énergétique Neuchâtel, chamane Suisse romande, désenvoûtement, recouvrement d'âme, dégagement d'entités, praticien kundalini"
        jsonLd={jsonLd}
      />
      <WhyMeSection />
      <JourneySection />
      <GoogleReviewsBadge />
    </Layout>
  );
};

export default APropos;

