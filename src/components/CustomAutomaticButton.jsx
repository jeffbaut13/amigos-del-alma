import React from "react";
import Dije from "../store";
import { useSnapshot } from "valtio";

export const CustomAutomaticButton = ({ setEdicion, setUpdateImg }) => {
  const snap = useSnapshot(Dije);

  const posicionAutomatica = () => {
    // Calcular el factor de escala basado en la posición del slider
    const scale = 2; // Escala entre 1 y 2

    // Calcular la nueva altura
    const newHeight = Math.max(1, Math.min(1, scale)); // Limita entre 1 y 2

    // Mantener la proporción del ancho basado en la nueva altura
    const aspectRatio = snap.imageWidth / snap.imageHeight;
    const newWidth = newHeight * aspectRatio;

    // Actualizar el tamaño de la imagen
    Dije.imageWidth = newWidth;
    Dije.imageHeight = newHeight;
    setEdicion(true);
    setUpdateImg(false);
  };

  return (
    <>
      <button className="mx-2" onClick={posicionAutomatica}>
        Ajuste automático
      </button>
    </>
  );
};
