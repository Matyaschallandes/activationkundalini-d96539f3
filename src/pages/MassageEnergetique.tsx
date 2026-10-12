import { Link } from "react-router-dom";
import SimplePage from "@/components/SimplePage";
import Precautions from "@/components/Precautions";
import { RdvButton } from "@/components/home/HomeEssentials";

const MassageEnergetique = () => (
  <SimplePage
    title="Massage énergétique & libération somatique | Bevaix"
    description="Massage énergétique et libération somatique à Bevaix (Neuchâtel) : le toucher et l'écoute du corps pour relâcher les tensions. Prix libre."
    path="/massage-energetique-liberation-somatique"
    h1="Massage énergétique et libération somatique"
    crumb="Massage énergétique"
  >
    <p>
      Le corps garde en mémoire ce que l'on n'a pas pu exprimer. Le massage énergétique associe un toucher lent et attentif à l'écoute de ton ressenti, pour aider les tensions à se relâcher et l'énergie à circuler à nouveau.
    </p>
    <h2>La libération somatique</h2>
    <p>
      Pendant la séance, certaines zones du corps peuvent réagir : chaleur, tremblements, émotions, envie de bouger ou de respirer plus fort. Je t'accompagne pour laisser ces mouvements se faire, en sécurité, sans forcer. C'est le corps qui guide.
    </p>
    <h2>Comment se passe la séance</h2>
    <ul>
      <li>Un temps d'échange sur ce que tu vis et ce que tu ressens dans ton corps</li>
      <li>Le massage énergétique, habillé(e) ou selon ce qui te convient</li>
      <li>Un temps calme pour intégrer, puis quelques mots sur ce qui s'est passé</li>
    </ul>
    <p>
      Durée : environ 1h30. Au cabinet à <Link to="/acces-cabinet-bevaix">Bevaix</Link>. Prix libre. Ce massage peut aussi précéder une <Link to="/la-kundalini">activation Kundalini</Link> ou un <Link to="/chamanisme-neuchatel">soin chamanique</Link>.
    </p>
    <p>
      Les séances sont un accompagnement de bien-être complémentaire : elles ne remplacent pas un suivi médical, psychologique ou de physiothérapie.
    </p>
    <div className="pt-4"><RdvButton /></div>
    <Precautions />
  </SimplePage>
);

export default MassageEnergetique;
