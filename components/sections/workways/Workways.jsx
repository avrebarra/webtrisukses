import React from "react";

const steps = [
  {
    n: 1,
    title: "Konsultasi & Survey",
    desc: "Ceritakan kebutuhan Anda, tim kami turun langsung untuk survei lokasi.",
  },
  {
    n: 2,
    title: "Rencana & Kesepakatan",
    desc: "Perencanaan kerja, anggaran, sampai SPK ditandatangani bersama.",
  },
  {
    n: 3,
    title: "Persiapan",
    desc: "Tukang ahli, material pilihan, dan peralatan disiapkan matang.",
  },
  {
    n: 4,
    title: "Pengerjaan & Pengawasan",
    desc: "Progres dikerjakan dan dikawal, dengan update info tiap minggu.",
  },
  {
    n: 5,
    title: "Serah Terima & Garansi",
    desc: "Proyek diserahkan, ditopang masa retensi dan garansi pengerjaan.",
  },
];

const Workways = () => {
  return (
    <section id="langkah" className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest">
            Alur Kerja
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Langkah Kerja Kami</h2>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Lima tahap yang jelas dan terstruktur, supaya Anda selalu tahu proyek sedang berada di
            tahap apa.
          </p>
        </div>

        <div className="lg:hidden relative mt-12 max-w-md mx-auto">
          <div className="absolute left-5 top-3 bottom-3 border-l-2 border-dashed border-amber-300"></div>
          <ol className="space-y-8">
            {steps.map((s) => (
              <li key={s.n} className="relative flex items-start gap-4">
                <span className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-amber-400 text-slate-900 font-bold flex items-center justify-center shadow-md shadow-amber-400/40">
                  {s.n}
                </span>
                <div className="pt-1">
                  <p className="text-sm font-bold text-slate-900">{s.title}</p>
                  <p className="text-xs text-slate-500 leading-snug mt-1">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="hidden lg:block mt-20">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-2 right-6 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-amber-300"></div>
            <svg
              className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5l8 7-8 7z" />
            </svg>
            <div className="relative grid grid-cols-5 gap-4">
              {steps.map((s, idx) => {
                const top = idx % 2 === 0;
                return (
                  <div key={s.n} className="relative flex flex-col items-center h-56">
                    {top ? (
                      <>
                        <div className="flex flex-col items-center text-center px-2">
                          <p className="text-sm font-bold text-slate-900 text-center leading-tight">
                            {s.title}
                          </p>
                          <p className="text-xs text-slate-500 text-center leading-snug mt-1 max-w-[10rem]">
                            {s.desc}
                          </p>
                        </div>
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-amber-400 ring-4 ring-amber-100 text-slate-900 text-sm font-bold flex items-center justify-center shadow-sm">
                          {s.n}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-amber-400 ring-4 ring-amber-100 text-slate-900 text-sm font-bold flex items-center justify-center shadow-sm">
                          {s.n}
                        </span>
                        <div className="absolute bottom-0 inset-x-0 flex flex-col items-center text-center px-2">
                          <p className="text-sm font-bold text-slate-900 text-center leading-tight">
                            {s.title}
                          </p>
                          <p className="text-xs text-slate-500 text-center leading-snug mt-1 max-w-[10rem]">
                            {s.desc}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workways;
