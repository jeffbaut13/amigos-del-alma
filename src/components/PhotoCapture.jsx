import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { IconCam } from "./IconCam";

export const PhotoCapture = ({
  DijeValtio,
  controles,
  setControles,
  setReset,
  setBtnCompra,
}) => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const videoConstraints = {
    width: 640,
    height: 640,
    facingMode: "user", // Puedes cambiar a "environment" para la cámara trasera en móviles
  };

  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const startCamera = () => {
    setIsCameraOn(true);
  };

  const normalizeImageDimensions = (imageSrc) => {
    const img = new Image();
    img.onload = () => {
      const width = img.width;
      const height = img.height;

      // Calcular el MCD y la proporción base
      const divisor = gcd(width, height);
      const aspectWidth = width / divisor;
      const aspectHeight = height / divisor;

      // Normalizar para que el máximo sea 4 y el mínimo sea 1 o más
      let normalizedWidth, normalizedHeight;
      if (aspectWidth > aspectHeight) {
        // Normalizar el ancho a 4 y calcular el alto
        normalizedWidth = 4;
        normalizedHeight = Math.max(0, (aspectHeight / aspectWidth) * 4);
      } else {
        // Normalizar el alto a 4 y calcular el ancho
        normalizedHeight = 4;
        normalizedWidth = Math.max(0, (aspectWidth / aspectHeight) * 4);
      }

      // Asegurar que los valores estén entre 1 y 4
      DijeValtio.imageWidth = normalizedWidth.toFixed(3);
      DijeValtio.imageHeight = normalizedHeight.toFixed(3);

      // Guardar la imagen normalizada en Valtio
      DijeValtio.Imagen = imageSrc;
    };
    img.src = imageSrc;
  };

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    normalizeImageDimensions(imageSrc); // Normalizar la imagen capturada
    setIsCameraOn(false);
    setControles(true);
    setReset(true);
    setBtnCompra(true);
  };

  return (
    <>
      {!controles ? (
        <>
          <div className="lg:w-1/3 xs:w-[45%] flex justify-between items-start flex-col h-full">
            <p className="lg:text-2xl xs:text-base text-start mb-4 text-[#1B191D]">
              O toma la foto <br /> desde tu <br /> dispositivo
            </p>
            <button
              className="group lg:w-44 xs:w-full h-12 flex items-center justify-center"
              onClick={startCamera}
            >
              <span className="w-6 h-6 inline-block">
                <IconCam color={"fill-white group-hover:fill-black"} />
              </span>
            </button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <button onClick={startCamera}>Tomar foto</button>
        </>
      )}

      {isCameraOn && (
        <div className="py-2 absolute w-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Webcam
            className="rounded-lg z-0"
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <button
            className="btncapture my-2 text-xs z-10 w-12 h-12 absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2"
            onClick={capturePhoto}
          ></button>
        </div>
      )}
    </>
  );
};
