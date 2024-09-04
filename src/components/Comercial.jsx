import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import backgroundImage from "/imagenes/amigosDelAlma.jpg";

const Comercial = ({ abrirDije, setAbrirDije }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const [btnAbrirDije, setBtnAbrirDije] = useState(false);
  const videoRef = useRef(null);
  const skipButtonRef = useRef(null);
  const navigate = useNavigate(); // Inicializar useNavigate

  // Función para manejar el clic en el botón "play"

  const handlePlayClick = () => {
    const tl = gsap.timeline();
    tl.add(() => setIsVideoPlaying(true));

    setTimeout(() => {
      tl.to(".capaBlur", {
        opacity: 1,
        ease: "power1.inOut",
        duration: 1,
      });
      tl.to(".video", {
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.5,
      });
    }, 100);
  };

  // Función para manejar el fin del video
  const handleVideoEnd = () => {
    navigate("/comprar-dije");
  };

  useEffect(() => {
    if (isVideoPlaying) {
      // Mostrar el botón "omitir" después de 5 segundos
      const timer = setTimeout(() => {
        setShowSkipButton(true);
        gsap.fromTo(
          skipButtonRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 }
        );
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVideoPlaying]);

  return (
    <div className="h-screen w-full relative">
      {/* Fondo de la pantalla principal */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute top-0 left-0 bg-black bg-opacity-55 w-full h-full" />
        {/* <div className="absolute top-0 left-0  w-full h-full bg-video" /> */}
        <video
          className="video w-full h-full object-cover z-10"
          autoPlay
          muted
          loop
          controls={false}
          playsInline
        >
          <source src="/intro.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>

      {/* Contenido principal */}
      <div className="flex justify-evenly flex-col items-center h-full relative">
        <div className="h-[45%] flex flex-col justify-center items-center">
          <div className="mt-60" />
          <figure className="w-96">
            <img src="/iconos/TituloCentrado.svg" alt="Título" />
          </figure>
          <h1 className="text-[--colorYellow] text-sm text-center my-8">
            SOLO CUANDO LOS AMIGOS SE UNEN SUCEDEN COSAS INCREÍBLES.
          </h1>
        </div>
        <button
          className="group btn-home text-xs flex items-center justify-between"
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
          VER AHORA
        </button>
      </div>

      {/* Video a pantalla completa */}
      {isVideoPlaying && (
        <div
          ref={videoRef}
          className="fixed inset-0 z-20  flex items-center justify-center"
        >
          <div className="capaBlur opacity-0 absolute top-0 left-0 bg-black w-full h-full bg-opacity-20 backdrop-blur-lg z-0" />
          <video
            className="video opacity-0 w-3/4 h-auto object-cover z-10 rounded-2xl"
            autoPlay
            onEnded={handleVideoEnd}
            controls
          >
            <source src="/imagenes/videoplaybackk.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>

          {/* Botón "omitir" */}
          {showSkipButton && (
            <button
              ref={skipButtonRef}
              onClick={handleVideoEnd}
              className="absolute bottom-24 right-10 z-20 border border-[--colorYellow] w-44 h-10 text-1xl rounded-lg"
            >
              Omitir
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Comercial;
