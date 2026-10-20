import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="bg-amber-400 pt-24 sm:pt-28 pb-6 sm:pb-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl shadow-amber-900/10 overflow-hidden">
        <div className="grid sm:grid-cols-12">
          <div className="order-1 sm:order-2 sm:col-span-7 relative h-[260px] sm:h-auto min-h-[260px] sm:min-h-[520px] overflow-hidden bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=70"
              alt="Proyek konstruksi Trisukses Bangun Karya"
              className="absolute inset-0 w-full h-full object-cover block"
            />
            <div className="absolute right-0 bottom-4 sm:bottom-auto sm:top-6 flex flex-col gap-3">
              <div className="bg-white/30 backdrop-blur-md text-white rounded-l px-5 sm:px-6 py-4 sm:py-5 shadow-lg">
                <p className="font-bold text-sm sm:text-lg leading-tight">Gratis Survey</p>
                <p className="text-xs sm:text-sm font-medium leading-tight">&amp; Konsultasi</p>
              </div>
              <div className="bg-amber-400 text-slate-900 rounded-l px-5 sm:px-6 py-3 sm:py-4 shadow-lg">
                <p className="font-bold text-sm sm:text-lg leading-tight">Garansi</p>
                <p className="text-xs sm:text-sm font-medium leading-tight">Pengerjaan</p>
              </div>
            </div>
          </div>
          <div className="order-2 sm:order-1 sm:col-span-5 flex flex-col justify-center px-6 sm:px-8 lg:px-10 py-10 sm:py-10">
            <h1 className="leading-[1.15] tracking-tight text-slate-900">
              <span className="block text-lg sm:text-xl lg:text-2xl font-semibold">
                Trisukses Bangun Karya
              </span>
              <span className="block text-4xl lg:text-5xl mt-1 font-extrabold">
                Kontraktor jasa bangun dan renovasi rumah terbaik.
              </span>
            </h1>
            <p className="text-slate-500 text-sm lg:text-[0.95rem] mt-5 leading-relaxed">
              Dengan tim profesional kami, wujudkan hunian impian Anda dengan detail yang tertata
              rapi di setiap tahapnya.
            </p>
            <div className="flex flex-col lg:flex-row gap-3 mt-7">
              <a
                href="https://api.whatsapp.com/send?phone=6282257460176"
                className="w-full lg:w-auto text-center whitespace-nowrap bg-amber-400 hover:bg-amber-300 text-sm font-semibold px-5 lg:px-6 py-3.5 rounded shadow-md shadow-amber-400/30 transition-all flex items-center justify-center"
              >
                Mulai Proyek Anda
              </a>
              <a
                href="#layanan"
                className="w-full lg:w-auto text-center whitespace-nowrap text-sm font-semibold text-slate-600 border border-slate-200 bg-white lg:bg-transparent hover:border-amber-400 hover:text-amber-500 px-5 lg:px-6 py-3.5 rounded transition-all flex items-center justify-center"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-4 bg-white/95 backdrop-blur rounded-md px-5 py-3 flex items-center justify-between gap-4 sm:gap-6 shadow-sm">
        <div>
          <p className="font-semibold text-slate-900 text-sm">Masih ragu mau mulai dari mana?</p>
          <p className="text-xs sm:text-sm text-slate-600 leading-snug mt-1">
            Konsultasi gratis dengan tim kami, kami bantu petakan langkah awal yang paling pas untuk
            kebutuhan Anda.
          </p>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=6282257460176"
          className="shrink-0 w-10 h-10 rounded-full bg-amber-400 hover:bg-amber-300 flex items-center justify-center text-slate-900 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M21 12H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
