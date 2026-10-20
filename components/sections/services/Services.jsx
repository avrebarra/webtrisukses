import React, { useState, useEffect } from "react";
import OverlayJasa from "./OverlayJasa";
import * as constants from "../../../data/constants";

const SUBMENU_JASA = {
  bangun: {
    title: "Jasa Bangun Rumah",
    items: [
      { name: "Bangun Rumah", url: constants.WHATSAPP_MESSAGES.BANGUN_RUMAH_BANGUN_RUMAH },
      { name: "Desain Rumah", url: constants.WHATSAPP_MESSAGES.BANGUN_RUMAH_DESAIN },
      { name: "Bangun Ruko", url: constants.WHATSAPP_MESSAGES.BANGUN_RUMAH_BANGUN_RUKO },
      {
        name: "Bangun Rumah Kost",
        url: constants.WHATSAPP_MESSAGES.BANGUN_RUMAH_BANGUN_RUMAH_KOST,
      },
      { name: "Bangun Toko", url: constants.WHATSAPP_MESSAGES.BANGUN_RUMAH_BANGUN_TOKO },
    ],
  },
  renovasi: {
    title: "Jasa Renovasi Rumah",
    items: [
      { name: "Meningkat Rumah", url: constants.WHATSAPP_MESSAGES.RENOVASI_MENINGKAT_RUMAH },
      { name: "Pengecatan", url: constants.WHATSAPP_MESSAGES.RENOVASI_PENGECATAN },
      {
        name: "Renovasi Rumah Lainnya",
        url: constants.WHATSAPP_MESSAGES.RENOVASI_RENOVASI_RUMAH_LAINNYA,
      },
      {
        name: "Taman dan Kolam Ikan",
        url: constants.WHATSAPP_MESSAGES.RENOVASI_TAMAN_DAN_KOLAM_IKAN,
      },
      { name: "Tambah Ruangan", url: constants.WHATSAPP_MESSAGES.RENOVASI_TAMBAH_RUANGAN },
      { name: "Kolam Renang", url: constants.WHATSAPP_MESSAGES.RENOVASI_KOLAM_RENANG },
      { name: "Buat Dak", url: constants.WHATSAPP_MESSAGES.RENOVASI_BUAT_DAK },
      {
        name: "Pasang Atap Baja Ringan",
        url: constants.WHATSAPP_MESSAGES.RENOVASI_PASANG_ATAP_BAJA_RINGAN,
      },
      {
        name: "Renovasi Plafon Rumah",
        url:
          constants.WHATSAPP_MESSAGES.RENOVASI_RENOVASI_PLAFON_RUMAH ||
          constants.WHATSAPP_MESSAGES.RENOVASI_PLAFON_RUMAH,
      },
      {
        name: "Pembuatan Pagar",
        url:
          constants.WHATSAPP_MESSAGES.RENOVASI_RENOVASI_PAGAR ||
          constants.WHATSAPP_MESSAGES.RENOVASI_PAGAR,
      },
    ],
  },
  maintenance: {
    title: "Jasa Building Maintenance",
    items: [
      { name: "Service & Cuci AC", url: constants.WHATSAPP_MESSAGES.MAINTENANCE_SERVICE_CUCI_AC },
      { name: "Instalasi CCTV", url: constants.WHATSAPP_MESSAGES.MAINTENANCE_INSTALASI_CCTV },
      {
        name: "Pasang Kitchen Set",
        url: constants.WHATSAPP_MESSAGES.MAINTENANCE_PASANG_KITCHEN_SET,
      },
    ],
  },
  interior: {
    title: "Jasa Interior",
    items: [
      { name: "Desain Interior Rumah", url: constants.WHATSAPP_MESSAGES.JASA_INTERIOR },
      { name: "Interior Kantor & Ruko", url: constants.WHATSAPP_MESSAGES.JASA_INTERIOR },
      { name: "Interior Kafe & Ruang Usaha", url: constants.WHATSAPP_MESSAGES.JASA_INTERIOR },
    ],
  },
};

const CARDS = [
  {
    key: "bangun",
    title: "Jasa Bangun Rumah",
    desc: "Rumah tinggal, ruko, rumah kos, hingga toko.",
    img: "/assets/service_building.jpg",
  },
  {
    key: "renovasi",
    title: "Jasa Renovasi Rumah",
    desc: "Tambah ruangan, atap, plafon, pagar, dan lainnya.",
    img: "/assets/service_renovation.jpg",
  },
  {
    key: "maintenance",
    title: "Jasa Building Maintenance",
    desc: "Service AC, instalasi CCTV, pasang kitchen set.",
    img: "/assets/service_maintenance.jpg",
  },
  {
    key: "interior",
    title: "Jasa Interior",
    desc: "Interior rumah, kantor, kafe, dan ruang usaha.",
    img: "/assets/service_interior.jpg",
  },
];

const Jasa = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onEsc);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [active]);

  const data = active ? SUBMENU_JASA[active] : null;

  return (
    <section id="layanan" className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest">
          Layanan &amp; Jasa
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
          Melayani Kebutuhan Pembangunan Anda
        </h2>
        <p className="text-slate-600 mt-4 leading-relaxed">
          Tentukan layanan yang sesuai dengan kebutuhan Anda, kami selesaikan dengan profesional.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {CARDS.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className="group text-left rounded-md overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow bg-white"
          >
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-44 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-5">
              <h3 className="font-bold">{c.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{c.desc}</p>
              <span className="inline-block text-amber-500 font-semibold text-sm mt-3">
                Lihat layanan →
              </span>
            </div>
          </button>
        ))}
      </div>

      {data && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          aria-hidden={false}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActive(null)}
          ></div>
          <div className="relative bg-white rounded-md shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="font-bold text-lg">{data.title}</h3>
              <button
                onClick={() => setActive(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
                aria-label="Tutup"
              >
                ✕
              </button>
            </div>
            <div className="overflow-y-auto p-4 sm:p-6 grid sm:grid-cols-2 gap-3">
              {data.items.map((it) => (
                <a
                  key={it.name}
                  href={it.url}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-3 p-3 rounded border border-slate-200 hover:border-amber-400 hover:bg-amber-50 transition-colors group"
                >
                  <span className="w-8 h-8 rounded bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-slate-800 group-hover:text-amber-700">
                    {it.name}
                  </span>
                </a>
              ))}
            </div>
            <div className="px-6 py-4 bg-slate-50 text-xs text-slate-500">
              Pilih layanan, Anda akan diarahkan ke WhatsApp untuk konsultasi.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Jasa;
