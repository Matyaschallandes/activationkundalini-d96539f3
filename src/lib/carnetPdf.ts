import { jsPDF } from "jspdf";
import { CarnetAnalysis, CARNET_STEPS } from "./carnetAnalysis";
import { AiCarnetAnalysis } from "./carnetAiTypes";

const QUESTION_LABELS: Record<string, string> = Object.fromEntries(
  CARNET_STEPS.flatMap((s) => s.questions.map((q) => [q.id, q.title]))
);


type Identity = {
  prenom: string;
  nom: string;
  email: string;
  telephone?: string;
  dateNaissance?: string;
};

export type CarnetPdfExtras = {
  ai?: AiCarnetAnalysis | null;
  resonance?: string | null;
  intention?: string | null;
};

const GOLD: [number, number, number] = [176, 137, 60];
const INK: [number, number, number] = [45, 40, 34];
const SOFT: [number, number, number] = [110, 100, 88];

/**
 * PDF de synthèse volontairement court (≈4-5 pages) : l'essentiel,
 * agréable à lire. Les réponses brutes restent consultables en ligne.
 */
export function generateCarnetPdf(
  identity: Identity,
  answers: Record<string, string>,
  analysis: CarnetAnalysis,
  intensity: number,
  extras: CarnetPdfExtras = {}
) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const W = 210;
  const M = 20;
  const maxW = W - M * 2;
  let y = 0;

  const newPage = () => {
    doc.addPage();
    y = M + 4;
  };
  const ensure = (needed: number) => {
    if (y + needed > 272) newPage();
  };

  const title = (text: string, size = 15) => {
    ensure(18);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(size);
    doc.setTextColor(...GOLD);
    const lines = doc.splitTextToSize(text, maxW);
    doc.text(lines, M, y);
    y += lines.length * (size * 0.45) + 3;
  };

  const body = (text: string, opts: { italic?: boolean; soft?: boolean; size?: number } = {}) => {
    const size = opts.size ?? 10.5;
    doc.setFont("helvetica", opts.italic ? "italic" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(...(opts.soft ? SOFT : INK));
    const lines = doc.splitTextToSize(text, maxW);
    lines.forEach((line: string) => {
      ensure(8);
      doc.text(line, M, y);
      y += size * 0.52;
    });
    y += 2;
  };

  const rule = () => {
    ensure(8);
    doc.setDrawColor(...GOLD);
    doc.setLineWidth(0.3);
    doc.line(M, y, W - M, y);
    y += 6;
  };

  const take = <T,>(arr: T[] | undefined, n: number): T[] => (arr ?? []).slice(0, n);

  // ---------- Page 1 : en-tête + essentiel
  doc.setFillColor(252, 249, 243);
  doc.rect(0, 0, 210, 297, "F");

  y = 34;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...GOLD);
  doc.text("Carnet de préparation", 105, y, { align: "center" });
  y += 9;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...INK);
  doc.text("Activation Kundalini · Karmaequilego", 105, y, { align: "center" });
  y += 7;
  doc.setFontSize(10);
  doc.setTextColor(...SOFT);
  doc.text(
    `${identity.prenom} ${identity.nom} · ${new Date().toLocaleDateString("fr-CH", { dateStyle: "long" })}`,
    105,
    y,
    { align: "center" }
  );
  y += 14;
  rule();

  body(
    "Voici la synthèse essentielle de ton carnet. Lis-la tranquillement, puis garde en tête une seule chose : ton intention. Le reste, ton corps saura.",
    { italic: true, soft: true }
  );

  y += 2;
  title("L'essentiel en un coup d'œil", 14);
  body(`Intensité ressentie : ${intensity} / 10`);
  if (analysis.themes.length) body(`Thèmes principaux : ${analysis.themes.slice(0, 4).join(" · ")}`);

  const p = analysis.primaryChakra;
  body(`Centre le plus sollicité : ${p.name} (${p.sanskrit}) — ${p.theme}`);
  body(`Clé d'harmonisation : ${p.cle}`);
  body(`Affirmation : « ${p.affirmation} »`, { italic: true });

  const ai = extras.ai;
  if (ai?.axe) {
    y += 2;
    title("Ton axe principal", 14);
    body(`« ${ai.axe.phrase} »`, { italic: true });
    if (ai.axe.pourquoi) body(ai.axe.pourquoi, { soft: true });
  }

  if (ai?.synthese?.length) {
    y += 2;
    title("Ce que révèle ton carnet", 14);
    take(ai.synthese, 2).forEach((s) => body(s));
  } else if (ai?.synthese_finale) {
    y += 2;
    title("Ce que révèle ton carnet", 14);
    body(ai.synthese_finale);
  }

  // ---------- Tes questions et tes réponses
  const filled = Object.entries(answers ?? {}).filter(([, v]) => String(v ?? "").trim());
  if (filled.length) {
    newPage();
    title("Tes questions et tes réponses");
    body("Le reflet fidèle de ce que tu as écrit aujourd'hui.", { soft: true, italic: true, size: 9.5 });
    rule();
    filled.forEach(([id, value]) => {
      const q = QUESTION_LABELS[id] ?? id;
      const text = String(value).trim();
      const shown = text.length > 700 ? `${text.slice(0, 700)}…` : text;
      ensure(20);
      body(q, { soft: true, size: 9 });
      body(shown, { size: 9.5 });
      y += 1;
    });
  }


  // ---------- Thèmes & émotions
  const themes = take(ai?.themes, 3);
  const emotions = take(ai?.emotions, 2);
  if (themes.length || emotions.length) {
    newPage();
    title("Les grands thèmes");
    rule();
    themes.forEach((t) => {
      body(`• ${t.titre}`);
      body(t.ce_que_montrent_tes_reponses, { soft: true, size: 9.5 });
    });
    if (emotions.length) {
      y += 2;
      title("Émotions dominantes", 13);
      emotions.forEach((e) => {
        body(`• ${e.emotion} — ${e.declencheur}`);
        body(`Accueillir : ${e.accueillir}`, { soft: true, size: 9.5 });
      });
    }
  }

  // ---------- Croyances à transformer (max 3)
  const croyances = ai?.croyances?.length
    ? take(ai.croyances, 3).map((c) => ({ limitante: c.ancienne, nouvelle: c.nouvelle }))
    : take(analysis.reframes, 3);

  if (croyances.length) {
    ensure(60);
    y += 4;
    title("Croyances à transformer");
    body(
      "Relis chaque ancienne croyance à voix haute, puis la nouvelle, une main sur le cœur. Matin et soir jusqu'à la séance.",
      { soft: true, size: 9.5 }
    );
    rule();
    croyances.forEach((r, i) => {
      ensure(22);
      body(`${i + 1}. Ancien : « ${r.limitante} »`, { soft: true });
      body(`Nouveau : « ${r.nouvelle} »`, { italic: true });
      y += 1;
    });
  }

  // ---------- Clés + pratique
  newPage();
  title("Tes clés de guérison");
  rule();
  if (ai?.cles?.length) {
    take(ai.cles, 3).forEach((k, i) => {
      body(`${i + 1}. ${k.nom}`);
      body(`Pratique : ${k.pratique}`, { soft: true, size: 9.5 });
      body(`Ancrage : « ${k.ancrage} »`, { italic: true, size: 9.5 });
      y += 1;
    });
  } else {
    take(analysis.cles, 4).forEach((c) => body(`• ${c}`));
  }

  y += 4;
  ensure(50);
  title("Avant la séance — 72 heures", 13);
  rule();
  take(analysis.protocole72h, 5).forEach((p2) => body(`• ${p2}`));

  y += 3;
  ensure(40);
  title("Le jour J", 13);
  body("• Vêtements confortables, repas léger.");
  body("• Arrive 10 minutes en avance pour te poser et respirer.");
  body("• Rappelle-toi ton intention en une phrase simple.");
  body("• Après : eau, repos, marche, et note ce qui émerge les jours suivants.");

  if (ai?.plan) {
    y += 3;
    ensure(30);
    title("Tes prochains petits pas", 13);
    body(`Aujourd'hui : ${ai.plan.aujourdhui}`);
    body(`Cette semaine : ${ai.plan.cette_semaine}`);
    body(`Avant la séance : ${ai.plan.avant_la_seance}`);
  }

  const seance = take(ai?.seance, 4);
  if (seance.length) {
    y += 3;
    ensure(30);
    title("À explorer ensemble en séance", 13);
    seance.forEach((s) => body(`• ${s}`));
  }

  if (extras.intention?.trim() || extras.resonance?.trim()) {
    y += 3;
    ensure(30);
    title("Ce que tu souhaites partager", 13);
    rule();
    if (extras.resonance?.trim()) body(`Ce qui résonne : ${extras.resonance.trim()}`);
    if (extras.intention?.trim()) body(`Mon intention : ${extras.intention.trim()}`);
  }

  if (ai?.synthese_finale && ai?.synthese?.length) {
    y += 3;
    ensure(40);
    title("Le fil rouge de ton carnet", 13);
    rule();
    body(ai.synthese_finale);
  }


  y += 8;
  ensure(20);
  body("Karmaequilego · Matyas Challandes · +41 76 244 55 52 · www.activationkundalini.ch", {
    soft: true,
    size: 9,
  });
  body(
    "Support de bien-être et de développement personnel. Ne remplace ni un avis ni un traitement médical. Tes réponses complètes restent consultables en ligne.",
    { soft: true, italic: true, size: 8 }
  );

  const safe = `${identity.prenom}-${identity.nom}`.replace(/[^a-zA-Z0-9-]/g, "");
  doc.save(`carnet-preparation-${safe || "karmaequilego"}.pdf`);
}
