import React from "react";

const OverlayJasa = ({ listJasa }) => {
  return (
    <div id="overlay" class="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 z-50">
      <div class="bg-white p-6 px-8 shadow-lg m-2 h-full md:h-auto text-center">
        <div className="text-xl font-bold mb-6">Jasa Bangun Rumah</div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* {[].map((e) => (
            <a href={e.URL}>
              <div className="service-card cursor-pointer border-solid text-lg border-gray-200 p-3 shadow-md text-center hover:border-yellow-500 border-2">
                <div className="name">{e.name}</div>
              </div>
            </a>
          ))} */}
        </div>
        <OverlayJasa>Kembali</OverlayJasa>
      </div>
    </div>
  );
};

export default OverlayJasa;
