// Analyse énergétique du carnet de préparation.
// Aucune visée médicale : lecture symbolique et énergétique de bien-être.

export type ChakraKey =
  | "racine"
  | "sacre"
  | "plexus"
  | "coeur"
  | "gorge"
  | "troisieme-oeil"
  | "couronne";

export type Chakra = {
  key: ChakraKey;
  name: string;
  sanskrit: string;
  theme: string;
  signes: string;
  cle: string;
  affirmation: string;
  keywords: string[];
};

export const CHAKRAS: Chakra[] = [
  {
    key: "racine",
    name: "Chakra racine",
    sanskrit: "Muladhara",
    theme: "Sécurité, ancrage, confiance dans la vie",
    signes: "Peur, insécurité, tensions dans les jambes, le bassin ou le bas du dos, difficulté à se sentir chez soi dans son corps.",
    cle: "Reprendre contact avec le sol, le corps, le rythme lent. Respirer dans le bas du ventre en sentant le poids du corps.",
    affirmation: "Je suis en sécurité ici et maintenant. La vie me porte.",
    keywords: [
      "peur", "peurs", "angoisse", "insécurité", "insecurite", "survie", "argent",
      "manque", "précarité", "precarite", "stabilité", "stabilite", "ancrage",
      "abandon", "sans-abri", "logement", "famille", "racines", "terreur", "panique",
      "jambes", "dos", "lombaires", "bassin", "survivre", "danger",
    ],
  },
  {
    key: "sacre",
    name: "Chakra sacré",
    sanskrit: "Svadhisthana",
    theme: "Émotions, créativité, plaisir, sensualité",
    signes: "Émotions figées ou débordantes, perte d'élan créatif, culpabilité, difficulté à recevoir du plaisir ou de la douceur.",
    cle: "Laisser l'émotion bouger : mouvement du bassin, danse libre, expression créative sans but ni jugement.",
    affirmation: "Je m'autorise à ressentir, à créer et à recevoir du plaisir.",
    keywords: [
      "culpabilité", "culpabilite", "honte", "sexualité", "sexualite", "créativité",
      "creativite", "plaisir", "émotion", "emotion", "émotions", "emotions", "joie",
      "tristesse", "deuil", "dépendance", "dependance", "addiction", "féminin",
      "feminin", "intimité", "intimite", "couple", "relation", "relations", "désir",
      "desir", "ventre", "règles", "fertilité", "fertilite",
    ],
  },
  {
    key: "plexus",
    name: "Chakra du plexus solaire",
    sanskrit: "Manipura",
    theme: "Confiance en soi, pouvoir personnel, limites",
    signes: "Manque de confiance, besoin de contrôle, perfectionnisme, tensions à l'estomac, difficulté à dire non.",
    cle: "Poser une limite claire par jour. Respirer en gonflant le plexus, comme si l'on reprenait sa place.",
    affirmation: "J'ai le droit d'exister pleinement et de choisir ma direction.",
    keywords: [
      "confiance", "estime", "pouvoir", "contrôle", "controle", "perfectionnisme",
      "colère", "colere", "rage", "frustration", "limites", "dire non", "affirmation",
      "volonté", "volonte", "échec", "echec", "réussite", "reussite", "jugement",
      "critique", "estomac", "plexus", "stress", "burn-out", "burnout", "épuisement",
      "epuisement", "surmenage", "imposteur", "nul", "nulle", "faible", "soumission",
    ],
  },
  {
    key: "coeur",
    name: "Chakra du cœur",
    sanskrit: "Anahata",
    theme: "Amour, pardon, ouverture, lien",
    signes: "Sentiment de solitude, rancune, difficulté à s'aimer ou à faire confiance, poitrine serrée, épaules fermées.",
    cle: "Un geste d'amour envers soi chaque jour. Ouvrir la cage thoracique en respirant longuement.",
    affirmation: "Je m'accueille tel(le) que je suis, avec douceur.",
    keywords: [
      "amour", "aimer", "solitude", "seul", "seule", "rejet", "pardon", "rancune",
      "trahison", "blessure", "blessures", "cœur", "coeur", "chagrin", "compassion",
      "douceur", "bienveillance", "s'aimer", "mérite", "merite", "deuil", "séparation",
      "separation", "divorce", "toxique", "poitrine", "épaules", "epaules", "respiration",
    ],
  },
  {
    key: "gorge",
    name: "Chakra de la gorge",
    sanskrit: "Vishuddha",
    theme: "Expression, vérité, authenticité",
    signes: "Difficulté à dire ce que l'on ressent, boule dans la gorge, nuque tendue, se taire pour ne pas déranger.",
    cle: "Dire une vérité retenue, écrire, chanter, poser sa voix à voix haute même seul(e).",
    affirmation: "Ma parole a de la valeur. Je dis ma vérité avec calme.",
    keywords: [
      "parler", "parole", "voix", "exprimer", "expression", "silence", "taire",
      "vérité", "verite", "authentique", "authenticité", "authenticite", "mensonge",
      "masque", "gorge", "nuque", "cervicales", "timidité", "timidite", "communication",
      "écouté", "ecoute", "incompris", "incomprise",
    ],
  },
  {
    key: "troisieme-oeil",
    name: "Chakra du troisième œil",
    sanskrit: "Ajna",
    theme: "Intuition, clarté, vision intérieure",
    signes: "Mental qui tourne en boucle, doute permanent, brouillard, maux de tête, coupure d'avec le ressenti.",
    cle: "Ralentir le mental : silence, écriture intuitive, quelques minutes les yeux fermés sans rien chercher.",
    affirmation: "Je fais confiance à ce que je ressens, même sans tout comprendre.",
    keywords: [
      "mental", "penser", "pensées", "pensees", "doute", "confusion", "clarté",
      "clarte", "intuition", "vision", "rêve", "reve", "rêves", "reves", "insomnie",
      "sommeil", "ruminer", "rumination", "concentration", "brouillard", "tête",
      "tete", "migraine", "sens", "direction", "perdu", "perdue", "choix",
    ],
  },
  {
    key: "couronne",
    name: "Chakra couronne",
    sanskrit: "Sahasrara",
    theme: "Connexion, sens, spiritualité",
    signes: "Sentiment de vide ou de déconnexion, perte de sens, impression d'être coupé(e) de plus grand que soi.",
    cle: "Créer un temps sacré quotidien : silence, gratitude, nature, prière ou méditation, même 5 minutes.",
    affirmation: "Je suis relié(e) à quelque chose de plus vaste que moi.",
    keywords: [
      "sens", "spiritualité", "spiritualite", "mission", "âme", "ame", "vide",
      "déconnecté", "deconnecte", "déconnexion", "deconnexion", "foi", "confiance en la vie",
      "éveil", "eveil", "conscience", "guidance", "univers", "divin", "méditation",
      "meditation", "existence", "pourquoi", "vocation", "alignement",
    ],
  },
];

export type BeliefReframe = { limitante: string; nouvelle: string };

const BELIEF_LIBRARY: { keywords: string[]; reframe: BeliefReframe }[] = [
  {
    keywords: ["pas assez", "nul", "nulle", "incapable", "médiocre", "mediocre"],
    reframe: {
      limitante: "Je ne suis pas assez.",
      nouvelle: "Je suis suffisant(e) tel(le) que je suis, et je continue de grandir.",
    },
  },
  {
    keywords: ["mérite", "merite", "droit", "indigne"],
    reframe: {
      limitante: "Je ne mérite pas ce qui est bon pour moi.",
      nouvelle: "Je m'autorise à recevoir le bon, simplement parce que j'existe.",
    },
  },
  {
    keywords: ["dois", "toujours", "obligation", "parfait", "perfection", "performance"],
    reframe: {
      limitante: "Je dois toujours faire plus, mieux, parfaitement.",
      nouvelle: "Je fais de mon mieux, et cela suffit. Je peux ralentir sans perdre ma valeur.",
    },
  },
  {
    keywords: ["confiance", "peur d'échouer", "échec", "echec", "raté", "rate"],
    reframe: {
      limitante: "Si j'échoue, je perds ma valeur.",
      nouvelle: "Mes expériences m'enseignent. Ma valeur ne dépend pas d'un résultat.",
    },
  },
  {
    keywords: ["seul", "seule", "personne", "abandon", "rejet"],
    reframe: {
      limitante: "Je serai abandonné(e) si je me montre vraiment.",
      nouvelle: "Plus je me montre vrai(e), plus j'attire des liens justes.",
    },
  },
  {
    keywords: ["argent", "abondance", "pauvre", "manque", "riche"],
    reframe: {
      limitante: "Il n'y en aura jamais assez pour moi.",
      nouvelle: "Je m'ouvre à recevoir, avec confiance et à mon rythme.",
    },
  },
  {
    keywords: ["déranger", "deranger", "trop", "place", "égoïste", "egoiste"],
    reframe: {
      limitante: "Prendre ma place, c'est déranger les autres.",
      nouvelle: "Ma présence a le droit d'exister pleinement.",
    },
  },
  {
    keywords: ["fort", "forte", "faible", "pleurer", "sensible"],
    reframe: {
      limitante: "Je dois être fort(e) et ne rien laisser paraître.",
      nouvelle: "Ma sensibilité est une force. M'ouvrir est un acte de courage.",
    },
  },
];

const DEFAULT_REFRAMES: BeliefReframe[] = [
  {
    limitante: "Je dois tout porter seul(e).",
    nouvelle: "Je peux demander du soutien et me laisser accompagner.",
  },
  {
    limitante: "Changer est dangereux.",
    nouvelle: "Je peux avancer doucement, une respiration à la fois.",
  },
];

export type CarnetAnalysis = {
  chakras: { chakra: Chakra; score: number }[];
  primaryChakra: Chakra;
  themes: string[];
  reframes: BeliefReframe[];
  cles: string[];
  protocole72h: string[];
};

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export function analyseCarnet(answers: Record<string, string>): CarnetAnalysis {
  const fullText = normalize(Object.values(answers).join(" \n "));

  const scored = CHAKRAS.map((chakra) => {
    let score = 0;
    chakra.keywords.forEach((kw) => {
      const k = normalize(kw);
      if (!k) return;
      const occurrences = fullText.split(k).length - 1;
      score += occurrences;
    });
    return { chakra, score };
  }).sort((a, b) => b.score - a.score);

  const primaryChakra = scored[0].score > 0 ? scored[0].chakra : CHAKRAS[2];

  const themes: string[] = [];
  const themeMap: { label: string; keys: string[] }[] = [
    { label: "Stress et surcharge", keys: ["stress", "burn", "epuis", "fatigue", "surmenage", "charge"] },
    { label: "Anxiété et peurs", keys: ["anxiet", "peur", "angoiss", "panique", "inquiet"] },
    { label: "Blessures émotionnelles / mémoires", keys: ["trauma", "blessure", "enfance", "memoire", "passe", "abus"] },
    { label: "Estime et confiance", keys: ["confiance", "estime", "valeur", "imposteur", "nul"] },
    { label: "Relations et liens", keys: ["relation", "couple", "famille", "toxique", "separation", "divorce"] },
    { label: "Quête de sens / mission", keys: ["sens", "mission", "ame", "vocation", "spiritu", "alignement"] },
    { label: "Corps et sommeil", keys: ["sommeil", "insomnie", "douleur", "tension", "corps", "migraine"] },
    { label: "Deuil et séparation", keys: ["deuil", "perte", "mort", "disparu"] },
  ];
  themeMap.forEach((t) => {
    if (t.keys.some((k) => fullText.includes(normalize(k)))) themes.push(t.label);
  });

  const reframes: BeliefReframe[] = [];
  BELIEF_LIBRARY.forEach((b) => {
    if (b.keywords.some((k) => fullText.includes(normalize(k)))) reframes.push(b.reframe);
  });
  DEFAULT_REFRAMES.forEach((r) => {
    if (reframes.length < 4) reframes.push(r);
  });

  const topChakras = scored.filter((s) => s.score > 0).slice(0, 3);
  const cles = (topChakras.length ? topChakras : [scored[0]]).map(
    (s) => `${s.chakra.name} — ${s.chakra.cle}`
  );

  const protocole72h = [
    "Jour 1 — Respiration : 10 minutes de respiration lente et profonde dans le bas du ventre, matin ou soir.",
    "Jour 2 — Écriture : relire ce que tu as écrit et souligner la phrase qui te touche le plus. La réécrire au présent, en positif.",
    "Jour 3 — Corps : 20 minutes de marche en conscience, sans téléphone, en sentant tes appuis au sol.",
    "Chaque jour — Répéter à voix haute ton affirmation d'ancrage, main sur le cœur.",
    "Hydratation : boire davantage d'eau les 72 h avant et après la séance, cela facilite la circulation énergétique.",
    "Alléger : réduire alcool, écrans tardifs et sucres rapides la veille de la séance.",
  ];

  return { chakras: scored, primaryChakra, themes, reframes, cles, protocole72h };
}

export type CarnetQuestion = {
  id: string;
  step: number;
  title: string;
  intro?: string;
  placeholder?: string;
  rows?: number;
};

export const CARNET_STEPS: { title: string; subtitle: string; questions: CarnetQuestion[] }[] = [
  {
    title: "1. Ce que je choisis de libérer",
    subtitle:
      "Exemples : peurs, culpabilité, honte, colère, tristesse, besoin de contrôle, relations toxiques, dépendances, croyances limitantes, manque de confiance, blessures d'enfance, schémas répétitifs, stress, perfectionnisme.",
    questions: [
      {
        id: "liberer",
        step: 1,
        title: "Ce que je sens prêt(e) à laisser derrière moi",
        placeholder: "Écris librement, sans filtre…",
        rows: 8,
      },
    ],
  },
  {
    title: "2. Qui je choisis d'incarner",
    subtitle:
      "Imagine la version la plus alignée de toi-même. Exemples : Je suis libre. Je suis confiant(e). Je suis authentique. Je suis serein(e).",
    questions: [
      {
        id: "incarner",
        step: 2,
        title: "La personne que je choisis de devenir",
        placeholder: "Je suis…",
        rows: 7,
      },
    ],
  },
  {
    title: "3. Ce qui m'empêche encore",
    subtitle: "Réponds spontanément, sans chercher la bonne réponse.",
    questions: [
      { id: "peur", step: 3, title: "Quelle peur me retient ?", rows: 3 },
      { id: "risque", step: 3, title: "Que risque-t-il d'arriver si je réussis ?", rows: 3 },
      { id: "perdre", step: 3, title: "Que vais-je perdre si je change ?", rows: 3 },
      { id: "resistance", step: 3, title: "Quelle partie de moi résiste encore ?", rows: 3 },
    ],
  },
  {
    title: "4. Les croyances que je souhaite transformer",
    subtitle: "Complète spontanément, puis demande-toi : « Est-ce vraiment vrai ? »",
    questions: [
      { id: "croyance1", step: 4, title: "Je crois que…", rows: 2 },
      { id: "croyance2", step: 4, title: "Je ne mérite pas…", rows: 2 },
      { id: "croyance3", step: 4, title: "Je dois toujours…", rows: 2 },
      { id: "croyance4", step: 4, title: "Je ne suis pas assez…", rows: 2 },
    ],
  },
  {
    title: "5. Le message de mon corps",
    subtitle:
      "Ferme les yeux quelques instants. Où ressens-tu une tension ? Si cette zone pouvait parler, que te dirait-elle ?",
    questions: [
      { id: "corps_zone", step: 5, title: "Où se situe la tension dans mon corps ?", rows: 2 },
      { id: "corps_message", step: 5, title: "Le message de cette zone", rows: 5 },
    ],
  },
  {
    title: "6. Rencontre avec mon Moi aligné",
    subtitle: "Visualise ta version idéale. Comment marche-t-elle ? Comment parle-t-elle ?",
    questions: [
      { id: "moi_aligne", step: 6, title: "Le conseil que me donne mon Moi aligné", rows: 6 },
    ],
  },
  {
    title: "7. Mes dons, mes qualités et mes talents",
    subtitle:
      "Que disent souvent les autres de toi ? Dans quels domaines pourrais-tu naturellement exceller ?",
    questions: [{ id: "talents", step: 7, title: "Mes qualités et talents", rows: 6 }],
  },
  {
    title: "8. Les synchronicités de ma vie",
    subtitle:
      "Repense aux rencontres importantes, aux passions de ton enfance et aux épreuves qui t'ont transformé(e).",
    questions: [
      { id: "synchronicites", step: 8, title: "Ce qu'elles cherchent à m'enseigner", rows: 6 },
    ],
  },
  {
    title: "9. Mon engagement",
    subtitle:
      "Quelle action concrète vas-tu réaliser dans les 72 prochaines heures pour honorer cette transformation ?",
    questions: [{ id: "engagement", step: 9, title: "Mon engagement des 72 h", rows: 4 }],
  },
];
