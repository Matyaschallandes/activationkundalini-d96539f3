import Layout from "@/components/Layout";
import { useEffect, useState, FormEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, MessageCircle, ArrowLeft, Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  created_at: string;
};

type Comment = {
  id: string;
  author_name: string;
  message: string;
  created_at: string;
};

// Minimal markdown renderer: paragraphs, H2, and bullet lists
const renderContent = (md: string) => {
  const blocks: JSX.Element[] = [];
  const lines = md.split("\n");
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={key++} className="font-heading text-2xl md:text-3xl text-foreground mt-12 mb-4">
          {line.replace(/^## /, "")}
        </h2>
      );
      i++;
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace(/^- /, ""));
        i++;
      }
      blocks.push(
        <ul key={key++} className="list-disc pl-6 space-y-2 mb-6 font-body text-foreground/85 leading-relaxed">
          {items.map((it, idx) => <li key={idx}>{it}</li>)}
        </ul>
      );
    } else if (/^!\[[^\]]*\]\([^)]+\)\s*$/.test(line.trim())) {
      const m = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/)!;
      blocks.push(
        <figure key={key++} className="my-8">
          <img src={m[2]} alt={m[1]} loading="lazy" className="w-full rounded-md shadow-gold" />
          {m[1] && <figcaption className="text-xs text-muted-foreground text-center mt-2 italic">{m[1]}</figcaption>}
        </figure>
      );
      i++;
    } else {
      blocks.push(
        <p key={key++} className="font-body text-foreground/85 text-base leading-relaxed mb-5">
          {line}
        </p>
      );
      i++;
    }
  }
  return blocks;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      const { data: p } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();
      setPost(p as Post | null);
      if (p) {
        document.title = `${p.title} | Blog Karmaequilego`;
        const meta = document.querySelector('meta[name="description"]');
        if (meta && p.excerpt) meta.setAttribute("content", p.excerpt);
        const { data: c } = await supabase
          .from("blog_comments")
          .select("id,author_name,message,created_at")
          .eq("post_id", p.id)
          .eq("approved", true)
          .order("created_at", { ascending: true });
        setComments(c ?? []);
      }
      setLoading(false);
    })();
  }, [slug]);

  const submitComment = async (e: FormEvent) => {
    e.preventDefault();
    if (!post || !name.trim() || !message.trim()) return;
    setSubmitting(true);
    const { data, error } = await supabase
      .from("blog_comments")
      .insert({ post_id: post.id, author_name: name.trim(), message: message.trim() })
      .select("id,author_name,message,created_at")
      .single();
    setSubmitting(false);
    if (error) {
      toast.error("Impossible de publier le commentaire. Réessaie plus tard.");
      return;
    }
    setComments([...comments, data as Comment]);
    setName("");
    setMessage("");
    toast.success("Merci pour ton partage 🙏");
  };

  if (loading) {
    return (
      <Layout>
        <div className="pt-32 pb-20 text-center text-muted-foreground">Chargement…</div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="pt-32 pb-20 text-center">
          <p className="text-muted-foreground mb-6">Article introuvable.</p>
          <Link to="/blog" className="text-primary hover:underline">← Retour au blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-body text-xs tracking-wider uppercase mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-3 h-3" /> Retour au blog
          </Link>

          <div className="flex items-center gap-4 text-xs text-muted-foreground font-body mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              {new Date(post.created_at).toLocaleDateString("fr-CH", {
                year: "numeric", month: "long", day: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle className="w-3 h-3" /> {comments.length} commentaire{comments.length > 1 ? "s" : ""}
            </span>
          </div>

          <h1 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="glow-line w-24 mb-10" />

          <div>{renderContent(post.content)}</div>
        </div>
      </article>

      {/* Comments */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
            Commentaires
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Partage ton ressenti ou pose une question — je te réponds avec bienveillance.
          </p>

          <div className="space-y-5 mb-10">
            {comments.length === 0 && (
              <p className="text-muted-foreground italic text-sm">Sois le premier à partager ton ressenti.</p>
            )}
            {comments.map((c) => (
              <div key={c.id} className="border border-border rounded-md p-5 bg-card/70">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading text-foreground">{c.author_name}</span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(c.created_at).toLocaleDateString("fr-CH", {
                      day: "numeric", month: "short", year: "numeric",
                    })}
                  </span>
                </div>
                <p className="font-body text-foreground/80 text-sm leading-relaxed whitespace-pre-line">
                  {c.message}
                </p>
              </div>
            ))}
          </div>

          <form onSubmit={submitComment} className="border border-primary/30 rounded-md p-6 bg-card/70 space-y-4">
            <h3 className="font-heading text-xl text-foreground">Laisser un commentaire</h3>
            <input
              type="text"
              required
              maxLength={80}
              placeholder="Ton prénom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-primary transition"
            />
            <textarea
              required
              maxLength={2000}
              rows={5}
              placeholder="Ton message…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-primary transition resize-none"
            />
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-6 py-3 rounded-sm hover:shadow-gold transition-all disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {submitting ? "Envoi…" : "Publier"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
