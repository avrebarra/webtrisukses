import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import * as constants from "../../../data/constants";

const CTA = () => {
  return (
    <section id="kontak" className="bg-amber-400 px-4 sm:px-8 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          Hubungi Kami dan Wujudkan Mimpi Anda
        </h2>
        <p className="text-slate-800 mt-4">
          Konsultasikan kebutuhan Anda sekarang, gratis. Kami akan buktikan hasilnya.
        </p>
        <a
          href={constants.WHATSAPP_MESSAGES.GENERAL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 mt-8 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-10 py-4 rounded shadow-lg transition-all"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="w-[18px] h-[18px]" aria-hidden="true" />
          Hubungi Kami via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTA;
