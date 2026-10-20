import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonOutline from "../../ui/ButtonOutline";
import ScrollAnimationWrapper from "../../ui/ScrollAnimationWrapper";
import * as constants from "../../../data/constants";

// extracted from Services.jsx — ponytail: reuse, one-liner card dedup (4 repeats → 1 component)
export default function ServiceCard({ image, title, scrollAnimation, onSelect, href }) {
  const btn = <ButtonOutline>Pilih</ButtonOutline>;
  return (
    <ScrollAnimationWrapper className="flex justify-center">
      <motion.div
        variants={scrollAnimation}
        className="flex flex-col justify-center items-center shadow-md py-2 w-full m-2 px-3 lg:px-6 xl:px-10"
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      >
        <div className="p-4 lg:p-0 mt-6">
          <Image src={image} width={150} height={150} alt={title} />
        </div>
        <p className="text-lg text-black-600 font-medium capitalize my-4 sm:my-4">{title}</p>
        <div className="flex flex-col w-full justify-center mb-8 flex-none">
          {href ? (
            <a href={href}>{btn}</a>
          ) : (
            <a onClick={onSelect}>{btn}</a>
          )}
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
}
