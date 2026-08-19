import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink, Star } from "lucide-react";

const GOOGLE_BUSINESS_URL = "https://www.google.com/search?q=Karmaequilego";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "L'accompagnement", path: "/offres" },
  { label: "La Kundalini", path: "/la-kundalini" },
  { label: "À propos", path: "/a-propos" },
  { label: "Contact", path: "/contact" },
];

const secondaryItems = [
  { label: "Mon histoire", path: "/mon-histoire" },
  { label: "Déroulement d'une séance", path: "/deroulement-seance" },
  { label: "Cercle de guérison", path: "/cercle-de-guerison" },
  { label: "Photos", path: "/photos" },
  { label: "Blog", path: "/blog" },
  { label: "Boutique", path: "/boutique" },
  { label: "Rendez-vous", path: "/rendez-vous" },
  { label: "Carnet de préparation", path: "/carnet-de-preparation" },
  { label: "Suivi post-séance", path: "/suivi-post-seance" },
  { label: "Lecture d'âme", path: "/lecture-ame" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `font-body text-sm tracking-wider uppercase transition-colors duration-300 ${
      pathname === path ? "text-primary" : "text-foreground/70 hover:text-foreground"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <a
        href={GOOGLE_BUSINESS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 h-8 bg-gradient-gold text-primary-foreground font-body text-xs tracking-wider hover:opacity-90 transition-opacity px-3"
        aria-label="Voir la fiche Google Business Karmaequilego — noté 4.9 sur 5"
      >
        <span className="font-semibold">4.9 / 5</span>
        <span className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-current" />
          ))}
        </span>
        <span className="hidden sm:inline uppercase tracking-widest">sur Google</span>
        <span className="sm:hidden uppercase tracking-widest">Google</span>
        <ExternalLink className="w-3 h-3" />
      </a>

      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-xl text-gradient-gold italic">
          Karmaequilego
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.path}>
                {item.path.includes("#") ? (
                  <a href={item.path} className={linkClass(item.path)}>
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.path} className={linkClass(item.path)}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            to="/offre-decouverte-gratuite"
            className="bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-xs px-5 py-3 rounded-sm hover:shadow-gold transition-all duration-300"
          >
            Découverte gratuite
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            to="/offre-decouverte-gratuite"
            className="bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-[11px] px-3 py-2 rounded-sm"
          >
            Découverte
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Secondary bar (desktop) */}
      <div className="hidden md:block border-t border-border/40 bg-background/70">
        <ul className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 py-2">
          {secondaryItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`font-body text-[11px] tracking-wider uppercase transition-colors ${
                  pathname === item.path ? "text-primary" : "text-foreground/55 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="flex flex-col items-center py-6 gap-5">
            {navItems.map((item) => (
              <li key={item.path}>
                {item.path.includes("#") ? (
                  <a
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={linkClass(item.path)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={linkClass(item.path)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="w-full px-6 pt-2">
              <div className="border-t border-border/60 pt-4">
                <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                  {secondaryItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={`font-body text-[11px] tracking-wider uppercase ${
                          pathname === item.path ? "text-primary" : "text-foreground/60"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link
                to="/offre-decouverte-gratuite"
                onClick={() => setMobileOpen(false)}
                className="inline-block bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-xs px-6 py-3 rounded-sm"
              >
                Découverte gratuite
              </Link>
            </li>
            <li>
              <a
                href="tel:+41762445552"
                className="font-body text-sm tracking-wider uppercase text-primary"
              >
                Appeler Matyas
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
