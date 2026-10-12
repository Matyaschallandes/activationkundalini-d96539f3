import { useState } from "react";
import { Link } from "react-router-dom";
import { Gift, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { KOALENDAR_URL } from "@/lib/links";

const empty = { prenom: "", nom: "", date_naissance: "", heure_naissance: "", lieu_naissance: "", telephone: "", email: "", message: "" };

/** Offre d'entrée unique : 5 blocages principaux + mini-soin énergétique offert. */
const FreeOffer = () => {
  const [f, setF] = useState(empty);
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!f.telephone.trim() && !f.email.trim()) return setError("Indique un téléphone ou un email pour que je puisse te répondre.");
    if (!consent) return setError("Merci de cocher la case de consentement.");
    setLoading(true);
    const { data, error: err } = await supabase.functions.invoke("submit-offre", { body: { ...f, consentement: consent } });
    setLoading(false);
    if (err || !data?.ok) return setError("L'envoi n'a pas fonctionné. Réessaie ou écris-moi sur WhatsApp au +41 76 244 55 52.");
    setDone(true);
  };

  return (
    <section id="offre-gratuite" aria-labelledby="offre-gratuite-titre" className="py-14 md:py-20 bg-muted/20">
      <div className="container mx-auto px-6 max-w-5xl grid gap-10 md:grid-cols-2 items-start">
        <div>
          <p className="font-body tracking-[0.25em] uppercase text-xs text-primary mb-3 flex items-center gap-2"><Gift className="w-4 h-4" /> Offert, sans engagement</p>
          <h2 id="offre-gratuite-titre" className="font-heading text-3xl md:text-4xl font-light text-foreground mb-5">
            Reçois tes <span className="text-gradient-gold italic">5 blocages principaux</span> et un mini-soin énergétique
          </h2>
          <ol className="space-y-3 font-body text-foreground/80 text-sm leading-relaxed">
            <li><strong className="text-foreground">1. Tu m'envoies</strong> ton prénom, ton nom et ta date de naissance.</li>
            <li><strong className="text-foreground">2. Je te transmets</strong> les 5 blocages principaux que je repère, avec des pistes de réflexion.</li>
            <li><strong className="text-foreground">3. On se retrouve</strong> pour un mini-soin énergétique en visio, offert.</li>
          </ol>
          <p className="mt-5 font-body text-xs text-muted-foreground leading-relaxed">
            Ce sont des pistes de réflexion, pas un diagnostic médical. Elles ne remplacent pas un avis ou un suivi médical ou psychologique.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/30 bg-card p-6 md:p-8">
          {done ? (
            <div className="text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto" />
              <p className="font-heading text-2xl text-foreground">Merci {f.prenom} !</p>
              <p className="font-body text-sm text-foreground/80">J'ai bien reçu ta demande. Je te réponds personnellement avec tes 5 blocages [délai à compléter]. Tu peux déjà réserver ton mini-soin :</p>
              <Button asChild><a href={KOALENDAR_URL} target="_blank" rel="noopener noreferrer">Réserver mon mini-soin</a></Button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1"><Label htmlFor="fo-prenom">Prénom *</Label><Input id="fo-prenom" required maxLength={100} value={f.prenom} onChange={set("prenom")} autoComplete="given-name" /></div>
                <div className="space-y-1"><Label htmlFor="fo-nom">Nom *</Label><Input id="fo-nom" required maxLength={100} value={f.nom} onChange={set("nom")} autoComplete="family-name" /></div>
              </div>
              <div className="space-y-1"><Label htmlFor="fo-date">Date de naissance *</Label><Input id="fo-date" type="date" required value={f.date_naissance} onChange={set("date_naissance")} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1"><Label htmlFor="fo-heure">Heure (facultatif)</Label><Input id="fo-heure" type="time" value={f.heure_naissance} onChange={set("heure_naissance")} /></div>
                <div className="space-y-1"><Label htmlFor="fo-lieu">Lieu (facultatif)</Label><Input id="fo-lieu" maxLength={120} value={f.lieu_naissance} onChange={set("lieu_naissance")} /></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1"><Label htmlFor="fo-tel">Téléphone</Label><Input id="fo-tel" type="tel" maxLength={40} value={f.telephone} onChange={set("telephone")} autoComplete="tel" /></div>
                <div className="space-y-1"><Label htmlFor="fo-email">Email</Label><Input id="fo-email" type="email" maxLength={255} value={f.email} onChange={set("email")} autoComplete="email" /></div>
              </div>
              <div className="space-y-1"><Label htmlFor="fo-msg">Un mot sur ce que tu vis (facultatif)</Label><Textarea id="fo-msg" maxLength={1500} rows={3} value={f.message} onChange={set("message")} /></div>
              <label className="flex items-start gap-2 font-body text-xs text-foreground/80">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 accent-primary" />
                <span>J'accepte que Matyas Challandes utilise ces informations pour me répondre et préparer mon mini-soin. Voir la <Link to="/confidentialite" className="text-primary underline">confidentialité</Link>.</span>
              </label>
              {error && <p className="font-body text-sm text-destructive">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full">{loading ? "Envoi…" : "Recevoir mes 5 blocages"}</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FreeOffer;
