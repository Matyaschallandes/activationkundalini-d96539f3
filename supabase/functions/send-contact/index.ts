import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prenom, nom, email, telephone, dateNaissance, lieuNaissance, heureNaissance, offerName } = await req.json();

    if (!prenom || !nom || !email) {
      return new Response(
        JSON.stringify({ error: "Prénom, nom et email sont requis." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const htmlContent = `
      <h2>Nouvelle demande de contact</h2>
      ${offerName ? `<p><strong>Offre choisie :</strong> ${offerName}</p>` : ""}
      <hr/>
      <p><strong>Prénom :</strong> ${prenom}</p>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${telephone || "Non renseigné"}</p>
      <p><strong>Date de naissance :</strong> ${dateNaissance || "Non renseignée"}</p>
      <p><strong>Lieu de naissance :</strong> ${lieuNaissance || "Non renseigné"}</p>
      <p><strong>Heure de naissance :</strong> ${heureNaissance || "Non renseignée"}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Activation & Transformation <onboarding@resend.dev>",
        to: ["matyas.challandes@gmail.com"],
        subject: `Nouvelle demande${offerName ? ` — ${offerName}` : ""}`,
        html: htmlContent,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      return new Response(
        JSON.stringify({ error: "Erreur lors de l'envoi de l'email." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
