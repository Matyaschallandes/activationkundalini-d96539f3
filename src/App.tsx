import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LaKundalini from "./pages/LaKundalini";
import LectureAme from "./pages/LectureAme";
import Offres from "./pages/Offres";
import APropos from "./pages/APropos";
import MonHistoire from "./pages/MonHistoire";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PageUne from "./pages/PageUne";
import RendezVous from "./pages/RendezVous";
import CercleGuerison from "./pages/CercleGuerison";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Boutique from "./pages/Boutique";
import CheckoutReturn from "./pages/CheckoutReturn";
import CantonVaud from "./pages/CantonVaud";
import CantonFribourg from "./pages/CantonFribourg";
import CantonBerne from "./pages/CantonBerne";
import CantonGeneve from "./pages/CantonGeneve";
import CantonJura from "./pages/CantonJura";
import CantonValais from "./pages/CantonValais";
import BurnOutPage from "./pages/BurnOutPage";
import FatigueChroniquePage from "./pages/FatigueChroniquePage";
import AnxietePage from "./pages/AnxietePage";
import BaisseMoralPage from "./pages/BaisseMoralPage";
import VilleNeuchatel from "./pages/VilleNeuchatel";
import VilleLausanne from "./pages/VilleLausanne";
import VilleFribourg from "./pages/VilleFribourg";
import VilleGeneve from "./pages/VilleGeneve";
import ReikiNeuchatel from "./pages/ReikiNeuchatel";
import LahochiNeuchatel from "./pages/LahochiNeuchatel";
import ChamanismeNeuchatel from "./pages/ChamanismeNeuchatel";
import KinesiologieNeuchatel from "./pages/KinesiologieNeuchatel";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/la-kundalini" element={<LaKundalini />} />
          <Route path="/lecture-ame" element={<LectureAme />} />
          <Route path="/offres" element={<Offres />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/mon-histoire" element={<MonHistoire />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/page-une" element={<PageUne />} />
          <Route path="/rendez-vous" element={<RendezVous />} />
          <Route path="/cercle-de-guerison" element={<CercleGuerison />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/checkout/return" element={<CheckoutReturn />} />
          <Route path="/soins-energetiques-canton-vaud" element={<CantonVaud />} />
          <Route path="/soins-energetiques-canton-fribourg" element={<CantonFribourg />} />
          <Route path="/soins-energetiques-jura-bernois" element={<CantonBerne />} />
          <Route path="/soins-energetiques-canton-geneve" element={<CantonGeneve />} />
          <Route path="/soins-energetiques-canton-jura" element={<CantonJura />} />
          <Route path="/soins-energetiques-canton-valais" element={<CantonValais />} />
          <Route path="/accompagnement-burn-out-suisse-romande" element={<BurnOutPage />} />
          <Route path="/retrouver-energie-fatigue-chronique" element={<FatigueChroniquePage />} />
          <Route path="/apaiser-anxiete-angoisses" element={<AnxietePage />} />
          <Route path="/retrouver-elan-baisse-de-moral" element={<BaisseMoralPage />} />
          <Route path="/activation-kundalini-neuchatel" element={<VilleNeuchatel />} />
          <Route path="/activation-kundalini-lausanne" element={<VilleLausanne />} />
          <Route path="/activation-kundalini-fribourg" element={<VilleFribourg />} />
          <Route path="/activation-kundalini-geneve" element={<VilleGeneve />} />
          <Route path="/reiki-neuchatel" element={<ReikiNeuchatel />} />
          <Route path="/lahochi-neuchatel" element={<LahochiNeuchatel />} />
          <Route path="/chamanisme-neuchatel" element={<ChamanismeNeuchatel />} />
          <Route path="/kinesiologie-neuchatel" element={<KinesiologieNeuchatel />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <WhatsAppButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
