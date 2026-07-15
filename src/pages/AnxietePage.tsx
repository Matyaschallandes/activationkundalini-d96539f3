import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Accompagnement énergétique en cas d'anxiété et d'angoisses",
  "serviceType": "Accompagnement bien-être & harmonisation énergétique",
  "provider": { "@id": "https://www.activationkundalini.ch/#organization" },
  "areaServed": "Suisse romande",
  "url": "https://www.activationkundalini.ch/apaiser-anxiete-angoisses",
};

const AnxietePage = () => (
  <Layout>
    <Seo
      title="Apaiser Anxiété & Angoisses — Soins Énergétiques Suisse Romande"
      description="Accompagnement énergétique pour apaiser l'anxiété, les angoisses et retrouver un calme intérieur durable en Suisse romande. Séances à Bevaix (NE) ou à distance. En complément d'un suivi thérapeutique."
      path="/apaiser-anxiete-angoisses"
      keywords="apaiser anxiété Suisse romande, angoisses accompagnement Neuchâtel, calmer anxiété naturellement, crise d'angoisse soin énergétique, retrouver calme intérieur"
      jsonLd={jsonLd}
    />

    <header className="pt-24 pb-10 md:pt-32 md:pb-14 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
          Ancrage · Sécurité intérieure · Souffle
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-6">
          Apaiser <span className="text-gradient-gold italic">anxiété & angoisses</span> — retrouver un calme intérieur
        </h1>
        <div className="glow-line w-20 mx-auto mb-8" />
        <p className="font-body text-foreground/75 leading-relaxed max-w-2xl mx-auto">
          Un accompagnement énergétique doux pour desserrer la boule au ventre, apaiser le mental et retrouver un ancrage stable — en complément d'un suivi thérapeutique.
        </p>
      </div>
    </header>

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-light mb-6 text-foreground">
          Quand le corps est constamment en <span className="text-gradient-gold italic">alerte</span>
        </h2>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          L'anxiété n'est pas « dans la tête ». C'est un état du système nerveux, souvent installé de longue date, qui maintient le corps en tension permanente : respiration courte, sommeil léger, cœur qui bat vite, ruminations, sensation d'insécurité diffuse.
        </p>

        <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">Ce qu'on rencontre souvent</h3>
        <ul className="grid md:grid-cols-2 gap-2 mb-8">
          {[
            "Boule au ventre ou dans la gorge",
            "Ruminations qui tournent en boucle",
            "Réveils nocturnes vers 3-4h",
            "Crises d'angoisse ponctuelles",
            "Peur de « perdre le contrôle »",
            "Hypersensibilité aux bruits et à l'entourage",
          ].map((s) => (
            <li key={s} className="flex items-start gap-2">
              <span className="text-primary text-sm mt-1">✦</span>
              <span className="font-body text-sm text-foreground/80">{s}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-heading text-3xl md:text-4xl font-light mt-14 mb-6 text-foreground">
          L'approche énergétique
        </h2>

        <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">Ancrer avant tout</h3>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          L'anxiété est presque toujours un manque d'ancrage. On travaille en priorité le chakra racine et la respiration pour ramener le corps « dans » le corps.
        </p>

        <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">Libérer la charge accumulée</h3>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Peurs anciennes, mémoires du corps, transmissions familiales : le soin énergétique aide à identifier et alléger ces charges sans devoir tout revivre.
        </p>

        <h3 className="font-heading text-2xl font-light mt-8 mb-3 text-foreground">Reconstruire un socle de sécurité intérieure</h3>
        <p className="font-body text-foreground/75 leading-relaxed mb-4">
          Séance après séance, un nouveau rapport à soi s'installe — plus calme, plus confiant, plus solide.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <Link to="/rendez-vous" className="inline-flex items-center px-8 py-4 border border-primary/40 rounded-full font-body text-sm tracking-widest uppercase text-primary hover:bg-primary/10 transition">
            Prendre rendez-vous
          </Link>
          <Link to="/blog/anxiete-retrouver-son-calme-activation-kundalini" className="inline-flex items-center px-8 py-4 border border-border rounded-full font-body text-sm tracking-widest uppercase text-foreground hover:bg-card/50 transition">
            Article : retrouver son calme
          </Link>
        </div>

        <p className="font-body text-foreground/50 text-xs italic mt-16">
          Cet accompagnement énergétique ne remplace pas un suivi psychologique, psychiatrique ou médical. En cas de crise, contactez la Main Tendue (143) ou votre médecin.
        </p>
      </div>
    </section>
  </Layout>
);

export default AnxietePage;
