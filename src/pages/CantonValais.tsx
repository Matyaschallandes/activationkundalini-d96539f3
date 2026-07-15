import CantonPage from "@/components/CantonPage";

const CantonValais = () => (
  <CantonPage
    slug="/soins-energetiques-canton-valais"
    canton="Valais"
    regionShort="Valais romand"
    distanceLine="accessible depuis Sion, Sierre et Martigny (séances à distance recommandées)"
    title="Soins Énergétiques & Kundalini Valais — Sion, Sierre, Martigny, Monthey"
    description="Soins énergétiques, activation Kundalini, kinésiologie et accompagnement burn-out pour le Valais romand : Sion, Sierre, Martigny, Monthey, Verbier. Séances à distance ou au cabinet à Bevaix (NE). Prix libre."
    keywords="soins énergétiques Valais, activation kundalini Sion, guérisseur énergétique Sierre, kinésiologie Martigny, harmonisation chakras Monthey, accompagnement burn-out Valais"
    intro="Pour les habitants du Valais romand — Sion, Sierre, Martigny, Monthey, Verbier — j'offre un accompagnement énergétique adapté : activation Kundalini, soins énergétiques, kinésiologie et libération émotionnelle, principalement à distance ou lors de rendez-vous programmés."
    h1="Soins énergétiques & activation Kundalini en Valais romand"
    cities={[
      "Sion", "Sierre", "Martigny", "Monthey", "Verbier", "Crans-Montana",
      "Nendaz", "Bagnes", "Conthey", "Fully", "Saxon", "Saint-Maurice",
      "Vétroz", "Ardon", "Val-d'Illiez",
    ]}
    areaServed={["Sion", "Sierre", "Martigny", "Monthey", "Verbier"]}
  />
);

export default CantonValais;
