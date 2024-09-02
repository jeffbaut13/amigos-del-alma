import React, { useState } from 'react';

const videos = [
  { src: '/imagenes/videoplaybackk.mp4', title: 'ALFREDO' },
  { src: '/imagenes/videoplaybackk.mp4', title: 'MAKING OFF' },
  { src: '/imagenes/videoplaybackk.mp4', title: 'TEQUILA' },
];

const DetrasdeCamaras = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState('');

  const handleVideoClick = (src) => {
    setActiveVideoSrc(src);
    setIsVideoOpen(true);
  };

  const handleCloseClick = () => {
    setIsVideoOpen(false);
    setActiveVideoSrc('');
  };

  return (
    <div className="h-screen w-screen relative flex items-center justify-center bg-black overflow-hidden">
      <div className="flex space-x-28 items-start justify-center">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Contenedor de espacio para el título, siempre presente */}
            <div className={`w-80 h-[50px] ${index === 1 ? '' : 'flex items-center justify-center'}`}>
              {index === 1 && (
                <p className="text-center text-3xl text-[--colorYellow]">{video.title}</p>
              )}
            </div>
            {/* Contenedor del video */}
            <div
              className="w-80 h-[70vh] overflow-hidden border border-[--colorYellow] bg-black rounded-xl shadow-lg relative cursor-pointer"
              onClick={() => handleVideoClick(video.src)}
            >
              <video
                src={video.src}
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="p-4 rounded-full">
                  <img className="w-20" src="/iconos/playPequeño.svg" alt="Play" />
                </div>
              </div>
              {/* Título dentro de la tarjeta para la primera y tercera tarjeta */}
              {index !== 1 && (
                <div className="absolute bottom-4 w-full text-center text-1xl text-[--colorYellow] py-2 ">
                  {video.title}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Video en pantalla grande */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative w-[80%] h-[80%] bg-black rounded-xl overflow-hidden">
            <video src={activeVideoSrc} className="w-full h-full object-cover" controls autoPlay />
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
