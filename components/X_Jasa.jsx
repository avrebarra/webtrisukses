import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ButtonOutline from "./misc/ButtonOutline";
// import OverlayJasa from "./misc/OverlayJasa";
import Image from "next/image";
import * as constants from "../data/constants";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Jasa = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-white-300 to-slate-100 w-full py-14" id="pricing">
      {/* <OverlayJasa listJasa={[]} > */}
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3 variants={scrollAnimation} className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
              Melayani Kebutuhan Pembangunan Anda
            </motion.h3>
            <motion.p variants={scrollAnimation} className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
              Tentukan layanan yang sesuai dengan kebutuhan anda dan kami akan menyelesaikannya dengan professional.
            </motion.p>
          </ScrollAnimationWrapper>

          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-6 py-4 lg:py-6 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center shadow-md py-2 w-full m-2 px-3 lg:px-6 xl:px-10"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6">
                  <Image src="/assets/service_building.jpg" width={150} height={150} alt="Free Plan" />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-4 sm:my-4">Jasa Bangun Rumah</p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                  <a href={constants.WHATSAPP_MESSAGES.BANGUN_RUMAH}>
                    <ButtonOutline>Pilih</ButtonOutline>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center shadow-md py-2 w-full m-2 px-3 lg:px-6 xl:px-10"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6">
                  <Image src="/assets/service_renovation.jpg" width={150} height={150} alt="Free Plan" />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-4 sm:my-4">Jasa Renovasi Rumah</p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                  <a href={constants.WHATSAPP_MESSAGES.RENOVASI_RUMAH}>
                    <ButtonOutline>Pilih</ButtonOutline>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center shadow-md py-2 w-full m-2 px-3 lg:px-6 xl:px-10"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6">
                  <Image src="/assets/service_maintenance.jpg" width={150} height={150} alt="Free Plan" />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-4 sm:my-4">Jasa Building Maintenance</p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                  <a href={constants.WHATSAPP_MESSAGES.BUILDING_MAINTENANCE}>
                    <ButtonOutline>Pilih</ButtonOutline>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center shadow-md py-2 w-full m-2 px-3 lg:px-6 xl:px-10"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6">
                  <Image src="/assets/service_interior.jpg" width={150} height={150} alt="Free Plan" />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-4 sm:my-4">Jasa Interior</p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                  <a href={constants.WHATSAPP_MESSAGES.JASA_INTERIOR}>
                    <ButtonOutline>Pilih</ButtonOutline>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jasa;
