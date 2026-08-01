import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CheckCircle2 } from "lucide-react";

const MOMENTS = ["J+3", "J+7", "J+21", "Plus tard"];

const SuiviPostSeance = () => {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    moment: "J+3",
    ressentiPhysique: "",
    ressentiEmotionnel: "",
    changements: "",
    message: "",
  });
  const [intensite, setIntensite] = useState(5);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!form.prenom.trim() || !form.nom.trim() || !form.email.trim() || !form.telephone.trim()) {
      toast.error("Merci de renseigner prénom, nom, email et téléphone.");
      return;
    }
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("submit-suivi", {
        body: { ...form, intensite },
      });
      if (error) throw error;
      setDone(true);
      toast.success("Merci, ton suivi a bien été transmis 🙏");
    } catch (e) {
      console.error(e);
      toast.error("L'envoi n'a pas abouti. Tu peux m'écrire directement par WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Suivi post-séance — Activation Kundalini",
    url: "https://www.activationkundalini.ch/suivi-post-seance",
  };

  return (
    <Layout>
      <Seo
        title="Suivi post-séance | Activation Kundalini — Karmaequilego"
        description="Formulaire de suivi après ta séance d'activation Kundalini ou ton soin énergétique : dépose tes ressentis physiques et émotionnels, les changements observés et reçois un accompagnement ajusté."
        path="/suivi-post-seance"
        keywords="suivi post séance soin énergétique, intégration activation kundalini, après une séance énergétique, Neuchâtel"
        jsonLd={jsonLd}
      />

      <section className="container mx-auto px-6 py-12 max-w-3xl">
        <header className="text-center mb-10">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Après ta séance
          </p>
          <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-5">
            Suivi post-séance
          </h1>
          <p className="font-body text-muted-foreground leading-relaxed">
            L'intégration se poursuit bien après le soin : sommeil, émotions, énergie, clarté.
            Dépose ici où tu en es. Cela me permet d'ajuster ton accompagnement et de te proposer
            les clés justes pour la suite.
          </p>
        </header>

        <div className="bg-card border border-border rounded-sm p-6 md:p-10 space-y-6">
          <h2 className="font-heading text-2xl text-foreground">Tes coordonnées</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom *</Label>
              <Input id="prenom" maxLength={100} value={form.prenom} onChange={(e) => set("prenom", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nom">Nom *</Label>
              <Input id="nom" maxLength={100} value={form.nom} onChange={(e) => set("nom", e.target.value)} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" maxLength={255} value={form.email} onChange={(e) => set("email", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telephone">Téléphone *</Label>
              <Input id="telephone" type="tel" maxLength={20} value={form.telephone} onChange={(e) => set("telephone", e.target.value)} />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Où en es-tu depuis la séance ?</Label>
            <div className="flex flex-wrap gap-2">
              {MOMENTS.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => set("moment", m)}
                  className={`font-body text-sm px-4 py-2 rounded-sm border transition-colors ${
                    form.moment === m
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <h2 className="font-heading text-2xl text-foreground pt-2">Ton ressenti</h2>

          <div className="space-y-2">
            <Label htmlFor="physique">Comment se sent ton corps ? (sommeil, énergie, tensions)</Label>
            <Textarea id="physique" rows={4} maxLength={4000} value={form.ressentiPhysique} onChange={(e) => set("ressentiPhysique", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="emotionnel">Et tes émotions ? (calme, vagues, libérations, rêves)</Label>
            <Textarea id="emotionnel" rows={4} maxLength={4000} value={form.ressentiEmotionnel} onChange={(e) => set("ressentiEmotionnel", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="changements">Quels changements observes-tu dans ton quotidien ?</Label>
            <Textarea id="changements" rows={4} maxLength={4000} value={form.changements} onChange={(e) => set("changements", e.target.value)} />
          </div>

          <div className="space-y-3">
            <Label>Intensité de ce que tu traverses aujourd'hui : {intensite}/10</Label>
            <Slider value={[intensite]} min={1} max={10} step={1} onValueChange={(v) => setIntensite(v[0])} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Un message pour Matyas</Label>
            <Textarea id="message" rows={3} maxLength={4000} value={form.message} onChange={(e) => set("message", e.target.value)} />
          </div>

          <button
            onClick={handleSubmit}
            disabled={sending || done}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm py-3 rounded-sm hover:shadow-gold transition-all disabled:opacity-60"
          >
            {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : done ? <CheckCircle2 className="w-4 h-4" /> : null}
            {done ? "Suivi transmis" : "Envoyer mon suivi"}
          </button>

          <p className="font-body text-sm text-muted-foreground text-center">
            Besoin d'une nouvelle séance ?{" "}
            <Link to="/rendez-vous" className="text-primary underline">
              Choisis ton créneau
            </Link>{" "}
            ou revois le{" "}
            <Link to="/carnet-de-preparation" className="text-primary underline">
              carnet de préparation
            </Link>
            .
          </p>
        </div>

        <p className="font-body text-xs text-muted-foreground text-center mt-8 leading-relaxed">
          Ce suivi est un support de bien-être et de développement personnel. Il ne remplace ni un
          avis, ni un diagnostic, ni un traitement médical.
        </p>
      </section>
    </Layout>
  );
};

export default SuiviPostSeance;
