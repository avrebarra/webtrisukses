import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faComments,
  faPenRuler,
  faClipboardList,
  faShieldHalved,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    title: "GRATIS Survey Lokasi",
    desc: "Survei mendalam oleh tim ahli kami untuk perencanaan proyek yang presisi sejak awal.",
    icon: "pin",
  },
  {
    title: "GRATIS Konsultasi",
    desc: "Panduan konstruksi langkah demi langkah, dari konsep sampai rencana kerja jelas.",
    icon: "chat",
  },
  {
    title: "GRATIS Desain*",
    desc: "Tim kreatif kami merancang visi Anda menjadi kenyataan, tanpa biaya tambahan.",
    note: "*) syarat dan ketentuan berlaku",
    icon: "doc",
  },
  {
    title: "GRATIS RAB",
    desc: "Rencana anggaran yang cermat dan detail, supaya tidak ada kejutan biaya di tengah jalan.",
    icon: "list",
  },
  {
    title: "Garansi Pengerjaan",
    desc: "Perlindungan atas kualitas dan kepuasan Anda selama proses pelaksanaan proyek.",
    icon: "shield",
  },
  {
    title: "Pembayaran Bertahap",
    desc: "Fleksibel, mengikuti perkembangan dan pencapaian tiap fase pekerjaan.",
    icon: "calendar",
  },
];

const iconMap = {
  pin: faLocationDot,
  chat: faComments,
  doc: faPenRuler,
  list: faClipboardList,
  shield: faShieldHalved,
  calendar: faCalendarDays,
};

function Icon({ name }) {
  return <FontAwesomeIcon icon={iconMap[name]} className="w-5 h-5 text-amber-600" />;
}

const Feature = () => {
  return (
    <section id="keunggulan" className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest">
          Keunggulan Kami
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
          Banyak layanan <span className="text-amber-500">GRATIS</span>, dari kami untuk Anda.
        </h2>
        <p className="text-slate-600 mt-4 leading-relaxed">
          Mulai dari survei sampai serah terima, ada beberapa layanan gratis (dengan syarat dan
          ketentuan) yang bisa Anda dapatkan saat pembangunan.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:max-w-5xl lg:mx-auto">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-md border border-slate-100 shadow-sm p-7 hover:shadow-md transition-shadow lg:aspect-square flex flex-col"
          >
            <div className="w-12 h-12 rounded-md bg-amber-100 flex items-center justify-center">
              <Icon name={c.icon} />
            </div>
            <h3 className="font-bold text-lg mt-5">{c.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">{c.desc}</p>
            {c.note && <p className="text-xs italic text-slate-400 mt-3">{c.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
