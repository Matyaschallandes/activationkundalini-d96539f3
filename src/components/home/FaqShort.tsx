import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Est-ce vraiment gratuit ?",
    a: "Oui. Cette première rencontre d'une heure est offerte, sans condition d'achat et sans engagement.",
  },
  {
    q: "Combien de temps dure la rencontre ?",
    a: "Environ une heure : le temps d'échanger, d'explorer ce qui se joue et de repartir avec une première clé de compréhension.",
  },
  {
    q: "Est-ce que c'est en visioconférence ?",
    a: "Oui, la découverte se déroule en visioconférence (Zoom ou WhatsApp vidéo). Le présentiel à Bevaix reste possible pour les séances qui suivent.",
  },
  {
    q: "Dois-je savoir exactement ce qui me bloque ?",
    a: "Non. Venez simplement avec ce que vous ressentez aujourd'hui : mettre en lumière les mécanismes fait partie de la rencontre.",
  },
  {
    q: "Est-ce que je suis obligé de continuer après la découverte ?",
    a: "Non. Cette première rencontre est sans engagement. Elle vous permet simplement de découvrir mon approche et de voir si elle vous correspond.",
  },
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
        Vos <span className="text-gradient-gold italic">questions</span>
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
