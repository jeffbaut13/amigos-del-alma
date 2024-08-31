import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { IconCam } from "./IconCam";

export const PhotoCapture = ({
  DijeValtio,
  controles,
  setControles,
  setReset,
}) => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
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
  };

  return (
    <>
      {!controles ? (
        <>
          <div className="mt-6">
            <p>O TÓMALA DESDE TU DISPOSITIVO</p>
            <button
              className="group w-44 h-12 flex items-center justify-center"
              onClick={startCamera}
            >
              <span className="w-6 h-6 inline-block">
                <IconCam color={"fill-white group-hover:fill-black"} />
              </span>
            </button>

            {isCameraOn && (
              <div className="py-2">
                <Webcam
                  className="rounded-lg"
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />
                <button className="my-2 text-xs" onClick={capturePhoto}>
                  Capturar Foto
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          {" "}
          <button className="editorbtn ">Tomar foto</button>
        </>
      )}
    </>
  );
};
