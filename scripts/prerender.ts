/**
 * Post-build prerender.
 * Runs after `vite build`. Reads dist/index.html (the built shell with hashed
 * asset references + all metas) and, for each route in prerender-routes.ts,
 * writes dist/<route>/index.html with:
 *   - route-specific <title>, <meta description>, <link canonical>, og:url/title/description
 *   - route SEO text injected inside <div id="root">…</div>
 *
 * React (via createRoot in main.tsx) replaces the container children on mount,
 * so no hydration mismatch. Crawlers see the text immediately.
 */

import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { routes } from "./prerender-routes";

const DIST = join(process.cwd(), "dist");
const SHELL_PATH = join(DIST, "index.html");

if (!existsSync(SHELL_PATH)) {
  console.error(`[prerender] dist/index.html not found — did vite build run?`);
  process.exit(0);
}

const shell = readFileSync(SHELL_PATH, "utf8");

function escapeAttr(s: string) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function generatePage(route: (typeof routes)[number]): string {
  let html = shell;

  // <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttr(route.title)}</title>`);

  // <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeAttr(route.description)}">`,
  );

  // og:title / og:description / og:url / twitter:title / twitter:description
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapeAttr(route.title)}">`,
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escapeAttr(route.description)}">`,
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${escapeAttr(route.canonical)}">`,
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeAttr(route.title)}">`,
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}">`,
  );

  // Canonical: insert before </head>. Remove existing canonical if present.
  html = html.replace(/<link\s+rel="canonical"[^>]*>\s*/gi, "");
  html = html.replace(
    "</head>",
    `    <link rel="canonical" href="${escapeAttr(route.canonical)}">\n  </head>`,
  );

  // Inject SEO content inside <div id="root"></div>
  html = html.replace(
    /<div id="root">\s*<\/div>/,
    `<div id="root">${route.content}</div>`,
  );

  return html;
}

let written = 0;
for (const route of routes) {
  const out = generatePage(route);
  const targetPath =
    route.path === "/"
      ? join(DIST, "index.html")
      : join(DIST, route.path.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(targetPath), { recursive: true });
  writeFileSync(targetPath, out, "utf8");
  written++;
}

console.log(`[prerender] Generated ${written} static HTML snapshots in dist/.`);
