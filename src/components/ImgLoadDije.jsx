import React, { useRef, useState } from "react";
import { useSnapshot } from "valtio";
import { CustomSlide } from "./CustomSlide";
import { ButtonImgEditor } from "./ButtonImgEditor";
import { Arrows } from "./Arrows";
import { PhotoCapture } from "./PhotoCapture";
import { UploadImage } from "./UploadImage";
import { CustomAutomaticButton } from "./CustomAutomaticButton";
import BotonCompra from "./BotonCompra";

export const ImgLoadDije = ({ DijeValtio, setBtnCompra, handleCompra }) => {
  const snap = useSnapshot(DijeValtio);

  const intervalRef = useRef(null);
  const directionRef = useRef(null); // Referencia para la dirección

  const [reset, setReset] = useState(false);
  const [controles, setControles] = useState(true);
  const [updateImg, setUpdateImg] = useState(false);
  const [edicion, setEdicion] = useState(false);
  const [loading, setLoading] = useState(false); // Estado de carga

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

  const handleClick = async () => {
    setLoading(true); // Iniciar carga
    await handleCompra(); // Ejecutar la función de compra
    setBtnCompra(true);
    console.log("Compra iniciada");
  };

  return (
    <div className="h-full flex flex-col justify-evenly pt-8 px-12">
      <div
        className={`max-lg:flex-col max-lg:h-1/2 max-lg:justify-evenly botonesBox mb-2 h-42 flex flex-row lg:justify-center items-center`}
      >
        <UploadImage
          setUpdateImg={setUpdateImg}
          setReset={setReset}
          setControles={setControles}
          controles={controles}
          DijeValtio={DijeValtio}
          setBtnCompra={setBtnCompra}
          edicion={edicion}
          setEdicion={setEdicion}
          updateImg={updateImg}
        />
        {updateImg && (
          <CustomAutomaticButton
            setEdicion={setEdicion}
            setUpdateImg={setUpdateImg}
          />
        )}
      </div>
      {edicion && (
        <>
          <h2 className="w-full text-center text-2xl my-4 text-black">
            Tamaño de imagen
          </h2>
          <CustomSlide
            snap={snap}
            DijeValtio={DijeValtio}
            reset={reset}
            setReset={setReset}
            setEdicion={setEdicion}
            setUpdateImg={setUpdateImg}
          />
          <div className="w-full flex flex-col py-8 items-center">
            {loading ? (
              <div className="loader"></div> // Círculo de carga
            ) : (
              <BotonCompra />
            )}
          </div>
        </>
      )}
    </div>
  );
};
