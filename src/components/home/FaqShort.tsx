import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Combien de temps dure une séance ?", a: "Compte environ 1h30 à 2h : un temps d'échange, l'exploration des blocages, puis le soin énergétique et/ou l'activation Kundalini. La première heure découverte est offerte." },
  { q: "Comment fonctionne le prix libre ?", a: "Tu donnes ce qui te semble juste selon tes moyens. Des prix de référence sont indiqués sur la page Offres, mais l'argent ne doit jamais être un obstacle." },
  { q: "En présentiel ou à distance ?", a: "Les deux. Je te reçois au cabinet à Bevaix (Neuchâtel) ou à distance, en visioconférence ou par téléphone, partout en Suisse romande." },
  { q: "Combien de séances faut-il ?", a: "Souvent 1 à 3 séances suffisent pour sentir un changement, mais chaque personne est différente. On en parle ensemble, sans engagement." },
  { q: "Qu'est-ce que ça ne remplace pas ?", a: "Les séances sont un accompagnement complémentaire. Elles ne remplacent pas un avis, un diagnostic ou un suivi médical ou psychologique, ni un traitement en cours." },
  { q: "Y a-t-il des contre-indications ?", a: "L'activation Kundalini n'est pas recommandée en cas de grossesse, d'épilepsie, de troubles bipolaires ou psychotiques, ou de prise de psychotropes puissants. En cas de doute, parles-en à ton médecin avant de réserver." },
];

export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const FaqShort = () => (
  <section id="faq" className="py-20 md:py-28 bg-muted/20">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-3 text-foreground">
        Tes <span className="text-gradient-gold italic">questions</span>
      </h2>
      <div className="glow-line w-20 mx-auto mb-10" />

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="font-heading text-left text-lg text-foreground">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-foreground/80 leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqShort;
