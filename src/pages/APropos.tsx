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
      <header className="pt-24 pb-8 md:pt-32 md:pb-10 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
            Bevaix — Neuchâtel — Suisse romande
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-4">
            Matyas Challandes, <span className="text-gradient-gold italic">guérisseur énergétique</span> à Bevaix (Neuchâtel)
          </h1>
          <div className="glow-line w-20 mx-auto" />
        </div>
      </header>
      <WhyMeSection />
      <JourneySection />
      <GoogleReviewsBadge />
    </Layout>
  );
};

export default APropos;

