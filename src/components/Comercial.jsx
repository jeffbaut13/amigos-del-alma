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
  //const navigate = useNavigate(); // Inicializar useNavigate

  // Función para manejar el clic en el botón "play"
  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  // Función para manejar el clic en el botón "omitir"
  const handleSkipClick = () => {
    gsap.to(videoRef.current, {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        setIsVideoPlaying(false);
        setShowSkipButton(false);
        setBtnAbrirDije(true);
        setAbrirDije(true);
      },
    });
  };

  // Función para manejar el fin del video
  const handleVideoEnd = () => {
    setBtnAbrirDije(true);
    setAbrirDije(true); // Redirigir a InicioDije
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
      <div className="flex flex-col items-center h-full relative">
        <div className="h-[45%] flex flex-col justify-between items-center mt-28">
          <img className="w-96" src="/iconos/TituloCentrado.svg" alt="Título" />
          <h1 className="text-[--colorYellow] text-sm text-center">
            conoce la historia de alejo y toño
          </h1>
        </div>

        <button
          className=" border flex items-center justify-center border-[--colorYellow] w-52 h-10 rounded-lg mt-6"
          onClick={handlePlayClick}
        >
          {" "}
          reproducir
          <img className="w-6 ml-2" src="/iconos/playPequeño.svg" alt="play" />
        </button>
        {btnAbrirDije && (
          <button
            className=" border flex items-center justify-center border-[--colorYellow] w-52 h-10 rounded-lg mt-6"
            onClick={() => setAbrirDije(true)}
          >
            Editar dije
          </button>
        )}
      </div>

      {/* Video a pantalla completa */}
      {isVideoPlaying && (
        <div
          ref={videoRef}
          className="fixed inset-0 z-20 bg-black flex items-center justify-center"
        >
          <video
            className="w-full h-full object-cover"
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
              onClick={handleSkipClick}
              className="absolute bottom-10 right-10 border border-[--colorYellow] w-44 h-10 text-1xl rounded-lg"
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
