import React from "react";

export const DetrasDeCamaras = () => {
  return <div>DetrasDeCamaras</div>;
};

/* 
import React, { useState } from "react";

const videos = [
  {
    src: "video1.mp4",
    title: "ALFREDO. EL PIANISTA QUE CREÓ LA MÚSICA DEL COMERCIAL.",
  },
  { src: "video2.mp4", title: "DETRÁS DE CÁMARAS" },
  {
    src: "video3.mp4",
    title: "CONOCE A TEQUILA. EL PERRO QUE INTERPRETÓ A TOÑO.",
  },
  { src: "video4.mp4", title: "VIDEO 4" },
  { src: "video5.mp4", title: "VIDEO 5" },
  { src: "video6.mp4", title: "VIDEO 6" },
  { src: "video7.mp4", title: "VIDEO 7" },
];

const DetrasdeCamaras = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const getVideoIndex = (offset) => {
    return (currentIndex + offset + videos.length) % videos.length;
  };

  return (
    <div className="h-screen w-screen relative flex items-center justify-center bg-black overflow-hidden">
      <button
        className="absolute left-[35%] z-50 px-3 py-2 rounded-full"
        onClick={handlePrev}
      >
        <img className="w-6" src="/iconos/iconoIz.svg" alt="" />
      </button>
      <div className="flex space-x-28 items-center justify-center">
        {[getVideoIndex(-1), getVideoIndex(0), getVideoIndex(1)].map(
          (index, i) => {
            const isActive = i === 1; // Solo el elemento central es activo

            return (
              <div
                key={index}
                className={`w-80 h-[500px] overflow-hidden border border-[--colorYellow] bg-black rounded-xl shadow-lg flex flex-col items-center justify-center relative transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-50"
                }`}
                style={{
                  zIndex: isActive ? 2 : 1,
                  transform: `scale(${isActive ? 1 : 0.9})`,
                }}
              >
                <video
                  src={videos[index].src}
                  className="w-full h-4/5 rounded-lg object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
                  <div className=" p-4 rounded-full">
                    <img className="w-8" src="/iconos/playPequeño.svg" alt="" />
                  </div>
                </div>
                <p className="text-center text-white mt-4">
                  {videos[index].title}
                </p>
              </div>
            );
          }
        )}
      </div>
      <button
        className="absolute right-[35%] px-3 py-2 rounded-full"
        onClick={handleNext}
      >
        <img className="w-6" src="/iconos/iconoDer.svg" alt="" />
      </button>
    </div>
  );
};

export default DetrasdeCamaras;
 */
