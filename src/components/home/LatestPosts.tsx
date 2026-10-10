import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type Post = { slug: string; title: string; excerpt: string | null };

const LatestPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    supabase.from("blog_posts").select("slug,title,excerpt").eq("published", true)
      .order("created_at", { ascending: false }).limit(3)
      .then(({ data }) => setPosts((data as Post[]) || []));
  }, []);
  if (!posts.length) return null;
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-10 text-foreground">
          Derniers <span className="text-gradient-gold italic">articles</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="p-6 rounded-2xl border border-border bg-card/60 hover:border-primary/50 transition">
              <h3 className="font-heading text-xl text-foreground mb-2">{p.title}</h3>
              {p.excerpt && <p className="font-body text-sm text-foreground/70 line-clamp-3">{p.excerpt}</p>}
              <span className="mt-3 inline-block text-xs text-primary">Lire l'article →</span>
            </Link>
          ))}
        </div>
        <p className="text-center mt-8"><Link to="/blog" className="text-primary underline">Voir tous les articles du blog</Link></p>
      </div>
    </section>
  );
};

export default LatestPosts;
