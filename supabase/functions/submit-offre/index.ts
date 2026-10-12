import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};
const json = (b: unknown, status = 200) =>
  new Response(JSON.stringify(b), { status, headers: { ...cors, "Content-Type": "application/json" } });
const t = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  try {
    const b = await req.json();
    const prenom = t(b.prenom, 100), nom = t(b.nom, 100), date = t(b.date_naissance, 10);
    const email = t(b.email, 255), telephone = t(b.telephone, 40);
    if (!prenom || !nom || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return json({ error: "Prénom, nom et date de naissance requis." }, 400);
    if (!email && !telephone) return json({ error: "Indique un téléphone ou un email." }, 400);
    if (b.consentement !== true) return json({ error: "Le consentement est requis." }, 400);
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: "Email invalide." }, 400);
    const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const { error } = await sb.from("offre_demandes").insert({
      prenom, nom, date_naissance: date,
      heure_naissance: t(b.heure_naissance, 10) || null,
      lieu_naissance: t(b.lieu_naissance, 120) || null,
      telephone: telephone || null, email: email || null,
      message: t(b.message, 1500) || null, consentement: true,
    });
    if (error) { console.error(error); return json({ error: "Enregistrement impossible." }, 500); }
    return json({ ok: true });
  } catch (e) {
    console.error(e);
    return json({ error: "Erreur serveur." }, 500);
  }
});
