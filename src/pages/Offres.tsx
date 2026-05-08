import Layout from "@/components/Layout";
import { useEffect } from "react";
import KundaliniSection from "@/components/KundaliniSection";
import SoinSection from "@/components/SoinSection";
import MethodSection from "@/components/MethodSection";
import OffersSection from "@/components/OffersSection";
import Programme21Section from "@/components/Programme21Section";

const Offres = () => {
  useEffect(() => {
    document.title = "Offres & Tarifs | Activation Kundalini & Soins Énergétiques — Bevaix, Neuchâtel";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Découvrez les offres d'activation kundalini, soins énergétiques, kinésiologie et accompagnement spirituel en Suisse romande, à Bevaix dans le canton de Neuchâtel (La Grande Béroche). Prix libre, séances en présentiel ou à distance."
      );
    }
  }, []);

  return (
    <Layout>
      <KundaliniSection />
      <SoinSection />
      <MethodSection />
      <OffersSection />
      <Programme21Section />
    </Layout>
  );
};

export default Offres;
