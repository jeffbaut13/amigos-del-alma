import React, { useEffect, useState } from "react";
import Dije from "../store";
import { Footer } from "../components/Footer";
import { VideoComercial } from '../components/VideoComercial';

const videos = [
  {
    title: "El amigo del alma",
    content:
      "Conoce a Tequila, quien interpretó a Toño y que al final de esta producción se convirtió en la amiga del alma de Teresa, una señora que la adoptó para convertirla ahora en la protagonista historias de la vida real.",
    videoCss: "secondVideoDog",
    urlVideo: "/imagenes/dije-gracias.webp",
  },
  {
    title: "Detrás de cámaras",
    content:
      "Conoce el detrás de cámaras y todo lo que sucedió para que la historia de Alejo y Toño fuera tan cercana que miles de espectadores la sintieran como propia.",
    videoCss: "thirtVideoDog",
    urlVideo: "/imagenes/tono-gracias.webp",
  },
  {
    title: "La inspiración",
    content:
      "Conoce a Andrés, guitarrista por vocación, profesor y músico invidente que inspiró esta historia. además, nos demostró que no hay condiciones que superen el propósito de hacer que la vida de los demás suene más alegre.",
    videoCss: "firstVideoDog",
    urlVideo: "/imagenes/tono-gracias-2.webp",
  },
];

export const Gracias = () => {
  const [first, setfirst] = useState(true);
  useEffect(() => {
    if (first) {
      Dije.readyVideo = true;
    }
  }, [first]);
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

  const [playVideo, setPlayVideo] = useState(false);

  // Función para manejar el clic en el botón "play"
  const handlePlayClick = () => {
    setPlayVideo(true);
  };

  return (
    <>
      <div
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

        <div className="z-10 relative w-full lg:h-3/4 xs:h-3/4 flex lg:flex-wrap xs:flex-col lg:px-40 xs:px-10">
          <div className="titulos h-full px-2 lg:w-[60%] xs:w-full whitespace-nowrap">
            <div className="border border-[--borderOpacity] border-dashed  p-2 rounded-xl w-full h-full">
              <div className="border border-[--borderOpacity] rounded-xl w-full h-full flex justify-center items-center">
                <div className="w-4/5">
                  <div className="titleBox w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-start">
                      <h3 className="text-start lg:text-4xl xs:text-4xl">
                        Gracias por tu compra.
                        <figure className="w-full mx-auto my-6">
                          <svg
                            id="uuid-a71b0a1e-de76-4da8-809a-02fb9fedb1f3"
                            data-name="Capa_2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 456.58 27.18"
                          >
                            <g
                              id="uuid-cbe2be71-87a3-4b52-ba54-c722af1b2208"
                              data-name="Capa_1"
                            >
                              <path
                                d="M.25.25h141.9c1.92,0,3.48,1.55,3.5,3.47l.18,19.73c.03,3.25,4.09,4.71,6.18,2.22l19.51-23.26c.67-.79,1.65-1.25,2.68-1.25h282.12"
                                style={{
                                  fill: "none",
                                  stroke: "#ddc7b8",
                                  strokeLinecap: "round",
                                  strokeMiterlimit: 10,
                                  strokeWidth: "1px",
                                }}
                              />
                            </g>
                          </svg>
                        </figure>
                      </h3>
                      <p className="NeueHaas-Ligth text-start lg:text-lg xs:text-xs text-[--tercero]">
                        Ahora tú y tu Amigo del Alma pronto tendrán <br />
                        un símbolo que los unirá por siempre.
                      </p>
                      <p className="NeueHaas-Ligth text-start lg:text-lg xs:text-xs text-[--tercero] mt-4">
                        Te invitamos a ver el film:
                      </p>
                      <button
                        className="group btn-home text-lg flex items-center justify-between mt-6"
                        onClick={handlePlayClick}
                      >
                        <figure className="w-5 h-5 block mr-2">
                          <svg
                            id="uuid-33665910-3a4d-40e8-b75a-77f636257843"
                            data-name="Capa 2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32.18 32.18"
                          >
                            <g
                              id="uuid-900a6ba8-4252-43fa-84a9-899d16c59bb9"
                              data-name="Capa 1"
                            >
                              <g>
                                <path
                                  className="fill-[--primary] stroke-[--primary] transition-all duration-300"
                                  d="m16.09.5C7.49.5.5,7.49.5,16.09s6.99,15.59,15.59,15.59,15.59-6.99,15.59-15.59S24.69.5,16.09.5Z"
                                  style={{ strokeMiterlimit: 10 }}
                                />
                                <path
                                  className="fill-[--second]  transition-all duration-300"
                                  style={{
                                    strokeMiterlimit: 10,
                                    strokeWidth: "0.5px",
                                  }}
                                  d="m10.71,10.27c0-1.3.92-1.83,2.05-1.18l10.59,6.11c1.13.65,1.13,1.72,0,2.37l-10.59,6.11c-1.13.65-2.05.12-2.05-1.18v-12.23Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </figure>
                        Ver ahora
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="videos relative lg:w-[40%] xs:w-full flex flex-wrap px-2 lg:mt-0 xs:mt-4 h-full">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`${video.videoCss} videoCard absolute `}
              >
                <div className="relative w-full h-full pruebaUno">
                  <div className="h-full border border-[#BCBCBC70] border-dashed rounded-xl p-2 flex flex-col pruebaDos">
                    <div className="relative border border-[--borderOpacity] rounded-xl w-full h-full videoCajas flex justify-center items-center overflow-hidden">
                      <figure className="cursor-pointer z-20 w-full h-full inline-block absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img
                          className="object-cover  "
                          src={video.urlVideo}
                          alt="Play"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <VideoComercial playVideo={playVideo} setPlayVideo={setPlayVideo} />
      <Footer />
    </>
  );
};
