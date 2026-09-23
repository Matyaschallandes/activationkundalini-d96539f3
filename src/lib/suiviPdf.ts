import { jsPDF } from "jspdf";

export type Suivi = {
  id: string;
  created_at: string;
  prenom: string;
  nom: string;
  email: string;
  telephone?: string | null;
  moment: string | null;
  ressenti_physique: string | null;
  ressenti_emotionnel: string | null;
  changements: string | null;
  intensite: number | null;
  message: string | null;
};

const GOLD: [number, number, number] = [176, 137, 60];
const INK: [number, number, number] = [45, 40, 34];
const SOFT: [number, number, number] = [110, 100, 88];

export function generateSuiviPdf(s: Suivi) {
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

  const body = (
    text: string,
    opts: { italic?: boolean; soft?: boolean; size?: number } = {}
  ) => {
    const size = opts.size ?? 10.5;
    doc.setFont("helvetica", opts.italic ? "italic" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(...(opts.soft ? SOFT : INK));
    doc.splitTextToSize(text, maxW).forEach((line: string) => {
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

  doc.setFillColor(252, 249, 243);
  doc.rect(0, 0, 210, 297, "F");

  y = 34;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...GOLD);
  doc.text("Suivi post-séance", 105, y, { align: "center" });
  y += 9;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...INK);
  doc.text("Activation Kundalini · Karmaequilego", 105, y, { align: "center" });
  y += 7;
  doc.setFontSize(10);
  doc.setTextColor(...SOFT);
  doc.text(
    `${s.prenom} ${s.nom} · ${s.moment ?? "—"} · ${new Date(s.created_at).toLocaleDateString("fr-CH", { dateStyle: "long" })}`,
    105,
    y,
    { align: "center" }
  );
  y += 14;
  rule();

  title("Coordonnées", 14);
  body(`${s.prenom} ${s.nom}`);
  body(`${s.email}${s.telephone ? ` · ${s.telephone}` : ""}`, { soft: true });

  if (typeof s.intensite === "number") {
    y += 2;
    body(`Intensité ressentie : ${s.intensite} / 10`);
  }

  if (s.ressenti_physique?.trim()) {
    y += 4;
    title("Ressenti physique", 13);
    rule();
    body(s.ressenti_physique.trim());
  }
  if (s.ressenti_emotionnel?.trim()) {
    y += 4;
    title("Ressenti émotionnel", 13);
    rule();
    body(s.ressenti_emotionnel.trim());
  }
  if (s.changements?.trim()) {
    y += 4;
    title("Changements observés", 13);
    rule();
    body(s.changements.trim());
  }
  if (s.message?.trim()) {
    y += 4;
    title("Message pour Matyas", 13);
    rule();
    body(s.message.trim());
  }

  y += 8;
  ensure(20);
  body("Karmaequilego · Matyas Challandes · +41 76 244 55 52 · www.activationkundalini.ch", {
    soft: true,
    size: 9,
  });
  body(
    "Document confidentiel — données personnelles du client. Support de bien-être, ne remplace ni un avis ni un traitement médical.",
    { soft: true, italic: true, size: 8 }
  );

  const safe = `${s.prenom}-${s.nom}`.replace(/[^a-zA-Z0-9-]/g, "");
  doc.save(`suivi-post-seance-${safe || "karmaequilego"}.pdf`);
}
