import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTiktok, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { withBasePath } from "../../utils/withBasePath";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
          <a href="#hero" className="inline-flex items-center">
            <img
              src={withBasePath("/assets/logo.png")}
              alt="CV Trisukses Bangun Karya"
              className="h-12 sm:h-14 w-auto brightness-0 invert"
            />
          </a>
          <p className="text-sm leading-relaxed mt-4 text-slate-400">
            Jasa bangun rumah dan renovasi dengan track record bintang lima.
          </p>
        </div>
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white mb-4">Kontak</p>
          <ul className="text-sm space-y-2 text-slate-400">
            <li className="flex items-start justify-center sm:justify-start gap-2 text-left">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-3.5 h-3.5 mt-1 shrink-0 text-amber-400"
              />
              <span>0822-5746-0176</span>
            </li>
            <li className="flex items-start justify-center sm:justify-start gap-2 text-left">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-3.5 h-3.5 mt-1 shrink-0 text-amber-400"
              />
              <span>tris.bangunkarya@gmail.com</span>
            </li>
            <li className="flex items-start justify-center sm:justify-start gap-2 text-left max-w-[22rem] mx-auto sm:mx-0 sm:max-w-none">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-3.5 h-3.5 mt-1 shrink-0 text-amber-400"
              />
              <span>Jl Teluk Bayur RT02 RW01, Kelurahan Gebang, Sidoarjo, Jawa Timur</span>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white mb-4">Layanan &amp; Jasa</p>
          <ul className="text-sm space-y-2 text-slate-400">
            <li>
              <a href="#layanan" className="hover:text-amber-400 transition-colors">
                Bangun Rumah
              </a>
            </li>
            <li>
              <a href="#layanan" className="hover:text-amber-400 transition-colors">
                Renovasi Rumah
              </a>
            </li>
            <li>
              <a href="#layanan" className="hover:text-amber-400 transition-colors">
                Building Maintenance
              </a>
            </li>
            <li>
              <a href="#layanan" className="hover:text-amber-400 transition-colors">
                Interior
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white mb-4">Ikuti Kami</p>
          <ul className="text-sm space-y-2 text-slate-400">
            <li>
              <a
                href="https://www.tiktok.com/@trisbangunkarya"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <FontAwesomeIcon icon={faTiktok} className="w-3.5 h-3.5 shrink-0" />
                TikTok
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jasabangunrenovasisidoarjo"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-3.5 h-3.5 shrink-0" />
                Instagram Sidoarjo
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jasabangunrenovasipasuruan"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-3.5 h-3.5 shrink-0" />
                Instagram Pasuruan
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100095340162994"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-3.5 h-3.5 shrink-0" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <span className="text-center sm:text-left">
          © {new Date().getFullYear()} CV Trisukses Bangun Karya. Seluruh hak cipta dilindungi.
        </span>
        <a
          href="https://avrebarra.github.io"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1 bg-white text-slate-900 px-5 py-2.5 rounded-md text-xs leading-none hover:bg-slate-100 transition-colors"
        >
          <span className="font-normal">This page is crafted by</span>{" "}
          <span className="font-bold">Avres Atelier</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
