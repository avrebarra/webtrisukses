import React, { useMemo, useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import getScrollAnimation from "../utils/getScrollAnimation";
import * as constants from "../data/constants";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Gallery = ({
  listTestimoni: listImages = [
    { image: "/webtrisukses/assets/gallery/item_1.jpg" },
    { image: "/webtrisukses/assets/gallery/item_2.jpg" },
    { image: "/webtrisukses/assets/gallery/item_3.jpg" },
    { image: "/webtrisukses/assets/gallery/item_4.jpg" },
    { image: "/webtrisukses/assets/gallery/item_5.jpg" },
    { image: "/webtrisukses/assets/gallery/item_6.jpg" },
    { image: "/webtrisukses/assets/gallery/item_7.jpg" },
    { image: "/webtrisukses/assets/gallery/item_8.jpg" },
    { image: "/webtrisukses/assets/gallery/item_9.jpg" },
    { image: "/webtrisukses/assets/gallery/item_10.jpg" },
    { image: "/webtrisukses/assets/gallery/item_11.jpg" },
    { image: "/webtrisukses/assets/gallery/item_12.jpg" },
    { image: "/webtrisukses/assets/gallery/item_13.jpg" },
    { image: "/webtrisukses/assets/gallery/item_14.jpg" },
    { image: "/webtrisukses/assets/gallery/item_15.jpg" },
    { image: "/webtrisukses/assets/gallery/item_16.jpg" },
    { image: "/webtrisukses/assets/gallery/item_17.jpg" },
    { image: "/webtrisukses/assets/gallery/item_18.jpg" },
    { image: "/webtrisukses/assets/gallery/item_19.jpg" },
    { image: "/webtrisukses/assets/gallery/item_20.jpg" },
    { image: "/webtrisukses/assets/gallery/item_23.jpg" },
    { image: "/webtrisukses/assets/gallery/item_24.jpg" },
    { image: "/webtrisukses/assets/gallery/item_25.jpg" },
    { image: "/webtrisukses/assets/gallery/item_26.jpg" },
    { image: "/webtrisukses/assets/gallery/item_27.jpg" },
    { image: "/webtrisukses/assets/gallery/item_28.jpg" },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    // dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [sliderRef, setSliderRef] = useState(null);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div className="bg-gradient-to-b from-white-300 to-slate-100 w-full py-14" id="galeri">
        <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div className="flex flex-col w-full">
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
                <Slider {...settings} arrows={false} ref={setSliderRef} className="flex items-stretch justify-items-stretch">
                  {listImages.map((listTestimonis, index) => (
                    <div className="px-1 flex items-stretch" key={index}>
                      <div className="border-2 border-slate-100 hover:border-yellow-500 transition-all flex mb-5">
                        <Image src={listTestimonis.image} height={500} width={500} style={{ "object-fit": "cover" }} alt="Icon People" />
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="flex w-full items-center justify-end">
                  <div className="flex flex-none justify-between w-auto mt-14">
                    <div
                      className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-yellow-500 border hover:bg-yellow-500 hover:text-slate-900 transition-all text-yellow-500 cursor-pointer"
                      onClick={sliderRef?.slickPrev}
                    >
                      <ArrowBack className="h-6 w-6 " />
                    </div>
                    <div
                      className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-yellow-500 border hover:bg-yellow-500 hover:text-slate-900 transition-all text-yellow-500 cursor-pointer"
                      onClick={sliderRef?.slickNext}
                    >
                      <ArrowNext className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
