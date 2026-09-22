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
    title: "Guérisseur & Chamane à Neuchâtel — Activation Kundalini | 1h offerte",
    description:
      "Tu te sens vidé(e), bloqué(e) ? Matyas Challandes, guérisseur et chamane à Bevaix (Neuchâtel) : activation Kundalini, soins chamaniques, kinésiologie. Première heure découverte offerte, en présentiel ou à distance. ★ 4,9/5 sur Google.",
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
    title: "Activation Kundalini : ce qui se passe vraiment | Suisse — 1h offerte",
    description:
      "Activation Kundalini en Suisse romande : comment l'énergie remonte la colonne, ce que le corps libère, le déroulement d'une séance, à qui elle s'adresse. Bevaix (Neuchâtel) ou à distance. Première heure offerte.",
    canonical: `${BASE}/la-kundalini`,
    content: `
${commonNav}
<main>
  <h1>Activation Kundalini — ce qui se passe vraiment pendant une séance</h1>
  <p>La Kundalini est l'énergie de vie qui sommeille à la base de la colonne vertébrale. Lorsqu'elle est activée, elle remonte le long de la colonne et vient dissoudre les blocages sur son passage : le corps peut alors décharger ce qu'il n'a jamais pu exprimer. Séances à Bevaix (canton de Neuchâtel) et à distance partout en Suisse romande, en prix libre. <a href="/offre-decouverte-gratuite">Première heure découverte offerte</a>.</p>

  <h2>Qu'est-ce que l'activation Kundalini ?</h2>
  <p>Ce n'est pas une croyance à adopter, mais une expérience corporelle. Par l'alchimie respiratoire, la respiration devient le levier qui relance la circulation énergétique. L'énergie monte, rencontre les zones figées — bassin, ventre, plexus, gorge — et les remet en mouvement. Beaucoup de personnes ressentent des vagues de chaleur, des tremblements légers, des larmes qui viennent sans raison, puis un grand calme.</p>

  <h2>Pourquoi je nettoie d'abord, puis j'active</h2>
  <p>Un blocage empêche l'énergie de circuler, et là où il y a un blocage il y a une fissure : des énergies parasites peuvent s'y fixer. Certains blocages viennent d'avant la naissance, d'une lignée familiale, d'un événement vécu à trois ou quatre ans, parfois d'un pacte passé avec l'ombre. Des fragments de soi ont pu quitter le corps pour se protéger. C'est pourquoi je commence par le <a href="/chamanisme-neuchatel">travail chamanique et énergétique</a> — recouvrement d'âme, réintégration des fragments, désenvoûtement, dégagement — puis j'active la Kundalini sur un terrain dégagé.</p>

  <h2>Comment se déroule une séance</h2>
  <p>Nous prenons d'abord contact et fixons un rendez-vous. Tu remplis si tu le souhaites le <a href="/carnet-de-preparation">carnet de préparation en ligne</a> : il ouvre les tiroirs de l'inconscient et prépare à libérer ce qui est prêt à l'être. Tu peux aussi faire ta lecture d'âme. Le jour de la séance, nous parlons de ce qui se passe dans ta vie, puis je fais la détection des blocages par test énergétique et par <a href="/kinesiologie-neuchatel">kinésiologie</a> — j'arrive à dater le blocage, à nommer l'émotion et sa cause. Et tout à la fin vient l'activation Kundalini, un soin chamanique, ou les deux.</p>

  <h2>Combien de temps, combien de séances ?</h2>
  <p>Compte environ deux heures pour une séance complète. Le protocole se déroule habituellement en 1 à 3 séances, selon la sensibilité et le rythme de chacun. Après la séance, il est fréquent de ressentir une grande fatigue le premier jour, puis une clarté et une légèreté qui s'installent sur une à deux semaines. Boire beaucoup d'eau, dormir, marcher : le corps continue son travail.</p>

  <h2>À qui l'activation Kundalini s'adresse-t-elle ?</h2>
  <p>Aux personnes qui traversent un <a href="/accompagnement-burn-out-suisse-romande">burn-out</a>, une <a href="/retrouver-energie-fatigue-chronique">fatigue chronique</a>, des <a href="/apaiser-anxiete-angoisses">angoisses</a>, une <a href="/retrouver-elan-baisse-de-moral">baisse de moral</a>, un deuil, un traumatisme ancien — et à celles qui veulent simplement se reconnecter à qui elles sont venues incarner.</p>

  <h2>Commencer</h2>
  <p><a href="/offre-decouverte-gratuite">Offre découverte gratuite (1 heure)</a> · <a href="/rendez-vous">Prendre rendez-vous</a> · <a href="/deroulement-seance">Le déroulement détaillé d'une séance</a> · <a href="/blog">Articles sur la Kundalini</a>.</p>
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
    title: "Matyas Challandes — Guérisseur & Chamane à Bevaix, Neuchâtel",
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
    title: "Blog Kundalini & Chamanisme — Comprendre l'éveil énergétique",
    description:
      "Réponses concrètes aux questions qu'on me pose : combien de temps dure une activation Kundalini, ce qu'on ressent après, différence entre Kundalini, soins énergétiques et chamanisme, burn-out et fatigue chronique.",
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
    title: "Burn-out : retrouver son énergie — Suisse romande | 1h offerte",
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
    title: "Fatigue chronique : et si l'énergie ne circulait plus ? | 1h offerte",
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
    title: "Anxiété & angoisses : apaiser le corps | Suisse romande, 1h offerte",
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
    title: "Baisse de moral : retrouver l'élan | Suisse romande, 1h offerte",
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
    title: `Soins Énergétiques ${canton} — Kundalini & Chamanisme | 1h offerte`,
    description: `Soins énergétiques, activation Kundalini et soins chamaniques pour le canton de ${canton} (${villes}). Première heure découverte offerte, à distance ou en présentiel à Bevaix (NE). Prix libre. ★ 4,9/5 sur Google.`,
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
    title: "Soins Énergétiques Jura Bernois & Bienne — Kundalini | 1h offerte",
    description:
      "Soins énergétiques, activation Kundalini et soins chamaniques pour le Jura bernois et Berne francophone (Moutier, Saint-Imier, Tavannes, Bienne). Première heure offerte, à distance ou à Bevaix (NE). Prix libre.",
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
  {
    path: "/reiki-neuchatel",
    title: "Reiki à Neuchâtel — Séance douce à Bevaix | 1h offerte, prix libre",
    description: "Séance de Reiki et Reiki Kundalini à Bevaix, canton de Neuchâtel : apaiser le stress, la fatigue et le mental. Première heure découverte offerte. Prix libre, présentiel ou à distance.",
    canonical: `${BASE}/reiki-neuchatel`,
    content: `${commonNav}<main><h1>Reiki à Neuchâtel — Un soin énergétique doux pour retrouver l'harmonie</h1><p>Séances de Reiki et Reiki Kundalini à Bevaix, canton de Neuchâtel, avec Matyas Challandes. Reiki traditionnel enrichi de la lignée Kundalini pour dénouer les blocages profonds, apaiser le système nerveux et relancer la circulation énergétique.</p><p><a href="/rendez-vous">Prendre rendez-vous</a> · <a href="/offres">Voir les offres</a>.</p></main>${commonFooter}`,
  },
  {
    path: "/lahochi-neuchatel",
    title: "Lahochi à Neuchâtel — Soin énergétique haute vibration | Karmaequilego",
    description: "Séance de Lahochi à Neuchâtel avec Matyas Challandes à Bevaix. Soin haute fréquence pour libérer les blocages profonds.",
    canonical: `${BASE}/lahochi-neuchatel`,
    content: `${commonNav}<main><h1>Lahochi à Neuchâtel — Un soin de haute fréquence pour libérer les blocages profonds</h1><p>Le Lahochi est un soin énergétique multidimensionnel de haute vibration. Séances à Bevaix (Neuchâtel) et à distance dans toute la Suisse romande.</p><p><a href="/rendez-vous">Prendre rendez-vous</a> · <a href="/offres">Voir les offres</a>.</p></main>${commonFooter}`,
  },
  {
    path: "/chamanisme-neuchatel",
    title: "Chamane à Neuchâtel — Recouvrement d'âme & désenvoûtement | Bevaix",
    description: "Soins chamaniques à Neuchâtel avec Matyas Challandes : désenvoûtement, recouvrement d'âme, dégagement d'entités, coupure de liens.",
    canonical: `${BASE}/chamanisme-neuchatel`,
    content: `${commonNav}<main><h1>Chamanisme à Neuchâtel — Soins chamaniques traditionnels à Bevaix</h1><p>Chamane à Bevaix (Neuchâtel), je pratique des soins chamaniques ciblés : recouvrement d'âme, désenvoûtement, dégagement d'entités, coupure de liens, nettoyage énergétique. En présentiel ou à distance dans toute la Suisse romande.</p><p><a href="/rendez-vous">Prendre rendez-vous</a> · <a href="/offres">Voir les offres</a>.</p></main>${commonFooter}`,
  },
  {
    path: "/kinesiologie-neuchatel",
    title: "Kinésiologie à Neuchâtel — Trouver la cause du blocage | Bevaix",
    description: "Kinésiologie à Neuchâtel avec Matyas Challandes à Bevaix. Libération émotionnelle, mémoires cellulaires, stress, croyances limitantes.",
    canonical: `${BASE}/kinesiologie-neuchatel`,
    content: `${commonNav}<main><h1>Kinésiologie à Neuchâtel — Écouter le corps pour libérer ce qui bloque</h1><p>Kinésiologie à Bevaix (canton de Neuchâtel) avec Matyas Challandes. Test musculaire pour localiser les blocages, libérer stress, émotions et croyances limitantes. Approche combinée avec l'activation Kundalini et le chamanisme.</p><p><a href="/rendez-vous">Prendre rendez-vous</a> · <a href="/offres">Voir les offres</a>.</p></main>${commonFooter}`,
  },
  {
    path: "/kundalini-solstice",
    title: "Kundalini & Solstice — Rituel énergétique de bascule saisonnière | Karmaequilego",
    description: "Solstice d'été, solstice d'hiver : comment aligner l'activation Kundalini avec les portails énergétiques de l'année. Séances en Suisse romande.",
    canonical: `${BASE}/kundalini-solstice`,
    content: `${commonNav}<main><h1>Kundalini & Solstice — rituel énergétique de bascule saisonnière</h1><p>Les solstices (21 juin, 21 décembre) sont des portails énergétiques puissants où l'énergie Kundalini circule plus facilement. Séances renforcées autour des quatre portails de l'année à Bevaix (Neuchâtel) et à distance dans toute la Suisse romande.</p><h2>Les 4 grands portails de l'année</h2><ul><li>Solstice d'hiver — renaissance de la lumière intérieure</li><li>Équinoxe de printemps — activation du feu de vie</li><li>Solstice d'été — apogée solaire et ouverture du cœur</li><li>Équinoxe d'automne — récolte et libération karmique</li></ul><p><a href="/rendez-vous">Réserver une séance de solstice</a> · <a href="/rituel-equinoxe">Voir le rituel d'équinoxe</a>.</p></main>${commonFooter}`,
  },
  {
    path: "/rituel-equinoxe",
    title: "Rituel énergétique d'équinoxe — Nettoyage & alignement saisonnier | Karmaequilego",
    description: "Équinoxes de printemps et d'automne : rituel de nettoyage énergétique, libération karmique et alignement. Bevaix (Neuchâtel) et à distance en Suisse romande.",
    canonical: `${BASE}/rituel-equinoxe`,
    content: `${commonNav}<main><h1>Rituel énergétique d'équinoxe — nettoyage et alignement saisonnier</h1><p>Les équinoxes (21 mars, 21 septembre) sont des moments d'équilibre parfait entre lumière et obscurité. Rituel de libération, nettoyage énergétique et alignement à la mission de vie. Séances à Bevaix (Neuchâtel) et à distance en Suisse romande.</p><p><a href="/rendez-vous">Réserver un rituel d'équinoxe</a> · <a href="/kundalini-solstice">Voir la page Solstice</a>.</p></main>${commonFooter}`,
  },
  {
    path: "/photos",
    title: "Photos — Cercles de Guérison & Séances Kundalini | Bevaix, Neuchâtel",
    description: "Photos des cercles de guérison collectifs et séances d'activation Kundalini animés par Matyas Challandes à Bevaix (Neuchâtel). Respiration alchimique, toucher énergétique, libération émotionnelle.",
    canonical: `${BASE}/photos`,
    content: `${commonNav}<main><h1>Le Cercle de Guérison en images</h1><p>Instants capturés pendant les cercles collectifs à Bevaix (Neuchâtel) : respiration alchimique, accompagnement par le toucher et activation de l'énergie vitale, dans un cadre sécurisé et bienveillant.</p><p><a href="/cercle-de-guerison">Découvrir le cercle de guérison</a> · <a href="/rendez-vous">Prendre rendez-vous</a>.</p></main>${commonFooter}`,
  },
  {
    path: "/carnet-de-preparation",
    title: "Carnet de préparation en ligne — Avant ta séance d'activation Kundalini | Karmaequilego",
    description: "Remplis en ligne ton carnet de préparation avant ta séance d'activation Kundalini : libération des mémoires, croyances limitantes, message du corps, clés d'harmonisation et PDF personnalisé à télécharger.",
    canonical: `${BASE}/carnet-de-preparation`,
    content: `${commonNav}<main><h1>Carnet de préparation en ligne à ta séance d'activation Kundalini</h1><p>Ce carnet prépare le corps et le mental à libérer les mémoires avant le soin énergétique. En neuf étapes guidées, tu clarifies ce que tu choisis de libérer, la version de toi que tu souhaites incarner, les peurs et croyances limitantes qui te retiennent, le message de ton corps et ton engagement des 72 heures.</p><h2>Ce que tu reçois à la fin</h2><p>Une lecture énergétique symbolique de tes réponses (centres énergétiques les plus sollicités, thèmes repérés), des clés d'harmonisation personnalisées, un tableau pour remplacer tes programmes limitants par de nouvelles vérités, un protocole de préparation des 72 heures, et ton carnet complet en PDF à télécharger.</p><h2>Confidentialité</h2><p>Tes réponses sont sauvegardées dans ton navigateur et transmises uniquement à Matyas Challandes pour préparer ta séance. Support de bien-être et de développement personnel, sans visée médicale.</p><p><a href="/deroulement-seance">Voir le déroulement d'une séance</a> · <a href="/rendez-vous">Prendre rendez-vous</a>.</p></main>${commonFooter}`,
  },
  ...citySnapshots,
];

