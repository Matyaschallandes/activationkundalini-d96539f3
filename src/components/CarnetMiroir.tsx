import { useState } from "react";
import { Link } from "react-router-dom";
import { AiCarnetAnalysis } from "@/lib/carnetAiTypes";
import { generateCarnetPdf } from "@/lib/carnetPdf";
import { analyseCarnet } from "@/lib/carnetAnalysis";
import { Download } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Sparkles,
  Link2,
  Heart,
  Shield,
  Compass,
  Gem,
  Feather,
  Flower2,
  Footprints,
  Loader2,
  KeyRound,
} from "lucide-react";

type Identity = {
  prenom: string;
  nom: string;
  email: string;
  telephone?: string;
  dateNaissance?: string;
};

type Props = {
  analysis: AiCarnetAnalysis;
  submissionId: string | null;
  prenom?: string;
  identity?: Identity;
  answers?: Record<string, string>;
  intensity?: number;
};

const Section = ({
  icon: Icon,
  eyebrow,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="animate-fade-in">
    <div className="flex items-center gap-3 mb-5">
      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-primary/30 bg-primary/5">
        <Icon className="w-4 h-4 text-primary" />
      </span>
      <div>
        {eyebrow && (
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary/80">
            {eyebrow}
          </p>
        )}
        <h3 className="font-heading text-2xl text-foreground leading-tight">{title}</h3>
      </div>
    </div>
    <div className="space-y-4">{children}</div>
  </section>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-sm border border-border bg-card/70 p-5 md:p-6 shadow-sm">{children}</div>
);

const SubLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-[11px] uppercase tracking-[0.18em] text-primary/80 mb-1">
    {children}
  </p>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-sm text-foreground/80 leading-relaxed">{children}</p>
);

const CarnetMiroir = ({ analysis, submissionId, prenom }: Props) => {
  const [resonance, setResonance] = useState("");
  const [intention, setIntention] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const saveNotes = async () => {
    if (!submissionId) {
      toast.error("Ton carnet doit d'abord être transmis pour enregistrer tes notes.");
      return;
    }
    setSaving(true);
    const { error } = await supabase.functions.invoke("save-carnet-notes", {
      body: { submissionId, resonance, intention },
    });
    setSaving(false);
    if (error) {
      toast.error("Tes notes n'ont pas pu être enregistrées.");
      return;
    }
    setSaved(true);
    toast.success("Tes notes ont été transmises à Matyas 🙏");
  };

  return (
    <div className="space-y-14">
      <header className="text-center space-y-4">
        <p className="font-body text-[11px] uppercase tracking-[0.35em] text-primary">
          Ta lecture personnalisée
        </p>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground">
          {prenom ? `${prenom}, voici ton miroir intérieur` : "Ton miroir intérieur"}
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Cette lecture est un reflet de tes réponses d'aujourd'hui, pas une vérité définitive. Elle
          reste dans le domaine du bien-être et de l'introspection : elle ne constitue ni un
          diagnostic, ni un avis médical ou psychologique.
        </p>
      </header>

      <Section icon={Sparkles} eyebrow="A" title="Synthèse générale">
        <Card>
          <div className="space-y-4">
            {analysis.synthese?.map((p, i) => (
              <Body key={i}>{p}</Body>
            ))}
          </div>
        </Card>
        {analysis.intensite && (
          <div className="rounded-sm border border-primary/30 bg-primary/5 p-5">
            <SubLabel>Niveau d'intensité perçu : {analysis.intensite.niveau}</SubLabel>
            <Body>{analysis.intensite.message}</Body>
          </div>
        )}
      </Section>

      {analysis.themes?.length > 0 && (
        <Section icon={Flower2} title="Les grands thèmes">
          <div className="grid md:grid-cols-2 gap-4">
            {analysis.themes.map((t, i) => (
              <Card key={i}>
                <h4 className="font-heading text-xl text-primary mb-2">{t.titre}</h4>
                <SubLabel>Ce que tes réponses montrent</SubLabel>
                <Body>{t.ce_que_montrent_tes_reponses}</Body>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {analysis.correlations?.length > 0 && (
        <Section icon={Link2} title="Les liens qui apparaissent">
          {analysis.correlations.map((c, i) => (
            <Card key={i}>
              <h4 className="font-heading text-lg text-foreground mb-2">{c.lien}</h4>
              <Body>{c.explication}</Body>
              {c.a_explorer?.length > 0 && (
                <div className="mt-4 border-l-2 border-primary/40 pl-4 space-y-1">
                  <SubLabel>Ce que cela peut t'inviter à explorer</SubLabel>
                  {c.a_explorer.map((q, j) => (
                    <p key={j} className="font-body text-sm italic text-foreground/70">
                      {q}
                    </p>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </Section>
      )}

      {analysis.croyances?.length > 0 && (
        <Section icon={KeyRound} title="Croyances qui semblent à l'œuvre">
          {analysis.croyances.map((b, i) => (
            <Card key={i}>
              <p className="font-body text-sm text-muted-foreground line-through">« {b.ancienne} »</p>
              <div className="mt-3">
                <SubLabel>Ce qui semble l'alimenter</SubLabel>
                <Body>{b.ce_qui_alimente}</Body>
              </div>
              <div className="mt-3">
                <SubLabel>Nouvelle possibilité</SubLabel>
                <p className="font-body text-sm text-foreground">{b.nouvelle}</p>
              </div>
            </Card>
          ))}
        </Section>
      )}

      {analysis.emotions?.length > 0 && (
        <Section icon={Heart} title="Émotions dominantes">
          <div className="grid md:grid-cols-2 gap-4">
            {analysis.emotions.map((e, i) => (
              <Card key={i}>
                <h4 className="font-heading text-xl text-primary mb-3">{e.emotion}</h4>
                <SubLabel>Ce qui semble la déclencher</SubLabel>
                <Body>{e.declencheur}</Body>
                <div className="mt-3">
                  <SubLabel>Ce qu'elle pourrait protéger ou exprimer</SubLabel>
                  <Body>{e.protege}</Body>
                </div>
                <div className="mt-3">
                  <SubLabel>Une manière douce de l'accueillir</SubLabel>
                  <Body>{e.accueillir}</Body>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {analysis.mecanismes?.length > 0 && (
        <Section icon={Shield} title="Tes stratégies de protection">
          <p className="font-body text-sm text-muted-foreground italic">
            Ces stratégies ne sont pas des défauts : elles ont eu une fonction protectrice.
          </p>
          {analysis.mecanismes.map((m, i) => (
            <Card key={i}>
              <h4 className="font-heading text-lg text-foreground mb-3">{m.comportement}</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <SubLabel>Ce que cela apporte</SubLabel>
                  <Body>{m.benefice_court_terme}</Body>
                </div>
                <div>
                  <SubLabel>Ce que cela coûte</SubLabel>
                  <Body>{m.cout_long_terme}</Body>
                </div>
                <div>
                  <SubLabel>Alternative possible</SubLabel>
                  <Body>{m.alternative}</Body>
                </div>
              </div>
            </Card>
          ))}
        </Section>
      )}

      {analysis.besoins?.length > 0 && (
        <Section icon={Feather} title="Ce dont tu sembles avoir le plus besoin actuellement">
          <div className="grid md:grid-cols-2 gap-4">
            {analysis.besoins.map((b, i) => (
              <Card key={i}>
                <h4 className="font-heading text-xl text-primary mb-2">{b.besoin}</h4>
                <Body>{b.pourquoi}</Body>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {analysis.ressources?.length > 0 && (
        <Section icon={Gem} title="Tes forces et ressources déjà présentes">
          <div className="grid md:grid-cols-2 gap-4">
            {analysis.ressources.map((r, i) => (
              <Card key={i}>
                <h4 className="font-heading text-xl text-primary mb-2">{r.ressource}</h4>
                <Body>{r.pourquoi}</Body>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {analysis.tensions?.length > 0 && (
        <Section icon={Compass} title="Tensions intérieures">
          {analysis.tensions.map((t, i) => (
            <Card key={i}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <SubLabel>La partie de toi qui veut avancer</SubLabel>
                  <Body>{t.partie_qui_avance}</Body>
                </div>
                <div>
                  <SubLabel>La partie de toi qui veut se protéger</SubLabel>
                  <Body>{t.partie_qui_protege}</Body>
                </div>
              </div>
              <div className="mt-4 border-t border-border/60 pt-4">
                <SubLabel>Comment les réconcilier</SubLabel>
                <Body>{t.reconciliation}</Body>
              </div>
            </Card>
          ))}
        </Section>
      )}

      {analysis.axe && (
        <section className="rounded-sm border border-primary/40 bg-primary/5 p-8 text-center">
          <p className="font-body text-[11px] uppercase tracking-[0.3em] text-primary mb-3">
            Ton axe principal
          </p>
          <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
            {analysis.axe.phrase}
          </h3>
          <p className="font-body text-sm text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            {analysis.axe.pourquoi}
          </p>
        </section>
      )}

      {analysis.cles?.length > 0 && (
        <Section icon={KeyRound} title="Tes clés de guérison">
          {analysis.cles.map((k, i) => (
            <Card key={i}>
              <h4 className="font-heading text-xl text-primary mb-3">
                {i + 1}. {k.nom}
              </h4>
              <SubLabel>Pourquoi cette clé est importante pour toi</SubLabel>
              <Body>{k.pourquoi}</Body>
              <div className="mt-3">
                <SubLabel>Ce que tu peux pratiquer</SubLabel>
                <Body>{k.pratique}</Body>
              </div>
              <p className="font-body text-sm italic text-primary border-l-2 border-primary/40 pl-4 mt-4">
                « {k.ancrage} »
              </p>
            </Card>
          ))}
        </Section>
      )}

      {analysis.exercices?.length > 0 && (
        <Section icon={Flower2} title="Tes exercices personnalisés">
          <div className="grid md:grid-cols-2 gap-4">
            {analysis.exercices.map((e, i) => (
              <Card key={i}>
                <h4 className="font-heading text-lg text-foreground mb-2">{e.titre}</h4>
                <Body>{e.deroule}</Body>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {analysis.plan && (
        <Section icon={Footprints} title="Tes prochains petits pas">
          <Card>
            <div className="space-y-4">
              <div>
                <SubLabel>Aujourd'hui</SubLabel>
                <Body>{analysis.plan.aujourdhui}</Body>
              </div>
              <div>
                <SubLabel>Cette semaine</SubLabel>
                <Body>{analysis.plan.cette_semaine}</Body>
              </div>
              <div>
                <SubLabel>À explorer avant la séance</SubLabel>
                <Body>{analysis.plan.avant_la_seance}</Body>
              </div>
            </div>
          </Card>
        </Section>
      )}

      {analysis.lecture_energetique && (
        <Section icon={Sparkles} title="Lecture symbolique et énergétique">
          <Card>
            <Body>{analysis.lecture_energetique}</Body>
            <p className="font-body text-xs text-muted-foreground italic mt-3">
              Lecture symbolique de bien-être, sans valeur médicale ou scientifique.
            </p>
          </Card>
        </Section>
      )}

      {analysis.seance?.length > 0 && (
        <Section icon={Compass} title="Ce que nous pourrons explorer ensemble">
          <Card>
            <ul className="space-y-2">
              {analysis.seance.map((s, i) => (
                <li key={i} className="font-body text-sm text-foreground/80">
                  • {s}
                </li>
              ))}
            </ul>
            <p className="font-body text-sm italic text-muted-foreground mt-5 leading-relaxed">
              Cette lecture n'est pas une vérité définitive. Elle constitue un miroir de tes réponses
              actuelles et une base pour approfondir ce qui résonne réellement pour toi pendant la
              séance.
            </p>
          </Card>
        </Section>
      )}

      <Section icon={Feather} title="Ce que tu souhaites me partager">
        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="resonance">Ce qui résonne le plus pour moi</Label>
            <Textarea
              id="resonance"
              rows={4}
              maxLength={4000}
              value={resonance}
              onChange={(e) => setResonance(e.target.value)}
              placeholder="Ce qui m'a touché(e), ce qui me parle, ce qui me surprend dans cette lecture…"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="intention">Ce que je souhaite travailler pendant ma séance</Label>
            <Textarea
              id="intention"
              rows={4}
              maxLength={4000}
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
              placeholder="L'intention que je pose pour notre rencontre…"
            />
          </div>
          <button
            onClick={saveNotes}
            disabled={saving}
            className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-6 py-3 rounded-sm hover:shadow-gold transition-all disabled:opacity-60"
          >
            {saving && <Loader2 className="w-4 h-4 animate-spin" />}
            {saved ? "Notes enregistrées" : "Envoyer mes notes à Matyas"}
          </button>
        </div>
      </Section>

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
  );
};

export default CarnetMiroir;
