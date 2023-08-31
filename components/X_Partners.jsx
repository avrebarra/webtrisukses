import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Workways = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="w-full py-16">
      <div className="max-w-screen-xl sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="feature">
        <div className="text-center">
          <ScrollAnimationWrapper>
            <motion.h3 variants={scrollAnimation} className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
              Partner Kami
            </motion.h3>
          </ScrollAnimationWrapper>
        </div>
        <div className="py-12 w-full">
          <ScrollAnimationWrapper>
            <motion.div className="w-full text-center" variants={scrollAnimation}>
              <Image src={"/assets/partners/partnerlogo-1.jpg"} height={50} width={100 / 2} />
              <Image src={"/assets/partners/partnerlogo-2.jpg"} height={50} width={100 / 2} />
              <Image src={"/assets/partners/partnerlogo-3.png"} height={50} width={300 / 2} />
              <Image src={"/assets/partners/partnerlogo-4.png"} height={50} width={150 / 2} />
              <Image src={"/assets/partners/partnerlogo-5.jpg"} height={50} width={300 / 2} />
              <Image src={"/assets/partners/partnerlogo-6.jpg"} height={50} width={200 / 2} />
              <Image src={"/assets/partners/partnerlogo-7.jpeg"} height={50} width={300 / 2} />
              <Image src={"/assets/partners/partnerlogo-8.jpg"} height={50} width={300 / 2} />
              <Image src={"/assets/partners/partnerlogo-9.png"} height={50} width={300 / 2} />
              <Image src={"/assets/partners/partnerlogo-10.jpeg"} height={50} width={500 / 2} />
              <Image src={"/assets/partners/partnerlogo-11.png"} height={50} width={500 / 2} />
              <Image src={"/assets/partners/partnerlogo-12.jpg"} height={50} width={300 / 2} />
              <Image src={"/assets/partners/partnerlogo-13.jpg"} height={50} width={150 / 2} />
              <Image src={"/assets/partners/partnerlogo-14.jpg"} height={50} width={250 / 2} />
              <Image src={"/assets/partners/partnerlogo-15.png"} height={50} width={150 / 2} />
              <Image src={"/assets/partners/partnerlogo-16.jpg"} height={50} width={200 / 2} />
              <Image src={"/assets/partners/partnerlogo-17.jpg"} height={50} width={200 / 2} />
              <Image src={"/assets/partners/partnerlogo-18.png"} height={50} width={250 / 2} />
              <Image src={"/assets/partners/partnerlogo-19.jpg"} height={50} width={150 / 2} />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Workways;
