// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.activationkundalini.ch";
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://wchaptnajxqvfidwmccl.supabase.co";
const SUPABASE_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjaGFwdG5hanhxdmZpZHdtY2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1Mzc4ODYsImV4cCI6MjA4NzExMzg4Nn0.b-HDZ44yOUJIo5EuUwgTZzOZq-jCV_LPMAvZEOOLL1o";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/la-kundalini", changefreq: "monthly", priority: "0.9" },
  { path: "/lecture-ame", changefreq: "monthly", priority: "0.8" },
  { path: "/offres", changefreq: "monthly", priority: "0.9" },
  { path: "/a-propos", changefreq: "monthly", priority: "0.7" },
  { path: "/mon-histoire", changefreq: "monthly", priority: "0.6" },
  { path: "/contact", changefreq: "yearly", priority: "0.6" },
  { path: "/rendez-vous", changefreq: "monthly", priority: "0.9" },
  { path: "/cercle-de-guerison", changefreq: "monthly", priority: "0.8" },
  { path: "/page-une", changefreq: "monthly", priority: "0.6" },
  { path: "/blog", changefreq: "weekly", priority: "0.9" },
];

async function fetchBlogPosts(): Promise<SitemapEntry[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?select=slug,created_at&published=eq.true&order=created_at.desc`,
      { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } }
    );
    if (!res.ok) return [];
    const rows: Array<{ slug: string; created_at: string }> = await res.json();
    return rows.map((r) => ({
      path: `/blog/${r.slug}`,
      lastmod: r.created_at?.slice(0, 10),
      changefreq: "monthly",
      priority: "0.7",
    }));
  } catch {
    return [];
  }
}

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n")
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

(async () => {
  const posts = await fetchBlogPosts();
  const entries = [...staticEntries, ...posts];
  writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
  console.log(`sitemap.xml written (${entries.length} entries — ${posts.length} blog posts)`);
})();
