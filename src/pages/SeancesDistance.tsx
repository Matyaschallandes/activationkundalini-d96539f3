import { Link } from "react-router-dom";
import SimplePage from "@/components/SimplePage";
import Precautions from "@/components/Precautions";
import { RdvButton } from "@/components/home/HomeEssentials";
import { CARNET_PATH } from "@/lib/links";

const cantons = [
  ["Vaud", "/soins-energetiques-canton-vaud"],
  ["Genève", "/soins-energetiques-canton-geneve"],
  ["Fribourg", "/soins-energetiques-canton-fribourg"],
  ["Valais", "/soins-energetiques-canton-valais"],
  ["Jura", "/soins-energetiques-canton-jura"],
  ["Jura bernois & Bienne", "/soins-energetiques-jura-bernois"],
  ["Neuchâtel", "/activation-kundalini-neuchatel"],
];

const SeancesDistance = () => (
  <SimplePage
    title="Séances à distance en Suisse romande | Karmaequilego"
    description="Activation Kundalini et soin chamanique à distance, en visio ou par téléphone, partout en Suisse romande. Prix libre, 1re heure offerte."
    path="/seances-a-distance-suisse-romande"
    h1="Séances à distance en Suisse romande"
    crumb="Séances à distance"
    jsonLd={[{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Séances énergétiques à distance",
      serviceType: "Activation Kundalini et soin énergétique chamanique à distance",
      provider: { "@id": "https://www.activationkundalini.ch/#organization" },
      areaServed: ["Neuchâtel", "Vaud", "Fribourg", "Genève", "Valais", "Jura", "Berne francophone"],
    }]}
  >
    <p>
      Tu habites loin de Bevaix, tu as un emploi du temps chargé ou tu te sens simplement plus à l'aise chez toi ? Les séances à distance te permettent de vivre le même accompagnement qu'au cabinet : un temps d'écoute, l'exploration de ce qui bloque, puis un soin énergétique chamanique et/ou une activation Kundalini. Je travaille ainsi chaque semaine avec des personnes de toute la Suisse romande.
    </p>

    <h2>Comment se déroule une séance à distance</h2>
    <p>
      On se retrouve en visioconférence (Zoom ou WhatsApp vidéo) ou, si tu préfères, par téléphone. La séance commence par un échange : tu me racontes ce que tu traverses, ce qui revient souvent dans ta vie et ce que tu aimerais voir évoluer. Si tu as rempli le <Link to={CARNET_PATH}>carnet de préparation</Link>, on s'appuie sur tes réponses pour aller plus vite à l'essentiel.
    </p>
    <p>
      Ensuite vient l'exploration : je repère les zones du corps et les moments de ta vie qui semblent liés à tes blocages, ainsi que les émotions qui y sont associées. Une fois que c'est mis en lumière, tu t'allonges confortablement et je t'accompagne pendant le soin. Ta respiration et ton ressenti te guident ; je te parle tout au long pour que tu te sentes en sécurité. On termine par un temps de retour sur ce que tu as vécu et quelques conseils pour les jours qui suivent.
    </p>

    <h2>Pour qui ?</h2>
    <p>
      Pour les adultes qui se sentent fatigués, stressés, bloqués ou qui ont l'impression de tourner en rond, et qui souhaitent un accompagnement doux en complément d'un éventuel suivi médical ou psychologique. La distance convient aussi très bien aux personnes à mobilité réduite, aux parents avec de jeunes enfants ou à celles et ceux qui vivent en montagne, dans le Jura ou en Valais, loin du canton de Neuchâtel.
    </p>

    <h2>Durée et prix</h2>
    <p>
      Compte environ 1h30 à 2h pour une séance complète. La première heure de découverte est offerte. Toutes les séances sont ensuite à <strong>prix libre</strong> : tu donnes ce qui te semble juste selon tes moyens. Des montants de référence sont indiqués sur la page <Link to="/offres">Offres</Link>, mais l'argent ne doit jamais être un obstacle.
    </p>

    <h2>Le matériel nécessaire</h2>
    <ul>
      <li>Un téléphone, une tablette ou un ordinateur avec une connexion stable</li>
      <li>Des écouteurs si possible, pour mieux entendre ma voix pendant le soin</li>
      <li>Un endroit calme où tu ne seras pas dérangé(e) pendant deux heures</li>
      <li>Un canapé, un lit ou un tapis pour t'allonger, une couverture et un verre d'eau</li>
    </ul>

    <h2>Cantons desservis</h2>
    <p>Je propose les séances à distance dans toute la Suisse romande :</p>
    <ul>
      {cantons.map(([n, p]) => <li key={p}><Link to={p}>{n}</Link></li>)}
    </ul>
    <p>
      Si tu préfères venir en personne, tu trouveras toutes les informations pour <Link to="/acces-cabinet-bevaix">venir au cabinet à Bevaix</Link>. Tu peux aussi lire le <Link to="/deroulement-seance">déroulement détaillé d'une séance</Link> ou les <Link to="/blog">articles du blog</Link>.
    </p>

    <div className="pt-6"><RdvButton /></div>
    <Precautions />
  </SimplePage>
);

export default SeancesDistance;
