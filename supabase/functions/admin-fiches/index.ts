import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { password } = await req.json();
    const expected = Deno.env.get("CARNET_ADMIN_PASSWORD");

    if (!expected) {
      return new Response(JSON.stringify({ error: "Accès non configuré." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (typeof password !== "string" || password !== expected) {
      await new Promise((r) => setTimeout(r, 600));
      return new Response(JSON.stringify({ error: "Mot de passe incorrect." }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const [carnets, suivis] = await Promise.all([
      supabase
        .from("carnet_submissions")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200),
      supabase
        .from("suivi_seance")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200),
    ]);

    return new Response(
      JSON.stringify({ carnets: carnets.data ?? [], suivis: suivis.data ?? [] }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
