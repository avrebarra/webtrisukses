import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image src="/webtrisukses/assets/logo.png" quality={100} width={150} height={50} />
          <p className="mb-4">
            <strong className="font-medium">TriSuksesKarya</strong> adalah penyedia jasa bangun rumah dan renovasi profesional dengan track record
            bintang lima.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Aurelabs</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Layanan & Jasa</p>
          <ul className="text-black-500 ">
            <Link activeClass="active" to="feature" spy={true} smooth={true} duration={1000}>
              <li className="my-2 hover:text-green-500 cursor-pointer transition-all">Bangun Rumah </li>
            </Link>
            <Link activeClass="active" to="feature" spy={true} smooth={true} duration={1000}>
              <li className="my-2 hover:text-green-500 cursor-pointer transition-all">Renovasi Rumah </li>
            </Link>
            <Link activeClass="active" to="feature" spy={true} smooth={true} duration={1000}>
              <li className="my-2 hover:text-green-500 cursor-pointer transition-all">Building Maintenance </li>
            </Link>
            <Link activeClass="active" to="feature" spy={true} smooth={true} duration={1000}>
              <li className="my-2 hover:text-green-500 cursor-pointer transition-all">Interior </li>
            </Link>
          </ul>
        </div>

        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Lainnya</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">Galeri </li>
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">Kontak </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
