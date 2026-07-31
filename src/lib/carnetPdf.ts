import { jsPDF } from "jspdf";
import { CARNET_STEPS, CarnetAnalysis } from "./carnetAnalysis";

type Identity = {
  prenom: string;
  nom: string;
  email: string;
  telephone?: string;
  dateNaissance?: string;
};

const GOLD: [number, number, number] = [176, 137, 60];
const INK: [number, number, number] = [45, 40, 34];
const SOFT: [number, number, number] = [110, 100, 88];

export function generateCarnetPdf(
  identity: Identity,
  answers: Record<string, string>,
  analysis: CarnetAnalysis,
  intensity: number
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
    if (y + needed > 275) newPage();
  };

  const title = (text: string, size = 16) => {
    ensure(16);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(size);
    doc.setTextColor(...GOLD);
    const lines = doc.splitTextToSize(text, maxW);
    doc.text(lines, M, y);
    y += lines.length * (size * 0.45) + 3;
  };

  const body = (text: string, opts: { italic?: boolean; soft?: boolean; size?: number } = {}) => {
    const size = opts.size ?? 11;
    doc.setFont("helvetica", opts.italic ? "italic" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(...(opts.soft ? SOFT : INK));
    const lines = doc.splitTextToSize(text, maxW);
    lines.forEach((line: string) => {
      ensure(8);
      doc.text(line, M, y);
      y += size * 0.5;
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

  // ---- Couverture
  doc.setFillColor(252, 249, 243);
  doc.rect(0, 0, 210, 297, "F");
  y = 70;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(...GOLD);
  doc.text("Carnet de préparation", 105, y, { align: "center" });
  y += 12;
  doc.setFontSize(14);
  doc.setTextColor(...INK);
  doc.text("Activation Kundalini · Karmaequilego", 105, y, { align: "center" });
  y += 24;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`${identity.prenom} ${identity.nom}`, 105, y, { align: "center" });
  y += 8;
  doc.setTextColor(...SOFT);
  doc.setFontSize(10);
  doc.text(new Date().toLocaleDateString("fr-CH", { dateStyle: "long" }), 105, y, {
    align: "center",
  });
  y += 30;
  doc.setFontSize(11);
  doc.setTextColor(...INK);
  const intro = doc.splitTextToSize(
    "Ce carnet t'accompagne avant ta séance afin de clarifier tes intentions, prendre conscience de tes blocages et t'ouvrir à une transformation profonde. Il n'existe aucune bonne ou mauvaise réponse. Relis-le la veille de la séance, puis laisse-le de côté : ton corps saura.",
    maxW
  );
  doc.text(intro, 105, y, { align: "center", maxWidth: maxW });

  // ---- Réponses
  newPage();
  title("Tes réponses");
  rule();
  CARNET_STEPS.forEach((step) => {
    const hasContent = step.questions.some((q) => (answers[q.id] || "").trim());
    if (!hasContent) return;
    ensure(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...GOLD);
    const t = doc.splitTextToSize(step.title, maxW);
    doc.text(t, M, y);
    y += t.length * 6 + 2;
    step.questions.forEach((q) => {
      const val = (answers[q.id] || "").trim();
      if (!val) return;
      body(q.title, { italic: true, soft: true, size: 10 });
      body(val);
    });
    y += 3;
  });

  // ---- Lecture énergétique
  newPage();
  title("Lecture énergétique de ton carnet");
  body(
    "Lecture symbolique et énergétique de bien-être, sans visée médicale ni diagnostic.",
    { italic: true, soft: true, size: 9 }
  );
  rule();

  body(`Intensité ressentie actuellement : ${intensity} / 10`);
  if (analysis.themes.length) {
    body(`Thèmes principaux : ${analysis.themes.join(" · ")}`);
  }
  y += 2;

  const p = analysis.primaryChakra;
  title(`Centre énergétique le plus sollicité : ${p.name} (${p.sanskrit})`, 13);
  body(`Thème : ${p.theme}`);
  body(`Ce qui peut se manifester : ${p.signes}`);
  body(`Clé d'harmonisation : ${p.cle}`);
  body(`Affirmation : « ${p.affirmation} »`, { italic: true });

  const others = analysis.chakras.filter((c) => c.score > 0 && c.chakra.key !== p.key).slice(0, 2);
  if (others.length) {
    y += 2;
    title("Autres centres à soutenir", 13);
    others.forEach((o) => {
      body(`${o.chakra.name} — ${o.chakra.theme}`);
      body(`Clé : ${o.chakra.cle}`, { soft: true, size: 10 });
      body(`Affirmation : « ${o.chakra.affirmation} »`, { italic: true, size: 10 });
    });
  }

  // ---- Croyances
  newPage();
  title("Remplacer les programmes limitants");
  body(
    "Relis chaque croyance limitante à voix haute, puis lis la nouvelle formulation en posant une main sur ton cœur. Répète l'exercice matin et soir jusqu'à la séance.",
    { soft: true, size: 10 }
  );
  rule();
  analysis.reframes.forEach((r, i) => {
    ensure(24);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...INK);
    doc.text(`${i + 1}.`, M, y);
    y += 6;
    body(`Ancien programme : « ${r.limitante} »`, { soft: true });
    body(`Nouvelle vérité : « ${r.nouvelle} »`, { italic: true });
    y += 2;
  });

  // ---- Clés + protocole
  ensure(40);
  title("Tes clés de guérison personnalisées");
  rule();
  analysis.cles.forEach((c) => body(`• ${c}`));
  y += 4;
  ensure(50);
  title("Protocole des 72 heures avant la séance");
  rule();
  analysis.protocole72h.forEach((p2) => body(`• ${p2}`));

  y += 6;
  ensure(30);
  title("Le jour de la séance", 13);
  body("• Viens en vêtements confortables, léger(ère) au niveau du repas.");
  body("• Arrive 10 minutes en avance pour te poser et respirer.");
  body("• Rappelle-toi ton intention en une phrase simple.");
  body("• Après la séance : eau, repos, marche, et note ce qui émerge dans les jours suivants.");

  y += 8;
  body(
    "Karmaequilego · Matyas Challandes · +41 76 244 55 52 · www.activationkundalini.ch",
    { soft: true, size: 9 }
  );
  body(
    "Ce document est un support de bien-être et de développement personnel. Il ne remplace ni un avis ni un traitement médical.",
    { soft: true, italic: true, size: 8 }
  );

  const safe = `${identity.prenom}-${identity.nom}`.replace(/[^a-zA-Z0-9-]/g, "");
  doc.save(`carnet-preparation-${safe || "karmaequilego"}.pdf`);
}
