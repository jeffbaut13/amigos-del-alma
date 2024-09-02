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
    <div className="home h-screen w-full relative">
      {/* Fondo de la pantalla principal */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Contenido principal */}
      <div className="flex justify-evenly flex-col items-center h-full relative">
        <figure className="w-4 h-4 inline-block">
          <img src="/prospero.svg" alt="Título" />
        </figure>
        <figure className="w-96">
          <img src="/iconos/TituloCentrado.svg" alt="Título" />
        </figure>
        <div className="h-[45%] flex flex-col justify-center items-center">
          <div className="mt-16" />
          <h1 className="text-[--colorYellow] text-sm text-center">
            conoce la historia de alejo y toño
          </h1>
          <button
            className="group border flex items-center justify-between px-4 border-[--colorYellow] w-52 h-10 rounded-lg mt-6 AddingtonCF-thin"
            onClick={handlePlayClick}
          >
            {" "}
            reproducir
            <figure className="w-5 h-5 block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 33.02 33.1"
              >
                <g>
                  <g id="Capa_1">
                    <g>
                      <path
                        className="fill-none stroke-[--colorYellow] group-hover:stroke-[--primary]"
                        style={{ strokeMiterlimit: 10 }}
                        d="M16.51.7C7.91.7.92,7.69.92,16.29s6.99,15.59,15.59,15.59,15.59-6.99,15.59-15.59S25.11.7,16.51.7Z"
                      />
                      <path
                        className="fill-none stroke-[--colorYellow] group-hover:stroke-[--primary]"
                        style={{ strokeMiterlimit: 10 }}
                        d="M11.13,10.47c0-1.3.92-1.83,2.05-1.18l10.59,6.11c1.13.65,1.13,1.72,0,2.37l-10.59,6.11c-1.13.65-2.05.12-2.05-1.18v-12.23Z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </figure>
          </button>
        </div>
        <button
          className="group border flex items-center justify-center px-4 border-[--colorYellow] h-10 rounded-lg mt-6 AddingtonCF-thin"
          onClick={handleVideoEnd}
        >
          Omitir
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
