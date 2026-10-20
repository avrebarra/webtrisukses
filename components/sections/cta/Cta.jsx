import React from "react";

const CTA = () => {
  return (
    <section id="kontak" className="bg-amber-400 px-4 sm:px-8 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Hubungi Kami dan Wujudkan Mimpi Anda</h2>
        <p className="text-slate-800 mt-4">Konsultasikan kebutuhan Anda sekarang, gratis. Kami akan buktikan hasilnya.</p>
        <a
          href="https://api.whatsapp.com/send?phone=6282257460176"
          className="inline-block mt-8 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-10 py-4 rounded shadow-lg transition-all"
        >
          Hubungi Kami via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTA;
