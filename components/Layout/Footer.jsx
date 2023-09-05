import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Tiktok from "../../public/assets/Icon/tiktok.svg";
import * as constants from "../../data/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationPin } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image src="/webtrisukses/assets/logo.png" quality={100} width={180} height={50} />
          <p className="my-4 mb-2">
            <strong className="font-medium">CV Trisukses Bangun Karya</strong> - Jasa bangun rumah dan renovasi dengan track record bintang lima.
          </p>
          <p>
            <FontAwesomeIcon className="inline-block h-4 w-5 mr-3" icon={faPhone} /> {constants.PHONE_NUMBER}
          </p>
          <p>
            <FontAwesomeIcon className="inline-block h-4 w-5 mr-3" icon={faEnvelope} /> {constants.EMAIL}
          </p>
          <p className="mb-2">
            <FontAwesomeIcon className="inline-block h-4 w-5 mr-3" icon={faLocationPin} /> {constants.ADDRESS}
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <a href="https://www.tiktok.com/@trisbangunkarya">
              <div className="mx-2 bg-slate-100 rounded-full items-center justify-center flex p-2 shadow-md">
                <Tiktok className="h-6 w-6 text-yellow-400" />
              </div>
            </a>
            <a href="https://www.instagram.com/jasabangunrenovasisidoarjo">
              <div className="mx-2 bg-slate-100 rounded-full items-center justify-center flex p-2 shadow-md">
                <Instagram className="h-6 w-6" />
              </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100095340162994">
              <div className="mx-2 bg-slate-100 rounded-full items-center justify-center flex p-2 shadow-md">
                <Facebook className="h-6 w-6" />
              </div>
            </a>
            <a href="https://www.instagram.com/jasabangunrenovasipasuruan">
              <div className="mx-2 bg-slate-100 rounded-full items-center justify-center flex p-2 shadow-md">
                <Instagram className="h-6 w-6" />
              </div>
            </a>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Aurelabs</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Layanan & Jasa</p>
          <ul className="text-slate-900 ">
            <Link activeClass="active" to="jasa" spy={true} smooth={true} duration={1000}>
              <li className="my-2 hover:text-yellow-500 cursor-pointer transition-all">Renovasi Rumah </li>
            </Link>
            <Link activeClass="active" to="jasa" spy={true} smooth={true} duration={1000}>
              <li className="my-2 hover:text-yellow-500 cursor-pointer transition-all">Bangun Rumah </li>
            </Link>
            <Link activeClass="active" to="jasa" spy={true} smooth={true} duration={1000}>
              <li className="my-2 hover:text-yellow-500 cursor-pointer transition-all">Desain </li>
            </Link>
            <Link activeClass="active" to="jasa" spy={true} smooth={true} duration={1000}>
              <li className="my-2 hover:text-yellow-500 cursor-pointer transition-all">Plafon Rumah </li>
            </Link>
            <Link activeClass="active" to="jasa" spy={true} smooth={true} duration={1000}>
              <li className="my-2 hover:text-yellow-500 cursor-pointer transition-all">Atap Baja Ringan </li>
            </Link>
            <Link activeClass="active" to="jasa" spy={true} smooth={true} duration={1000}>
              <li className="my-2 hover:text-yellow-500 cursor-pointer transition-all">Pagar Rumah </li>
            </Link>
          </ul>
        </div>

        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Lainnya</p>
          <ul className="text-slate-900">
            <li className="my-2 hover:text-yellow-500 cursor-pointer transition-all">Galeri </li>
            <li className="my-2 hover:text-yellow-500 cursor-pointer transition-all">Kontak </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
