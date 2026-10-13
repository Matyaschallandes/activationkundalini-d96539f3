import { Link } from "react-router-dom";
import SimplePage from "@/components/SimplePage";
import Precautions from "@/components/Precautions";
import { RdvButton } from "@/components/home/HomeEssentials";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const MassageEnergetique = () => (
  <SimplePage
    title="Massage énergétique & libération somatique | Bevaix"
    description="Massage énergétique et libération somatique à Bevaix (Neuchâtel) : le toucher et l'écoute du corps pour relâcher les tensions. Prix libre."
    path="/massage-energetique-liberation-somatique"
    h1="Massage énergétique et libération somatique"
    crumb="Massage énergétique"
  >
    <h2>Libérer les tensions, retrouver de l'espace dans son corps</h2>
    <p>
      Le massage énergétique et la libération somatique sont une approche corporelle personnalisée qui associe différentes techniques de toucher et de pression à un accompagnement énergétique.
    </p>
    <h2>Un travail précis, à l'écoute du corps</h2>
    <p>
      Je travaille sur des points précis du corps : points trigger, points neurovasculaires, points neurolymphatiques, les fascias et les méridiens, ainsi que sur certaines zones comme le psoas. Le massage peut concerner la tête, le crâne, les pieds, le cou, les épaules, le ventre, le hara, les bras et les jambes.
    </p>
    <p>
      Cette approche peut être combinée à mes <Link to="/chamanisme-neuchatel">soins énergétiques chamaniques</Link> et à l'<Link to="/la-kundalini">activation Kundalini</Link> afin d'accompagner un relâchement corporel plus global.
    </p>
    <h2>Un espace pour accueillir ce qui se présente</h2>
    <p>
      L'objectif est de favoriser la détente, d'aider le corps à relâcher certaines tensions et d'offrir un espace pour accueillir les sensations et les émotions qui peuvent émerger.
    </p>
    <p>
      Chaque séance est adaptée à ton ressenti, à tes besoins et à tes limites. Nous avançons à ton rythme, dans un cadre respectueux et bienveillant.
    </p>
    <p>
      Au cabinet à <Link to="/acces-cabinet-bevaix">Bevaix (Neuchâtel)</Link>. Prix libre.
    </p>
    <p>
      Les séances sont un accompagnement de bien-être complémentaire : elles ne remplacent pas un suivi médical, psychologique ou de physiothérapie.
    </p>
    <h2>Envie de découvrir cette approche ?</h2>
    <p>Contacte-moi pour échanger sur tes besoins et convenir d'une séance.</p>
    <p>Matyas Challandes — Karmaequilego<br />Téléphone et WhatsApp : <a href="tel:+41762445552">+41 76 244 55 52</a></p>
    <div className="flex flex-wrap gap-3 pt-4">
      <Button asChild variant="outline"><a href="tel:+41762445552"><Phone />Contacter Matyas</a></Button>
      <Button asChild variant="outline"><a href="https://wa.me/41762445552" target="_blank" rel="noopener noreferrer"><MessageCircle />WhatsApp</a></Button>
      <RdvButton />
    </div>
    <Precautions />
  </SimplePage>
);

export default MassageEnergetique;
