import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br/>");

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json();
    const {
      prenom,
      nom,
      email,
      telephone,
      moment,
      ressentiPhysique,
      ressentiEmotionnel,
      changements,
      intensite,
      message,
    } = body ?? {};

    if (!prenom || !nom || !email) {
      return new Response(JSON.stringify({ error: "Coordonnées incomplètes." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase.from("suivi_seance").insert({
      prenom: String(prenom).slice(0, 100),
      nom: String(nom).slice(0, 100),
      email: String(email).slice(0, 255),
      telephone: telephone ? String(telephone).slice(0, 30) : null,
      moment: moment ? String(moment).slice(0, 50) : null,
      ressenti_physique: ressentiPhysique ?? null,
      ressenti_emotionnel: ressentiEmotionnel ?? null,
      changements: changements ?? null,
      intensite: typeof intensite === "number" ? intensite : null,
      message: message ?? null,
    });
    if (dbError) console.error("DB error:", dbError);

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (RESEND_API_KEY) {
      const html = `
        <h2>Suivi post-séance — ${esc(prenom)} ${esc(nom)}</h2>
        <p>Email : ${esc(email)}<br/>Téléphone : ${esc(telephone) || "—"}<br/>
        Moment : ${esc(moment) || "—"}<br/>Intensité actuelle : ${esc(intensite)}/10</p>
        <h3>Ressenti physique</h3><p>${esc(ressentiPhysique)}</p>
        <h3>Ressenti émotionnel</h3><p>${esc(ressentiEmotionnel)}</p>
        <h3>Changements observés</h3><p>${esc(changements)}</p>
        <h3>Message</h3><p>${esc(message)}</p>
      `;
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Karmaequilego <onboarding@resend.dev>",
          to: ["matyas.challandes@gmail.com"],
          reply_to: String(email),
          subject: `Suivi post-séance — ${prenom} ${nom}`,
          html,
        }),
      });
      if (!res.ok) console.error("Resend error:", await res.text());
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
