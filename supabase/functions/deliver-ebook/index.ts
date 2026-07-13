import { type StripeEnv, createStripeClient } from "../_shared/stripe.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const ADMIN_EMAIL = "matyas.challandes@gmail.com";

type ProductKey = "livre_secret_initie" | "livre_lois_universelles";

const PRODUCTS: Record<ProductKey, { title: string; subtitle: string; pdfUrl: string; coverUrl: string; subject: string; filename: string }> = {
  livre_secret_initie: {
    title: "LE SECRET DE L'INITIÉ",
    subtitle: "Haute Magie pour Reprendre son Pouvoir Souverain",
    pdfUrl: "https://www.activationkundalini.ch/__l5e/assets-v1/5182ec9b-7ad0-4d30-a3c1-b8eb4e3aa187/Le_Secret_de_l_Initie.pdf",
    coverUrl: "https://www.activationkundalini.ch/__l5e/assets-v1/d7f61031-6ac9-43bf-a775-ac60aff15d45/Couverture_Secret_Initie.png",
    subject: "🕯️ Votre livre — Le Secret de l'Initié",
    filename: "Le-Secret-de-l-Initie.pdf",
  },
  livre_lois_universelles: {
    title: "LES LOIS UNIVERSELLES",
    subtitle: "Manuel pratique pour activer sa mission de vie et manifester sa réalité",
    pdfUrl: "https://www.activationkundalini.ch/__l5e/assets-v1/b569a6b5-da20-4b58-a567-fb1efff38c03/Les_Lois_Universelles.pdf",
    coverUrl: "https://www.activationkundalini.ch/__l5e/assets-v1/db08bfd1-c8b3-4b57-a5e3-26f9525ff171/Couverture_Lois_Universelles.png",
    subject: "✨ Votre livre — Les Lois Universelles",
    filename: "Les-Lois-Universelles.pdf",
  },
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: corsHeaders });

  try {
    const { sessionId, environment, product } = await req.json();
    if (!sessionId || typeof sessionId !== "string") throw new Error("sessionId requis");
    const env: StripeEnv = environment === "live" ? "live" : "sandbox";

    const stripe = createStripeClient(env);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new Response(JSON.stringify({ delivered: false, status: session.payment_status }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const email = session.customer_details?.email || session.customer_email;
    if (!email) throw new Error("Aucun email trouvé pour cette commande");

    const productKey: ProductKey = (product && product in PRODUCTS ? product : "livre_secret_initie") as ProductKey;
    const p = PRODUCTS[productKey];

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");

    const html = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f0e6; padding: 40px 30px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="${p.coverUrl}" alt="${p.title}" style="max-width: 260px; border: 1px solid #d4af37;" />
        </div>
        <h1 style="color: #d4af37; text-align: center; font-weight: 300; letter-spacing: 2px;">${p.title}</h1>
        <p style="font-style: italic; text-align: center; color: #d4af37;">${p.subtitle}</p>
        <hr style="border: none; border-top: 1px solid #d4af37; margin: 30px 0;" />
        <p>Merci infiniment pour votre commande. 🙏</p>
        <p>Votre livre numérique vous attend. Cliquez sur le lien ci-dessous pour le télécharger :</p>
        <div style="text-align: center; margin: 40px 0;">
          <a href="${p.pdfUrl}" style="display: inline-block; background: linear-gradient(135deg, #d4af37, #b8941f); color: #0a0a0a; padding: 16px 40px; text-decoration: none; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; font-size: 13px;">Télécharger le livre (PDF)</a>
        </div>
        <p style="font-size: 14px; color: #a89870;">Ce lien reste actif — enregistrez le PDF sur votre appareil pour le conserver.</p>
        <hr style="border: none; border-top: 1px solid #d4af37; margin: 30px 0;" />
        <p style="text-align: center; font-size: 12px; color: #a89870;">KARMAEQUILEGO — <a href="https://www.activationkundalini.ch" style="color: #d4af37;">www.activationkundalini.ch</a></p>
      </div>
    `;

    const send = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "Karmaequilego <onboarding@resend.dev>",
        to: [email],
        bcc: [ADMIN_EMAIL],
        subject: p.subject,
        html,
      }),
    });

    if (!send.ok) {
      const err = await send.text();
      console.error("Resend error:", err);
      throw new Error("Envoi de l'email échoué");
    }

    return new Response(JSON.stringify({ delivered: true, email, product: productKey }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    console.error("deliver-ebook error:", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
