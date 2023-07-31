import "flowbite";
import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ChakraProvider } from "@chakra-ui/react";

import { SectionNavigation } from "../section/index/1_navigation";
import { SectionCarousel } from "../section/index/2_carousel";
import { SectionKeunggulan } from "../section/index/3_keunggulan";
import { SectionJasa } from "../section/index/4_jasa";
import { SectionGallery } from "../section/index/5_gallery";
import { SectionFooter } from "../section/index/6_footer";
import { PartContactButton } from "../section/index/x_contact_button";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ChakraProvider>
      <main>
        <SectionNavigation />
        <SectionCarousel />
        <SectionKeunggulan />
        <SectionJasa />
        <SectionGallery />
        <SectionFooter />

        <PartContactButton />
      </main>
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>SuksesRenovasi</title>
  </>
);
