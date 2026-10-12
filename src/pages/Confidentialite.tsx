import SimplePage from "@/components/SimplePage";

const Confidentialite = () => (
  <SimplePage
    title="Politique de confidentialité (LPD) | Karmaequilego"
    description="Comment tes données sont collectées et protégées sur activationkundalini.ch, selon la loi suisse sur la protection des données (LPD)."
    path="/confidentialite"
    h1="Politique de confidentialité"
    crumb="Confidentialité"
  >
    <p><em>Texte provisoire à valider, conforme à la loi fédérale sur la protection des données (LPD).</em></p>
    <h2>Responsable du traitement</h2>
    <p>Matyas Challandes — Karmaequilego, Chemin du Cuard 22, 2022 Bevaix · matyas.challandes@gmail.com</p>
    <h2>Données collectées</h2>
    <ul>
      <li>Formulaire de contact et de rendez-vous : nom, prénom, email, téléphone, date, heure et lieu de naissance, message</li>
      <li>Offre « 5 blocages offerts » : prénom, nom, date (heure et lieu facultatifs) de naissance, téléphone ou email, message — uniquement avec ton consentement</li>
      <li>Carnet de préparation : tes réponses aux questions et tes objectifs</li>
      <li>Achats en boutique : données nécessaires au paiement (traitées par Stripe)</li>
      <li>Statistiques de visite anonymes</li>
    </ul>
    <h2>Finalités</h2>
    <p>Te répondre, organiser et préparer ta séance, préparer ta lecture d'âme, livrer tes achats et améliorer le site. Tes réponses au carnet peuvent être analysées automatiquement pour préparer une synthèse personnelle.</p>
    <h2>Durée de conservation</h2>
    <p>[À COMPLÉTER : par exemple 3 ans après le dernier contact], sauf obligation légale contraire.</p>
    <h2>Tes droits</h2>
    <p>Tu peux demander à tout moment l'accès, la correction ou la suppression de tes données en écrivant à matyas.challandes@gmail.com.</p>
    <h2>Sous-traitants</h2>
    <p>Hébergement et base de données (Lovable Cloud), paiements (Stripe), prise de rendez-vous (Koalendar). [À COMPLÉTER : pays d'hébergement]</p>
  </SimplePage>
);

export default Confidentialite;
