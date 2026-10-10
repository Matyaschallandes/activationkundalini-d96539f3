import { ShieldAlert } from "lucide-react";

const Precautions = ({ distress = false }: { distress?: boolean }) => (
  <section className="py-10">
    <div className="container mx-auto px-6 max-w-3xl">
      <div className="rounded-2xl border border-primary/30 bg-card/60 p-6">
        <h2 className="font-heading text-2xl text-foreground mb-3 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-primary" /> Pour qui, et précautions
        </h2>
        <p className="font-body text-sm text-foreground/80 leading-relaxed mb-2">
          Les séances s'adressent aux adultes qui souhaitent être accompagnés face au stress, à la fatigue ou aux blocages émotionnels, en complément d'un suivi médical si besoin.
        </p>
        <p className="font-body text-sm text-foreground/80 leading-relaxed">
          L'activation Kundalini n'est pas recommandée en cas de grossesse, d'épilepsie, de troubles bipolaires ou psychotiques, ou de prise de psychotropes puissants. En cas de doute, parles-en à ton médecin avant de réserver.
        </p>
        {distress && (
          <p className="font-body text-sm text-foreground font-medium mt-3">
            Si tu traverses une détresse importante, contacte ton médecin ou la ligne d'aide{" "}
            <a href="tel:143" className="text-primary underline">143 (La Main Tendue)</a>.
          </p>
        )}
      </div>
    </div>
  </section>
);

export default Precautions;
