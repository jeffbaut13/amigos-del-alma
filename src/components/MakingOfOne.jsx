import React, { useState, useLayoutEffect } from "react";
import { VideoComponent } from "./VideoComponent";
import { CajaVideosTitulos } from "./CajaVideosTitulos";

const videos = [
  {
    title: "El amigo del alma",
    content:
      "Conoce a Tequila, quien interpretó a Toño y que al final de esta producción se convirtió en la amiga del alma de Teresa, una señora que la adoptó para convertirla ahora en la protagonista historias de la vida real.",
    videoCss: "secondVideo",
    urlVideo: "/imagenes/videoplaybackk.mp4",
  },
  {
    title: "Detrás de cámaras",
    content:
      "Conoce el detrás de cámaras y todo lo que sucedió para que la historia de Alejo y Toño fuera tan cercana que miles de espectadores la sintieran como propia.",
    videoCss: "thirtVideo",
    urlVideo: "/imagenes/videoplaybackk.mp4",
  },
  {
    title: "La inspiración",
    content:
      "Conoce a Andrés, guitarrista por vocación, profesor y músico invidente que inspiró esta historia. además, nos demostró que no hay condiciones que superen el propósito de hacer que la vida de los demás suene más alegre.",
    videoCss: "firstVideo",
    urlVideo: "/imagenes/videoplaybackk.mp4",
  },
];

export const MakingOfOne = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [reset, setReset] = useState(false);

  const handleSetActiveVideo = (index) => {
    setActiveVideo(index);
    setReset(false);
  };

  const resetComponent = () => {
    setReset(true);
    setActiveVideo(null);
  };

  // Detectar el tamaño de la pantalla
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useLayoutEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="detras"
      style={{
        backgroundImage: "url(/imagenes/bg-videos-section.webp)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="snap-item section relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 bg-black bg-opacity-80 w-full h-full" />
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-video" />

      <div className="z-10 relative w-full lg:h-3/4 xs:h-3/5 flex lg:flex-wrap xs:flex-col lg:px-40 xs:px-10">
        {isMobile && <CajaVideosTitulos />}

        <div className="videos relative lg:w-[40%] xs:w-full flex flex-wrap px-2 lg:mt-0 xs:mt-4 h-full">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`${video.videoCss}   
      ${activeVideo === index ? "active" : "no-show"} videoCard absolute `}
            >
              <div className="relative w-full h-full pruebaUno">
                {activeVideo === index && (
                  <span
                    onClick={() => resetComponent(true)}
                    className="cursor-pointer absolute lg:-right-12 xs:right-0 -top-10 z-30 w-8 h-8"
                  >
                    <img src="/iconos/closevideo.svg" alt="" />
                  </span>
                )}
                <div className="h-full border border-[#BCBCBC70] border-dashed rounded-xl p-2 flex flex-col pruebaDos">
                  <VideoComponent
                    reset={reset}
                    isActive={activeVideo === index}
                    urlVideo={video.urlVideo}
                    setTextActive={() => handleSetActiveVideo(index)}
                    isPlaying={activeVideo === index}
                    videoNameCss={video.videoCss}
                  />

                  <div className="px-4 cajaTitulos pointer-events-none w-full absolute bottom-8 flex max-lg:flex-col items-center lg:justify-start xs:justify-center z-30">
                    <h2
                      dangerouslySetInnerHTML={{ __html: video.title }}
                      className="titleCard lg:w-full xs:w-5/6 text-sm"
                    />
                    <p
                      className={`NeueHaas-Ligth text-start max-lg:mt-6 text-xs text-[--tercero] block contenidoCard lg:w-1/2 xs:w-5/6`}
                    >
                      {video.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isMobile && <CajaVideosTitulos />}
      </div>
    </div>
  );
};
