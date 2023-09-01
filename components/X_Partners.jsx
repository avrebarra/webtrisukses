import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Workways = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="w-full">
      <div className="max-w-screen-xl sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="feature">
        <div className="text-center">
          <ScrollAnimationWrapper>
            <motion.h3 variants={scrollAnimation} className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
              Partner Kami
            </motion.h3>
          </ScrollAnimationWrapper>
        </div>
        <div className="py-12 w-full flex gap-6 flex-wrap justify-center">
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-1.jpg"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-2.jpg"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-3.png"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-4.png"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-5.jpg"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-6.jpg"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-7.jpeg"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-8.jpg"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-9.png"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-10.jpeg"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-11.png"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-12.jpg"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-13.jpg"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-14.jpg"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-15.png"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-16.jpg"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-17.jpg"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-18.png"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-19.jpg"} />
          <img className="h-16" src={"/webtrisukses/assets/partners/partnerlogo-20.webp"} />
        </div>
      </div>
    </div>
  );
};

export default Workways;
