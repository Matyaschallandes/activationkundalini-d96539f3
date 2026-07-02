import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-api-key, x-webhook-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SITE_URL = "https://www.activationkundalini.ch";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const apiKey = Deno.env.get("ROBOTSPEED_API_KEY");
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Server misconfigured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Accept the API key via Authorization: Bearer, x-api-key, or x-webhook-secret
  const auth = req.headers.get("authorization") ?? "";
  const bearer = auth.toLowerCase().startsWith("bearer ")
    ? auth.slice(7).trim()
    : "";
  const provided =
    bearer ||
    req.headers.get("x-api-key") ||
    req.headers.get("x-webhook-secret") ||
    "";

  if (provided !== apiKey) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let payload: any;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const event: string = payload?.event ?? "";
  const data = payload?.data ?? {};
  const slug: string = (data?.slug ?? "").toString().trim();

  if (!slug) {
    return new Response(JSON.stringify({ error: "Missing slug" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  try {
    if (event === "article.deleted") {
      await supabase.from("blog_posts").delete().eq("slug", slug);
      return new Response(
        JSON.stringify({ url: `${SITE_URL}/blog/${slug}`, id: slug }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const title: string = (data?.title ?? "").toString();
    const content: string =
      (data?.content?.html ?? data?.content?.markdown ?? data?.content?.text ?? "").toString();
    const excerpt: string | null = data?.meta_description
      ? String(data.meta_description)
      : null;
    const published = event !== "article.unpublished" && (data?.status ? data.status === "published" : true);

    // Upsert on slug (slug is unique in our schema? if not, do manual find)
    const { data: existing } = await supabase
      .from("blog_posts")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    let row;
    if (existing?.id) {
      const { data: upd, error } = await supabase
        .from("blog_posts")
        .update({ title, content, excerpt, published })
        .eq("id", existing.id)
        .select("id")
        .single();
      if (error) throw error;
      row = upd;
    } else {
      const { data: ins, error } = await supabase
        .from("blog_posts")
        .insert({ slug, title, content, excerpt, published })
        .select("id")
        .single();
      if (error) throw error;
      row = ins;
    }

    return new Response(
      JSON.stringify({ url: `${SITE_URL}/blog/${slug}`, id: row.id }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: (e as Error).message ?? "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
