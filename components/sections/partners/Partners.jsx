import React from "react";
import { withBasePath } from "../../../utils/withBasePath";

const logos = Array.from(
  { length: 20 },
  (_, i) =>
    withBasePath(
      `/assets/partners/partnerlogo-${i + 1}.${[3, 4, 9, 11, 15, 18].includes(i + 1) ? "png" : i + 1 === 7 || i + 1 === 10 ? "jpeg" : i + 1 === 20 ? "webp" : "jpg"}`
    )
);

const Partners = () => {
  return (
    <section id="partner" className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      <div className="text-center">
        <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Partner</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Partner Kami</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-12">
        {logos.map((src, i) => (
          <div
            key={src}
            className="h-20 rounded-md bg-white border border-slate-100 flex items-center justify-center p-2 overflow-hidden"
          >
            <img
              src={src}
              alt={`Partner material bangunan ${i + 1} - CV Trisukses Bangun Karya`}
              className="max-h-14 max-w-full object-contain"
              width="140"
              height="56"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling && (e.currentTarget.nextSibling.style.display = "flex");
              }}
            />
            <span className="hidden text-slate-400 text-xs font-medium">Logo Partner</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
