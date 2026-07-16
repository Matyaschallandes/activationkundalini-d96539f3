export type CityPageData = {
  slug: string;
  ville: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  intro: string;
  paragraphs: { heading?: string; text: string }[];
};

/**
 * Bibliothèque de mots-clés longue traîne partagés entre les pages villes.
 * Chaque page cible ces requêtes réelles tapées sur Google, Bing, ChatGPT,
 * Perplexity, Gemini pour trouver un thérapeute énergétique en Suisse romande.
 */
const SHARED_KEYWORDS = [
  "magnétiseur",
  "magnétiseuse",
  "guérisseur",
  "guérisseuse",
  "énergéticien",
  "énergéticienne autour de moi",
  "thérapeute énergétique",
  "praticien en soins énergétiques",
  "soin énergétique",
  "soins énergétiques à distance",
  "activation kundalini",
  "éveil kundalini",
  "montée de kundalini",
  "kundalini yoga",
  "reiki",
  "reiki kundalini",
  "lahochi",
  "biorésonance",
  "kinésiologie",
  "hypnose spirituelle",
  "sophrologie énergétique",
  "chamanisme",
  "chamane suisse romande",
  "soin chamanique",
  "désenvoûtement",
  "recouvrement d'âme",
  "dégagement d'entités",
  "protection énergétique",
  "nettoyage énergétique de la maison",
  "libération karmique",
  "libération émotionnelle",
  "harmonisation des chakras",
  "nettoyage de l'aura",
  "purification de l'aura",
  "guidance intuitive",
  "lecture d'âme",
  "médium",
  "voyant",
  "tarot évolutif",
  "burn-out",
  "épuisement professionnel",
  "fatigue chronique",
  "anxiété",
  "angoisses nocturnes",
  "crise d'angoisse",
  "attaque de panique",
  "dépression légère",
  "baisse de moral",
  "stress chronique",
  "surcharge mentale",
  "insomnie",
  "sommeil réparateur",
  "traumatismes",
  "traumatisme d'enfance",
  "syndrome post-traumatique",
  "hypersensibilité",
  "haut potentiel",
  "personne HPE",
  "personne HPI",
  "empathie envahissante",
  "quête de sens",
  "éveil spirituel",
  "reconnexion à soi",
  "développement personnel",
  "confiance en soi",
  "estime de soi",
  "deuil",
  "séparation",
  "rupture amoureuse",
  "blocage émotionnel",
  "blocage énergétique",
  "prix libre",
  "donation consciente",
  "séance en visioconférence",
  "consultation à distance",
];

const sharedKeywordString = SHARED_KEYWORDS.join(", ");

/**
 * Bloc FAQ commun (adapté par ville via l'intro).
 * Ces questions correspondent aux requêtes réellement tapées sur Google
 * et posées aux IA génératives par des personnes cherchant un thérapeute.
 */
const faqBlock = (ville: string) => [
  {
    heading: `Comment se déroule une séance d'activation Kundalini quand on vient de ${ville} ?`,
    text: `Une séance dure entre 1h30 et 2h. Nous prenons d'abord un temps d'échange pour comprendre où vous en êtes — burn-out, fatigue chronique, angoisses, deuil, quête de sens, blocages émotionnels. Ensuite vient le cœur du travail : une alchimie respiratoire guidée qui déclenche la montée de Kundalini, l'harmonisation des chakras et la libération des mémoires bloquées. La séance se termine par un temps d'intégration, d'ancrage et de partage. Beaucoup de personnes venant de ${ville} ressentent dès la première séance une bascule intérieure, un allègement, une clarté nouvelle. Le protocole complet s'étale généralement sur 1 à 3 séances selon votre rythme d'intégration.`,
  },
  {
    heading: `Quelle différence entre magnétiseur, énergéticien, guérisseur et chamane ?`,
    text: `Les termes se recoupent souvent. Un magnétiseur travaille traditionnellement avec l'imposition des mains sur des zones précises du corps. Un énergéticien ou thérapeute énergétique travaille les chakras, l'aura et les corps subtils par différentes techniques (reiki, lahochi, biorésonance, kinésiologie). Un chamane pratique en plus des soins chamaniques : recouvrement d'âme, dégagement d'entités, désenvoûtement, connexion aux esprits alliés. Un guérisseur énergétique combine souvent plusieurs de ces approches. Dans mon cabinet, je réunis ces trois dimensions — activation Kundalini, soin énergétique et soin chamanique — pour un accompagnement complet, adapté à chaque personne qui vient de ${ville} ou d'ailleurs en Suisse romande.`,
  },
  {
    heading: `Est-ce que ça fonctionne à distance depuis ${ville} ?`,
    text: `Oui, pleinement. L'énergie ne connaît pas les kilomètres. La séance à distance se déroule par visioconférence (Zoom, WhatsApp, FaceTime) ou par téléphone, depuis un espace calme chez vous. Vous vous installez confortablement, je guide le processus de respiration, l'activation Kundalini se déploie et je travaille simultanément sur votre champ énergétique. Beaucoup de personnes trouvent la séance à distance encore plus profonde : le confort du foyer, l'absence de trajet, la disponibilité intérieure totale. Idéal pour les Suisses romands éloignés, les personnes à mobilité réduite ou celles qui préfèrent la discrétion du domicile.`,
  },
  {
    heading: `Combien coûte une séance ? Est-ce remboursé par l'assurance ?`,
    text: `Toutes les séances sont proposées en prix libre — donation consciente — avec un prix indicatif de référence communiqué à la réservation. Cela signifie que vous contribuez selon vos possibilités et la valeur ressentie du travail. L'argent ne doit jamais être un obstacle à la reconnexion à soi. Les soins énergétiques ne sont pas remboursés par la LAMal (assurance de base) ni généralement par les complémentaires en Suisse, car il ne s'agit pas de médecine reconnue au sens légal — c'est un accompagnement de bien-être, d'harmonisation et de stabilisation, complémentaire à un suivi médical mais jamais substitut.`,
  },
  {
    heading: `Pour quels problèmes venir consulter ?`,
    text: `Les personnes qui viennent me consulter depuis ${ville} traversent souvent : un burn-out ou un épuisement professionnel, une fatigue chronique inexpliquée, des angoisses ou crises de panique, une baisse de moral prolongée, des insomnies, des traumatismes anciens, un deuil, une séparation douloureuse, un blocage émotionnel ou énergétique, une hypersensibilité envahissante, une quête de sens ou d'éveil spirituel, un besoin de libération karmique, une sensation d'être "à côté de sa vie". Le travail énergétique agit sur ces terrains, en complément et jamais en remplacement d'un suivi médical ou psychothérapeutique quand celui-ci est nécessaire.`,
  },
  {
    heading: `Comment savoir si l'activation Kundalini est faite pour moi ?`,
    text: `Si vous ressentez un appel intérieur, une intuition, une curiosité qui revient — c'est probablement le bon moment. L'activation Kundalini convient particulièrement aux personnes qui ont déjà exploré d'autres approches (psychothérapie, yoga, méditation, reiki, kinésiologie, sophrologie, hypnose) et qui cherchent un niveau plus profond de transformation. Elle convient moins aux personnes en phase psychotique aiguë ou traversant une crise psychiatrique non stabilisée. En cas de doute, contactez-moi avant de réserver : un échange préalable permet toujours de clarifier ensemble si le moment est juste pour vous.`,
  },
];

export const cityPages: CityPageData[] = [
  {
    slug: "/activation-kundalini-neuchatel",
    ville: "Neuchâtel",
    title: "Activation Kundalini Neuchâtel | Magnétiseur & Soin Énergétique Bevaix",
    description:
      "Magnétiseur, guérisseur énergétique et chamane à 15 min de Neuchâtel. Activation Kundalini, soins chamaniques, libération émotionnelle, burn-out, angoisses. Prix libre, présentiel ou à distance.",
    keywords: `activation kundalini Neuchâtel, magnétiseur Neuchâtel, guérisseur Neuchâtel, énergéticienne autour de moi Neuchâtel, thérapeute énergétique Neuchâtel, chamane Neuchâtel, soin chamanique Neuchâtel, kinésiologue Neuchâtel, reiki Neuchâtel, hypnose Neuchâtel, sophrologue Neuchâtel, burn-out Neuchâtel, fatigue chronique Neuchâtel, angoisses Neuchâtel, désenvoûtement, ${sharedKeywordString}`,
    h1: "Activation Kundalini à Neuchâtel — Magnétiseur, Guérisseur & Thérapeute Énergétique",
    intro:
      "Vous cherchez un magnétiseur, un guérisseur énergétique, une énergéticienne autour de vous, un chamane ou un thérapeute pour un soin énergétique à Neuchâtel ? À 15 minutes du centre-ville, mon cabinet à Bevaix réunit activation Kundalini, soins chamaniques, libération émotionnelle, harmonisation des chakras et lecture d'âme — en présentiel ou à distance. Prix libre, accompagnement respectueux, sans dogme.",
    paragraphs: [
      {
        heading: "Un cabinet à Bevaix pour tout le canton de Neuchâtel",
        text:
          "Basé à Bevaix, sur les rives du lac, j'accueille les habitants de Neuchâtel-ville, La Chaux-de-Fonds, Le Locle, Boudry, Colombier, Peseux, Cortaillod, Saint-Blaise, Marin, Hauterive, Corcelles, Auvernier, Cressier, Le Landeron, Val-de-Ruz et Val-de-Travers. Que vous tapiez « magnétiseur Neuchâtel », « énergéticienne autour de moi », « guérisseur Neuchâtel », « soin énergétique canton de Neuchâtel » ou « chamane Suisse romande » dans Google ou sur ChatGPT, vous cherchez souvent la même chose : un praticien accessible, humain, sérieux, capable d'un vrai accompagnement. Le cabinet est à quinze minutes en voiture du centre, dans un cadre calme, loin de l'agitation urbaine.",
      },
      {
        heading: "Activation Kundalini — bien plus profond qu'un reiki ou un soin de surface",
        text:
          "L'activation Kundalini n'est ni un reiki, ni un soin énergétique de surface, ni un cours de kundalini yoga. C'est un travail individuel d'alchimie respiratoire qui réveille la montée de Kundalini — l'énergie vitale endormie à la base de la colonne vertébrale — et déclenche une véritable harmonisation des chakras, une libération karmique et un nettoyage de l'aura. Le protocole se déroule sur 1 à 3 séances personnalisées. Beaucoup de Neuchâtelois arrivent après avoir déjà exploré reiki, kinésiologie, sophrologie, hypnose, méditation ou kundalini yoga, avec le besoin d'un travail plus incarné, plus direct et plus transformateur.",
      },
      {
        heading: "Soins chamaniques : désenvoûtement, recouvrement d'âme, dégagement d'entités",
        text:
          "En complément de l'activation Kundalini, je propose des soins chamaniques traditionnels : recouvrement d'âme pour rassembler les parts fragmentées après un traumatisme, dégagement d'entités pour libérer les attachements énergétiques, désenvoûtement pour lever les charges lourdes, protection énergétique, nettoyage énergétique de la maison ou du lieu de vie. Ces pratiques ancestrales, revisitées avec respect et discernement, offrent un espace de bien-être et de stabilisation profonde — jamais une promesse de guérison médicale.",
      },
      {
        heading: "Pour quelles problématiques vient-on me voir depuis Neuchâtel ?",
        text:
          "Burn-out et épuisement professionnel, fatigue chronique inexpliquée, angoisses, crises de panique, insomnie, baisse de moral prolongée, deuil, séparation, blocage émotionnel, hypersensibilité envahissante, traumatismes d'enfance, syndrome post-traumatique, quête de sens, éveil spirituel, sensation d'être « à côté de sa vie », besoin de reconnexion à soi. Le travail énergétique agit sur ces terrains, toujours en complément d'un suivi médical ou psychothérapeutique quand celui-ci est nécessaire.",
      },
      {
        heading: "Séances en présentiel à Bevaix ou à distance en visioconférence",
        text:
          "Les Neuchâtelois viennent facilement au cabinet — parking gratuit, arrêt de bus à proximité, gare de Bevaix à 5 minutes à pied. Pour celles et ceux qui préfèrent, la séance à distance par visioconférence (Zoom, WhatsApp) ou téléphone est tout aussi profonde. Tous les soins sont proposés en prix libre avec un prix indicatif de référence — l'argent ne doit jamais être un obstacle. Pour réserver, utilisez la page rendez-vous ou contactez-moi directement via WhatsApp au +41 76 244 55 52.",
      },
      ...faqBlock("Neuchâtel"),
    ],
  },
  {
    slug: "/activation-kundalini-lausanne",
    ville: "Lausanne",
    title: "Activation Kundalini Lausanne | Magnétiseur & Guérisseur Énergétique Vaud",
    description:
      "Magnétiseur, guérisseur énergétique, chamane et thérapeute pour les Lausannois. Activation Kundalini, soin chamanique, burn-out, angoisses. Bevaix à 40 min ou séance à distance. Prix libre.",
    keywords: `activation kundalini Lausanne, magnétiseur Lausanne, guérisseur Lausanne, énergéticienne Lausanne, thérapeute énergétique Vaud, chamane Vaud, kundalini yoga Lausanne, reiki Lausanne, kinésiologue Lausanne, hypnose Lausanne, sophrologue Lausanne, médium Lausanne, voyant Lausanne, burn-out Lausanne, angoisses Lausanne, désenvoûtement Vaud, ${sharedKeywordString}`,
    h1: "Activation Kundalini à Lausanne — Magnétiseur, Guérisseur & Soin Énergétique",
    intro:
      "Magnétiseur, guérisseur énergétique, chamane et praticien en activation Kundalini pour Lausanne et le canton de Vaud. Depuis mon cabinet à Bevaix — 40 minutes en train direct — j'accompagne les Lausannois qui cherchent un travail énergétique plus profond que le reiki, le kundalini yoga ou la sophrologie classique. Séances aussi à distance. Prix libre.",
    paragraphs: [
      {
        heading: "De Lausanne à Bevaix : 40 minutes en train direct",
        text:
          "La ligne CFF Lausanne–Neuchâtel dessert Bevaix en une petite quarantaine de minutes, avec un arrêt à 5 minutes à pied du cabinet. Chaque semaine, des Lausannois, Renanais, Pulliérans, Morgiens, Nyonnais, Vevesans et Aigliots font ce trajet pour une séance d'activation Kundalini, un soin chamanique ou une lecture d'âme. Beaucoup arrivent après avoir cherché « magnétiseur Lausanne », « énergéticienne Lausanne », « guérisseur Vaud », « chamane Suisse romande » ou « meilleur thérapeute énergétique Lausanne » sans trouver un accompagnement suffisamment personnalisé. Le trajet devient souvent une transition utile : quitter le rythme de Lausanne, longer le lac, entrer dans un espace plus silencieux.",
      },
      {
        heading: "Lausanne : capitale sous tension, corps en burn-out",
        text:
          "Capitale olympique, pôle universitaire (UNIL, EPFL, HES-SO), hub tertiaire, siège d'ONG et de multinationales — Lausanne concentre une densité rare de responsabilités, d'ambition et de rythmes soutenus. Mes consultants lausannois arrivent souvent en épuisement professionnel, avec angoisses nocturnes, insomnie, fatigue chronique, surcharge mentale, crises de panique ou sensation d'avoir perdu leur boussole intérieure. L'activation Kundalini, la libération émotionnelle et le soin chamanique offrent un espace de réajustement énergétique complémentaire à un suivi médical ou psychothérapeutique, jamais en remplacement.",
      },
      {
        heading: "Activation Kundalini vs kundalini yoga vs reiki : les différences",
        text:
          "Le kundalini yoga travaille progressivement l'énergie par la posture, la respiration et les mantras, souvent en groupe. Le reiki impose les mains pour transmettre une énergie douce. L'activation Kundalini que je pratique est un travail individuel d'alchimie respiratoire ciblée qui déclenche la montée de Kundalini et l'harmonisation des chakras en 1 à 3 séances intenses et personnalisées. Les trois approches peuvent être complémentaires, mais l'intensité et l'intention diffèrent : ici, le protocole est ajusté à votre histoire, à votre système nerveux et à votre rythme d'intégration.",
      },
      {
        heading: "Soins chamaniques et lecture d'âme depuis Lausanne",
        text:
          "En plus de la Kundalini, je propose des soins chamaniques (recouvrement d'âme, dégagement d'entités, désenvoûtement, protection énergétique), des séances de kinésiologie appliquée, du nettoyage de l'aura et des lectures d'âme pour clarifier votre chemin de vie, vos blocages karmiques, votre mission d'âme. Ces approches peuvent se combiner sur plusieurs séances selon vos besoins — deuil non digéré, séparation, hypersensibilité, quête de sens, éveil spirituel.",
      },
      {
        heading: "Séances à distance depuis Lausanne — prix libre",
        text:
          "Si le trajet n'est pas envisageable, la séance à distance par visioconférence ou téléphone offre une vraie profondeur : l'énergie ne connaît pas les kilomètres. Vous vous installez chez vous, dans un espace calme, et je guide le processus à distance. Tous les soins sont proposés en prix libre — personne ne renonce à un accompagnement pour des raisons financières. Pour réserver, utilisez la page rendez-vous ou écrivez-moi via la page contact.",
      },
      ...faqBlock("Lausanne"),
    ],
  },
  {
    slug: "/activation-kundalini-fribourg",
    ville: "Fribourg",
    title: "Activation Kundalini Fribourg | Magnétiseur & Guérisseur Énergétique",
    description:
      "Magnétiseur, guérisseur énergétique, chamane pour Fribourg. Activation Kundalini, soins chamaniques, libération émotionnelle, burn-out. Bevaix à 35 min ou à distance. Prix libre.",
    keywords: `activation kundalini Fribourg, magnétiseur Fribourg, guérisseur Fribourg, énergéticienne autour de moi Fribourg, thérapeute énergétique Fribourg, chamane Fribourg, reiki Fribourg, kinésiologue Fribourg, hypnose Fribourg, sophrologue Fribourg, kundalini yoga Fribourg, médium Fribourg, burn-out Fribourg, angoisses Fribourg, désenvoûtement, ${sharedKeywordString}`,
    h1: "Activation Kundalini à Fribourg — Magnétiseur, Guérisseur & Thérapeute Énergétique",
    intro:
      "Magnétiseur, guérisseur énergétique, chamane, praticien en activation Kundalini et lecture d'âme pour Fribourg et sa région. À 35 minutes par l'A1, mon cabinet à Bevaix propose un travail énergétique profond dans un cadre respectueux — présentiel ou à distance, prix libre.",
    paragraphs: [
      {
        heading: "Fribourg — tradition, université, quête de sens",
        text:
          "Fribourg cultive une identité singulière : ville bilingue, universitaire (UniFR), ancrée dans une tradition spirituelle forte et en même temps ouverte aux approches nouvelles du bien-être. Beaucoup de Fribourgeois — de la ville de Fribourg, Bulle, Estavayer-le-Lac, Romont, Châtel-Saint-Denis, Morat, Marly, Villars-sur-Glâne, Düdingen — qui tapent « magnétiseur Fribourg », « énergéticienne autour de moi », « guérisseur Fribourg » ou « chamane Suisse romande » cherchent à concilier leur héritage, leur sensibilité et une soif contemporaine de reconnexion à soi. L'activation Kundalini ne s'oppose à aucune tradition : elle réveille une force vitale universelle, présente dans le corps et dans le souffle.",
      },
      {
        heading: "Qui vient me consulter depuis Fribourg ?",
        text:
          "Je reçois des soignants du HFR épuisés par des années de garde, des enseignants au bout du rouleau, des jeunes adultes en quête de sens après leurs études à l'Uni de Fribourg, des parents surchargés, des indépendants en burn-out, des personnes traversant une fatigue chronique inexpliquée, des angoisses, un deuil, une séparation, une hypersensibilité difficile à porter. L'activation Kundalini par l'alchimie respiratoire relance la circulation énergétique, soutient l'harmonisation des chakras et permet une libération émotionnelle en profondeur, dans un cadre complémentaire aux suivis médicaux nécessaires.",
      },
      {
        heading: "Soin chamanique, kinésiologie, lecture d'âme",
        text:
          "En plus de la Kundalini, je propose des soins chamaniques (recouvrement d'âme, dégagement d'entités, désenvoûtement, protection énergétique), de la kinésiologie, du nettoyage de l'aura et des lectures d'âme. Le choix de la modalité se fait ensemble lors d'un premier échange, selon ce que traverse votre corps, votre cœur et votre chemin de vie.",
      },
      {
        heading: "Accès depuis Fribourg — voiture ou train",
        text:
          "En voiture par l'A1, Bevaix se trouve à environ 35 minutes du centre de Fribourg. En train, la liaison via Yverdon relie les deux villes en un peu plus d'une heure. Le cabinet, au bord du lac de Neuchâtel, offre le calme nécessaire au travail énergétique et au soin chamanique. Pour beaucoup, ce déplacement hors du canton marque déjà un passage intérieur : sortir du quotidien, respirer autrement, déposer ce qui pèse.",
      },
      {
        heading: "Séances en présentiel ou à distance, prix libre",
        text:
          "Toutes les séances se déroulent en français. Elles peuvent avoir lieu au cabinet ou à distance depuis votre domicile fribourgeois, par visioconférence ou téléphone. Le protocole complet s'étale généralement sur 1 à 3 séances, selon votre rythme d'intégration. Les soins sont proposés en prix libre, avec une contribution consciente : l'objectif est que l'accompagnement reste accessible, sans pression financière.",
      },
      ...faqBlock("Fribourg"),
    ],
  },
  {
    slug: "/activation-kundalini-geneve",
    ville: "Genève",
    title: "Activation Kundalini Genève | Magnétiseur & Guérisseur Énergétique à Distance",
    description:
      "Magnétiseur, guérisseur énergétique, chamane pour Genève. Activation Kundalini, soins chamaniques, libération émotionnelle, burn-out. Séances à distance ou à Bevaix. Prix libre.",
    keywords: `activation kundalini Genève, magnétiseur Genève, guérisseur Genève, énergéticienne Genève, thérapeute énergétique Genève, chamane Genève, soin chamanique Genève, reiki Genève, kinésiologue Genève, hypnose Genève, sophrologue Genève, médium Genève, voyant Genève, burn-out Genève, angoisses Genève, kundalini à distance, désenvoûtement Genève, ${sharedKeywordString}`,
    h1: "Activation Kundalini à Genève — Magnétiseur, Guérisseur & Soin Énergétique à Distance",
    intro:
      "Magnétiseur, guérisseur énergétique, chamane et praticien en activation Kundalini pour Genève et sa région. Depuis mon cabinet à Bevaix, je propose des séances à distance pleinement efficaces (visioconférence ou téléphone), ou un déplacement pour un travail plus immersif. Prix libre, accompagnement respectueux.",
    paragraphs: [
      {
        heading: "Genève — ville internationale, corps sous pression",
        text:
          "Genève concentre une intensité rare : institutions internationales (ONU, OMS, OMC), finance, horlogerie, ONG, diplomatie, communauté expatriée, université. Cette densité crée une pression particulière — décalages horaires, exigence permanente, isolement affectif malgré la foule, difficulté à ralentir, expatriation loin des racines. De plus en plus de Genevois — de la ville de Genève, Carouge, Vernier, Meyrin, Onex, Lancy, Versoix, Chêne-Bougeries, Thônex, Grand-Saconnex — cherchent « magnétiseur Genève », « énergéticienne autour de moi », « guérisseur Genève », « chamane Suisse romande » ou « thérapeute énergétique Genève » pour retrouver un ancrage. L'activation Kundalini répond à cette quête : réveiller la source de vie intérieure au-delà des identités professionnelles et des rôles sociaux.",
      },
      {
        heading: "La séance à distance depuis Genève — aussi profonde qu'en présentiel",
        text:
          "Genève étant à près de deux heures de Bevaix, la plupart de mes consultants genevois choisissent la séance à distance. Par visioconférence (Zoom, WhatsApp, FaceTime) ou téléphone, depuis un espace calme chez vous, le soin énergétique, l'activation Kundalini et le soin chamanique se déploient avec une vraie intensité. Ce qui compte, c'est votre disponibilité intérieure, votre respiration, votre intention et le cadre posé ensemble avant de commencer.",
      },
      {
        heading: "Activation Kundalini, soin chamanique, libération émotionnelle",
        text:
          "Le protocole se déroule par alchimie respiratoire : un travail précis sur le souffle qui déclenche la montée de Kundalini, libère les mémoires bloquées et soutient l'harmonisation des chakras. J'y ajoute, selon le besoin, un soin chamanique — recouvrement d'âme, dégagement d'entités, désenvoûtement, protection énergétique — un travail de libération émotionnelle, un nettoyage de l'aura ou une lecture d'âme. Le protocole complet s'étale sur 1 à 3 séances, avec un temps d'intégration entre chaque étape.",
      },
      {
        heading: "Pour quels motifs viennent les Genevois ?",
        text:
          "Burn-out des cadres onusiens, angoisses des traders, épuisement des expatriés loin de leurs racines, insomnies chroniques, crises de panique, deuil, séparation, quête de sens dans un environnement ultra-matérialiste, hypersensibilité envahissante, trauma d'exil, sentiment de vide malgré la réussite extérieure. L'activation Kundalini et les soins chamaniques offrent un espace où déposer ces charges et retrouver une circulation énergétique fluide.",
      },
      {
        heading: "Prix libre — même à Genève",
        text:
          "Malgré le coût de la vie élevé à Genève, tous les soins sont proposés en prix libre avec un prix indicatif de référence. L'argent n'est jamais un obstacle à la reconnexion à soi. Vous choisissez la contribution qui reflète votre situation et la valeur ressentie du travail effectué ensemble. Pour réserver, utilisez la page rendez-vous, ou contactez-moi d'abord si vous hésitez entre séance à distance et déplacement à Bevaix.",
      },
      ...faqBlock("Genève"),
    ],
  },
];

export const getCityPage = (slug: string) => cityPages.find((page) => page.slug === slug);
