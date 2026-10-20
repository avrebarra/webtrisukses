import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import * as constants from "../../data/constants";

const NAV = [
  { href: "#hero", label: "Beranda" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#layanan", label: "Layanan & Jasa" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between py-3">
        <a href="#hero" className="flex items-center shrink-0">
          <img
            src="/assets/logo.png"
            alt="CV Trisukses Bangun Karya"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </a>
        <ul className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-slate-600">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="px-4 py-2 hover:text-amber-500 transition-colors">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={constants.WHATSAPP_MESSAGES.GENERAL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-900 text-sm font-semibold px-4 sm:px-5 py-2.5 rounded shadow-md shadow-amber-400/30 transition-all whitespace-nowrap"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" aria-hidden="true" />
          Hubungi Kami
        </a>
      </nav>
    </header>
  );
};

export default Header;
