import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "En quoi consiste l'appel découverte gratuit de 30 minutes ?",
    a: "C'est un entretien offert pour découvrir ma technique, ressentir concrètement l'énergie grâce à un mini-soin gratuit, et identifier ensemble l'origine d'un blocage grâce au test énergétique. Sans engagement.",
  },
  {
    q: "Puis-je bénéficier d'un accompagnement en cas de burn-out ou de fatigue chronique ?",
    a: "Oui. J'accompagne régulièrement des personnes traversant un burn-out, une dépression ou une fatigue chronique. Mon approche vise à soutenir le retour de l'énergie vitale, l'apaisement du système nerveux et la reconnexion à soi. Elle ne remplace pas un suivi médical.",
  },
  {
    q: "Qu'est-ce que l'activation Kundalini ?",
    a: "C'est une approche énergétique qui vise à libérer l'énergie vitale endormie à la base de la colonne vertébrale, pour favoriser la clarté intérieure, l'ancrage et le bien-être global.",
  },
  {
    q: "Les séances peuvent-elles se faire à distance ?",
    a: "Oui. Je propose des séances en présentiel à Bevaix (Neuchâtel) ou à distance dans toute la Suisse romande via Zoom, WhatsApp vidéo ou sur photo.",
  },
  {
    q: "Quels sont les tarifs ?",
    a: "Toutes les séances sont proposées en prix libre : chacun contribue selon ses moyens et sa conscience. Des montants indicatifs sont donnés à titre de repère.",
  },
  {
    q: "Cela remplace-t-il un suivi médical ou psychologique ?",
    a: "Non. Il s'agit d'un accompagnement énergétique et de bien-être, complémentaire à un suivi médical ou thérapeutique existant.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const FaqSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          Questions fréquentes
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-center font-light mb-4 text-foreground">
          Vos <span className="text-gradient-gold italic">questions</span>
        </h2>
        <div className="glow-line w-20 mx-auto mb-12" />

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
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
};

export default FaqSection;
