import React, { useRef, useState } from "react";
import { useSnapshot } from "valtio";
import { CustomSlide } from "./CustomSlide";
import { ButtonImgEditor } from "./ButtonImgEditor";
import { Arrows } from "./Arrows";
import { PhotoCapture } from "./PhotoCapture";
import { UploadImage } from "./UploadImage";

export const ImgLoadDije = ({ DijeValtio }) => {
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
    <div>
      <div
        className={`botonesBox ${controles ? "flex justify-between" : "block"}`}
      >
        <UploadImage
          setReset={setReset}
          setControles={setControles}
          controles={controles}
          DijeValtio={DijeValtio}
        />
        <PhotoCapture
          setControles={setControles}
          controles={controles}
          DijeValtio={DijeValtio}
          setReset={setReset}
        />
      </div>
      <hr className={`mx-auto my-4 w-full ${controles ? "" : "hidden"}`} />

      {controles && (
        <div>
          <h2 className=" w-full text-center my-8">DIRECCIÓN</h2>
          {/* Flecha derecha */}
          <div className="relative w-36 h-36 m-auto">
            <ButtonImgEditor
              position={"left-0 top-12"}
              rotate={"rotate-180"}
              handleclick={() => (DijeValtio.imagePositionX -= 0.01)}
              handleOnMouseDown={() => startAction("move", -0.01, 0)}
              HandleOnMouseUp={stopAction}
              handleOnMouseLeave={stopAction}
            />
            {/* Flecha izquierda */}
            <ButtonImgEditor
              position={"right-0 top-12"}
              rotate={""}
              handleclick={() => (DijeValtio.imagePositionX += 0.01)}
              handleOnMouseDown={() => startAction("move", +0.01, 0)}
              HandleOnMouseUp={stopAction}
              handleOnMouseLeave={stopAction}
            />

            {/* Flecha izquierda */}
            <ButtonImgEditor
              position={"left-1/2 -translate-x-1/2 top-0"}
              rotate={"-rotate-90"}
              handleclick={() => (DijeValtio.imagePositionY += 0.01)}
              handleOnMouseDown={() => startAction("move", 0, 0.01)}
              HandleOnMouseUp={stopAction}
              handleOnMouseLeave={stopAction}
            />
            {/* Flecha abajo */}
            <ButtonImgEditor
              position={"left-1/2 -translate-x-1/2 bottom-0"}
              rotate={"rotate-90"}
              handleclick={() => (DijeValtio.imagePositionY -= 0.01)}
              handleOnMouseDown={() => startAction("move", 0, -0.01)}
              HandleOnMouseUp={stopAction}
              handleOnMouseLeave={stopAction}
            />
          </div>
          <hr className={`mx-auto my-4 w-full ${controles ? "" : "hidden"}`} />
          <h2 className="w-full text-center my-8">TAMAÑO DE IMAGEN</h2>
          <CustomSlide
            snap={snap}
            DijeValtio={DijeValtio}
            reset={reset}
            setReset={setReset}
          />
        </div>
      )}
    </div>
  );
};
