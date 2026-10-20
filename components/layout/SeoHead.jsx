import Head from "next/head";
import { useRouter } from "next/router";
import { withBasePath } from "../../utils/withBasePath";

// site url - override via NEXT_PUBLIC_SITE_URL for staging/preview
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://renovasirumahbangunan.com").replace(
  /\/$/,
  ""
);
const OG_IMAGE_DEFAULT = `${SITE_URL}/assets/service_building.jpg`;

const defaultMeta = {
  title: "Trisukses Bangun Karya - Kontraktor Bangun & Renovasi Rumah Sidoarjo & Pasuruan",
  siteName: "Trisukses Bangun Karya",
  description:
    "Kontraktor bangun & renovasi rumah di Sidoarjo & Pasuruan - gratis survey, desain & RAB. Garansi pengerjaan, pembayaran bertahap. Wujudkan hunian impian bersama CV Trisukses Bangun Karya.",
  url: SITE_URL,
  type: "website",
  robots: "follow, index",
  image: OG_IMAGE_DEFAULT,
  imageAlt: "Proyek bangun & renovasi rumah - CV Trisukses Bangun Karya, Sidoarjo Pasuruan",
  locale: "id_ID",
  author: "CV Trisukses Bangun Karya",
};

/**
 * Next Head component populated with necessary SEO tags and title
 */
const SEOHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta.title = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;

  const canonicalUrl = `${meta.url}${router.asPath === "/" ? "/" : router.asPath.split("?")[0]}`;
  const ogImage = meta.image || OG_IMAGE_DEFAULT;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta name="author" content={meta.author} />
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:locale" content={meta.locale} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={meta.imageAlt} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={meta.imageAlt} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta name="publish_date" property="og:publish_date" content={meta.date} />
          <meta name="author" property="article:author" content={meta.author} />
        </>
      )}
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="theme-color" content="#fbbf24" />
    </Head>
  );
};

const favicons = [
  {
    rel: "icon",
    href: withBasePath("/favicon.ico"),
  },
  {
    rel: "icon",
    href: withBasePath("/favicon/favicon.ico"),
  },
  {
    rel: "icon",
    type: "image/png",
    href: withBasePath("/favicon.png"),
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: withBasePath("/favicon/favicon-16x16.png"),
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: withBasePath("/favicon/favicon-32x32.png"),
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: withBasePath("/favicon/favicon-96x96.png"),
  },
  {
    rel: "manifest",
    href: withBasePath("/site.webmanifest"),
  },
];

export default SEOHead;
