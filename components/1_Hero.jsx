import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline";
import { motion } from "framer-motion";
import * as constants from "../data/constants";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16" variants={scrollAnimation}>
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              <strong>Trisukses Bangun Karya</strong>, kontraktor jasa bangun dan renovasi rumah terbaik.
            </h1>
            <p className="text-slate-900 mt-4 mb-2">
              Trisukses Bangun Karya merupakan kasa kontraktor bangunan terbaik, terpercaya, dan amanah di dalam bidang konstruksi.
            </p>
            <p className="text-slate-900 mt-4 mb-2">
              Kami berpengalaman dalam berbagai jenis konstruksi bangunan dan jasa bangun rumah. Seperti: rumah mewah, minimalis, klasik, tropis,
              gudang, dan industrial dengan matrial pilihan dan tenaga yang ahli dibidangnya.
            </p>
            <p className="text-slate-900 mt-4 mb-6">
              Anda dapat mengandalkan kami dalam hal <strong>kontraktor</strong> jasa bangun dan jasa renovasi rumah tinggal, rumah kos, ruko, kantor,
              gudang, sipil, interior, café dan lainnya.
            </p>
            <a href={constants.WHATSAPP_MESSAGES.GENERAL}>
              <ButtonPrimary>Hubungi Kami</ButtonPrimary>
            </a>
          </div>
          <div className="flex w-full">
            <img src="/assets/hero2.png" className="w-full object-cover h-full" alt="VPN Illustrasi" />
          </div>
        </div>
        <div className="relative w-full flex">
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
