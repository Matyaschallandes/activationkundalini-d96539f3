import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.activationkundalini.ch";

type SeoProps = {
  title: string;
  description: string;
  path: string; // starts with /
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
  publishedTime?: string;
  modifiedTime?: string;
};

const Seo = ({
  title,
  description,
  path,
  image,
  type = "website",
  keywords,
  jsonLd,
  publishedTime,
  modifiedTime,
}: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const jsonLdArray = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Activation Kundalini — Karmaequilego" />
      <meta property="og:locale" content="fr_CH" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {jsonLdArray.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
export { SITE_URL };
