const keywords = [
  "activation kundalini", "éveil kundalini", "méditation kundalini", "énergie kundalini",
  "chakras kundalini", "libération kundalini", "éveil spirituel suisse", "éveil de la conscience",
  "éveil énergétique", "équilibrage des chakras", "harmonisation énergétique", "purification énergétique",
  "soin chakra racine", "soin chakra sacré", "soin chakra du plexus solaire", "soin chakra du cœur",
  "soin chakra de la gorge", "soin chakra du troisième œil", "soin chakra couronne",
  "nettoyage des chakras", "activation des chakras", "alignement énergétique",
  "soins énergétiques", "thérapie énergétique", "guérisseur énergétique",
  "soins énergétiques à distance", "séance énergétique en ligne", "soin énergétique personnalisé",
  "harmonisation de l'énergie vitale", "rééquilibrage énergétique", "soins holistiques",
  "guérison holistique", "libération émotionnelle énergétique", "nettoyage aura",
  "purification de l'aura", "reprogrammation énergétique", "énergie universelle",
  "méditation guidée énergie", "élévation vibrationnelle", "méditation énergétique",
  "respiration énergétique", "yoga kundalini", "mantra kundalini", "visualisation énergétique",
  "activation spirituelle", "alchimie intérieure", "rituels de guérison", "rituels énergétiques",
  "activation des codes énergétiques", "blocages énergétiques", "fatigue énergétique",
  "nettoyage des émotions", "libération des traumatismes", "libération karmique",
  "harmonisation des émotions", "débloquer l'énergie vitale", "énergie bloquée",
  "guérison spirituelle", "soins énergétiques Neuchâtel", "thérapeute énergétique Neuchâtel",
  "activation kundalini Suisse", "guérisseur énergétique Suisse", "méditation guidée Suisse",
  "nettoyage énergétique Lausanne", "harmonisation énergétique Genève", "soins à distance Suisse",
  "soins énergétiques Zurich", "guérison énergétique Vaud", "rééquilibrage énergétique Neuchâtel",
  "thérapie énergétique Fribourg", "transformation énergétique", "transformation spirituelle",
  "croissance personnelle énergétique", "éveil de soi", "connexion à soi", "reconnexion à soi",
  "guidance spirituelle", "développement spirituel", "énergie vibratoire",
  "nettoyage des mémoires", "soin quantique", "biorésonance énergétique",
  "résonance vibratoire", "énergie subtile", "harmonisation vibrationnelle",
  "activation du potentiel énergétique", "soin énergétique holistique",
  "éveil spirituel rapide",
];

const SeoKeywords = () => {
  return (
    <section className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-wrap gap-2 justify-center">
          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="text-xs font-body text-muted-foreground/60 bg-muted/10 border border-border/20 rounded-full px-3 py-1"
            >
              #{keyword.replace(/\s+/g, "")}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoKeywords;
