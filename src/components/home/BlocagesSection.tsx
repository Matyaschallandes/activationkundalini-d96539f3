import { Link } from "react-router-dom";
import { Shield, Heart, Compass, ArrowRight } from "lucide-react";
import { CARNET_PATH } from "@/lib/links";

const blocages = [
  {
    icon: Shield,
    title: "Les brèches énergétiques",
    text: "Les blocages empêchent votre énergie de circuler librement. Et là où il y a un blocage, il y a une brèche — une fissure dans laquelle des énergies extérieures peuvent venir se loger et parasiter votre équilibre.",
  },
  {
    icon: Heart,
    title: "Les fragments d'âme",
    text: "Un accident, un choc, un événement trop violent : pour vous protéger, des fragments de votre âme ont pu quitter votre corps — parfois dès avant la naissance, parfois lorsqu'une partie de vous a cru que c'était la fin. Tant qu'ils ne reviennent pas, une part de vous reste absente.",
  },
  {
    icon: Compass,
    title: "Les pactes avec l'ombre",
    text: "Consciemment ou inconsciemment, nous passons parfois des pactes avec l'ombre — des serments, des fidélités invisibles qui nous empêchent d'avancer vers notre véritable mission de vie.",
  },
];

const BlocagesSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-14">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
          Comprendre ce qui bloque
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6 text-foreground">
          Et si ce qui vous freine n'était{" "}
          <span className="text-gradient-gold italic">pas vraiment vous</span> ?
        </h2>
        <p className="font-body text-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto">
          Un événement douloureux à 3 ou 4 ans, un choc que vous avez oublié, quelque chose qui
          remonte bien avant votre naissance… Comment mettre le doigt dessus tout(e) seul(e),
          sans accompagnement ? C'est exactement là que j'interviens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {blocages.map(({ icon: Icon, title, text }) => (
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

      <div className="border border-primary/30 bg-muted/30 rounded-sm p-8 md:p-10 text-center max-w-3xl mx-auto">
        <p className="font-body text-foreground/85 text-lg leading-relaxed mb-4">
          Le chamanisme est ma spécialité : grâce au{" "}
          <Link to="/chamanisme-neuchatel" className="text-primary underline underline-offset-4">
            test énergétique
          </Link>
          , je localise l'origine exacte du blocage — la date, l'émotion, l'événement — puis je
          procède à la <strong>réintégration des fragments d'âme</strong> et au{" "}
          <strong>recouvrement d'âme</strong> pour que vous retrouviez votre énergie complète.
        </p>
        <p className="font-body text-foreground/70 text-sm leading-relaxed mb-6">
          Pour commencer à explorer ce qui vous bloque, vous pouvez remplir le{" "}
          <Link to={CARNET_PATH} className="text-primary underline underline-offset-4">
            carnet de préparation
          </Link>{" "}
          — il ouvre déjà les tiroirs de l'inconscient.
        </p>
        <Link
          to="/offre-decouverte-gratuite"
          className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
        >
          Faire le point gratuitement <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default BlocagesSection;
