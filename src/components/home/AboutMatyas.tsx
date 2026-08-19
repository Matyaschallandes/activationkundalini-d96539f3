import { Link } from "react-router-dom";
import matyasPhoto from "@/assets/matyas-photo.jpg";

const points = [
  "Une écoute réelle, sans jugement",
  "De la bienveillance, à votre rythme",
  "Une approche personnalisée, jamais standardisée",
  "L'exploration de vos mécanismes et de vos blocages",
  "Des outils énergétiques et de compréhension",
];

const AboutMatyas = () => (
  <section id="a-propos" className="py-20 md:py-28 bg-muted/20">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-center">
        <div className="flex justify-center">
          <img
            src={matyasPhoto}
            alt="Matyas Challandes, accompagnant en soins énergétiques"
            className="w-44 h-44 md:w-64 md:h-64 object-cover rounded-full border-2 border-primary/30"
            loading="lazy"
          />
        </div>

        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-6 text-foreground leading-snug">
            Je ne cherche pas à vous faire entrer dans une{" "}
            <span className="text-gradient-gold italic">méthode.</span>
          </h2>
          <p className="font-body text-foreground/85 leading-relaxed mb-4">
            Je m'adapte à vous, à votre histoire et à ce que vous traversez aujourd'hui. Chaque
            accompagnement se construit à partir de ce que vous vivez, pas d'un protocole
            préétabli.
          </p>
          <ul className="space-y-2 mb-8">
            {points.map((p) => (
              <li key={p} className="flex gap-3 font-body text-sm text-foreground/80">
                <span className="text-primary">✦</span>
                {p}
              </li>
            ))}
          </ul>
          <Link
            to="/a-propos"
            className="font-body text-sm tracking-wider uppercase text-primary hover:text-foreground transition-colors"
          >
            En savoir plus sur mon parcours →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMatyas;
