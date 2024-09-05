import React, { useState } from "react";
import { VideoComponent } from "./VideoComponent";
import { CajaVideosTitulos } from "./CajaVideosTitulos";

const videos = [
  {
    title: "El amigo <br/>del alma",
    content:
      "Conoce a Tequila, quien interpretó a Toño y que al final de esta producción se convirtió en la amiga del alma de Teresa, una señora que la adoptó para convertirla ahora en la protagonista historias de la vida real.",
    videoCss: "secondVideo",
    urlVideo: "/imagenes/videoplaybackk.mp4",
  },
  {
    title: "Detrás <br/>de cámaras",
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
  //console.log(reset);

  const handleSetActiveVideo = (index) => {
    setActiveVideo(index);
    setReset(false);
  };

  const resetComponent = () => {
    setReset(true);
    setActiveVideo(null);
  };

  return (
    <div
      style={{
        backgroundImage: "url(/imagenes/bg-videos-section.webp)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="section relative AddingtonCF-light flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 bg-black bg-opacity-80 w-full h-full" />
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-video" />
      <div className="z-10 relative w-full h-4/6 flex px-40">
        <div className="videos relative w-[40%] flex flex-wrap px-2 h-full">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`${video.videoCss}   
      ${activeVideo === index ? "active" : "no-show"} videoCard absolute `}
            >
              <div className="relative w-full h-full">
                {activeVideo === index && (
                  <span
                    onClick={() => resetComponent(true)}
                    className="cursor-pointer absolute right-0 top-0 z-30"
                  >
                    close
                  </span>
                )}
                <div className="h-full border border-[--second] border-dashed rounded-xl p-2 flex flex-col">
                  <VideoComponent
                    reset={reset}
                    isActive={activeVideo === index}
                    urlVideo={video.urlVideo}
                    setTextActive={() => handleSetActiveVideo(index)}
                    isPlaying={activeVideo === index}
                    videoNameCss={video.videoCss}
                  />

                  <div className="px-4 cajaTitulos pointer-events-none w-full absolute bottom-8  flex items-center justify-start z-30">
                    <h2
                      dangerouslySetInnerHTML={{ __html: video.title }}
                      className="uppercase titleCard text-xs w-1/2 "
                    />
                    <p
                      className={` block contenidoCard w-1/2 text-[--bg-clar] text-xs`}
                    >
                      {video.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CajaVideosTitulos />
      </div>
    </div>
  );
};