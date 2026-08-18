import { jsPDF } from "jspdf";
import { CARNET_STEPS, CarnetAnalysis } from "./carnetAnalysis";
import { AiCarnetAnalysis } from "./carnetAiTypes";

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
    if (!hasContent && !step.practiceContent) return;
    ensure(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...GOLD);
    const t = doc.splitTextToSize(step.title, maxW);
    doc.text(t, M, y);
    y += t.length * 6 + 2;
    if (step.practiceContent) {
      const pc = step.practiceContent;
      pc.paragraphs.forEach((p) => body(p, { soft: true, size: 10 }));
      pc.bullets.forEach((b) => body(`• ${b}`, { soft: true, size: 10 }));
      pc.closing.forEach((p) => body(p, { soft: true, size: 10 }));
      body(`« ${pc.quote} »`, { italic: true, soft: true, size: 10 });
    }
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

  // ---- Lecture personnalisée (IA) : miroir intérieur
  const ai = extras.ai;
  if (ai) {
    newPage();
    title("Ta lecture personnalisée — Ton miroir intérieur");
    body(
      "Reflet de tes réponses d'aujourd'hui, dans le domaine du bien-être et de l'introspection : ni diagnostic, ni avis médical ou psychologique.",
      { italic: true, soft: true, size: 9 }
    );
    rule();

    if (ai.synthese?.length) {
      title("Synthèse générale", 13);
      ai.synthese.forEach((p3) => body(p3));
    }
    if (ai.intensite) {
      body(`Niveau d'intensité perçu : ${ai.intensite.niveau}`, { italic: true });
      body(ai.intensite.message);
    }
    if (ai.lecture_detaillee?.length) {
      y += 2;
      title("Analyse détaillée de tes réponses", 13);
      ai.lecture_detaillee.forEach((d) => {
        ensure(24);
        body(d.question, { italic: true, soft: true, size: 10 });
        body(`Ce que tu as écrit : ${d.ce_que_tu_as_ecrit}`, { soft: true, size: 10 });
        body(d.ce_que_cela_revele);
        y += 1;
      });
    }
    if (ai.themes?.length) {
      y += 2;
      title("Les grands thèmes", 13);
      ai.themes.forEach((t) => {
        body(`• ${t.titre}`);
        body(t.ce_que_montrent_tes_reponses, { soft: true, size: 10 });
      });
    }
    if (ai.correlations?.length) {
      y += 2;
      title("Les liens qui apparaissent", 13);
      ai.correlations.forEach((c) => {
        body(`• ${c.lien}`);
        body(c.explication, { soft: true, size: 10 });
        (c.a_explorer ?? []).forEach((q) => body(`— ${q}`, { italic: true, size: 10 }));
      });
    }
    if (ai.croyances?.length) {
      y += 2;
      title("Croyances à l'œuvre", 13);
      ai.croyances.forEach((b) => {
        body(`Ancienne : « ${b.ancienne} »`, { soft: true });
        body(`Ce qui l'alimente : ${b.ce_qui_alimente}`, { size: 10 });
        body(`Nouvelle possibilité : « ${b.nouvelle} »`, { italic: true });
        y += 1;
      });
    }
    if (ai.emotions?.length) {
      y += 2;
      title("Émotions dominantes", 13);
      ai.emotions.forEach((e) => {
        body(`• ${e.emotion}`);
        body(`Déclencheur : ${e.declencheur}`, { soft: true, size: 10 });
        body(`Ce qu'elle protège : ${e.protege}`, { soft: true, size: 10 });
        body(`Accueillir : ${e.accueillir}`, { soft: true, size: 10 });
      });
    }
    if (ai.mecanismes?.length) {
      y += 2;
      title("Stratégies de protection", 13);
      ai.mecanismes.forEach((m) => {
        body(`• ${m.comportement}`);
        body(`Bénéfice : ${m.benefice_court_terme}`, { soft: true, size: 10 });
        body(`Coût : ${m.cout_long_terme}`, { soft: true, size: 10 });
        body(`Alternative : ${m.alternative}`, { soft: true, size: 10 });
      });
    }
    if (ai.besoins?.length) {
      y += 2;
      title("Besoins actuels", 13);
      ai.besoins.forEach((b) => body(`• ${b.besoin} — ${b.pourquoi}`));
    }
    if (ai.ressources?.length) {
      y += 2;
      title("Forces et ressources", 13);
      ai.ressources.forEach((r) => body(`• ${r.ressource} — ${r.pourquoi}`));
    }
    if (ai.tensions?.length) {
      y += 2;
      title("Tensions intérieures", 13);
      ai.tensions.forEach((t) => {
        body(`Ce qui veut avancer : ${t.partie_qui_avance}`, { size: 10 });
        body(`Ce qui veut protéger : ${t.partie_qui_protege}`, { size: 10 });
        body(`Réconciliation : ${t.reconciliation}`, { soft: true, size: 10 });
        y += 1;
      });
    }
    if (ai.axe) {
      y += 2;
      title("Ton axe principal", 13);
      body(`« ${ai.axe.phrase} »`, { italic: true });
      body(ai.axe.pourquoi);
    }
    if (ai.cles?.length) {
      y += 2;
      title("Tes clés de guérison", 13);
      ai.cles.forEach((k, i) => {
        body(`${i + 1}. ${k.nom}`);
        body(`Pourquoi : ${k.pourquoi}`, { soft: true, size: 10 });
        body(`Pratique : ${k.pratique}`, { soft: true, size: 10 });
        body(`Ancrage : « ${k.ancrage} »`, { italic: true, size: 10 });
        y += 1;
      });
    }
    if (ai.exercices?.length) {
      y += 2;
      title("Tes exercices personnalisés", 13);
      ai.exercices.forEach((e) => {
        body(`• ${e.titre}`);
        body(e.deroule, { soft: true, size: 10 });
      });
    }
    if (ai.plan) {
      y += 2;
      title("Tes prochains petits pas", 13);
      body(`Aujourd'hui : ${ai.plan.aujourdhui}`);
      body(`Cette semaine : ${ai.plan.cette_semaine}`);
      body(`Avant la séance : ${ai.plan.avant_la_seance}`);
    }
    if (ai.seance?.length) {
      y += 2;
      title("À explorer ensemble en séance", 13);
      ai.seance.forEach((s) => body(`• ${s}`));
    }
    if (ai.lecture_energetique) {
      y += 2;
      title("Lecture symbolique et énergétique", 13);
      body(ai.lecture_energetique);
    }
  }

  if (extras.resonance?.trim() || extras.intention?.trim()) {
    y += 4;
    ensure(30);
    title("Ce que tu souhaites partager", 13);
    rule();
    if (extras.resonance?.trim()) {
      body("Ce qui résonne le plus pour moi :", { soft: true, size: 10 });
      body(extras.resonance.trim());
    }
    if (extras.intention?.trim()) {
      body("Ce que je souhaite travailler pendant ma séance :", { soft: true, size: 10 });
      body(extras.intention.trim());
    }
  }

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
