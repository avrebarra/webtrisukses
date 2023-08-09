import React, { useMemo } from "react";
import Image from "next/image";
import Gallery from "./3_Gallery";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const CTA = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="pricing">
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
                className="flex flex-col justify-center items-center shadow-md rounded-xl py-2 w-full m-2 px-3 lg:px-6 xl:px-10"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image src="/assets/service_building.png" width={145} height={165} alt="Free Plan" />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-4 sm:my-4">Jasa Bangun Rumah</p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                  <ButtonOutline>Pilih</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center shadow-md rounded-xl py-2 w-full m-2 px-3 lg:px-6 xl:px-10"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image src="/assets/service_renovation.png" width={145} height={165} alt="Free Plan" />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-4 sm:my-4">Jasa Renovasi Rumah</p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                  <ButtonOutline>Pilih</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center shadow-md rounded-xl py-2 w-full m-2 px-3 lg:px-6 xl:px-10"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image src="/assets/service_maintenance.png" width={145} height={165} alt="Free Plan" />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-4 sm:my-4">Jasa Building Maintenance</p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                  <ButtonOutline>Pilih</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center shadow-md rounded-xl py-2 w-full m-2 px-3 lg:px-6 xl:px-10"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image src="/assets/service_interior.png" width={145} height={165} alt="Free Plan" />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-4 sm:my-4">Jasa Interior</p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                  <ButtonOutline>Pilih</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Galeri Pekerjaan Kami{" "}
            </motion.h3>
            <motion.p variants={scrollAnimation} className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
              Inilah cerita-cerita kami bersama pelanggan yang bergabung dengan senang hati ketika menggunakan layanan luar biasa kami.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Gallery />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Hubungi Kami <br /> & Wujudkan Mimpi Anda
                  </h5>
                  <p>Percayakan konstruksi bersama kami, kami akan buktikan hasilnya.</p>
                </div>
                <ButtonPrimary>Hubungi Kami</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default CTA;
