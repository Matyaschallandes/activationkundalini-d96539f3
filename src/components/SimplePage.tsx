import Layout from "@/components/Layout";
import Seo, { SITE_URL } from "@/components/Seo";

type Props = {
  title: string;
  description: string;
  path: string;
  h1: string;
  crumb: string;
  children: React.ReactNode;
  jsonLd?: Record<string, any>[];
};

const SimplePage = ({ title, description, path, h1, crumb, children, jsonLd = [] }: Props) => (
  <Layout>
    <Seo
      title={title}
      description={description}
      path={path}
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: crumb, item: `${SITE_URL}${path}` },
          ],
        },
        ...jsonLd,
      ]}
    />
    <article className="container mx-auto px-6 max-w-3xl py-10 md:py-16 prose-like">
      <h1 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-8">{h1}</h1>
      <div className="font-body text-foreground/80 leading-relaxed space-y-4 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-primary [&_a]:underline">
        {children}
      </div>
    </article>
  </Layout>
);

export default SimplePage;
