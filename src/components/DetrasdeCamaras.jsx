import React, { useState } from "react";

const videos = [
  {
    src: "/imagenes/videoplaybackk.mp4",
    title: "ALFREDO. EL PIANISTA QUE CREÓ LA MÚSICA DEL COMERCIAL.",
  },
  { src: "/imagenes/videoplaybackk.mp4", title: "DETRÁS DE CÁMARAS" },
  {
    src: "/imagenes/videoplaybackk.mp4",
    title: "CONOCE A TEQUILA. EL PERRO QUE INTERPRETÓ A TOÑO.",
  },
];

const DetrasdeCamaras = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState("");

  const handleVideoClick = (src) => {
    setActiveVideoSrc(src);
    setIsVideoOpen(true);
  };

  const handleCloseClick = () => {
    setIsVideoOpen(false);
    setActiveVideoSrc("");
  };

  return (
    <div className="h-full w-full relative flex items-center justify-center bg-[-bg-black] overflow-hidden">
      <div className="flex space-x-28 items-center justify-center">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Contenedor del título con las mismas dimensiones que el video */}
            <div className="w-80 h-[50px] mb-4 flex items-center justify-center rounded-xl">
              <p className="text-center text-xs text-[--colorYellow]">
                {video.title}
              </p>
            </div>
            {/* Contenedor del video con borde amarillo */}
            <div
              className="w-80 h-[500px] overflow-hidden border border-[--colorYellow] bg-black rounded-xl shadow-lg relative cursor-pointer"
              onClick={() => handleVideoClick(video.src)}
            >
              <video
                src={video.src}
                className="w-full h-4/5 rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="p-4 rounded-full">
                  <img
                    className="w-8"
                    src="/iconos/playPequeño.svg"
                    alt="Play"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video en pantalla grande */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative w-[80%] h-[80%] bg-black rounded-xl overflow-hidden">
            <video
              src={activeVideoSrc}
              className="w-full h-full object-cover"
              controls
              autoPlay
            />
            <button
              className="absolute top-4 right-4 z-50 text-white text-3xl"
              onClick={handleCloseClick}
            >
              &times;x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetrasdeCamaras;
