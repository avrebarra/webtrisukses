import React from "react";

import ButtonOutline from "./ButtonOutline";

const OverlayJasa = ({ listJasa, onClose }) => {
  return (
    <div id="overlay" class="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 z-50">
      <div class="bg-white p-6 px-8 shadow-lg h-full md:h-auto text-center">
        <div className="text-xl font-bold mb-6">Apa Kebutuhan Anda?</div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {listJasa.map((e) => (
            <a href={e.url}>
              <div className="service-card cursor-pointer border-solid text-lg border-gray-200 p-3 shadow-md text-center hover:border-yellow-500 border-2 h-full center">
                <div className="name">{e.name}</div>
              </div>
            </a>
          ))}
        </div>

        <span onClick={onClose}>
          <ButtonOutline>Kembali</ButtonOutline>
        </span>
      </div>
    </div>
  );
};

export default OverlayJasa;
