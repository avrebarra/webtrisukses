import Feature from "../components/2_Feature";
import CTA from "../components/X_CTA";
import Jasa from "../components/X_Jasa";
import Gallery from "../components/3_Gallery";
import Hero from "../components/1_Hero";
import Workways from "../components/X_Workways";
import Partners from "../components/X_Partners";
import Layout from "../components/Layout/Layout";
import SEOHead from "../components/SeoHead";

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
