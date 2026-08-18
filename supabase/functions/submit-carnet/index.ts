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

    const { data: inserted, error: dbError } = await supabase.from("carnet_submissions").insert({
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

    const LABELS: Record<string, string> = {
      liberer: "Ce que je choisis de libérer",
      incarner: "Qui je choisis d'incarner",
      peur: "Quelle peur me retient ?",
      risque: "Que risque-t-il d'arriver si je réussis ?",
      perdre: "Que vais-je perdre si je change ?",
      resistance: "Quelle partie de moi résiste encore ?",
      croyance1: "Je crois que…",
      croyance2: "Je ne mérite pas…",
      croyance3: "Je dois toujours…",
      croyance4: "Je ne suis pas assez…",
      pensees_soi: "Pensées envers moi-même",
      amour_soi: "Est-ce que je m'aime vraiment ?",
      pensees_autres: "Pensées envers les autres",
      energie_emise: "Énergie que je veux émettre",
      victime: "Situations où je me sens victime",
      responsabilite: "Ma part pour sortir de ce rôle",
      pardon_autres: "Ai-je pardonné aux autres ?",
      pardon_soi: "Me suis-je pardonné ?",
      corps_zone: "Zone de tension dans le corps",
      corps_message: "Message de cette zone",
      moi_aligne: "Conseil de mon Moi aligné",
      talents: "Mes qualités et talents",
      synchronicites: "Ce que mes synchronicités m'enseignent",
      engagement: "Mon engagement des 72 h",
      gain_rester: "Ce que je gagne à rester dans ma situation actuelle",
      gain_eviter: "Ce que cela m'évite de vivre, décider ou risquer",
      douleur_protegee: "Douleur ancienne que je continue à protéger",
      masque_devenu: "Partie de moi que j'ai dû devenir pour être aimé(e)",
      nose_pas: "Ce que je n'ose pas dire, faire ou être",
      sans_rejet: "Qui je serais sans peur du rejet ou du jugement",
      manque_profond: "Ce qui me manque profondément",
      echappatoires: "Vers quoi je me tourne pour ne plus ressentir",
      emotion_ecoute: "Écoute d'une émotion — messages et prises de conscience",
    };

    const reponses = Object.entries(answers ?? {})
      .filter(([, v]) => String(v ?? "").trim())
      .map(([k, v]) => ({ question: LABELS[k] ?? k, reponse: String(v) }));

    const send = (templateName: string, recipientEmail: string, templateData: unknown) =>
      supabase.functions
        .invoke("send-transactional-email", {
          body: { templateName, recipientEmail, templateData },
        })
        .then(({ error }) => {
          if (error) console.error(`${templateName} error:`, error);
        })
        .catch((e) => console.error(`${templateName} threw:`, e));

    await Promise.all([
      send("carnet-fiche", "matyas.challandes@gmail.com", {
        prenom: identity.prenom,
        nom: identity.nom,
        email: identity.email,
        telephone: identity.telephone ?? "",
        intensity: typeof intensity === "number" ? intensity : 0,
        chakra: analysis?.primaryChakra ?? "—",
        themes: (analysis?.themes ?? []).join(" · "),
        cles: analysis?.cles ?? [],
        reponses,
      }),
      send("carnet-confirmation", String(identity.email), {
        prenom: identity.prenom,
      }),
    ]);



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
