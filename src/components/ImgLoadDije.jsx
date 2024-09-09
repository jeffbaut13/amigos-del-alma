import React, { useRef, useState } from "react";
import { useSnapshot } from "valtio";
import { CustomSlide } from "./CustomSlide";
import { ButtonImgEditor } from "./ButtonImgEditor";
import { Arrows } from "./Arrows";
import { PhotoCapture } from "./PhotoCapture";
import { UploadImage } from "./UploadImage";

export const ImgLoadDije = ({ DijeValtio, setBtnCompra, handleCompra }) => {
  const snap = useSnapshot(DijeValtio);

  const intervalRef = useRef(null);
  const directionRef = useRef(null); // Referencia para la dirección

  const [reset, setReset] = useState(false);
  const [controles, setControles] = useState(false);

  // Función para ajustar el tamaño en porcentaje
  const scale = (factor) => {
    const newWidth = DijeValtio.imageWidth * factor;
    const newHeight = DijeValtio.imageHeight * factor;

    // Actualizar los valores en Valtio
    DijeValtio.imageWidth = newWidth;
    DijeValtio.imageHeight = newHeight;
  };

  // Función para ajustar la posición en porcentaje
  const move = (dx, dy) => {
    DijeValtio.imagePositionX += dx;
    DijeValtio.imagePositionY += dy;
  };

  // Función para iniciar el escalado o movimiento continuo
  const startAction = (action, dx, dy) => {
    directionRef.current = { dx, dy };
    intervalRef.current = setInterval(() => {
      if (action === "scale") {
        scale(dx);
      } else if (action === "move") {
        move(dx, dy);
      }
    }, 100); // Ejecuta cada 100ms
  };

  // Función para detener el escalado o movimiento continuo
  const stopAction = () => {
    clearInterval(intervalRef.current);
    directionRef.current = null;
  };

  return (
    <div className="h-full flex flex-col justify-evenly pt-8 px-12">
      <div
        className={`botonesBox justify-center items-center mb-2 ${
          controles
            ? "flex justify-center"
            : "h-42 flex flex-row justify-center items-center"
        }`}
      >
        <UploadImage
          setReset={setReset}
          setControles={setControles}
          controles={controles}
          DijeValtio={DijeValtio}
          setBtnCompra={setBtnCompra}
        />
        {/*  <PhotoCapture
          setControles={setControles}
          controles={controles}
          DijeValtio={DijeValtio}
          setReset={setReset}
          setBtnCompra={setBtnCompra}
        /> */}
      </div>

      {controles && (
        <>
          <h2 className=" w-full text-center text-2xl my-4 text-black ">
            Ubicación
          </h2>
          {/* Flecha derecha */}
          <div className="relative flex w-full justify-center">
            <ButtonImgEditor
              position={"mx-6"}
              rotate={"rotate-180"}
              handleclick={() => (DijeValtio.imagePositionX -= 0.01)}
              handleOnMouseDown={() => startAction("move", -0.01, 0)}
              HandleOnMouseUp={stopAction}
              handleOnMouseLeave={stopAction}
            />
            {/* Flecha izquierda */}
            <ButtonImgEditor
              position={"mx-6"}
              rotate={""}
              handleclick={() => (DijeValtio.imagePositionX += 0.01)}
              handleOnMouseDown={() => startAction("move", +0.01, 0)}
              HandleOnMouseUp={stopAction}
              handleOnMouseLeave={stopAction}
            />
          </div>

          <h2 className="w-full text-center text-2xl my-4 text-black">
            Tamaño de imagen
          </h2>
          <CustomSlide
            snap={snap}
            DijeValtio={DijeValtio}
            reset={reset}
            setReset={setReset}
          />
          <div className=" w-full flex flex-col py-8 items-center">
            <button
              className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-700"
              onClick={() => {
                handleCompra();
                setBtnCompra(true);
                console.log("Compra iniciada");
              }}
            >
              Finalizar
            </button>
          </div>
        </>
      )}
    </div>
  );
};
