import { Link } from "react-router-dom";
import { NotebookPen, Compass, Sparkles, HandHeart, Calendar } from "lucide-react";
import { CARNET_PATH, KOALENDAR_URL, HUMAN_DESIGN_URL } from "@/lib/links";

const DiscoverySection = () => {
  const inclus = [
    { icon: NotebookPen, label: <>Un <Link to={CARNET_PATH} className="text-primary underline underline-offset-4 hover:text-primary/80">carnet de préparation</Link> avec des clés de compréhension</> },
    { icon: Compass, label: "Une détection énergétique personnalisée des principaux blocages" },
    { icon: Sparkles, label: <>Une <a href={HUMAN_DESIGN_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80">lecture d'âme</a> / Human Design</> },
    { icon: HandHeart, label: "Un soin énergétique chamanique et/ou une activation Kundalini de 15 minutes" },
  ];

  return (
    <section id="decouverte" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" aria-hidden />

      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          Découverte gratuite · 1 heure · visio
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light text-center mb-6 text-foreground">
          Et si une seule rencontre permettait déjà d'<span className="text-gradient-gold italic">y voir plus clair</span> ?
        </h2>
        <p className="font-body text-center text-foreground/85 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
          Je vous propose une première rencontre gratuite d'une heure pour explorer ensemble ce qui
          se joue derrière vos blocages.
        </p>

        <div className="space-y-8 mb-16">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-5 md:gap-8 items-start">
              <span className="font-heading text-3xl md:text-4xl text-primary/60 shrink-0 leading-none pt-1">
                {s.n}
              </span>
              <div>
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-foreground/75 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-border bg-card/70 rounded-sm p-7 md:p-9">
          <h3 className="font-heading text-xl text-foreground mb-5">Ce que contient l'expérience</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inclus.map(({ icon: Icon, label }) => (
              <li key={String(label)} className="flex gap-3 font-body text-sm text-foreground/85 leading-relaxed">
                <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                {label}
              </li>
            ))}
          </ul>
          <p className="font-body text-xs text-muted-foreground mt-6 leading-relaxed">
            Cette rencontre est un espace d'écoute et d'exploration : elle vise à comprendre,
            identifier et mettre en lumière, et ne remplace en aucun cas un suivi médical.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href={KOALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-10 py-5 rounded-sm hover:shadow-gold transition-all duration-500"
          >
            <Calendar className="w-4 h-4" /> Prendre rendez-vous
          </a>
          <Link
            to="/offre-decouverte-gratuite"
            className="inline-flex items-center justify-center border border-primary/50 text-foreground font-body font-semibold tracking-wider uppercase text-sm px-9 py-5 rounded-sm hover:bg-primary/10 transition-all duration-500"
          >
            En savoir plus sur l'offre
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
