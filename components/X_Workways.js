import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const workways = [
  "1. Order via online.",
  "2. Survey lokasi.",
  "3. Perencanaan Kerja.",
  "4. Negosiasi.",
  "5. Tanda Tangan Kesepakatan Kerja (SPK).",
  "6. Persiapan Tukang, Material dan alat.",
  "7. Pengerjaan / pengukuran tempat kerja (bowplankrumah)",
  "8. Pengawasan Proyek dan update info mingguan.",
  "9. Serah terima.",
  "10. Retensi atau garansi.",
];

function reduceArrayToSets(array) {
  const sets = [];

  for (let i = 0; i < array.length; i += 2) {
    const set = [];

    if (i < array.length) {
      set.push(array[i]);
    }

    if (i + 1 < array.length) {
      set.push(array[i + 1]);
    }

    sets.push(set);
  }

  return sets;
}

const Workways = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="w-full py-16">
      <div className="max-w-screen-xl sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="feature">
        <div className="text-center">
          <ScrollAnimationWrapper>
            <motion.h3 variants={scrollAnimation} className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
              Langkah Kerja Kami
            </motion.h3>
          </ScrollAnimationWrapper>
        </div>

        {reduceArrayToSets(workways).map((set, i) => (
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 mt-8 mb-6">
            <ScrollAnimationWrapper>
              <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
                <h3 className="text-xl lg:text-2xl leading-relaxed text-black-600">{set[0]}</h3>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
                <h3 className="text-xl lg:text-2xl leading-relaxed text-black-600">{set[1]}</h3>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workways;
