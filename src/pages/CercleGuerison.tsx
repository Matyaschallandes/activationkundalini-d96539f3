import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { MessageCircle, Users, Sparkles, Flame, Globe, Bell, Bed, Wind, Wand2, Heart } from "lucide-react";


const phoneNumber = "41762445552";
const whatsappMessage = encodeURIComponent(
  "Bonjour Matyas, je souhaite participer au prochain Cercle de Guérison."
);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
const groupUrl = "https://chat.whatsapp.com/LR5eQ8bvJIx4oqQ0cxyvZj";

const benefits = [
  "Libérer les blocages émotionnels et énergétiques",
  "Retrouver un sentiment de paix intérieure",
  "Réactiver votre énergie vitale",
  "Renforcer votre connexion à vous-même",
  "Développer votre ancrage et votre présence",
  "Accueillir des prises de conscience profondes",
  "Vous sentir soutenu dans un cadre bienveillant",
];

const steps = [
  {
    icon: Flame,
    title: "1. Ouverture, protection et sécurisation du cercle",
    text: "Temps d'accueil et d'ancrage, rituel de purification énergétique, invocation de protection et prière collective pour ouvrir le cercle dans les meilleures conditions. Chacun se sent accueilli, soutenu et en sécurité.",
  },
  {
    icon: Globe,
    title: "2. Méditation d'ancrage",
    text: "Une méditation guidée pour calmer le mental, revenir dans le corps, renforcer l'ancrage à la Terre et favoriser la stabilité intérieure. Étape essentielle pour accueillir les libérations avec douceur.",
  },
  {
    icon: Bell,
    title: "3. Harmonisation vibratoire aux bols chantants",
    text: "Chantal vous accompagne aux bols chantants. Les vibrations sonores favorisent la détente profonde, l'apaisement du système nerveux, l'harmonisation énergétique, le relâchement émotionnel et l'ouverture du cœur.",
  },
  {
    icon: Bed,
    title: "4. Installation et confort",
    text: "Les participants s'allongent confortablement sur un tapis de yoga avec coussin et couverture, dans un maximum de confort, de sécurité et de détente.",
  },
  {
    icon: Wind,
    title: "5. Respiration alchimique & ouverture des mémoires",
    text: "20 à 30 minutes de respiration consciente active par la bouche pour libérer les premiers blocages, faire circuler l'énergie, préparer le système nerveux et ouvrir progressivement les mémoires émotionnelles. Certaines émotions peuvent remonter — cela fait partie du processus de libération.",
  },
  {
    icon: Wand2,
    title: "6. Nettoyage énergétique profond",
    text: "Un travail énergétique plus profond nettoie et libère les charges émotionnelles et stagnations. Sensation de légèreté, apaisement, meilleure circulation, ouverture du cœur, reconnexion à soi.",
  },
  {
    icon: Sparkles,
    title: "7. Activation progressive de la Kundalini",
    text: "Environ 30 minutes dédiées à l'activation douce et progressive de l'énergie vitale, dans le respect du rythme naturel de chacun. Vibrations, mouvements spontanés, chaleur, libérations émotionnelles, états de bien-être et expansion intérieure peuvent être ressentis. Chaque expérience est unique.",
  },
];

const afterEffects = [
  "Plus de légèreté",
  "Un apaisement profond",
  "Une meilleure qualité de sommeil",
  "Une sensation d'alignement intérieur",
  "Une plus grande clarté mentale",
  "Une reconnexion à votre énergie vitale",
  "Un sentiment de paix et de présence",
];

const CercleGuerison = () => {
  return (
    <Layout>
      <Seo
        title="Cercle de Guérison Collectif — Respiration & Kundalini | Bevaix, Neuchâtel"
        description="Cercle de guérison mensuel à Bevaix (Neuchâtel) : respiration alchimique, bols chantants et activation Kundalini animés par Matyas et Chantal. Participation au chapeau."
        path="/cercle-de-guerison"
        keywords="cercle de guérison Neuchâtel, respiration alchimique Suisse, bols chantants Bevaix"
      />

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
            Cercle Collectif
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-center font-light mb-6 text-foreground">
            Cercle de <span className="text-gradient-gold italic">Guérison</span> & Activation de l'Énergie Vitale
          </h1>
          <div className="glow-line w-24 mx-auto mb-8" />
          <p className="font-body text-lg text-muted-foreground text-center italic mb-12">
            Un espace de transformation, de libération et de reconnexion à soi
          </p>

          {/* Intro */}
          <div className="bg-gradient-card border border-border rounded-sm p-8 md:p-10 mb-12 space-y-4">
            <p className="font-body text-muted-foreground leading-relaxed">
              Avec <span className="text-foreground font-medium">Chantal</span> et moi-même, nous vous accueillons dans un cercle énergétique profond, bienveillant et sécurisé, conçu pour vous accompagner dans un processus de guérison intérieure, de libération émotionnelle et de reconnexion à votre énergie vitale.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              À travers la respiration consciente, le son, l'ancrage et le travail énergétique, nous créons un espace où le corps, le cœur et l'esprit peuvent relâcher ce qui n'a plus lieu d'être et retrouver davantage d'harmonie.
            </p>
          </div>

          {/* Pourquoi */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6 text-center">
              Pourquoi participer à un cercle de guérison ?
            </h2>
            <p className="font-body text-muted-foreground text-center mb-6">
              Nous portons tous des émotions, des blessures, des tensions ou des mémoires qui peuvent parfois limiter notre épanouissement. Le cercle vous offre un espace pour :
            </p>
            <ul className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 font-body text-muted-foreground">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Déroulement */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-8 text-center">
              Déroulement du Cercle
            </h2>
            <div className="space-y-6">
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="bg-gradient-card border border-border rounded-sm p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                      <h3 className="font-heading text-lg md:text-xl text-foreground">{s.title}</h3>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Canal énergétique */}
          <div className="bg-gradient-card border border-border rounded-sm p-8 md:p-10 mb-12">
            <h2 className="font-heading text-2xl text-foreground mb-4 text-center">
              Canal énergétique et maintien du cadre
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-center">
              Tout au long du cercle, un canal énergétique est maintenu au centre de l'espace afin d'accompagner les libérations et soutenir l'harmonisation énergétique du groupe. Une attention constante est portée à la stabilité énergétique du cercle, au respect du rythme de chacun, à la sécurité émotionnelle et au bon déroulement de l'expérience.
            </p>
          </div>

          {/* Après */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6 text-center">
              Ce que vous pourriez ressentir après le cercle
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {afterEffects.map((b) => (
                <li key={b} className="flex gap-3 font-body text-muted-foreground">
                  <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm text-muted-foreground text-center italic mt-6">
              Chaque intégration est unique et se poursuit parfois plusieurs jours après le cercle.
            </p>
          </div>

          {/* Tarif */}
          <div className="bg-gradient-card border border-border rounded-sm p-8 md:p-10 mb-12 text-center">
            <h2 className="font-heading text-2xl text-foreground mb-4">Participation libre et consciente</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-2">
              Le cercle fonctionne <span className="text-foreground font-medium">au chapeau, prix libre</span>. Chacun contribue selon ses possibilités, son ressenti et ce qui lui semble juste.
            </p>
            <p className="font-body text-sm text-muted-foreground italic">
              Contribution recommandée : <span className="text-foreground font-medium">50 CHF</span>
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-card border border-border rounded-sm p-8 md:p-10 text-center">
            <h2 className="font-heading text-2xl text-foreground mb-4">Informations & inscriptions</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Pour participer au cercle, il suffit de rejoindre le groupe WhatsApp où les dates sont régulièrement transmises, puis de m'envoyer un message au <span className="text-foreground font-medium">+41 76 244 55 52</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={groupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-3 rounded-sm hover:shadow-gold transition-all duration-500"
              >
                <Users className="w-4 h-4" />
                Rejoindre le groupe WhatsApp
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary font-body font-semibold tracking-wider uppercase text-sm px-8 py-3 rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                <MessageCircle className="w-4 h-4" />
                M'envoyer un message
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CercleGuerison;
