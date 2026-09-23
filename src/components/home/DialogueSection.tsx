import { Link } from "react-router-dom";
import { MessageCircle, Footprints, Sun, ArrowRight } from "lucide-react";
import { CARNET_PATH } from "@/lib/links";

const steps = [
  {
    icon: MessageCircle,
    title: "Le dialogue avec le corps",
    text: "Une fois l'événement et l'émotion associée détectés, on entre en dialogue avec la partie du corps qui réagit. Soit pour aller finir ce qui n'a jamais pu l'être — un freeze, un blocage figé — soit pour exprimer ce qui aurait voulu l'être et qui est resté prisonnier.",
  },
  {
    icon: Sun,
    title: "Lumière, sécurité, réintégration",
    text: "Une fois qu'on a mis le doigt dessus, on dialogue avec cette partie. On entend son message, on y amène de la lumière et de la sécurité. Les fragments se réintègrent, l'énergie se remet à circuler. Ce qui était figé reprend vie.",
  },
  {
    icon: Footprints,
    title: "La réintégration par les pieds",
    text: "Parfois, il faut réintégrer un corps subtil — par les pieds. C'est là que j'interviens, et là que se passent des résultats incroyables : la personne retrouve une présence, un ancrage, une plénitude qu'elle n'avait peut-être jamais ressentis.",
  },
];

const origins = [
  "Un refus d'incarnation",
  "De la honte",
  "De la peur",
  "Une colère",
  "Un choc très violent",
];

const DialogueSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-14">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
          La méthode
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6 text-foreground">
          Détecter. Dialoguer.{" "}
          <span className="text-gradient-gold italic">Libérer.</span>
        </h2>
        <p className="font-body text-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto">
          Le blocage peut être un refus d'incarnation, de la honte, de la peur, une colère, un choc
          très violent. Il peut venir de cette vie, d'une vie antérieure, ou être
          transgénérationnel — transmis de génération en génération. Une fois qu'on met le doigt
          dessus, tout change.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {steps.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="border border-primary/30 bg-card/70 backdrop-blur-sm rounded-sm p-7 hover:border-primary transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full border border-primary/40 bg-background flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-3">{title}</h3>
            <p className="font-body text-sm text-foreground/75 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <div className="border border-primary/30 bg-muted/30 rounded-sm p-8 md:p-10 max-w-3xl mx-auto">
        <p className="font-body text-foreground/80 text-sm tracking-wider uppercase mb-4 text-center">
          Ce qui peut se cacher derrière un blocage
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {origins.map((o) => (
            <span
              key={o}
              className="text-sm font-body px-4 py-2 rounded-sm bg-primary/10 text-primary"
            >
              {o}
            </span>
          ))}
        </div>
        <p className="font-body text-foreground/85 text-lg leading-relaxed text-center mb-6">
          Le corps n'oublie rien. Mais il ne fait que protéger. Quand on entend enfin ce qu'il a à
          dire, il n'a plus besoin de crier — et l'énergie reprend sa place.
        </p>
        <p className="font-body text-foreground/70 text-sm leading-relaxed text-center mb-6">
          Pour commencer à ouvrir ces tiroirs, le{" "}
          <Link to={CARNET_PATH} className="text-primary underline underline-offset-4">
            carnet de préparation
          </Link>{" "}
          prépare déjà le terrain.
        </p>
        <div className="text-center">
          <Link
            to="/offre-decouverte-gratuite"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
          >
            Commencer le voyage <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default DialogueSection;
