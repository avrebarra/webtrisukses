import Feature from "../components/sections/features/Features";
import CTA from "../components/sections/cta/Cta";
import Jasa from "../components/sections/services/Services";
import Gallery from "../components/sections/gallery/Gallery";
import Hero from "../components/sections/hero/Hero";
import Workways from "../components/sections/workways/Workways";
import Partners from "../components/sections/partners/Partners";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/layout/SeoHead";
import JsonLd from "../components/layout/JsonLd";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://renovasirumahbangunan.com").replace(
  /\/$/,
  ""
);

export default function Home() {
  return (
    <>
      <SEOHead
        title="Trisukses Bangun Karya - Kontraktor Bangun & Renovasi Rumah Sidoarjo & Pasuruan"
        description="Kontraktor bangun & renovasi rumah di Sidoarjo & Pasuruan - gratis survey, desain & RAB. Garansi pengerjaan, pembayaran bertahap. Wujudkan hunian impian bersama CV Trisukses Bangun Karya."
        image={`${SITE_URL}/assets/service_building.jpg`}
      />
      <JsonLd />
      <Layout>
        <Hero />
        <Feature />
        <Workways />
        <Jasa />
        <Gallery />
        <Partners />
        <CTA />
      </Layout>
    </>
  );
}
