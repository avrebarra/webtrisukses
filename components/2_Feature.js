import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="w-full bg-yellow-400 py-16">
      <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="feature">
        <div className="text-center pb-12">
          <ScrollAnimationWrapper>
            <motion.h3 variants={scrollAnimation} className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
              Dengan layanan <strong>GRATIS</strong>*, dari kami untuk Anda.
            </motion.h3>
            <motion.p variants={scrollAnimation} className="leading-normal w-10/12 sm:w-7/12 lg:w-3/5 mx-auto my-2">
              CV Trisukses Bangun Karya menghadirkan beberapa layanan gratis (dengan syarat dan ketentuan) yang bisa anda dapatkan saat pembangunan,
              diantaranya:
            </motion.p>
          </ScrollAnimationWrapper>
        </div>
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
          <ScrollAnimationWrapper>
            <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
              <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">1. GRATIS Survey Lokasi</h3>
              <p className="my-2 text-slate-900">
                Langsung menuju suksesnya proyek dengan survei mendalam oleh para ahli kami untuk perencanaan yang presisi.
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
              <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">2. GRATIS Konsultasi</h3>
              <p className="my-2 text-slate-900">
                Dapatkan panduan konstruksi yang sempurna bersama kami. Pelajari bagaimana langkah-langkah menuju keberhasilan proyek Anda hanya
                dengan kami.
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
          <ScrollAnimationWrapper>
            <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
              <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">3. GRATIS Desain*</h3>
              <p className="my-2 text-slate-900">
                Dapatkan akses eksklusif ke tim kreatif kami yang akan merancang visi Anda menjadi kenyataan, tanpa biaya tambahan.
              </p>
              <p className="text-sm italic">*) syarat dan ketentuan berlaku</p>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
              <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">4. GRATIS RAB</h3>
              <p className="my-2 text-slate-900">
                Kami siap membantu Anda merencanakan anggaran secara cermat dan detail sehingga Anda dapat menghindari kejutan tak terduga.
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
          <ScrollAnimationWrapper>
            <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
              <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">5. Garansi Pengerjaan</h3>
              <p className="my-2 text-slate-900">
                Kami mendukung proyek Anda dengan keyakinan penuh melalui "Garansi Pengerjaan", memberikan perlindungan atas kualitas dan kepuasan
                selama proses pelaksanaan.
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
              <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">6. Pembayaran Bertahap</h3>
              <p className="my-2 text-slate-900">
                Menghadirkan kemudahan dalam setiap langkah, dengan "Pembayaran Bertahap". Fleksibilitas pembayaran untuk proyek Anda, sesuai dengan
                perkembangan dan pencapaian tiap fase.
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Feature;
