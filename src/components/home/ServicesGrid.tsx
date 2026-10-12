import { Link } from "react-router-dom";

const services = [
  { t: "Soin énergétique chamanique", d: "Nettoyer ce qui pèse, retrouver les parties de toi qui se sont éloignées.", to: "/chamanisme-neuchatel" },
  { t: "Activation Kundalini", d: "Une respiration guidée pour aider ton énergie vitale à circuler plus librement.", to: "/la-kundalini" },
  { t: "Massage énergétique & libération somatique", d: "Le toucher et l'écoute du corps pour laisser se relâcher les tensions.", to: "/massage-energetique-liberation-somatique" },
  { t: "Kinésiologie (en formation, 1re année)", d: "Le test musculaire pour explorer les stress et préciser tes objectifs.", to: "/kinesiologie-neuchatel" },
];

const ServicesGrid = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-6 max-w-5xl">
      <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-3 text-foreground">
        Mes <span className="text-gradient-gold italic">accompagnements</span>
      </h2>
      <p className="text-center font-body text-sm text-foreground/70 mb-10">Au cabinet à Bevaix ou à distance · 1h30 à 2h · prix libre</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <Link key={s.to} to={s.to} className="p-6 rounded-2xl border border-border bg-card/60 hover:border-primary/50 transition">
            <h3 className="font-heading text-xl text-foreground mb-2">{s.t}</h3>
            <p className="font-body text-sm text-foreground/75">{s.d}</p>
            <span className="mt-3 inline-block text-xs text-primary">En savoir plus →</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
