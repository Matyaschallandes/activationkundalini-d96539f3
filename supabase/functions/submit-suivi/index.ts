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

    const reponses = [
      { question: "Ressenti physique", reponse: String(ressentiPhysique ?? "") },
      { question: "Ressenti émotionnel", reponse: String(ressentiEmotionnel ?? "") },
      { question: "Changements observés", reponse: String(changements ?? "") },
      { question: "Intensité actuelle", reponse: `${intensite ?? "—"} / 10` },
      { question: "Message", reponse: String(message ?? "") },
    ].filter((r) => r.reponse.trim() && r.reponse.trim() !== "—");

    const { error: mailError } = await supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "suivi-fiche",
        recipientEmail: "matyas.challandes@gmail.com",
        templateData: {
          prenom,
          nom,
          email,
          telephone: telephone ?? "",
          moment: moment ?? "—",
          reponses,
        },
      },
    });
    if (mailError) console.error("Mail error:", mailError);


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
