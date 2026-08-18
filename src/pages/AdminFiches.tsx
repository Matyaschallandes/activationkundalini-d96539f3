import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateCarnetPdf } from "@/lib/carnetPdf";
import { analyseCarnet } from "@/lib/carnetAnalysis";
import { AiCarnetAnalysis } from "@/lib/carnetAiTypes";
import { CARNET_STEPS } from "@/lib/carnetAnalysis";

type Carnet = {
  id: string;
  created_at: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string | null;
  date_naissance: string | null;
  answers: Record<string, string>;
  intensity: number | null;
  ai_analysis: AiCarnetAnalysis | null;
  intensity_level: string | null;
  client_resonance: string | null;
  client_intention: string | null;
};

type Suivi = {
  id: string;
  created_at: string;
  prenom: string;
  nom: string;
  email: string;
  moment: string | null;
  ressenti_physique: string | null;
  ressenti_emotionnel: string | null;
  changements: string | null;
  intensite: number | null;
  message: string | null;
};

const QUESTION_LABELS: Record<string, string> = Object.fromEntries(
  CARNET_STEPS.flatMap((s) => s.questions.map((q) => [q.id, q.title]))
);

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-4">
    <p className="font-body text-[11px] uppercase tracking-[0.18em] text-primary/80 mb-1">
      {title}
    </p>
    <div className="font-body text-sm text-foreground/80 space-y-1">{children}</div>
  </div>
);

const TherapistView = ({ carnet }: { carnet: Carnet }) => {
  const [open, setOpen] = useState(false);
  const a = carnet.ai_analysis;

  return (
    <div className="mt-3 border-t border-border/60 pt-3">
      <button
        onClick={() => setOpen((o) => !o)}
        className="font-body text-sm text-primary underline"
      >
        {open ? "Masquer la fiche complète" : "Voir la fiche thérapeute"}
      </button>

      {open && (
        <div className="mt-4">
          {a ? (
            <>
              <Block title="Synthèse">
                {(a.synthese ?? []).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Block>
              {a.axe && (
                <Block title="Axe principal">
                  <p className="text-foreground font-medium">{a.axe.phrase}</p>
                  <p>{a.axe.pourquoi}</p>
                </Block>
              )}
              {a.themes?.length > 0 && (
                <Block title="Thèmes">
                  {a.themes.map((t, i) => (
                    <p key={i}>
                      <strong>{t.titre}</strong> — {t.ce_que_montrent_tes_reponses}
                    </p>
                  ))}
                </Block>
              )}
              {a.correlations?.length > 0 && (
                <Block title="Corrélations">
                  {a.correlations.map((c, i) => (
                    <p key={i}>
                      <strong>{c.lien}</strong> — {c.explication}
                    </p>
                  ))}
                </Block>
              )}
              {a.croyances?.length > 0 && (
                <Block title="Croyances">
                  {a.croyances.map((b, i) => (
                    <p key={i}>
                      « {b.ancienne} » → {b.nouvelle}
                    </p>
                  ))}
                </Block>
              )}
              {a.emotions?.length > 0 && (
                <Block title="Émotions">
                  <p>{a.emotions.map((e) => e.emotion).join(" · ")}</p>
                </Block>
              )}
              {a.mecanismes?.length > 0 && (
                <Block title="Mécanismes de protection">
                  {a.mecanismes.map((m, i) => (
                    <p key={i}>
                      <strong>{m.comportement}</strong> — coût : {m.cout_long_terme}
                    </p>
                  ))}
                </Block>
              )}
              {a.besoins?.length > 0 && (
                <Block title="Besoins">
                  <p>{a.besoins.map((b) => b.besoin).join(" · ")}</p>
                </Block>
              )}
              {a.ressources?.length > 0 && (
                <Block title="Ressources">
                  <p>{a.ressources.map((r) => r.ressource).join(" · ")}</p>
                </Block>
              )}
              {a.cles?.length > 0 && (
                <Block title="Clés proposées">
                  {a.cles.map((k, i) => (
                    <p key={i}>
                      {i + 1}. {k.nom} — {k.pratique}
                    </p>
                  ))}
                </Block>
              )}
              {a.seance?.length > 0 && (
                <Block title="À explorer en séance">
                  {a.seance.map((s, i) => (
                    <p key={i}>• {s}</p>
                  ))}
                </Block>
              )}
            </>
          ) : (
            <p className="font-body text-sm text-muted-foreground">
              Pas encore de lecture personnalisée générée pour ce carnet.
            </p>
          )}

          {(carnet.client_resonance || carnet.client_intention) && (
            <Block title="Réactions du client">
              {carnet.client_resonance && (
                <p className="whitespace-pre-wrap">Résonance : {carnet.client_resonance}</p>
              )}
              {carnet.client_intention && (
                <p className="whitespace-pre-wrap">
                  Souhaite travailler : {carnet.client_intention}
                </p>
              )}
            </Block>
          )}

          <Block title="Réponses originales">
            {Object.entries(carnet.answers ?? {})
              .filter(([, v]) => String(v ?? "").trim())
              .map(([k, v]) => (
                <p key={k} className="whitespace-pre-wrap">
                  <strong>{QUESTION_LABELS[k] ?? k} :</strong> {v}
                </p>
              ))}
          </Block>
        </div>
      )}
    </div>
  );
};

const AdminFiches = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [carnets, setCarnets] = useState<Carnet[] | null>(null);
  const [suivis, setSuivis] = useState<Suivi[]>([]);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { data, error: err } = await supabase.functions.invoke("admin-fiches", {
      body: { password },
    });
    setLoading(false);
    if (err || !data?.carnets) {
      setError("Mot de passe incorrect.");
      return;
    }
    setCarnets(data.carnets);
    setSuivis(data.suivis ?? []);
  };

  const downloadPdf = (c: Carnet) => {
    const answers = c.answers ?? {};
    generateCarnetPdf(
      {
        prenom: c.prenom,
        nom: c.nom,
        email: c.email,
        telephone: c.telephone ?? undefined,
        dateNaissance: c.date_naissance ?? undefined,
      },
      answers,
      analyseCarnet(answers),
      c.intensity ?? 0,
      {
        ai: c.ai_analysis,
        resonance: c.client_resonance,
        intention: c.client_intention,
      }
    );
  };

  return (
    <Layout>
      <section className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="font-heading text-3xl text-foreground mb-6">Fiches clients</h1>

        {!carnets && (
          <form onSubmit={login} className="max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pwd">Mot de passe</Label>
              <Input
                id="pwd"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            {error && <p className="font-body text-sm text-destructive">{error}</p>}
            <Button type="submit" disabled={loading}>
              {loading ? "Vérification…" : "Accéder"}
            </Button>
          </form>
        )}

        {carnets && (
          <div className="space-y-10">
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                Carnets de préparation ({carnets.length})
              </h2>
              <div className="space-y-3">
                {carnets.map((c) => (
                  <div key={c.id} className="rounded-lg border border-border bg-card p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="font-body text-sm">
                        <p className="text-foreground font-medium">
                          {c.prenom} {c.nom}
                          {c.intensity_level ? ` · Intensité : ${c.intensity_level}` : ""}
                        </p>
                        <p className="text-muted-foreground">
                          {c.email} {c.telephone ? `· ${c.telephone}` : ""} ·{" "}
                          {new Date(c.created_at).toLocaleDateString("fr-CH")}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => downloadPdf(c)}>
                        Télécharger le PDF
                      </Button>
                    </div>
                    <TherapistView carnet={c} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                Suivis post-séance ({suivis.length})
              </h2>
              <div className="space-y-3">
                {suivis.map((s) => (
                  <div key={s.id} className="rounded-lg border border-border bg-card p-4">
                    <p className="font-body text-sm text-foreground font-medium">
                      {s.prenom} {s.nom} — {s.moment ?? "—"} ·{" "}
                      {new Date(s.created_at).toLocaleDateString("fr-CH")}
                    </p>
                    <p className="font-body text-sm text-muted-foreground whitespace-pre-wrap mt-2">
                      {[s.ressenti_physique, s.ressenti_emotionnel, s.changements, s.message]
                        .filter(Boolean)
                        .join("\n\n")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default AdminFiches;
