import { Link } from "react-router-dom";
import { KOALENDAR_URL, HUMAN_DESIGN_URL } from "@/lib/links";

const RdvButton = () => (
  <a href={KOALENDAR_URL} target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-body text-sm font-semibold tracking-wide">
    Prendre rendez-vous
  </a>
);

const steps = [
  { t: "1. L'accueil", d: "On prend le temps de parler de ce que tu vis, de ce qui te pèse et de ce que tu aimerais voir changer." },
  { t: "2. La séance", d: "Exploration des blocages, soin énergétique chamanique puis activation Kundalini, à ton rythme et dans un cadre sécurisant." },
  { t: "3. L'intégration", d: "Quelques conseils simples pour les jours qui suivent et un suivi si tu en ressens le besoin." },
];

const HomeEssentials = () => (
  <>
    <section className="py-16 md:py-20 bg-muted/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-10 text-foreground">
          Comment ça <span className="text-gradient-gold italic">se passe</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {steps.map((s) => (
            <div key={s.t} className="p-6 rounded-2xl border border-border bg-card/60">
              <h3 className="font-heading text-xl text-foreground mb-2">{s.t}</h3>
              <p className="font-body text-sm text-foreground/75 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center"><RdvButton /></div>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-light mb-6 text-foreground">
          C'est quoi l'<span className="text-gradient-gold italic">activation Kundalini</span> ?
        </h2>
        <p className="font-body text-foreground/80 leading-relaxed mb-4">
          La Kundalini, c'est le nom donné à ton énergie vitale. L'activation est un moment guidé, avec la respiration, la présence et le toucher, qui aide cette énergie à circuler plus librement le long de la colonne. Beaucoup de personnes y vivent une détente profonde, des émotions qui se libèrent et un sentiment de clarté. Ce que j'appelle « respiration alchimique », c'est simplement une respiration consciente et rythmée ; « libération karmique » désigne le fait de lâcher des schémas répétitifs qui te freinent.
        </p>
        <p className="font-body text-foreground/80 leading-relaxed">
          Pour aller plus loin : <Link to="/la-kundalini" className="text-primary underline">tout savoir sur l'activation Kundalini</Link>,{" "}
          <a href={HUMAN_DESIGN_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">ta lecture d'âme Human Design</a>,{" "}
          <Link to="/seances-a-distance-suisse-romande" className="text-primary underline">les séances à distance en Suisse romande</Link>,{" "}
          <Link to="/accompagnement-burn-out-suisse-romande" className="text-primary underline">l'accompagnement du burn-out</Link>,{" "}
          <Link to="/retrouver-energie-fatigue-chronique" className="text-primary underline">la fatigue chronique</Link>,{" "}
          <Link to="/apaiser-anxiete-angoisses" className="text-primary underline">l'anxiété et les angoisses</Link> et{" "}
          <Link to="/blog" className="text-primary underline">les articles du blog</Link>.
        </p>
        <div className="mt-8"><RdvButton /></div>
      </div>
    </section>
  </>
);

export const AboutShort = () => (
  <section className="py-16 md:py-20 bg-muted/20">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="font-heading text-3xl md:text-4xl font-light mb-6 text-foreground">
        À propos de <span className="text-gradient-gold italic">Matyas</span>
      </h2>
      <p className="font-body text-foreground/80 leading-relaxed mb-4">
        Je m'appelle Matyas Challandes et je t'accueille à Bevaix, dans le canton de Neuchâtel, ou à distance. Je pratique l'activation Kundalini et le chamanisme, et je suis actuellement en formation de kinésiologie. Mon travail : t'aider à repérer ce qui bloque ton énergie et à le laisser se libérer, en douceur.
      </p>
      <p className="font-body text-foreground/80 leading-relaxed">
        <Link to="/mon-histoire" className="text-primary underline">Découvrir mon parcours</Link> · <Link to="/a-propos" className="text-primary underline">En savoir plus sur moi</Link>
      </p>
    </div>
  </section>
);

export { RdvButton };
export default HomeEssentials;
