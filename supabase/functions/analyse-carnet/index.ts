import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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
  enfant_blessures: "Parties blessées de mon enfant intérieur et situations où elles se manifestent",
  enfant_besoins: "Ce dont mon enfant intérieur aurait besoin pour se sentir entendu et en sécurité",
  peurs_protegent: "Mes plus grandes peurs et ce qu'elles cherchent à protéger",
  peurs_oser: "Ce que j'oserais faire si mes peurs ne dirigeaient plus mes choix",
  manque_actuel: "Ce que je ressens comme un manque et ce qu'il cherche à me faire comprendre",
  besoin_reel: "Ce dont j'ai réellement besoin au fond de moi",
  synthese_offrir:
    "Ce qu'une partie de moi attend de l'extérieur alors qu'elle aurait besoin que je me l'offre",
};


const strObj = (props: Record<string, unknown>) => ({
  type: "object",
  additionalProperties: false,
  properties: props,
  required: Object.keys(props),
});
const S = { type: "string" };
const ARR = (items: unknown) => ({ type: "array", items });

const schema = strObj({
  synthese: ARR(S),
  intensite: strObj({
    niveau: { type: "string", enum: ["Léger", "Modéré", "Important", "Intense"] },
    message: S,
  }),
  lecture_detaillee: ARR(strObj({ question: S, ce_que_tu_as_ecrit: S, ce_que_cela_revele: S })),
  themes: ARR(strObj({ titre: S, ce_que_montrent_tes_reponses: S })),
  correlations: ARR(strObj({ lien: S, explication: S, a_explorer: ARR(S) })),
  croyances: ARR(strObj({ ancienne: S, ce_qui_alimente: S, nouvelle: S })),
  emotions: ARR(strObj({ emotion: S, declencheur: S, protege: S, accueillir: S })),
  mecanismes: ARR(
    strObj({ comportement: S, benefice_court_terme: S, cout_long_terme: S, alternative: S })
  ),
  besoins: ARR(strObj({ besoin: S, pourquoi: S })),
  ressources: ARR(strObj({ ressource: S, pourquoi: S })),
  tensions: ARR(strObj({ partie_qui_avance: S, partie_qui_protege: S, reconciliation: S })),
  axe: strObj({ phrase: S, pourquoi: S }),
  cles: ARR(strObj({ nom: S, pourquoi: S, pratique: S, ancrage: S })),
  exercices: ARR(strObj({ titre: S, deroule: S })),
  plan: strObj({ aujourdhui: S, cette_semaine: S, avant_la_seance: S }),
  seance: ARR(S),
  lecture_energetique: S,
  synthese_finale: S,
});

const SYSTEM = `Tu es l'assistant d'introspection de Karmaequilego (Matyas Challandes, Suisse).
Tu reçois le carnet de préparation complet d'une personne avant une séance d'activation Kundalini.

TA MISSION : produire une LECTURE TRANSVERSALE de TOUT le carnet, pas une réponse question par question.
Tu cherches le fil rouge : ce que la personne dit → ce qu'elle répète → ce qu'elle évite → ce qu'elle désire → ce qu'elle croit → ce dont elle a besoin → ses ressources → le conflit central.

RÈGLES ABSOLUES :
- N'invente jamais un traumatisme, une croyance, une émotion, un événement, un diagnostic ou une maladie. Base-toi UNIQUEMENT sur ce qui est réellement écrit.
- Si une réponse est vide ou pauvre, n'extrapole pas : produis moins d'éléments plutôt que d'inventer.
- Aucun diagnostic médical ou psychologique. Domaine : bien-être, introspection, développement personnel (législation suisse).
- Formulations prudentes : « Ce qui semble ressortir de tes réponses… », « Une corrélation possible apparaît entre… », « Il pourrait y avoir un lien entre… », « À explorer pendant la séance… ».
- Tutoiement, ton chaleureux, humain, incarné. Jamais robotique, jamais horoscope générique.
- Cite ou reformule des éléments concrets du carnet pour que la personne se reconnaisse.
- Ne culpabilise jamais : les mécanismes de protection sont présentés comme des stratégies qui ont eu une fonction utile.
- Dimension énergétique/chakras/Kundalini uniquement si la personne en parle, et toujours en lecture symbolique (« Sur le plan symbolique… », « Si cette lecture résonne pour toi… »).

CONTENU ATTENDU (sois GÉNÉREUX et DÉTAILLÉ : ce texte devient un document PDF complet remis à la personne) :
- synthese : 4 à 6 paragraphes RICHES (6 à 10 phrases chacun) : ce qui occupe le plus de place, la tension centrale qui revient, ce qu'elle veut changer, ce qui la retient, ses ressources, vers quoi elle va.
- intensite : niveau global déduit des réponses + message bienveillant développé. Si détresse marquée, invite avec douceur à un accompagnement professionnel adapté, sans dramatiser ni diagnostiquer.
- lecture_detaillee : OBLIGATOIRE — une entrée pour CHAQUE question réellement remplie du carnet (n'en saute aucune). question = l'intitulé exact fourni ; ce_que_tu_as_ecrit = reformulation fidèle et courte de sa réponse ; ce_que_cela_revele = 3 à 6 phrases d'analyse fine et personnalisée, reliée au reste du carnet.
- themes : 4 à 6 thèmes réellement présents, chacun expliqué en 4 à 8 phrases.
- correlations : 4 à 6 liens entre réponses éloignées du questionnaire, expliqués en profondeur, avec 2 questions d'introspection chacun.
- croyances : 4 à 6 croyances exprimées ou fortement suggérées, avec ce qui les alimente et une nouvelle possibilité RÉALISTE (jamais magique).
- emotions : 3 à 6 émotions réellement présentes, développées.
- mecanismes : 3 à 5, uniquement ceux que la personne décrit elle-même.
- besoins : 4 à 6.
- ressources : 4 à 6, obligatoire, uniquement ce qui ressort du carnet.
- tensions : 2 à 3, très douces (plusieurs besoins coexistent).
- axe : UN seul axe principal, spécifique, jamais générique, justifié en plusieurs phrases.
- cles : 6 à 8 clés de guérison personnalisées, chacune avec pourquoi (détaillé), pratique concrète et ancrage.
- exercices : 4 à 6 exercices concrets adaptés au carnet, déroulé pas à pas.
- plan : petits pas simples et réalistes, sans pression, formulés en 2 à 4 phrases chacun.
- seance : 4 à 6 sujets à explorer ensemble.
- lecture_energetique : paragraphe symbolique développé (8 à 12 phrases), explicitement non médical.
- synthese_finale : conclusion globale chaleureuse et pertinente (10 à 15 phrases) qui relie TOUT le carnet en un seul fil rouge, nomme le mouvement de fond, et ouvre sur la séance.

Ne bâcle rien : privilégie la profondeur et la précision plutôt que la brièveté.

Écris tout en français.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { identity, answers, intensity, submissionId } = await req.json();
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Analyse non configurée." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const filled = Object.entries((answers ?? {}) as Record<string, string>)
      .filter(([, v]) => String(v ?? "").trim())
      .map(([k, v]) => `### ${LABELS[k] ?? k}\n${String(v).trim()}`)
      .join("\n\n");

    if (!filled) {
      return new Response(JSON.stringify({ error: "Carnet vide." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userPrompt = `Prénom : ${identity?.prenom ?? "—"}
Intensité auto-évaluée de ce que la personne traverse : ${typeof intensity === "number" ? `${intensity}/10` : "non renseignée"}

CARNET COMPLET :

${filled}`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "google/gemini-3.7-flash",
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: userPrompt },
        ],
        response_format: {
          type: "json_schema",
          json_schema: { name: "lecture_carnet", strict: true, schema },
        },
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("AI gateway error", res.status, text);
      const message =
        res.status === 429
          ? "Trop de demandes d'analyse en ce moment. Réessaie dans quelques instants."
          : res.status === 402
          ? "Le service d'analyse est momentanément indisponible (crédits épuisés)."
          : "L'analyse n'a pas pu être générée.";
      return new Response(JSON.stringify({ error: message }), {
        status: res.status === 429 || res.status === 402 ? res.status : 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    const raw = data?.choices?.[0]?.message?.content ?? "";
    let analysis;
    try {
      analysis = JSON.parse(raw);
    } catch {
      console.error("Parse error", raw?.slice?.(0, 500));
      return new Response(JSON.stringify({ error: "L'analyse n'a pas pu être lue." }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (submissionId) {
      const supabase = createClient(
        Deno.env.get("SUPABASE_URL")!,
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
      );
      const { error } = await supabase
        .from("carnet_submissions")
        .update({
          ai_analysis: analysis,
          intensity_level: analysis?.intensite?.niveau ?? null,
          analysed_at: new Date().toISOString(),
        })
        .eq("id", submissionId);
      if (error) console.error("DB update error", error);
    }

    return new Response(JSON.stringify({ analysis }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Erreur inconnue" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
