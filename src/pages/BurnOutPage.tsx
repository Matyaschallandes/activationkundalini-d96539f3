import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Accompagnement énergétique en cas de burn-out",
    "serviceType": "Accompagnement bien-être & harmonisation énergétique",
    "provider": { "@id": "https://www.activationkundalini.ch/#organization" },
    "areaServed": "Suisse romande",
    "url": "https://www.activationkundalini.ch/accompagnement-burn-out-suisse-romande",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Un soin énergétique peut-il aider en cas de burn-out ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Les soins énergétiques ne remplacent pas un suivi médical ou psychologique, mais viennent en complément. Ils aident à retrouver un ancrage, à apaiser le système nerveux, à libérer les tensions émotionnelles accumulées et à reconstruire un socle intérieur stable." }
      },
      {
        "@type": "Question",
        "name": "Combien de séances sont nécessaires ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le nombre de séances varie selon chaque personne. Un cycle de 3 à 5 séances espacées de 2 à 3 semaines permet en général de sentir une transformation durable." }
      },
      {
        "@type": "Question",
        "name": "Les séances sont-elles possibles à distance ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Oui. Les séances à distance sont particulièrement adaptées lorsque l'épuisement rend les déplacements difficiles. Elles se déroulent par téléphone ou visioconférence." }
      }
    ]
  }
];

const BurnOutPage = () => (
  <Layout>
    <Seo
      title="Accompagnement Burn-Out Suisse Romande — Soins Énergétiques & Kundalini"
      description="Accompagnement énergétique en cas de burn-out en Suisse romande : soins, respiration consciente, activation Kundalini. Approche complémentaire à un suivi médical. Séances à Bevaix (NE) ou à distance."
      path="/accompagnement-burn-out-suisse-romande"
      keywords="accompagnement burn out Suisse romande, sortir du burn out Neuchâtel, coach burn out Vaud, burn out soins énergétiques, épuisement professionnel accompagnement, retrouver énergie après burn out"
      jsonLd={jsonLd}
    />

    <header className="pt-24 pb-10 md:pt-32 md:pb-14 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
          Épuisement · Charge mentale · Reconstruction
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-6">
          Accompagnement <span className="text-gradient-gold italic">burn-out</span> en Suisse romande
        </h1>
        <div className="glow-line w-20 mx-auto mb-8" />
        <p className="font-body text-foreground/75 leading-relaxed max-w-2xl mx-auto">
          Un accompagnement énergétique bienveillant pour retrouver stabilité, énergie et clarté après un épuisement professionnel ou personnel. En complément d'un suivi médical.
        </p>
      </div>
    </header>

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-4xl">

        <h2 className="font-heading text-3xl md:text-4xl font-light mb-6 text-foreground">
          Quand le corps et l'esprit disent <span className="text-gradient-gold italic">stop</span>
        </h2>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Le burn-out n'apparaît pas du jour au lendemain. Il s'installe lentement, jusqu'à ce que le corps refuse d'avancer. Fatigue qui ne passe pas, perte de sens, hypersensibilité aux stimulations, boule au ventre, sommeil qui ne répare plus, sentiment de vide.
        </p>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Sortir du burn-out demande du temps et un accompagnement à plusieurs niveaux : médical, psychologique et — souvent oublié — énergétique. C'est cette dernière dimension que je propose, en complément de ton suivi habituel.
        </p>

        <h3 className="font-heading text-2xl font-light mt-10 mb-4 text-foreground">Signaux souvent rencontrés</h3>
        <ul className="grid md:grid-cols-2 gap-2 mb-8">
          {[
            "Fatigue persistante malgré le repos",
            "Difficulté à se concentrer, brouillard mental",
            "Irritabilité, pleurs faciles",
            "Sentiment d'être déconnecté·e de soi",
            "Perte de motivation et de sens",
            "Angoisses matinales, boule au ventre",
            "Sommeil non-réparateur",
            "Corps « en alarme » en permanence",
          ].map((s) => (
            <li key={s} className="flex items-start gap-2">
              <span className="text-primary text-sm mt-1">✦</span>
              <span className="font-body text-sm text-foreground/80">{s}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-heading text-3xl md:text-4xl font-light mt-14 mb-6 text-foreground">
          Ce que peut apporter un <span className="text-gradient-gold italic">accompagnement énergétique</span>
        </h2>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          L'objectif n'est pas de « soigner » — c'est le rôle du médecin — mais de créer les conditions intérieures pour que la personne retrouve son ancrage et son énergie propre. Les séances agissent sur trois plans :
        </p>

        <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">1. Apaiser le système nerveux</h3>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Le burn-out laisse le corps en mode « alerte ». La respiration consciente, le magnétisme et l'harmonisation des chakras permettent au système nerveux de revenir progressivement dans un état parasympathique — celui de la récupération.
        </p>

        <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">2. Libérer la charge émotionnelle</h3>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Les émotions retenues (colère, tristesse, culpabilité) pèsent sur le corps énergétique. Les séances aident à les identifier et à les libérer en douceur, sans avoir à tout revivre ni à tout expliquer avec le mental.
        </p>

        <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">3. Retrouver son axe et son sens</h3>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Un burn-out est presque toujours le signe qu'on a longtemps vécu à côté de soi. La lecture d'âme et l'activation Kundalini aident à reconnecter avec ce qui a du sens, avec ses vrais besoins et ses vraies limites.
        </p>

        <h2 className="font-heading text-3xl md:text-4xl font-light mt-14 mb-6 text-foreground">
          Un cycle progressif, à ton rythme
        </h2>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Généralement : 3 à 5 séances espacées de 2 à 3 semaines. En présentiel à Bevaix (Neuchâtel) ou à distance partout en Suisse romande. Toutes les séances sont en <strong>prix libre</strong>. Toujours en complément — jamais en remplacement — d'un suivi médical.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <Link to="/rendez-vous" className="inline-flex items-center px-8 py-4 border border-primary/40 rounded-full font-body text-sm tracking-widest uppercase text-primary hover:bg-primary/10 transition">
            Prendre rendez-vous
          </Link>
          <Link to="/offres" className="inline-flex items-center px-8 py-4 border border-border rounded-full font-body text-sm tracking-widest uppercase text-foreground hover:bg-card/50 transition">
            Voir toutes les offres
          </Link>
        </div>

        <p className="font-body text-foreground/50 text-xs italic mt-16">
          Cet accompagnement énergétique ne remplace pas un traitement médical, psychiatrique ou psychologique. Il vient en complément d'un suivi adapté par un professionnel de santé.
        </p>
      </div>
    </section>
  </Layout>
);

export default BurnOutPage;
