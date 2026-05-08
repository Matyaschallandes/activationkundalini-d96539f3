import Layout from "@/components/Layout";
import { useEffect } from "react";
import WhyMeSection from "@/components/WhyMeSection";
import JourneySection from "@/components/JourneySection";
import GoogleReviewsBadge from "@/components/GoogleReviewsBadge";

const APropos = () => {
  useEffect(() => {
    document.title = "À propos — Matyas Challandes | Praticien Énergétique Suisse Romande";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Découvrez Matyas Challandes, praticien énergétique en Suisse romande, à Bevaix dans le canton de Neuchâtel (La Grande Béroche). Activation kundalini, soins énergétiques et accompagnement spirituel."
      );
    }
  }, []);

  return (
    <Layout>
      <WhyMeSection />
      <JourneySection />
      <GoogleReviewsBadge />
    </Layout>
  );
};

export default APropos;
