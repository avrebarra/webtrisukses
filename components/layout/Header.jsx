import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../ui/ButtonOutline";
import useScrollActive from "../../hooks/useScrollActive";

// small extracted nav items — dedup 8× LinkScroll repeats (ponytail: reuse native, min code)
function DesktopNavItem({ to, activeLink, setActiveLink, children }) {
  return (
    <LinkScroll activeClass="active" to={to} spy smooth duration={1000} onSetActive={() => setActiveLink(to)}
      className={"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" + (activeLink === to ? " text-yellow-500 animation-active " : " text-slate-100 hover:text-yellow-500 ")}
    >{children}</LinkScroll>
  );
}
function MobileNavItem({ to, activeLink, setActiveLink, children, icon }) {
  return (
    <LinkScroll activeClass="active" to={to} spy smooth duration={1000} onSetActive={() => setActiveLink(to)}
      className={"mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " + (activeLink === to ? " border-yellow-500 text-yellow-500" : " border-transparent")}
    >{icon}{children}</LinkScroll>
  );
}

const NAV = [
  { to: "about", label: "Tentang Kami" },
  { to: "feature", label: "Keunggulan" },
  { to: "pricing", label: "Layanan & Jasa" },
  { to: "galeri", label: "Galeri" },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const scrollActive = useScrollActive(20);
  return (
    <>
      <header className={"fixed top-0 w-full  z-30 bg-slate-900 transition-all " + (scrollActive ? " shadow-md pt-0" : " pt-4")}>
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Image src="/assets/logo.png" quality={100} width={180} height={50} />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-slate-50  items-center">
            {NAV.map((n) => (
              <DesktopNavItem key={n.to} to={n.to} activeLink={activeLink} setActiveLink={setActiveLink}>{n.label}</DesktopNavItem>
            ))}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <ButtonOutline>Hubungi Kami</ButtonOutline>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t ">
        <div className="bg-slate-900 sm:px-3">
          <ul className="flex w-full justify-between items-center text-slate-100">
            <MobileNavItem to="about" activeLink={activeLink} setActiveLink={setActiveLink} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>Tentang Kami</MobileNavItem>
            <MobileNavItem to="feature" activeLink={activeLink} setActiveLink={setActiveLink} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}>Keunggulan</MobileNavItem>
            <MobileNavItem to="pricing" activeLink={activeLink} setActiveLink={setActiveLink} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>Layanan Jasa</MobileNavItem>
            <MobileNavItem to="galeri" activeLink={activeLink} setActiveLink={setActiveLink} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}>Galeri</MobileNavItem>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
