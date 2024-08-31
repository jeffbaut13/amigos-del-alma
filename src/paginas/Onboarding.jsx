import React, { useState, useEffect } from "react";
import backgroundImage from "/imagenes/amigosDelAlma.jpg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const Onboarding = () => {
  const [showUploadStep, setShowUploadStep] = useState(false);
  const [showNextStep, setShowNextStep] = useState(false);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (!showUploadStep) {
      setShowUploadStep(true);
    } else if (image) {
      // Animar el desvanecimiento de Onboarding
      gsap.to(".onboarding-container", {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          // Guarda la imagen en el localStorage
          localStorage.setItem("uploadedImage", image);
          // Navega al componente Collage después del desvanecimiento
          navigate("/collage");
        },
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className={`home h-full w-full relative onboarding-container`}>
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
          showUploadStep || showNextStep ? "blur-sm" : ""
        }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <img className="w-44" src="/iconos/textoLogo.svg" alt="Textologo" />
      </div>

      {!showUploadStep && !showNextStep && (
        <div className="flex flex-col items-center h-full relative">
          <div className="h-[55%] flex flex-col justify-end">
            <h1 className="text-[--colorYellow] text-1xl text-center">
              solo los amigos del alma tienen recuerdos
              <br /> que duran para siempre.
            </h1>
          </div>
          <div className="flex justify-between items-center w-[30%] h-[45%]">
            <button className="border border-[--colorYellow] w-44 h-10 text-1xl rounded-lg">
              omitir
            </button>
            <button
              className="border border-[--colorYellow] w-44 h-10 rounded-lg"
              onClick={handleNextClick}
            >
              siguiente
            </button>
          </div>
        </div>
      )}

      {showUploadStep && !showNextStep && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60">
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
            <img className="w-44" src="/iconos/textoLogo.svg" alt="Textologo" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[--colorYellow] text-xs text-center">
              sube la mejor foto que tengas con tu amig@ del alma.
              <br />
              si quieres hacer parte de nuestro collage.
            </h1>
            <div className="flex flex-col items-center pt-8">
              <div className="flex flex-col items-center justify-center border border-[--colorYellow] rounded-lg w-72 h-80 space-y-4 foto cursor-grab">
                <div
                  className=" border border-[--colorYellow] rounded-lg w-[95%] h-[95%]"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  <div className="flex flex-col justify-center text-center items-center text-[--colorYellow] bg-black opacity-40 w-full h-full">
                    {image ? (
                      <img
                        src={image}
                        alt="Uploaded"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <p className=" text-[10px] w-[50%] px-10 z-50 border-b-2 border-[--colorYellow] ">
                        arrastra o carga tu
                        <br /> foto aquí
                      </p>
                    )}
                    <input
                      type="file"
                      id="fileInput"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-16">
              <button
                className="border border-[--colorYellow] text-white w-44 h-10 rounded-lg"
                onClick={handleNextClick}
              >
                siguiente
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
