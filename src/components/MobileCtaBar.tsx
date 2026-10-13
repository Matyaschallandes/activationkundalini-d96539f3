import { Phone, MessageCircle, Gift } from "lucide-react";

const MobileCtaBar = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex border-t border-border bg-background/95 backdrop-blur-md">
    <a href="tel:+41762445552" className="flex-1 flex items-center justify-center gap-2 py-3.5 font-body text-sm font-medium text-foreground" aria-label="Appeler Matyas au +41 76 244 55 52">
      <Phone className="w-4 h-4 text-primary" /> Appeler
    </a>
    <a href="https://wa.me/41762445552" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3.5 font-body text-sm font-medium text-foreground border-l border-border" aria-label="Écrire à Matyas sur WhatsApp">
      <MessageCircle className="w-4 h-4 text-primary" /> WhatsApp
    </a>
    <a href="/offre-decouverte-gratuite" className="flex-[1.3] flex items-center justify-center gap-2 py-3.5 bg-gradient-gold text-primary-foreground font-body text-sm font-semibold">
      <Gift className="w-4 h-4" /> Découverte
    </a>
  </div>
);

export default MobileCtaBar;
