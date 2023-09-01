import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ButtonOutline from "./misc/ButtonOutline";
import OverlayJasa from "./misc/OverlayJasa";
import Image from "next/image";
import * as constants from "../data/constants";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const SUBMENU_JASA = {
  BANGUN_RUMAH: [
    { name: "Bangun Rumah", url: constants.WHATSAPP_MESSAGES.BANGUN_RUMAH_BANGUN_RUMAH },
    { name: "Bangun Ruko", url: constants.WHATSAPP_MESSAGES.BANGUN_RUMAH_BANGUN_RUKO },
    { name: "Bangun Rumah Kost", url: constants.WHATSAPP_MESSAGES.BANGUN_RUMAH_BANGUN_RUMAH_KOST },
    { name: "Bangun Toko", url: constants.WHATSAPP_MESSAGES.BANGUN_RUMAH_BANGUN_TOKO },
  ],
  RENOVASI: [
    { name: "Meningkat Rumah", url: constants.WHATSAPP_MESSAGES.RENOVASI_MENINGKAT_RUMAH },
    { name: "Pengecatan", url: constants.WHATSAPP_MESSAGES.RENOVASI_PENGECATAN },
    { name: "Renovasi Rumah Lainnya", url: constants.WHATSAPP_MESSAGES.RENOVASI_RENOVASI_RUMAH_LAINNYA },
    { name: "Taman Dan Kolam Ikan", url: constants.WHATSAPP_MESSAGES.RENOVASI_TAMAN_DAN_KOLAM_IKAN },
    { name: "Tambah Ruangan", url: constants.WHATSAPP_MESSAGES.RENOVASI_TAMBAH_RUANGAN },
    { name: "Kolam Renang", url: constants.WHATSAPP_MESSAGES.RENOVASI_KOLAM_RENANG },
    { name: "Buat Dak", url: constants.WHATSAPP_MESSAGES.RENOVASI_BUAT_DAK },
    { name: "Pasang Atap Baja Ringan", url: constants.WHATSAPP_MESSAGES.RENOVASI_PASANG_ATAP_BAJA_RINGAN },
  ],
  MAINTENANCE_BUILDING: [
    { name: "Service & Cuci AC", url: constants.WHATSAPP_MESSAGES.MAINTENANCE_SERVICE_CUCI_AC },
    { name: "Instalasi CCTV", url: constants.WHATSAPP_MESSAGES.MAINTENANCE_INSTALASI_CCTV },
    { name: "Pasang Kitchen Set", url: constants.WHATSAPP_MESSAGES.MAINTENANCE_PASANG_KITCHEN_SET },
  ],
};

const Jasa = () => {
  const [overlayData, setOverlayData] = useState([]);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-white-300 to-slate-100 w-full py-14" id="pricing">
      <div className={overlayData.length ? "" : "hidden"}>
        <OverlayJasa
          listJasa={overlayData}
          onClose={() => {
            setOverlayData([]);
          }}
        />
      </div>

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
                  <Image src="/webtrisukses/assets/service_building.jpg" width={150} height={150} alt="Free Plan" />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-4 sm:my-4">Jasa Bangun Rumah</p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                  <a
                    onClick={() => {
                      setOverlayData(SUBMENU_JASA.BANGUN_RUMAH);
                    }}
                  >
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
                  <Image src="/webtrisukses/assets/service_renovation.jpg" width={150} height={150} alt="Free Plan" />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-4 sm:my-4">Jasa Renovasi Rumah</p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                  <a
                    onClick={() => {
                      setOverlayData(SUBMENU_JASA.RENOVASI);
                    }}
                  >
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
                  <Image src="/webtrisukses/assets/service_maintenance.jpg" width={150} height={150} alt="Free Plan" />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-4 sm:my-4">Jasa Building Maintenance</p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                  <a
                    onClick={() => {
                      setOverlayData(SUBMENU_JASA.MAINTENANCE_BUILDING);
                    }}
                  >
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
                  <Image src="/webtrisukses/assets/service_interior.jpg" width={150} height={150} alt="Free Plan" />
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
