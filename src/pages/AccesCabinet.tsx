import SimplePage from "@/components/SimplePage";
import { RdvButton } from "@/components/home/HomeEssentials";
import { GOOGLE_MAPS_URL } from "@/lib/links";

const AccesCabinet = () => (
  <SimplePage
    title="Venir au cabinet à Bevaix (Neuchâtel) | Karmaequilego"
    description="Adresse, accès en voiture et en transports publics, ce qu'il faut apporter : tout pour venir à ta séance au cabinet de Bevaix, Chemin du Cuard 22."
    path="/acces-cabinet-bevaix"
    h1="Venir au cabinet à Bevaix"
    crumb="Accès au cabinet"
  >
    <h2>Adresse</h2>
    <p>
      <strong>Karmaequilego — Matyas Challandes</strong><br />
      Chemin du Cuard 22, 2022 Bevaix (Neuchâtel)<br />
      <a href="tel:+41762445552">+41 76 244 55 52</a> · <a href="mailto:matyas.challandes@gmail.com">matyas.challandes@gmail.com</a>
    </p>
    <p><a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">Ouvrir l'itinéraire dans Google Maps</a></p>

    <div className="rounded-2xl overflow-hidden border border-border my-6">
      <iframe
        title="Carte du cabinet à Bevaix"
        src="https://www.google.com/maps?q=Chemin+du+Cuard+22,+2022+Bevaix&output=embed"
        width="100%"
        height="320"
        loading="lazy"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    <h2>Comment venir</h2>
    <p><strong>En voiture :</strong> Bevaix se trouve au bord du lac, entre Neuchâtel et Yverdon-les-Bains, accessible par l'autoroute A5 (sortie Bevaix).</p>
    <p><strong>En transports publics :</strong> la gare de Bevaix est desservie par les trains régionaux sur la ligne Neuchâtel – Yverdon. Vérifie ton horaire sur sbb.ch.</p>
    <p><strong>Parking :</strong> [À COMPLÉTER]</p>

    <h2>Ce qu'il faut apporter</h2>
    <ul>
      <li>Des vêtements confortables</li>
      <li>Une bouteille d'eau</li>
      <li>Si tu l'as fait, ton carnet de préparation (je le reçois aussi en ligne)</li>
    </ul>

    <h2>Comment se passe l'accueil</h2>
    <p>
      Je t'accueille au cabinet, on prend un moment pour s'installer et parler de ce que tu vis. Ensuite vient la séance, puis un temps calme pour intégrer avant de repartir. Prévois environ deux heures sans rendez-vous juste après.
    </p>
    <div className="pt-4"><RdvButton /></div>
  </SimplePage>
);

export default AccesCabinet;
