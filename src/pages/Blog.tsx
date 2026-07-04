import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  created_at: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("id,slug,title,excerpt,created_at")
        .eq("published", true)
        .order("created_at", { ascending: false });
      setPosts(data ?? []);
      setLoading(false);
    })();
  }, []);

  return (
    <Layout>
      <section className="pt-32 pb-20 md:pb-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
            Le Blog
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-center font-light mb-4 text-foreground">
            Éveil, <span className="text-gradient-gold italic">énergie & conscience</span>
          </h1>
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-4">
            Réflexions et enseignements sur la Kundalini, la guérison énergétique et le chemin de reconnexion à soi.
          </p>
          <div className="glow-line w-24 mx-auto mb-16" />

          {loading ? (
            <p className="text-center text-muted-foreground">Chargement…</p>
          ) : posts.length === 0 ? (
            <p className="text-center text-muted-foreground">Aucun article pour le moment.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="border border-border rounded-md p-8 bg-card/60 hover:border-primary/40 hover:shadow-gold transition-all duration-500"
                >
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-body mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.created_at).toLocaleDateString("fr-CH", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-3 leading-tight">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                      {post.excerpt}
                    </p>
                  )}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-body text-sm font-semibold tracking-wider uppercase hover:gap-3 transition-all"
                  >
                    Lire l'article <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
