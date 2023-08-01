import Feature from "../components/2_Feature";
import CTA from "../components/4_CTA";
import Hero from "../components/1_Hero";
import Layout from "../components/Layout/Layout";
import SEOHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SEOHead title="Karya Renovasi - Bangun hunian impian anda bersama kami!" />
      <Layout>
        <Hero />
        <Feature />
        <CTA />
      </Layout>
    </>
  );
}
