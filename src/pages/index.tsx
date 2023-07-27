import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ChakraProvider>
      <main>
        <div className={"section section-hero"}></div>
        <div className={"section section-keunggulan"}></div>
        <div className={"section section-jasa"}></div>
        <div className={"section section-gallery"}></div>
        <div className={"section section-footer"}></div>
      </main>
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
