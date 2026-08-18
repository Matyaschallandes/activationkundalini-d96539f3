import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { analyseCarnet, CARNET_STEPS } from "@/lib/carnetAnalysis";
import { generateCarnetPdf } from "@/lib/carnetPdf";
import CarnetMiroir from "@/components/CarnetMiroir";
import { AiCarnetAnalysis } from "@/lib/carnetAiTypes";
import { Download, ChevronLeft, ChevronRight, Sparkles, Loader2, CheckCircle2 } from "lucide-react";

const STORAGE_KEY = "carnet-preparation-draft";

type Identity = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  dateNaissance: string;
};

const emptyIdentity: Identity = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  dateNaissance: "",
};

const loadDraft = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const CarnetPreparation = () => {
  const draft = useMemo(loadDraft, []);
  const [identity, setIdentity] = useState<Identity>(draft?.identity ?? emptyIdentity);
  const [answers, setAnswers] = useState<Record<string, string>>(draft?.answers ?? {});
  const [intensity, setIntensity] = useState<number>(draft?.intensity ?? 5);
  const [stepIndex, setStepIndex] = useState(0);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [phase, setPhase] = useState<"form" | "analyzing" | "miroir">("form");
  const [aiAnalysis, setAiAnalysis] = useState<AiCarnetAnalysis | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const totalSteps = CARNET_STEPS.length + 2; // identité + étapes + synthèse
  const progress = Math.round(((stepIndex + 1) / totalSteps) * 100);

  const persist = (next: Partial<{ identity: Identity; answers: Record<string, string>; intensity: number }>) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ identity, answers, intensity, ...next })
      );
    } catch {
      /* ignore */
    }
  };

  const setAnswer = (id: string, value: string) => {
    const next = { ...answers, [id]: value };
    setAnswers(next);
    persist({ answers: next });
  };

  const setId = (field: keyof Identity, value: string) => {
    const next = { ...identity, [field]: value };
    setIdentity(next);
    persist({ identity: next });
  };

  const analysis = useMemo(() => analyseCarnet(answers), [answers]);

  const identityValid =
    identity.prenom.trim() && identity.nom.trim() && identity.email.trim() && identity.telephone.trim();

  const goNext = () => {
    if (stepIndex === 0 && !identityValid) {
      toast.error("Merci de renseigner prénom, nom, email et téléphone.");
      return;
    }
    setStepIndex((i) => Math.min(i + 1, totalSteps - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goPrev = () => {
    setStepIndex((i) => Math.max(i - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownload = () => {
    generateCarnetPdf(identity, answers, analysis, intensity);
    toast.success("Ton carnet personnalisé est téléchargé 🌿");
  };

  const handleSend = async () => {
    if (!identityValid) {
      toast.error("Merci de renseigner tes coordonnées.");
      setStepIndex(0);
      return;
    }
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-carnet", {
        body: {
          identity,
          answers,
          intensity,
          analysis: {
            primaryChakra: analysis.primaryChakra.name,
            chakras: analysis.chakras
              .filter((c) => c.score > 0)
              .map((c) => ({ name: c.chakra.name, score: c.score, theme: c.chakra.theme })),
            themes: analysis.themes,
            reframes: analysis.reframes,
            cles: analysis.cles,
          },
        },
      });
      if (error) throw error;
      const id = (data as { id?: string } | null)?.id ?? null;
      setSubmissionId(id);
      setDone(true);
      toast.success("Ton carnet a bien été enregistré 🙏");
      await runAiAnalysis(id);
    } catch (e) {
      console.error(e);
      toast.error("L'envoi n'a pas abouti. Tu peux télécharger ton PDF et l'envoyer par email.");
    } finally {
      setSending(false);
    }
  };

  const runAiAnalysis = async (id: string | null) => {
    setPhase("analyzing");
    window.scrollTo({ top: 0, behavior: "smooth" });
    try {
      const { data, error } = await supabase.functions.invoke("analyse-carnet", {
        body: { identity, answers, intensity, submissionId: id },
      });
      if (error) throw error;
      if (!data?.analysis) throw new Error("Analyse vide");
      setAiAnalysis(data.analysis as AiCarnetAnalysis);
      setPhase("miroir");
    } catch (e) {
      console.error(e);
      toast.error(
        "Ta lecture personnalisée n'a pas pu être générée pour le moment. Ton carnet est bien enregistré."
      );
      setPhase("form");
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Carnet de préparation à la séance d'activation Kundalini",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CHF" },
    url: "https://www.activationkundalini.ch/carnet-de-preparation",
  };

  return (
    <Layout>
      <Seo
        title="Carnet de préparation en ligne | Activation Kundalini — Karmaequilego"
        description="Remplis en ligne ton carnet de préparation avant ta séance d'activation Kundalini : libération des mémoires, croyances limitantes, clés d'harmonisation et PDF personnalisé à télécharger."
        path="/carnet-de-preparation"
        keywords="carnet de préparation soin énergétique, préparer séance kundalini, libération des mémoires, croyances limitantes, harmonisation des chakras, Neuchâtel"
        jsonLd={jsonLd}
      />

      <section className="container mx-auto px-6 py-12 max-w-3xl">
        <header className="text-center mb-10">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Préparation à ta séance
          </p>
          <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-5">
            Carnet de préparation en ligne
          </h1>
          <p className="font-body text-muted-foreground leading-relaxed">
            Ce carnet prépare ton corps et ton mental à libérer les mémoires avant le soin
            énergétique. Réponds avec authenticité : il n'existe aucune bonne ou mauvaise réponse.
            À la fin, tu télécharges ton carnet personnalisé avec tes clés d'harmonisation.
          </p>
        </header>

        {/* Progression */}
        <div className="mb-8">
          <div className="h-1 w-full bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-gold transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="font-body text-xs text-muted-foreground mt-2 text-center">
            Étape {stepIndex + 1} / {totalSteps}
          </p>
        </div>

        <div className="bg-card border border-border rounded-sm p-6 md:p-10">
          {/* Étape 0 : identité */}
          {stepIndex === 0 && (
            <div className="space-y-5">
              <h2 className="font-heading text-2xl text-foreground">Tes coordonnées</h2>
              <p className="font-body text-sm text-muted-foreground">
                Elles me permettent de préparer ta séance et de te recontacter. Tes réponses restent
                confidentielles.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom *</Label>
                  <Input id="prenom" value={identity.prenom} maxLength={100} onChange={(e) => setId("prenom", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom *</Label>
                  <Input id="nom" value={identity.nom} maxLength={100} onChange={(e) => setId("nom", e.target.value)} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={identity.email} maxLength={255} onChange={(e) => setId("email", e.target.value)} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telephone">Téléphone *</Label>
                  <Input id="telephone" type="tel" value={identity.telephone} maxLength={20} onChange={(e) => setId("telephone", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateNaissance">Date de naissance</Label>
                  <Input id="dateNaissance" type="date" value={identity.dateNaissance} onChange={(e) => setId("dateNaissance", e.target.value)} />
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Label>Intensité de ce que tu traverses en ce moment : {intensity}/10</Label>
                <Slider
                  value={[intensity]}
                  min={1}
                  max={10}
                  step={1}
                  onValueChange={(v) => {
                    setIntensity(v[0]);
                    persist({ intensity: v[0] });
                  }}
                />
              </div>
            </div>
          )}

          {/* Étapes du carnet */}
          {stepIndex > 0 && stepIndex <= CARNET_STEPS.length && (
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-2xl text-foreground mb-2">
                  {CARNET_STEPS[stepIndex - 1].title}
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {CARNET_STEPS[stepIndex - 1].subtitle}
                </p>
                <p className="font-body text-xs text-muted-foreground/80 italic mt-2">
                  Aucune question n'est obligatoire : tu réponds à ce qui te parle. Plus tu remplis,
                  plus tu ouvres de dossiers avant la libération et l'activation Kundalini.
                </p>
              </div>
              {CARNET_STEPS[stepIndex - 1].practiceContent && (
                <div className="space-y-3 border border-border rounded-sm p-5 bg-muted/30">
                  {CARNET_STEPS[stepIndex - 1].practiceContent!.paragraphs.map((p, i) => (
                    <p key={`p${i}`} className="font-body text-sm text-foreground/80 leading-relaxed">
                      {p}
                    </p>
                  ))}
                  <ul className="space-y-1 pl-5">
                    {CARNET_STEPS[stepIndex - 1].practiceContent!.bullets.map((b, i) => (
                      <li key={`b${i}`} className="font-body text-sm text-foreground/80 list-disc">
                        {b}
                      </li>
                    ))}
                  </ul>
                  {CARNET_STEPS[stepIndex - 1].practiceContent!.closing.map((p, i) => (
                    <p key={`c${i}`} className="font-body text-sm text-foreground/80 leading-relaxed">
                      {p}
                    </p>
                  ))}
                  <p className="font-body text-sm italic text-primary border-l-2 border-primary/40 pl-4">
                    « {CARNET_STEPS[stepIndex - 1].practiceContent!.quote} »
                  </p>
                </div>
              )}
              {CARNET_STEPS[stepIndex - 1].questions.map((q) => (
                <div key={q.id} className="space-y-2">
                  <Label htmlFor={q.id} className="font-body text-foreground/80">
                    {q.title}
                  </Label>
                  <Textarea
                    id={q.id}
                    rows={q.rows ?? 4}
                    maxLength={4000}
                    placeholder={q.placeholder}
                    value={answers[q.id] ?? ""}
                    onChange={(e) => setAnswer(q.id, e.target.value)}
                  />
                </div>
              ))}
              <p className="font-body text-xs text-muted-foreground italic">
                Tes réponses sont sauvegardées automatiquement dans ton navigateur : tu peux revenir
                plus tard.
              </p>
            </div>
          )}

          {/* Synthèse */}
          {stepIndex === totalSteps - 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Ta lecture énergétique
                </h2>
                <p className="font-body text-xs text-muted-foreground italic">
                  Lecture symbolique de bien-être, sans visée médicale ni diagnostic.
                </p>
              </div>

              <div className="border border-border rounded-sm p-5">
                <h3 className="font-heading text-xl text-primary mb-2">
                  {analysis.primaryChakra.name} — {analysis.primaryChakra.sanskrit}
                </h3>
                <p className="font-body text-sm text-foreground/80 mb-2">
                  {analysis.primaryChakra.theme}
                </p>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  {analysis.primaryChakra.signes}
                </p>
                <p className="font-body text-sm text-foreground/90">
                  <strong>Clé :</strong> {analysis.primaryChakra.cle}
                </p>
                <p className="font-body text-sm italic text-primary mt-2">
                  « {analysis.primaryChakra.affirmation} »
                </p>
              </div>

              {analysis.themes.length > 0 && (
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-3">Thèmes repérés</h3>
                  <div className="flex flex-wrap gap-2">
                    {analysis.themes.map((t) => (
                      <span
                        key={t}
                        className="font-body text-xs px-3 py-1 rounded-full border border-primary/40 text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-heading text-lg text-foreground mb-3">
                  Remplacer les programmes limitants
                </h3>
                <ul className="space-y-3">
                  {analysis.reframes.map((r) => (
                    <li key={r.limitante} className="border-l-2 border-primary/50 pl-4">
                      <p className="font-body text-sm text-muted-foreground line-through">
                        {r.limitante}
                      </p>
                      <p className="font-body text-sm text-foreground">{r.nouvelle}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg text-foreground mb-3">
                  Protocole des 72 heures
                </h3>
                <ul className="space-y-2">
                  {analysis.protocole72h.map((p) => (
                    <li key={p} className="font-body text-sm text-muted-foreground">
                      • {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleDownload}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm py-3 rounded-sm hover:shadow-gold transition-all"
                >
                  <Download className="w-4 h-4" />
                  Télécharger mon carnet PDF
                </button>
                <button
                  onClick={handleSend}
                  disabled={sending || done}
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-primary text-foreground font-body tracking-wider uppercase text-sm py-3 rounded-sm hover:bg-primary/10 transition-all disabled:opacity-60"
                >
                  {sending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : done ? (
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  ) : null}
                  {done ? "Carnet transmis" : "Envoyer à Matyas"}
                </button>
              </div>

              <p className="font-body text-sm text-muted-foreground text-center">
                Prêt(e) à réserver ?{" "}
                <Link to="/rendez-vous" className="text-primary underline">
                  Choisis ton créneau
                </Link>{" "}
                ou{" "}
                <Link to="/contact" className="text-primary underline">
                  écris-moi
                </Link>
                .
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-border/60">
            <button
              onClick={goPrev}
              disabled={stepIndex === 0}
              className="inline-flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" /> Précédent
            </button>
            {stepIndex < totalSteps - 1 && (
              <button
                onClick={goNext}
                className="inline-flex items-center gap-1 font-body text-sm text-primary hover:text-foreground"
              >
                Suivant <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <p className="font-body text-xs text-muted-foreground text-center mt-8 leading-relaxed">
          Ce carnet est un support de bien-être et de développement personnel. Il ne remplace ni un
          avis, ni un diagnostic, ni un traitement médical.
        </p>
      </section>
    </Layout>
  );
};

export default CarnetPreparation;
