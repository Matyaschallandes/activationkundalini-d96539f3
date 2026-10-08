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
 * PDF volontairement court (≈3-4 pages) : l'essentiel, rien de plus.
 * Les réponses complètes restent consultables en ligne.
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

  const title = (text: string, size = 14) => {
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
    "L'essentiel de ton carnet, en quelques pages. Garde ton intention en tête : le reste, ton corps saura.",
    { italic: true, soft: true }
  );

  y += 2;
  title("L'essentiel en un coup d'œil");
  body(`Intensité ressentie : ${intensity} / 10`);
  if (analysis.themes.length) body(`Thèmes principaux : ${analysis.themes.slice(0, 4).join(" · ")}`);

  const p = analysis.primaryChakra;
  body(`Centre le plus sollicité : ${p.name} (${p.sanskrit}) — ${p.theme}`);
  body(`Affirmation : « ${p.affirmation} »`, { italic: true });

  const ai = extras.ai;
  if (ai?.axe) {
    y += 2;
    title("Ton axe principal");
    body(`« ${ai.axe.phrase} »`, { italic: true });
  }

  if (ai?.synthese?.length) {
    y += 2;
    title("Ce que révèle ton carnet");
    take(ai.synthese, 2).forEach((s) => body(s));
  } else if (ai?.synthese_finale) {
    y += 2;
    title("Ce que révèle ton carnet");
    body(ai.synthese_finale);
  }

  // ---------- Tes questions et tes réponses (compact)
  const filled = Object.entries(answers ?? {}).filter(([, v]) => String(v ?? "").trim());
  if (filled.length) {
    newPage();
    title("Tes questions et tes réponses");
    body("Le reflet fidèle de ce que tu as écrit.", { soft: true, italic: true, size: 9.5 });
    rule();
    filled.forEach(([id, value]) => {
      const q = QUESTION_LABELS[id] ?? id;
      const text = String(value).trim();
      const shown = text.length > 400 ? `${text.slice(0, 400)}…` : text;
      ensure(18);
      body(q, { soft: true, size: 9 });
      body(shown, { size: 9.5 });
      y += 1;
    });
  }

  // ---------- Page finale : croyances, clés, objectifs, avant la séance
  newPage();

  const croyances = ai?.croyances?.length
    ? take(ai.croyances, 3).map((c) => ({ limitante: c.ancienne, nouvelle: c.nouvelle }))
    : take(analysis.reframes, 3);

  if (croyances.length) {
    title("Croyances à transformer");
    croyances.forEach((r, i) => {
      ensure(18);
      body(`${i + 1}. « ${r.limitante} » → « ${r.nouvelle} »`, { size: 10 });
      y += 1;
    });
    y += 2;
  }

  const cles = ai?.cles?.length ? take(ai.cles, 3) : [];
  if (cles.length) {
    title("Tes clés");
    cles.forEach((k, i) => {
      ensure(20);
      body(`${i + 1}. ${k.nom} — ${k.pratique}`, { size: 10 });
      y += 1;
    });
    y += 2;
  }

  const objectifs = ai?.objectifs_smart;
  if (objectifs?.length) {
    title("Tes objectifs pour la séance");
    objectifs.slice(0, 4).forEach((o, i) => {
      ensure(16);
      body(`${i + 1}. ${o.objectif}`, { size: 10 });
      body(`${o.temps} — ${o.pourquoi}`, { soft: true, size: 9 });
      y += 1;
    });
    y += 2;
  }

  title("Avant la séance");
  take(analysis.protocole72h, 3).forEach((p2) => body(`• ${p2}`, { size: 10 }));
  body("• Vêtements confortables, repas léger, arrive 10 minutes en avance.", { size: 10 });

  if (ai?.plan) {
    y += 2;
    ensure(30);
    title("Tes prochains petits pas", 13);
    body(`Aujourd'hui : ${ai.plan.aujourdhui}`, { size: 10 });
    body(`Cette semaine : ${ai.plan.cette_semaine}`, { size: 10 });
    body(`Avant la séance : ${ai.plan.avant_la_seance}`, { size: 10 });
  }

  if (extras.intention?.trim()) {
    y += 2;
    ensure(20);
    title("Mon intention", 13);
    body(extras.intention.trim(), { italic: true });
  }

  y += 8;
  ensure(20);
  body("Karmaequilego · Matyas Challandes · +41 76 244 55 52 · www.activationkundalini.ch", {
    soft: true,
    size: 9,
  });
  body(
    "Support de bien-être et de développement personnel. Ne remplace ni un avis ni un traitement médical.",
    { soft: true, italic: true, size: 8 }
  );

  const safe = `${identity.prenom}-${identity.nom}`.replace(/[^a-zA-Z0-9-]/g, "");
  doc.save(`carnet-preparation-${safe || "karmaequilego"}.pdf`);
}
