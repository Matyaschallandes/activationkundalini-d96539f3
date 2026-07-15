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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <WhatsAppButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
