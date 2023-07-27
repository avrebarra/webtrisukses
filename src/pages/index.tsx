import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className={"section section-hero"}></div>
      <div className={"section section-keunggulan"}></div>
      <div className={"section section-jasa"}></div>
      <div className={"section section-gallery"}></div>
      <div className={"section section-footer"}></div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
