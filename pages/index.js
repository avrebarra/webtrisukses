import Feature from "../components/sections/features/Features";
import CTA from "../components/sections/cta/Cta";
import Jasa from "../components/sections/services/Services";
import Gallery from "../components/sections/gallery/Gallery";
import Hero from "../components/sections/hero/Hero";
import Workways from "../components/sections/workways/Workways";
import Partners from "../components/sections/partners/Partners";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/layout/SeoHead";

export default function Home() {
  return (
    <>
      <SEOHead title="Karya Renovasi - Bangun hunian impian anda bersama kami!" />
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
