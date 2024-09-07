import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "/imagenes/amigosDelAlma.jpg";
import { VideoComercial } from "./VideoComercial";
import DijeValtio from "../store/index";
import { useSnapshot } from "valtio";

const Comercial = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const [btnAbrirDije, setBtnAbrirDije] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate(); // Inicializar useNavigate
  const span = useSnapshot(DijeValtio);

  // Constantes para las rutas del video
  const videoSrcMobile = "/intro-vertical.mp4";
  const videoSrcDesktop = "/intro.mp4";

  // Función para manejar el clic en el botón "play"
  const handlePlayClick = () => {
    setPlayVideo(true);
  };

  return (
    <div id="comercial" className="h-screen w-full relative">
      {/* Fondo de la pantalla principal */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute top-0 left-0 bg-black bg-opacity-55 w-full h-full" />
        <video
          className="video w-full h-full object-cover z-10"
          autoPlay
          muted
          loop
          controls={false}
          playsInline
          ref={videoRef}
        >
          <source
            src={window.matchMedia("(max-width: 600px)").matches ? videoSrcMobile : videoSrcDesktop}
            type="video/mp4"
          />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>

      {/* Contenido principal */}
      <div className="flex lg:justify-around xs:justify-center flex-col lg:items-start md:items-center lg:mx-24 xs:px-2 h-full relative">
        <div />
        <div className="flex flex-col lg:justify-end xs:justify-center lg:items-start xs:items-center">
          <figure className="lg:w-[32rem] xs:w-[24rem]">
            <img src="/iconos/TituloCentrado.svg" alt="Título" />
          </figure>
          <h1 className="text-[--colorYellow] lg:text-base xs:text-sm text-center mx-3 my-8">
            Solo cuando los amigos se unen suceden cosas increíbles.
          </h1>
          <button
            className="group btn-home text-lg flex items-center justify-between ml-2"
            onClick={handlePlayClick}
          >
            {" "}
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
                      className="fill-[--primary] group-hover:fill-[--second] stroke-[--primary] group-hover:stroke-[--second]"
                      d="m16.09.5C7.49.5.5,7.49.5,16.09s6.99,15.59,15.59,15.59,15.59-6.99,15.59-15.59S24.69.5,16.09.5Z"
                      style={{ strokeMiterlimit: 10 }}
                    />
                    <path
                      className="fill-[--second] group-hover:fill-[--primary] stroke-[--second] group-hover:stroke-[--primary]"
                      style={{ strokeMiterlimit: 10, strokeWidth: "0.5px" }}
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

      <VideoComercial
        playVideo={playVideo}
        VideoReady={() => { DijeValtio.readyVideo = true; }}
        setPlayVideo={setPlayVideo}
      />
    </div>
  );
};

export default Comercial;
