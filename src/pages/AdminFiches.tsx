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
      c.intensity ?? 0
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
                  <div
                    key={c.id}
                    className="rounded-lg border border-border bg-card p-4 flex flex-wrap items-center justify-between gap-3"
                  >
                    <div className="font-body text-sm">
                      <p className="text-foreground font-medium">
                        {c.prenom} {c.nom}
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
