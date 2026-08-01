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
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { identity, answers, analysis, intensity } = await req.json();

    if (!identity?.prenom || !identity?.nom || !identity?.email) {
      return new Response(JSON.stringify({ error: "Coordonnées incomplètes." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase.from("carnet_submissions").insert({
      prenom: String(identity.prenom).slice(0, 100),
      nom: String(identity.nom).slice(0, 100),
      email: String(identity.email).slice(0, 255),
      telephone: identity.telephone ? String(identity.telephone).slice(0, 30) : null,
      date_naissance: identity.dateNaissance || null,
      answers: answers ?? {},
      analysis: analysis ?? {},
      intensity: typeof intensity === "number" ? intensity : null,
    });

    if (dbError) {
      console.error("DB error:", dbError);
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (RESEND_API_KEY) {
      const answerRows = Object.entries(answers ?? {})
        .filter(([, v]) => String(v ?? "").trim())
        .map(([k, v]) => `<p><strong>${esc(k)}</strong><br/>${esc(v)}</p>`)
        .join("");

      const chakraRows = (analysis?.chakras ?? [])
        .map((c: { name: string; score: number; theme: string }) =>
          `<li>${esc(c.name)} (score ${esc(c.score)}) — ${esc(c.theme)}</li>`
        )
        .join("");

      const reframeRows = (analysis?.reframes ?? [])
        .map((r: { limitante: string; nouvelle: string }) =>
          `<li>« ${esc(r.limitante)} » → « ${esc(r.nouvelle)} »</li>`
        )
        .join("");

      const html = `
        <h2>Nouvelle fiche client — Carnet de préparation</h2>
        <p><strong>${esc(identity.prenom)} ${esc(identity.nom)}</strong><br/>
        Email : ${esc(identity.email)}<br/>
        Téléphone : ${esc(identity.telephone) || "—"}<br/>
        Naissance : ${esc(identity.dateNaissance) || "—"}<br/>
        Intensité ressentie : ${esc(intensity)}/10</p>
        <hr/>
        <h3>Lecture énergétique</h3>
        <p>Centre principal : <strong>${esc(analysis?.primaryChakra)}</strong></p>
        <p>Thèmes : ${esc((analysis?.themes ?? []).join(" · "))}</p>
        <ul>${chakraRows}</ul>
        <h3>Programmes limitants à transformer</h3>
        <ul>${reframeRows}</ul>
        <h3>Pistes d'accompagnement</h3>
        <ul>${(analysis?.cles ?? []).map((c: string) => `<li>${esc(c)}</li>`).join("")}</ul>
        <hr/>
        <h3>Réponses complètes</h3>
        ${answerRows}
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
          reply_to: identity.email,
          subject: `Carnet de préparation — ${identity.prenom} ${identity.nom}`,
          html,
        }),
      });
      if (!res.ok) console.error("Resend error:", await res.text());

      // Confirmation + rappels de préparation envoyés au client
      const clientHtml = `
        <p>Bonjour ${esc(identity.prenom)},</p>
        <p>Ton carnet de préparation est bien arrivé 🌿 Je le lis avant notre rencontre.</p>
        <h3>Tes rappels pour les 72 heures qui précèdent la séance</h3>
        <ul>
          <li>Bois davantage d'eau, allège l'alimentation le jour même.</li>
          <li>Réduis alcool, écrans tardifs et sollicitations inutiles.</li>
          <li>Prends 5 minutes de respiration lente matin et soir.</li>
          <li>Note tes rêves et ce qui remonte : tout fait partie du mouvement.</li>
          <li>Viens en vêtements confortables, sans attente particulière.</li>
        </ul>
        <p>Une question avant la séance ? Réponds simplement à cet email ou écris-moi au
        +41 76 244 55 52.</p>
        <p>À très vite,<br/>Matyas Challandes</p>
        <p style="font-size:12px;color:#888">Accompagnement de bien-être et de développement
        personnel, sans visée médicale ni diagnostic.</p>
      `;
      const resClient = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Karmaequilego <onboarding@resend.dev>",
          to: [String(identity.email)],
          reply_to: "matyas.challandes@gmail.com",
          subject: "Ton carnet de préparation est bien reçu 🌿",
          html: clientHtml,
        }),
      });
      if (!resClient.ok) console.error("Resend client error:", await resClient.text());
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
