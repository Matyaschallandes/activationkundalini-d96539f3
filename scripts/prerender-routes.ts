/**
 * SEO snapshots per route.
 * Injected into <div id="root">…</div> at build time so crawlers (Google, Bing,
 * LLM scrapers, réseaux sociaux) see the main text immediately.
 * React remplace ce contenu à l'hydratation via createRoot — pas de conflit.
 */

import { cityPages } from "../src/data/cityPages";

export type RouteSnapshot = {
  path: string;
  title: string;
  description: string;
  canonical: string;
  /** Inner HTML injected inside <div id="root"> — texte SEO principal */
  content: string;
};

const BASE = "https://www.activationkundalini.ch";

const commonNav = `
<nav aria-label="Navigation principale">
  <a href="/">Accueil</a> ·
  <a href="/la-kundalini">La Kundalini</a> ·
  <a href="/lecture-ame">Lecture d'âme</a> ·
  <a href="/offres">Offres</a> ·
  <a href="/a-propos">À propos</a> ·
  <a href="/cercle-de-guerison">Cercle de guérison</a> ·
  <a href="/blog">Blog</a> ·
  <a href="/contact">Contact</a> ·
  <a href="/rendez-vous">Prendre rendez-vous</a>
</nav>`;

const commonFooter = `
<footer>
  <p><strong>Karmaequilego — Matyas Challandes</strong> · Chemin du Cuard 22, 2022 Bevaix, Neuchâtel, Suisse</p>
  <p>Téléphone / WhatsApp : <a href="tel:+41762445552">+41 76 244 55 52</a> · Email : <a href="mailto:matyas.challandes@gmail.com">matyas.challandes@gmail.com</a></p>
  <p>Séances en présentiel à Bevaix (Neuchâtel) et à distance dans toute la Suisse romande : Vaud, Genève, Fribourg, Jura, Valais, Berne francophone.</p>
</footer>`;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const citySnapshots: RouteSnapshot[] = cityPages.map((page) => ({
  path: page.slug,
  title: page.title,
  description: page.description,
  canonical: `${BASE}${page.slug}`,
  content: `
${commonNav}
<main>
  <h1>${escapeHtml(page.h1)}</h1>
  <p>${escapeHtml(page.intro)}</p>
  ${page.paragraphs
    .map(
      (block) => `${block.heading ? `<h2>${escapeHtml(block.heading)}</h2>\n  ` : ""}<p>${escapeHtml(block.text)}</p>`,
    )
    .join("\n  ")}
  <p><a href="/rendez-vous">Prendre rendez-vous</a> · <a href="/contact">Me contacter</a> · <a href="/offres">Voir toutes les offres</a>.</p>
</main>
${commonFooter}`,
}));

export const routes: RouteSnapshot[] = [
  {
    path: "/",
    title: "Guérisseur Énergétique & Chamane Suisse Romande | Kundalini, Chamanisme, Burn-out — Bevaix",
    description:
      "Guérisseur énergétique et chamane à Bevaix (Neuchâtel). Activation Kundalini, soins chamaniques (désenvoûtement, recouvrement d'âme, dégagement d'entités), burn-out, traumatismes. En présentiel et à distance en Suisse romande.",
    canonical: `${BASE}/`,
    content: `
${commonNav}
<main>
  <h1>Guérisseur Énergétique & Chamane en Suisse Romande — Activation Kundalini à Bevaix</h1>
  <p>Matyas Challandes accompagne les personnes traversant burn-out, anxiété, fatigue chronique, baisse de moral, traumatismes ou quête de sens à travers l'activation Kundalini et les soins énergétiques et chamaniques. Séances en présentiel à Bevaix (Neuchâtel) et à distance dans toute la Suisse romande.</p>

  <h2>Un accompagnement pour se reconstruire et se reconnecter à soi</h2>
  <p>La Kundalini est cette force de vie profonde qui, une fois activée, relance la circulation énergétique, libère les mémoires bloquées et permet de retrouver clarté, ancrage et vitalité. Le travail se déroule en 1 à 3 séances d'alchimie respiratoire personnalisée, selon votre rythme.</p>

  <h2>Prestations disponibles</h2>
  <ul>
    <li><a href="/la-kundalini">Activation Kundalini</a> — éveil énergétique, harmonisation des chakras, libération karmique</li>
    <li><a href="/lecture-ame">Lecture d'âme</a> — guidance intuitive et clarification du chemin de vie</li>
    <li><a href="/cercle-de-guerison">Cercle de guérison</a> — soins collectifs, énergie de groupe</li>
    <li><a href="/offres">Toutes les offres</a> — séances individuelles, forfaits, prix libre</li>
  </ul>

  <h2>Accompagnements spécifiques</h2>
  <ul>
    <li><a href="/accompagnement-burn-out-suisse-romande">Burn-out & épuisement</a></li>
    <li><a href="/retrouver-energie-fatigue-chronique">Fatigue chronique</a></li>
    <li><a href="/apaiser-anxiete-angoisses">Anxiété & angoisses</a></li>
    <li><a href="/retrouver-elan-baisse-de-moral">Baisse de moral & manque d'élan</a></li>
  </ul>

  <h2>Zones d'intervention en Suisse romande</h2>
  <p>Séances énergétiques disponibles dans les cantons de :
    <a href="/soins-energetiques-canton-vaud">Vaud</a>,
    <a href="/soins-energetiques-canton-fribourg">Fribourg</a>,
    <a href="/soins-energetiques-canton-geneve">Genève</a>,
    <a href="/soins-energetiques-canton-valais">Valais</a>,
    <a href="/soins-energetiques-canton-jura">Jura</a>,
    <a href="/soins-energetiques-jura-bernois">Jura bernois & Berne francophone</a>,
    et bien sûr le canton de Neuchâtel (Bevaix, La Grande Béroche).
  </p>

  <p>Tous les soins sont proposés en <strong>prix libre</strong> — l'argent n'est jamais un obstacle à la reconnexion à soi.</p>

  <p><a href="/rendez-vous">Prendre rendez-vous</a> · <a href="/contact">Nous contacter</a> · <a href="/a-propos">En savoir plus sur Matyas Challandes</a></p>
</main>
${commonFooter}`,
  },
  {
    path: "/la-kundalini",
    title: "Activation Kundalini en Suisse Romande | Éveil Énergétique — Bevaix, Neuchâtel",
    description:
      "Activation Kundalini par alchimie respiratoire à Bevaix (Neuchâtel). Éveil de l'énergie vitale, harmonisation des chakras, libération karmique. Séances en Suisse romande et à distance.",
    canonical: `${BASE}/la-kundalini`,
    content: `
${commonNav}
<main>
  <h1>L'Activation Kundalini — Éveil de l'énergie vitale</h1>
  <p>La Kundalini est l'énergie de vie fondamentale qui sommeille à la base de la colonne vertébrale. Son activation, à travers l'alchimie respiratoire, permet de relancer la circulation énergétique, d'harmoniser les chakras et de libérer les mémoires et blocages inscrits dans le corps subtil.</p>
  <h2>Le processus en 1 à 3 séances</h2>
  <p>Chaque activation est personnalisée. Le protocole se déroule habituellement en 1 à 3 séances d'alchimie respiratoire, selon la sensibilité et le rythme de chaque personne. Le corps se réajuste progressivement, les émotions se dénouent, l'énergie circule à nouveau librement.</p>
  <h2>Pour qui ?</h2>
  <p>Toute personne en quête de reconnexion à soi, traversant un burn-out, une fatigue chronique, une baisse de moral, des angoisses, ou souhaitant approfondir son chemin spirituel. <a href="/rendez-vous">Prendre rendez-vous</a> · <a href="/offres">Voir les offres</a>.</p>
</main>
${commonFooter}`,
  },
  {
    path: "/lecture-ame",
    title: "Lecture d'Âme — Guidance Intuitive en Suisse Romande | Karmaequilego",
    description:
      "Lecture d'âme et guidance intuitive à Bevaix (Neuchâtel). Clarifiez votre chemin de vie, vos blocages karmiques et votre mission d'âme. Séances en présentiel et à distance en Suisse romande.",
    canonical: `${BASE}/lecture-ame`,
    content: `
${commonNav}
<main>
  <h1>Lecture d'Âme — Guidance intuitive et clarification du chemin de vie</h1>
  <p>La lecture d'âme est un espace de guidance intuitive qui permet de mettre en lumière les mémoires, les contrats d'âme et les schémas inscrits dans votre histoire énergétique. Elle offre une lecture claire de votre chemin de vie et des étapes à venir.</p>
  <h2>Ce que la lecture d'âme peut apporter</h2>
  <p>Clarification des blocages récurrents, compréhension de la dynamique karmique, identification des dons et de la mission d'âme, apaisement des questionnements existentiels.</p>
  <p><a href="/rendez-vous">Réserver une lecture d'âme</a> · <a href="/la-kundalini">Découvrir aussi l'activation Kundalini</a>.</p>
</main>
${commonFooter}`,
  },
  {
    path: "/offres",
    title: "Offres & Tarifs — Soins Énergétiques Suisse Romande | Prix Libre",
    description:
      "Toutes les offres de soins énergétiques : activation Kundalini, lecture d'âme, cercle de guérison, à la carte. Prix libre — l'argent n'est pas un obstacle. Bevaix, Suisse romande, à distance.",
    canonical: `${BASE}/offres`,
    content: `
${commonNav}
<main>
  <h1>Offres & Tarifs — Soins énergétiques en prix libre</h1>
  <p>Tous les soins sont proposés en prix libre (donation) avec des prix indicatifs de référence. L'argent n'est jamais un obstacle à la reconnexion à soi.</p>
  <h2>Séances principales</h2>
  <ul>
    <li><a href="/la-kundalini">Activation Kundalini</a> (1 à 3 séances)</li>
    <li><a href="/lecture-ame">Lecture d'âme</a></li>
    <li><a href="/cercle-de-guerison">Cercle de guérison</a> — soin collectif</li>
  </ul>
  <h2>À la carte</h2>
  <p>Soins ponctuels : harmonisation énergétique, nettoyage de l'aura, libération émotionnelle, kinésiologie, protection énergétique.</p>
  <p><a href="/rendez-vous">Prendre rendez-vous</a> · <a href="/contact">Poser une question</a>.</p>
</main>
${commonFooter}`,
  },
  {
    path: "/a-propos",
    title: "À propos — Matyas Challandes, Guérisseur Énergétique & Chamane | Bevaix, Neuchâtel",
    description:
      "Matyas Challandes, guérisseur énergétique et chamane à Bevaix (Neuchâtel). Parcours, formations (Kundalini, chamanisme, kinésiologie), approche des soins en Suisse romande.",
    canonical: `${BASE}/a-propos`,
    content: `
${commonNav}
<main>
  <h1>À propos — Matyas Challandes</h1>
  <p>Guérisseur énergétique et chamane basé à Bevaix, dans le canton de Neuchâtel. Depuis plusieurs années, Matyas accompagne des personnes de toute la Suisse romande à travers l'activation Kundalini, les soins chamaniques et la lecture d'âme.</p>
  <h2>Formation & parcours</h2>
  <p>Formé à la Kundalini, au chamanisme (désenvoûtement, recouvrement d'âme, dégagement d'entités), à la kinésiologie et à diverses approches de guérison énergétique. Un parcours nourri par une expérience personnelle profonde de reconstruction.</p>
  <h2>Une approche respectueuse et souveraine</h2>
  <p>Chaque accompagnement respecte votre rythme, votre autonomie et votre souveraineté. Aucun dogme, aucune promesse médicale — un espace de bien-être, d'harmonisation et de stabilisation.</p>
  <p><a href="/mon-histoire">Lire mon histoire complète</a> · <a href="/rendez-vous">Prendre rendez-vous</a>.</p>
</main>
${commonFooter}`,
  },
  {
    path: "/mon-histoire",
    title: "Mon Histoire — Le chemin qui m'a mené aux soins énergétiques | Matyas Challandes",
    description:
      "L'histoire personnelle de Matyas Challandes : traversée du burn-out, éveil Kundalini, reconstruction, chemin vers l'accompagnement énergétique en Suisse romande.",
    canonical: `${BASE}/mon-histoire`,
    content: `
${commonNav}
<main>
  <h1>Mon Histoire — Le chemin vers la guérison</h1>
  <p>Le parcours qui m'a mené aux soins énergétiques est né d'une traversée personnelle : effondrement, burn-out, reconstruction, éveil de la Kundalini. C'est en vivant moi-même cette transformation que j'ai découvert la puissance des soins énergétiques et du chamanisme.</p>
  <p><a href="/a-propos">En savoir plus sur mon approche</a> · <a href="/la-kundalini">Découvrir l'activation Kundalini</a>.</p>
</main>
${commonFooter}`,
  },
  {
    path: "/contact",
    title: "Contact — Prendre rendez-vous en Suisse Romande | Karmaequilego, Bevaix",
    description:
      "Contactez Matyas Challandes pour une séance de soin énergétique, activation Kundalini ou lecture d'âme. Bevaix (Neuchâtel), toute la Suisse romande, séances à distance.",
    canonical: `${BASE}/contact`,
    content: `
${commonNav}
<main>
  <h1>Contact — Prendre rendez-vous</h1>
  <p>Pour toute question, prise de rendez-vous ou demande d'information : <a href="tel:+41762445552">+41 76 244 55 52</a> (WhatsApp), <a href="mailto:matyas.challandes@gmail.com">matyas.challandes@gmail.com</a>.</p>
  <p>Adresse : Chemin du Cuard 22, 2022 Bevaix, Neuchâtel, Suisse. Séances également disponibles à distance dans toute la Suisse romande.</p>
  <p><a href="/rendez-vous">Réserver directement en ligne</a>.</p>
</main>
${commonFooter}`,
  },
  {
    path: "/rendez-vous",
    title: "Prendre Rendez-vous — Soins Énergétiques Bevaix, Suisse Romande",
    description:
      "Réservez votre séance d'activation Kundalini, lecture d'âme ou soin énergétique. Présentiel à Bevaix (Neuchâtel) ou à distance en Suisse romande.",
    canonical: `${BASE}/rendez-vous`,
    content: `
${commonNav}
<main>
  <h1>Prendre Rendez-vous</h1>
  <p>Réservez directement en ligne votre séance d'activation Kundalini, lecture d'âme, soin chamanique ou séance à la carte. Créneaux en présentiel à Bevaix (Neuchâtel) ou en visioconférence.</p>
  <p><a href="/offres">Voir toutes les offres et tarifs</a> · <a href="/contact">Nous contacter avant de réserver</a>.</p>
</main>
${commonFooter}`,
  },
  {
    path: "/cercle-de-guerison",
    title: "Cercle de Guérison — Soins Énergétiques Collectifs | Suisse Romande",
    description:
      "Cercle de guérison collectif : soin énergétique en groupe, activation Kundalini partagée, méditation guidée. À Bevaix (Neuchâtel) et en Suisse romande.",
    canonical: `${BASE}/cercle-de-guerison`,
    content: `
${commonNav}
<main>
  <h1>Cercle de Guérison — Le pouvoir du soin en groupe</h1>
  <p>Un espace collectif où l'énergie du groupe amplifie la guérison individuelle. Méditation guidée, activation Kundalini partagée, libération émotionnelle en douceur.</p>
  <p><a href="/rendez-vous">Rejoindre un prochain cercle</a> · <a href="/offres">Voir toutes les offres</a>.</p>
</main>
${commonFooter}`,
  },
  {
    path: "/blog",
    title: "Blog — Kundalini, Soins Énergétiques & Chamanisme | Karmaequilego",
    description:
      "Articles sur l'activation Kundalini, les soins énergétiques, le chamanisme, le burn-out, la fatigue chronique et l'éveil spirituel en Suisse romande.",
    canonical: `${BASE}/blog`,
    content: `
${commonNav}
<main>
  <h1>Blog — Kundalini, soins énergétiques & éveil spirituel</h1>
  <p>Articles, réflexions et guides pratiques sur l'activation Kundalini, les soins énergétiques, le chamanisme et les grandes traversées de vie (burn-out, fatigue chronique, angoisses, quête de sens).</p>
  <h2>Articles récents</h2>
  <ul>
    <li><a href="/blog/kundalini-burn-out-reconstruction-energetique">Kundalini & burn-out : comment l'énergie vitale aide à se reconstruire</a></li>
    <li><a href="/blog/fatigue-chronique-kundalini-circulation-energetique">Fatigue chronique : relancer la circulation énergétique par la Kundalini</a></li>
  </ul>
</main>
${commonFooter}`,
  },
  {
    path: "/accompagnement-burn-out-suisse-romande",
    title: "Accompagnement Burn-out en Suisse Romande | Soins Énergétiques Kundalini",
    description:
      "Accompagnement énergétique du burn-out en Suisse romande : activation Kundalini, libération émotionnelle, reconstruction énergétique. Bevaix (Neuchâtel), à distance.",
    canonical: `${BASE}/accompagnement-burn-out-suisse-romande`,
    content: `
${commonNav}
<main>
  <h1>Accompagnement Burn-out en Suisse Romande</h1>
  <p>Le burn-out est un effondrement énergétique profond. L'accompagnement par l'activation Kundalini permet de relancer la circulation vitale, de libérer les mémoires d'épuisement et de reconstruire progressivement l'ancrage et la vitalité.</p>
  <h2>Comment se déroule l'accompagnement</h2>
  <p>1 à 3 séances d'alchimie respiratoire personnalisée. Le corps se réajuste, les émotions se dénouent, l'énergie revient. Approche complémentaire (jamais substitut) à un suivi médical.</p>
  <p><a href="/rendez-vous">Prendre rendez-vous</a> · <a href="/blog/kundalini-burn-out-reconstruction-energetique">Lire l'article détaillé</a>.</p>
</main>
${commonFooter}`,
  },
  {
    path: "/retrouver-energie-fatigue-chronique",
    title: "Fatigue Chronique — Retrouver son Énergie | Soins Kundalini Suisse Romande",
    description:
      "Fatigue chronique : accompagnement énergétique par l'activation Kundalini pour relancer la circulation vitale et retrouver l'élan. Bevaix (Neuchâtel), à distance.",
    canonical: `${BASE}/retrouver-energie-fatigue-chronique`,
    content: `
${commonNav}
<main>
  <h1>Retrouver son Énergie face à la Fatigue Chronique</h1>
  <p>La fatigue chronique traduit souvent une circulation énergétique bloquée, des mémoires non digérées, un épuisement des ressources subtiles. L'activation Kundalini permet de relancer ces flux et de retrouver progressivement vitalité et clarté.</p>
  <p><a href="/rendez-vous">Prendre rendez-vous</a> · <a href="/blog/fatigue-chronique-kundalini-circulation-energetique">Lire l'article détaillé</a>.</p>
</main>
${commonFooter}`,
  },
  {
    path: "/apaiser-anxiete-angoisses",
    title: "Apaiser l'Anxiété & les Angoisses | Soins Énergétiques Suisse Romande",
    description:
      "Accompagnement énergétique de l'anxiété et des angoisses : activation Kundalini, ancrage, harmonisation. Bevaix (Neuchâtel), Suisse romande, à distance.",
    canonical: `${BASE}/apaiser-anxiete-angoisses`,
    content: `
${commonNav}
<main>
  <h1>Apaiser l'Anxiété et les Angoisses</h1>
  <p>L'anxiété est souvent le signal d'un système nerveux et énergétique en hypervigilance. Le travail énergétique par la Kundalini apaise, ancre et libère les mémoires qui alimentent le mental agité.</p>
  <p><a href="/rendez-vous">Prendre rendez-vous</a>.</p>
</main>
${commonFooter}`,
  },
  {
    path: "/retrouver-elan-baisse-de-moral",
    title: "Baisse de Moral — Retrouver l'Élan | Soins Énergétiques Suisse Romande",
    description:
      "Retrouver l'élan de vie face à la baisse de moral et à la démotivation. Activation Kundalini, soins énergétiques. Bevaix (Neuchâtel), Suisse romande.",
    canonical: `${BASE}/retrouver-elan-baisse-de-moral`,
    content: `
${commonNav}
<main>
  <h1>Retrouver l'Élan face à la Baisse de Moral</h1>
  <p>La baisse de moral, la démotivation, la sensation de vide traduisent un chakra du cœur en repli et un flux énergétique ralenti. Le soin énergétique rouvre l'espace intérieur, relance la vitalité et redonne le goût du mouvement.</p>
  <p><a href="/rendez-vous">Prendre rendez-vous</a>.</p>
</main>
${commonFooter}`,
  },
  ...(
    [
      ["vaud", "Vaud", "Lausanne, Montreux, Vevey, Nyon, Yverdon"],
      ["fribourg", "Fribourg", "Fribourg, Bulle, Morat, Estavayer"],
      ["geneve", "Genève", "Genève, Carouge, Meyrin, Vernier"],
      ["valais", "Valais", "Sion, Martigny, Monthey, Sierre"],
      ["jura", "Jura", "Delémont, Porrentruy, Saignelégier"],
    ] as const
  ).map(([slug, canton, villes]) => ({
    path: `/soins-energetiques-canton-${slug}`,
    title: `Soins Énergétiques Canton de ${canton} | Activation Kundalini Suisse Romande`,
    description: `Soins énergétiques et activation Kundalini pour le canton de ${canton} (${villes}). Séances en présentiel à Bevaix et à distance partout en Suisse romande.`,
    canonical: `${BASE}/soins-energetiques-canton-${slug}`,
    content: `
${commonNav}
<main>
  <h1>Soins Énergétiques dans le Canton de ${canton}</h1>
  <p>Matyas Challandes accompagne les habitants du canton de ${canton} (${villes} et environs) par l'activation Kundalini, la lecture d'âme et les soins chamaniques. Séances en présentiel à Bevaix (Neuchâtel, à proximité) ou à distance.</p>
  <h2>Prestations disponibles pour le canton de ${canton}</h2>
  <ul>
    <li><a href="/la-kundalini">Activation Kundalini</a></li>
    <li><a href="/lecture-ame">Lecture d'âme</a></li>
    <li><a href="/cercle-de-guerison">Cercle de guérison</a></li>
    <li><a href="/accompagnement-burn-out-suisse-romande">Accompagnement burn-out</a></li>
  </ul>
  <p><a href="/rendez-vous">Prendre rendez-vous</a> · <a href="/contact">Poser une question</a>.</p>
</main>
${commonFooter}`,
  })),
  {
    path: "/soins-energetiques-jura-bernois",
    title: "Soins Énergétiques Jura Bernois & Berne Francophone | Kundalini Suisse Romande",
    description:
      "Soins énergétiques et activation Kundalini pour le Jura bernois et la partie francophone du canton de Berne (Moutier, Saint-Imier, Bienne). Bevaix et à distance.",
    canonical: `${BASE}/soins-energetiques-jura-bernois`,
    content: `
${commonNav}
<main>
  <h1>Soins Énergétiques — Jura Bernois & Berne Francophone</h1>
  <p>Accompagnement énergétique pour les habitants du Jura bernois et de la partie francophone du canton de Berne (Moutier, Saint-Imier, Tavannes, Bienne). Activation Kundalini, lecture d'âme, soins chamaniques.</p>
  <p><a href="/rendez-vous">Prendre rendez-vous</a> · <a href="/offres">Voir les offres</a>.</p>
</main>
${commonFooter}`,
  },
  ...citySnapshots,
];
