import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="feature">
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">1. Harga Terjangkau</h3>
            <p className="my-2 text-black-500">
              Kami memberikan harga yang bisa disesuaikan budget Anda. Dijamin tetap berkualitas di semua pilihan.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">2. Berpengalaman</h3>
            <p className="my-2 text-black-500">
              Menggabungkan pengerjaan yang berkualitas, pengetahuan yang unggul, dan harga rendah untuk memberi Anda layanan yang tak tertandingi
              oleh pesaing kami.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">3. Material Terbaik</h3>
            <p className="my-2 text-black-500">
              Memberikan mutu material yang terbaik, memiliki pengalaman personel dan sumber daya untuk membuat proyek berjalan lancar. Sehingga dapat
              kami pastikan pekerjaan selesai tepat waktu.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">4. Profesional</h3>
            <p className="my-2 text-black-500">
              Manajemen bisnis kami diisi tenaga kerja profesional dan terarah dalam bekerja. Koordinasi sangat dibutuhkan dalam mengerjakan sebuah
              bangunan sehingga target bisa terpenuhi.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">5. Laporan Progress</h3>
            <p className="my-2 text-black-500">
              Kami bekerja bersama melibatkan serangkaian langkah yang direncanakan dengan cermat, berpusat di sekitar jadwal yang kami ikuti dan
              komunikasi sehari-hari demi kelancaran pembangunan.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">6. Jaringan Kuat</h3>
            <p className="my-2 text-black-500">
              Kami memiliki pengalaman personel dan sumber daya untuk membuat proyek berjalan lancar. Sehingga dapat kami pastikan pekerjaan selesai
              tepat waktu.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
