import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Video, Clock, Gift } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import matyasPhoto from "@/assets/matyas-photo.jpg";
import ContactFormDialog from "../ContactFormDialog";

const HeroTunnel = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.4rem] font-light leading-[1.15] mb-6 text-foreground">
              Vous avez l'impression de tourner en rond{" "}
              <span className="text-gradient-gold italic font-medium">malgré tous vos efforts</span> ?
            </h1>

            <p className="font-body text-foreground/85 text-lg md:text-xl leading-relaxed mb-10">
              Et si vous pouviez enfin mettre des mots sur ce qui vous bloque ?
            </p>

            <div className="border border-primary/30 bg-card/80 backdrop-blur-sm rounded-sm p-6 md:p-8 mb-8 text-left">
              <p className="font-body font-semibold tracking-[0.25em] uppercase text-xs text-primary mb-3">
                Découverte gratuite
              </p>
              <p className="font-body text-foreground/90 text-base md:text-lg leading-relaxed mb-5">
                1 heure pour faire le point sur ce que vous vivez, comprendre vos principaux
                blocages et repartir avec une première clé de compréhension.
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 font-body text-sm text-foreground/75">
                <li className="flex items-center gap-1.5"><Gift className="w-4 h-4 text-primary" /> Gratuit</li>
                <li className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> 1 heure</li>
                <li className="flex items-center gap-1.5"><Video className="w-4 h-4 text-primary" /> En visioconférence</li>
                <li className="flex items-center gap-1.5"><span className="text-primary">✦</span> Sans engagement</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center md:justify-start">
              <Link
                to="/offre-decouverte-gratuite"
                className="bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-9 py-5 rounded-sm text-center hover:shadow-gold transition-all duration-500"
              >
                Je réserve ma découverte gratuite
              </Link>
              <button
                onClick={() => setDialogOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-primary/50 text-foreground font-body font-medium tracking-wider uppercase text-sm px-7 py-5 rounded-sm hover:bg-primary/10 transition-all duration-500"
              >
                <Phone className="w-4 h-4" /> En parler avec Matyas
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-gold opacity-25 blur-2xl rounded-full" aria-hidden />
              <img
                src={matyasPhoto}
                alt="Matyas Challandes, accompagnant en soins énergétiques à Bevaix (Neuchâtel)"
                className="relative w-48 h-48 md:w-72 md:h-72 object-cover rounded-full border-2 border-primary/40 shadow-gold"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <ContactFormDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default HeroTunnel;
