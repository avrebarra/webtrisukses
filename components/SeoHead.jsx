import Head from "next/head";
import { useRouter } from "next/router";

// Default value for some meta data
const defaultMeta = {
  title: "Trisukses Bangun Karya",
  siteName: "Trisukses Bangun Karya",
  description: "Wujudkan Hunian Impian Anda Bersama Kami!",
  // change base url of your web (without '/' at the end)
  url: "Trisukses Bangun Karya.com",
  type: "website",
  robots: "follow, index",
  // change with url of your image (recommended dimension = 1.91:1)
  // used in twitter, facebook, etc. card when link copied in tweet/status
  author: "Lorem Ipsum",
};

/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const SEOHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.title = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
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
      {/* Accent color on supported browser */}
      <meta name="theme-color" content="#F53838" />
    </Head>
  );
};

// Favicons, other icons, and manifest definition
const favicons = [
  {
    rel: "icon",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicon/favicon-96x96.png",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

export default SEOHead;
