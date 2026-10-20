import React, { useState, useEffect } from "react";
import { withBasePath } from "../../../utils/withBasePath";

const IMAGES = [
  {
    src: withBasePath("/assets/gallery/item_1.jpg"),
    alt: "Hasil bangun rumah minimalis Sidoarjo - proyek CV Trisukses Bangun Karya 1",
  },
  {
    src: withBasePath("/assets/gallery/item_2.jpg"),
    alt: "Hasil renovasi rumah tinggal Pasuruan - proyek CV Trisukses Bangun Karya 2",
  },
  {
    src: withBasePath("/assets/gallery/item_3.jpg"),
    alt: "Interior ruang tamu modern - proyek CV Trisukses Bangun Karya 3",
  },
  {
    src: withBasePath("/assets/gallery/item_4.jpg"),
    alt: "Fasad rumah dua lantai - proyek CV Trisukses Bangun Karya 4",
  },
  {
    src: withBasePath("/assets/gallery/item_5.jpg"),
    alt: "Renovasi dapur dan kitchen set - proyek CV Trisukses Bangun Karya 5",
  },
  {
    src: withBasePath("/assets/gallery/item_6.jpg"),
    alt: "Pembangunan ruko Sidoarjo - proyek CV Trisukses Bangun Karya 6",
  },
  {
    src: withBasePath("/assets/gallery/item_7.jpg"),
    alt: "Pagar dan taman minimalis - proyek CV Trisukses Bangun Karya 7",
  },
  {
    src: withBasePath("/assets/gallery/item_8.jpg"),
    alt: "Plafon dan atap baja ringan - proyek CV Trisukses Bangun Karya 8",
  },
];

const Gallery = () => {
  const [active, setActive] = useState(null);

  const open = (i) => setActive(i);
  const close = () => setActive(null);
  const nav = (d) => setActive((v) => (v + d + IMAGES.length) % IMAGES.length);

  useEffect(() => {
    if (active === null) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") nav(-1);
      if (e.key === "ArrowRight") nav(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <section id="galeri" className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Galeri</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Galeri Pekerjaan Kami</h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Cerita kami bersama pelanggan yang puas menggunakan layanan kami.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {IMAGES.map((im, i) => (
              <img
                key={im.src}
                src={im.src}
                alt={im.alt}
                onClick={() => open(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") open(i);
                }}
                tabIndex={0}
                className="rounded-md w-full h-44 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                width="400"
                height="300"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm p-4 sm:p-8 flex flex-col items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
            aria-label="Tutup"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute inset-0 pointer-events-none hidden sm:flex items-center justify-between px-4 sm:px-6">
            <button
              onClick={() => nav(-1)}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
              aria-label="Sebelumnya"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => nav(1)}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
              aria-label="Berikutnya"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-6 right-6 flex sm:hidden gap-3">
            <button
              onClick={() => nav(-1)}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
              aria-label="Sebelumnya"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => nav(1)}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
              aria-label="Berikutnya"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <img
            src={IMAGES[active].src}
            alt={IMAGES[active].alt}
            className="w-full sm:w-auto max-w-[92vw] sm:max-w-4xl max-h-[75vh] sm:max-h-[80vh] object-contain rounded-md shadow-2xl"
            width="800"
            height="600"
            decoding="async"
          />
          <p className="text-center text-white/80 text-sm mt-4">{IMAGES[active].alt}</p>
        </div>
      )}
    </>
  );
};

export default Gallery;
