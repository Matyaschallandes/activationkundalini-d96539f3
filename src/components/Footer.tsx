import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 text-center space-y-4">
        <p className="font-heading text-2xl text-gradient-gold italic">🌿</p>
        
        <p className="font-body text-sm text-muted-foreground">
          Tous les soins et accompagnements sont disponibles <strong className="text-foreground/80">en présentiel ou à distance</strong> (Zoom, WhatsApp vidéo ou sur photo).
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
          <a href="tel:+41762445552" className="flex items-center gap-2 font-body text-foreground/70 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            +41 76 244 55 52
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a href="mailto:matyas.challandes@gmail.com" className="flex items-center gap-2 font-body text-foreground/70 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5" />
            matyas.challandes@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm">
          <MapPin className="w-3.5 h-3.5 text-foreground/70" />
          <p className="font-body text-foreground/70">
            Matyas Challandes · Chemin du Cuard 22, 2022 Bevaix
          </p>
        </div>

        <nav aria-label="Zones desservies" className="pt-4">
          <p className="font-body text-xs uppercase tracking-widest text-foreground/50 mb-2">
            Zones desservies en Suisse romande
          </p>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs">
            <li><Link to="/soins-energetiques-canton-vaud" className="text-foreground/60 hover:text-primary transition-colors">Canton de Vaud</Link></li>
            <li><Link to="/soins-energetiques-canton-fribourg" className="text-foreground/60 hover:text-primary transition-colors">Canton de Fribourg</Link></li>
            <li><Link to="/soins-energetiques-jura-bernois" className="text-foreground/60 hover:text-primary transition-colors">Jura bernois &amp; Bienne</Link></li>
          </ul>
        </nav>

        <p className="font-body text-xs text-muted-foreground pt-2">
          © {new Date().getFullYear()} — Activation & Transformation Profonde
        </p>
      </div>
    </footer>
  );
};

export default Footer;
