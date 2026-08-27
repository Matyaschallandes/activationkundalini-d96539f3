import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import consignesAsset from "@/assets/consignes-seance-en-ligne.jpg.asset.json";
import {
  MessageCircle,
  Mail,
  Calendar,
  BookOpen,
  Download,
  Sparkles,
  Home,
  Heart,
  Globe,
} from "lucide-react";

const PHONE_DISPLAY = "+41 76 244 55 52";
const WHATSAPP_URL = `https://wa.me/41762445552?text=${encodeURIComponent(
  "Bonjour Matyas, je souhaite profiter de l'offre découverte gratuite (visio, 1 heure)."
)}`;
const EMAIL = "matyas.challandes@gmail.com";
const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent("Offre découverte gratuite")}`;
const HUMAN_DESIGN_URL = "https://karmaequilego-humandesign.lovable.app";
const CARNET_PATH = "/carnet-de-preparation";
const KOALENDAR_URL = "https://koalendar.com/e/Activationkundalini";

const originesBlocage = [
  { icon: "🔮", title: "Vie antérieure", desc: "Une mémoire issue d'une incarnation passée qui continue d'influencer votre présent." },
  { icon: "🧬", title: "Transgénérationnel", desc: "Un schéma ou une blessure héritée de votre lignée familiale." },
  { icon: "👶", title: "Mémoire de naissance", desc: "Une empreinte émotionnelle liée à votre venue au monde." },
  { icon: "🤰", title: "In utero", desc: "Une trace énergétique vécue pendant la vie intra-utérine." },
  { icon: "💥", title: "Traumatique", desc: "Un choc ou un événement qui a marqué votre corps et votre énergie." },
  { icon: "🌫️", title: "Dissociation", desc: "Un mécanisme de protection qui a coupé le lien avec une partie de vous." },
];

const testEnergetiqueSteps = [
  {
    icon: "🤲",
    title: "Je me connecte à vous",
    desc: "Par ma main et mon aura, j'établis d'abord un lien énergétique avec vous. C'est depuis cette connexion que tout le travail commence.",
  },
  {
    icon: "❓",
    title: "Je questionne l'énergie",
    desc: "Je demande ce qui vous bloque : quelle date, quelle émotion, quelle origine ? Vie antérieure, transgénérationnel, mémoire de naissance, in utero, traumatisme, dissociation… les informations viennent.",
  },
  {
    icon: "🎯",
    title: "Je cible exactement le blocage",
    desc: "Grâce au test énergétique, j'identifie avec précision ce qui bloque chez vous — souvent une date précise et un événement bien défini.",
  },
  {
    icon: "🔄",
    title: "Nous revivons l'événement",
    desc: "Ensemble, nous revisitons ce moment pour comprendre son message et refaire circuler l'énergie là où elle était figée.",
  },
  {
    icon: "✨",
    title: "Les fragments d'âme reviennent",
    desc: "Quand l'événement est trop dur, des parties de nous-mêmes s'en vont. Nous les récupérons : les fragments reviennent dans le corps et l'énergie circule à nouveau librement.",
  },
];

const visio = [
  { icon: Home, title: "Depuis chez vous", desc: "Pas besoin de vous déplacer." },
  { icon: Heart, title: "Un espace pour vous", desc: "Installez-vous confortablement dans un endroit calme." },
  { icon: Globe, title: "Accessible à distance", desc: "La séance peut être réalisée où que vous soyez." },
];

const pourQui = [
  {
    title: "Vous avez l'impression de tourner en rond",
    desc: "Certains schémas ou situations reviennent régulièrement.",
  },
  {
    title: "Vous ressentez des blocages",
    desc: "Vous sentez qu'une partie de vous aimerait avancer mais quelque chose vous retient.",
  },
  {
    title: "Certaines émotions reviennent souvent",
    desc: "Vous aimeriez mieux comprendre ce qui se joue derrière elles.",
  },
  {
    title: "Vous souhaitez mieux vous connaître",
    desc: "Vous avez envie d'explorer vos mécanismes et votre fonctionnement intérieur.",
  },
];

const timeline = [
  { n: "1", title: "Je découvre", desc: "Je découvre l'offre gratuite." },
  { n: "2", title: "Je remplis", desc: "Je remplis mon carnet de préparation de 20 questions directement en ligne." },
  { n: "3", title: "Nous explorons", desc: "Nous faisons ensemble l'exploration énergétique en visioconférence." },
  { n: "4", title: "Je comprends", desc: "J'approfondis avec ma lecture d'âme Human Design." },
  { n: "5", title: "Je libère", desc: "La séance se termine par un mini-soin énergétique de 15 minutes." },
];

const scrollToContact = () => {
  document.getElementById("contact-offre")?.scrollIntoView({ behavior: "smooth" });
};

const OffreDecouverte = () => {
  return (
    <Layout>
      <Seo
        title="Offre découverte gratuite — Séance en visio de 1h | Karmaequilego"
        description="Une première exploration personnalisée gratuite d'environ 1 heure en visioconférence : carnet de préparation, exploration énergétique, lecture d'âme Human Design et mini-soin de 15 minutes."
        path="/offre-decouverte-gratuite"
        keywords="offre découverte gratuite, séance énergétique gratuite en ligne, exploration énergétique visio, lecture d'âme gratuite"
      />

      {/* 1. HERO */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] max-w-full rounded-full bg-primary/10 blur-[140px] animate-glow-pulse" />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <span className="inline-block bg-primary/10 border border-primary/30 text-primary font-body text-xs tracking-[0.25em] uppercase px-6 py-2 rounded-sm mb-8">
            ✨ Offre découverte gratuite
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground mb-6 animate-fade-in-up">
            Et si vous preniez enfin le temps de{" "}
            <span className="text-gradient-gold italic">comprendre ce qui se passe en vous</span> ?
          </h1>
          <div className="glow-line w-24 mx-auto mb-8" />
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Une première exploration personnalisée d'environ 1 heure, entièrement en visioconférence,
            pour mieux comprendre vos mécanismes, identifier vos principaux blocages et découvrir de
            premières clés pour avancer.
          </p>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-10">
            💜 100 % gratuit · en visio · sans engagement
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-10 py-5 rounded-sm hover:shadow-gold transition-all duration-500 w-full sm:w-auto"
          >
            Je veux profiter de l'offre gratuite
          </button>

          {/* Liens rapides */}
          <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
            <Link
              to={CARNET_PATH}
              className="flex items-center gap-3 border border-primary/30 hover:border-primary bg-card/60 backdrop-blur-sm rounded-sm p-4 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5 text-primary shrink-0" />
              <span className="font-body text-sm text-foreground">
                Carnet de préparation
                <span className="block text-xs text-muted-foreground">À remplir en ligne</span>
              </span>
            </Link>
            <Link
              to="/lecture-ame"
              className="flex items-center gap-3 border border-primary/30 hover:border-primary bg-card/60 backdrop-blur-sm rounded-sm p-4 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 text-primary shrink-0" />
              <span className="font-body text-sm text-foreground">
                Lecture d'âme
                <span className="block text-xs text-muted-foreground">Human Design</span>
              </span>
            </Link>
            <a
              href={KOALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-primary/30 hover:border-primary bg-card/60 backdrop-blur-sm rounded-sm p-4 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 text-primary shrink-0" />
              <span className="font-body text-sm text-foreground">
                Prendre rendez-vous
                <span className="block text-xs text-muted-foreground">Calendrier en ligne</span>
              </span>
            </a>
          </div>
        </div>
      </section>


      {/* 2. COMPRENDRE AVANT DE CHANGER */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-6">
            🔮 Comprendre avant de vouloir <span className="text-gradient-gold italic">changer</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-8" />
          <p className="font-body text-muted-foreground leading-relaxed mb-5">
            Parfois, nous savons que quelque chose bloque sans réellement comprendre pourquoi.
            Certaines émotions reviennent, certains schémas se répètent et certaines situations
            semblent toujours nous ramener au même endroit.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Cette séance est une invitation à explorer ensemble ce qui se joue derrière ces mécanismes
            et à mettre davantage de conscience sur ce qui demande à être compris.
          </p>
        </div>
      </section>

      {/* 3. CARNET DE PRÉPARATION */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] max-w-full rounded-full bg-primary/5 blur-[120px]" />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground text-center mb-6">
            📖 Votre carnet de préparation — <span className="text-gradient-gold italic">20 questions</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-10" />
          <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
            <p>
              Avant la séance, vous remplissez directement en ligne un carnet de préparation composé de
              20 questions.
            </p>
            <p>
              Ces petits carnets sont pensés comme des tiroirs à l'intérieur du corps et de la
              conscience. Chaque question agit comme une clé douce qui vient ouvrir un tiroir intérieur
              et permet progressivement de mettre en lumière ce qui demande à être compris.
            </p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 font-body text-sm text-foreground/85">
            {[
              "Mieux comprendre vos mécanismes",
              "Identifier là où « ça bloque »",
              "Repérer ce qui ne fonctionne plus",
              "Observer les schémas qui se répètent",
              "Mettre en lumière mémoires, émotions ou blessures",
              "Mettre de la conscience sur ce qui demande à évoluer",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 border border-border hover:border-primary/40 rounded-sm p-4 bg-card/60 backdrop-blur-sm transition-all duration-500"
              >
                <span className="text-primary">🔑</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="font-body text-muted-foreground leading-relaxed mt-8">
            À partir de vos réponses, le carnet propose déjà des premières clés de compréhension et de
            guérison.
          </p>
          <p className="font-heading text-xl md:text-2xl text-foreground italic text-center mt-8">
            Vous commencez déjà votre exploration avant même notre rencontre.
          </p>
          <div className="text-center mt-8">
            <Link
              to={CARNET_PATH}
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
            >
              <BookOpen className="w-4 h-4" />
              Remplir mon carnet de préparation
            </Link>
          </div>
        </div>
      </section>

      {/* 4. POURQUOI CE CARNET */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="border border-primary/30 rounded-sm bg-muted/30 p-8 md:p-10 text-center">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
              💜 Une préparation pour vous… <span className="text-gradient-gold italic">et pour moi</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Vos réponses vous permettent de commencer votre propre exploration avant la séance.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Elles me permettent également de disposer d'une fiche client personnalisée afin de mieux
              comprendre votre situation et de préparer le travail énergétique que nous allons réaliser
              ensemble.
            </p>
          </div>
        </div>
      </section>

      {/* 5. DÉTECTION DES BLOCAGES — TEST ÉNERGÉTIQUE */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground text-center mb-6">
            🔎 Le test énergétique — <span className="text-gradient-gold italic">cibler ce qui bloque</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-8" />
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Au cœur de la séance, je réalise un test énergétique avec ma main et mon aura. C'est un
            travail de précision : je me connecte à vous, puis je questionne l'énergie pour identifier
            exactement ce qui bloque — et d'où cela vient.
          </p>

          {/* Les étapes du test énergétique */}
          <div className="space-y-5 mb-16">
            {testEnergetiqueSteps.map((s) => (
              <div
                key={s.title}
                className="group border border-border hover:border-primary/40 rounded-sm p-6 md:p-8 bg-card/60 backdrop-blur-sm transition-all duration-500 hover:shadow-gold"
              >
                <div className="flex gap-4 md:gap-6 items-start">
                  <span className="text-3xl md:text-4xl shrink-0">{s.icon}</span>
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">{s.title}</h3>
                    <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Les origines possibles du blocage */}
          <div className="border-t border-border pt-12">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-3">
              Les <span className="text-gradient-gold italic">origines</span> que nous explorons
            </h3>
            <div className="glow-line w-20 mx-auto mb-10" />
            <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              Le test énergétique permet de remonter à la source du blocage. Voici les origines les plus
              fréquentes que je recherche :
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {originesBlocage.map((o) => (
                <div
                  key={o.title}
                  className="group text-center border border-border hover:border-primary/40 rounded-sm p-6 bg-card/60 backdrop-blur-sm transition-all duration-500 hover:shadow-gold"
                >
                  <div className="text-3xl mb-3">{o.icon}</div>
                  <h4 className="font-heading text-lg text-foreground mb-2">{o.title}</h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Message clé */}
          <div className="mt-16 border border-primary/30 rounded-sm bg-muted/30 p-8 md:p-10 text-center">
            <p className="font-heading text-xl md:text-2xl text-foreground italic leading-relaxed mb-4">
              « Ça marche à tous les coups. Les fragments reviennent dans le corps, l'énergie circule à
              nouveau librement — une fois le message compris et digéré. »
            </p>
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tout au long de la vie, nous perdons des fragments d'âme quand certaines expériences sont
              trop difficiles à vivre. La séance permet de les récupérer et de rétablir la libre
              circulation de votre énergie.
            </p>
          </div>
        </div>
      </section>

      {/* 6. LECTURE D'ÂME */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full rounded-full bg-primary/8 blur-[130px] animate-glow-pulse" />
        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-6">
            🌀 Votre lecture d'âme — <span className="text-gradient-gold italic">Human Design</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-8" />
          <p className="font-body text-muted-foreground leading-relaxed mb-10">
            Découvrez également une lecture d'âme Human Design de 60 pages pour approfondir la
            compréhension de votre fonctionnement, de vos potentiels, de vos mécanismes et de votre
            chemin personnel.
          </p>
          <a
            href={HUMAN_DESIGN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
          >
            <Sparkles className="w-4 h-4" />
            Découvrir ma lecture d'âme gratuite
          </a>
        </div>
      </section>

      {/* 7. MINI-SOIN */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-6">
            🌿 Pour terminer : un <span className="text-gradient-gold italic">mini-soin de 15 minutes</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-8" />
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            La séance se termine par un mini-soin énergétique de 15 minutes, destiné à accompagner la
            libération et l'harmonisation des énergies après l'exploration.
          </p>
          <p className="font-heading text-2xl md:text-3xl text-gradient-gold italic mb-3">
            15 minutes de soin énergétique
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Le soin est intégré à la séance et réalisé en visioconférence.
          </p>
        </div>
      </section>

      {/* 8. VISIO */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground text-center mb-6">
            💻 Une expérience 100 % en <span className="text-gradient-gold italic">visioconférence</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {visio.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="text-center border border-border hover:border-primary/40 rounded-sm p-8 bg-card/60 backdrop-blur-sm transition-all duration-500 hover:shadow-gold"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-2">{title}</h3>
                <p className="font-body text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSIGNES À TÉLÉCHARGER */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground text-center mb-6">
            📋 Consignes pour votre <span className="text-gradient-gold italic">séance en ligne</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-10" />
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Pour préparer au mieux votre soin énergétique en visioconférence, voici les consignes à
            suivre. Vous pouvez les consulter ici ou les télécharger.
          </p>
          <div className="rounded-sm overflow-hidden border border-primary/20 shadow-gold mb-8">
            <img
              src={consignesAsset.url}
              alt="Consignes pour votre séance de soin énergétique en ligne : matériel et connexion, préparation de votre espace, conditions importantes et déroulement pendant la séance"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <div className="text-center">
            <a
              href={consignesAsset.url}
              download="consignes-seance-en-ligne.jpg"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-3 rounded-sm transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Télécharger les consignes
            </a>
          </div>
        </div>
      </section>

      {/* 9. POUR QUI */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground text-center mb-6">
            ✨ Cette offre peut vous <span className="text-gradient-gold italic">correspondre si…</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-12" />
          <div className="grid sm:grid-cols-2 gap-6">
            {pourQui.map((c) => (
              <div
                key={c.title}
                className="border border-border hover:border-primary/40 rounded-sm p-7 bg-card/60 backdrop-blur-sm transition-all duration-500 hover:shadow-gold"
              >
                <h3 className="font-heading text-xl text-foreground mb-2">{c.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-muted-foreground/80 italic text-center max-w-2xl mx-auto mt-10">
            Vous n'avez aucune obligation de poursuivre ensuite. Cette rencontre est simplement une
            première découverte de mon approche.
          </p>
        </div>
      </section>

      {/* 12. TIMELINE */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground text-center mb-6">
            Votre <span className="text-gradient-gold italic">parcours</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-12" />
          <ol className="space-y-6">
            {timeline.map((t) => (
              <li key={t.n} className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-gold text-primary-foreground flex items-center justify-center font-heading font-semibold">
                  {t.n}
                </span>
                <div>
                  <h3 className="font-heading text-lg text-foreground uppercase tracking-wide">{t.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 10. RÉSUMÉ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="border border-primary/30 rounded-sm bg-muted/30 p-8 md:p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              💫 Votre <span className="text-gradient-gold italic">offre découverte</span>
            </h2>
            <p className="font-body text-muted-foreground mb-8">1 heure environ en visioconférence</p>
            <ul className="text-left max-w-md mx-auto space-y-3 font-body text-foreground/85 mb-10">
              <li>📖 Carnet de préparation de 20 questions</li>
              <li>🔎 Exploration énergétique personnalisée</li>
              <li className="pl-6 text-sm text-muted-foreground">📅 Année / événement</li>
              <li className="pl-6 text-sm text-muted-foreground">🌀 Chakra</li>
              <li className="pl-6 text-sm text-muted-foreground">💭 Émotion</li>
              <li className="pl-6 text-sm text-muted-foreground">💔 Blessure</li>
              <li>🧬 Lecture d'âme Human Design de 60 pages</li>
              <li>🌿 Mini-soin énergétique de 15 minutes</li>
            </ul>
            <p className="font-heading text-2xl md:text-4xl text-gradient-gold italic">
              100 % gratuit — sans engagement
            </p>
          </div>
        </div>
      </section>

      {/* 11. CTA FINAL */}
      <section
        id="contact-offre"
        className="relative py-20 md:py-32 overflow-hidden scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full rounded-full bg-primary/8 blur-[120px] animate-glow-pulse" />
        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-6">
            🌟 Envie de faire le <span className="text-gradient-gold italic">premier pas</span> ?
          </h2>
          <div className="glow-line w-24 mx-auto mb-8" />
          <p className="font-body text-muted-foreground leading-relaxed mb-10">
            Vous pouvez simplement me contacter et nous verrons ensemble si cette expérience vous
            correspond.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-10 py-5 rounded-sm hover:shadow-gold transition-all duration-500 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Me contacter sur WhatsApp
          </a>
          <p className="font-body text-xs text-muted-foreground mt-3 mb-8">
            Option privilégiée · {PHONE_DISPLAY}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={EMAIL_URL}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Me contacter par email
            </a>
            <Link
              to="/rendez-vous"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground hover:border-primary hover:text-primary font-body font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-sm transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Réserver en ligne
            </Link>
          </div>

          {/* Réservation directe — système existant (Koalendar) */}
          <div className="mt-14 text-left">
            <h3 className="font-heading text-2xl text-foreground mb-4 text-center">
              Choisir directement une plage horaire
            </h3>
            <div className="rounded-sm border border-border overflow-hidden bg-card">
              <iframe
                src={KOALENDAR_URL}
                width="100%"
                height="700"
                frameBorder="0"
                title="Calendrier de réservation — offre découverte gratuite"
                className="w-full"
              />
            </div>
            <p className="text-center mt-4">
              <a
                href={KOALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-body text-sm hover:underline"
              >
                Ouvrir le calendrier dans un nouvel onglet ↗
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OffreDecouverte;
