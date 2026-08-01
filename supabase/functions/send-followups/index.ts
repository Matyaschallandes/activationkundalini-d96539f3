import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SITE = "https://www.activationkundalini.ch";
const FROM = "Karmaequilego <onboarding@resend.dev>";

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    const cutoff = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString();

    const { data: rows, error } = await supabase
      .from("carnet_submissions")
      .select("id, prenom, email")
      .is("followup_sent_at", null)
      .lt("created_at", cutoff)
      .limit(50);

    if (error) throw error;

    let sent = 0;
    for (const row of rows ?? []) {
      if (RESEND_API_KEY) {
        const html = `
          <p>Bonjour ${row.prenom},</p>
          <p>Quelques jours ont passé depuis ta préparation. Le corps continue souvent d'intégrer
          bien après la séance : sommeil, émotions, énergie, clarté.</p>
          <p>Prends deux minutes pour déposer où tu en es — cela me permet d'ajuster ton
          accompagnement :</p>
          <p><a href="${SITE}/suivi-post-seance">Remplir mon suivi post-séance</a></p>
          <p>Et si tu souhaites poursuivre : <a href="${SITE}/rendez-vous">choisir un créneau</a>.</p>
          <p>Avec douceur,<br/>Matyas Challandes<br/>+41 76 244 55 52</p>
          <p style="font-size:12px;color:#888">Accompagnement de bien-être et de développement
          personnel, sans visée médicale.</p>
        `;
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: FROM,
            to: [row.email],
            reply_to: "matyas.challandes@gmail.com",
            subject: "Comment te sens-tu depuis ta préparation ? 🌿",
            html,
          }),
        });
        if (!res.ok) {
          console.error("Resend error:", await res.text());
          continue;
        }
        sent++;
      }
      await supabase
        .from("carnet_submissions")
        .update({ followup_sent_at: new Date().toISOString() })
        .eq("id", row.id);
    }

    return new Response(JSON.stringify({ success: true, candidates: rows?.length ?? 0, sent }), {
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
