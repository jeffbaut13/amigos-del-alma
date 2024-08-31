import React, { useRef, useState, useEffect } from "react";
import { useSnapshot } from "valtio";

export const CustomSlide = ({ DijeValtio, reset, setReset }) => {
  const snap = useSnapshot(DijeValtio);
  const sliderRef = useRef(null);
  const [circlePos, setCirclePos] = useState(50); // Posición del círculo (50 es el centro)
  const [isDragging, setIsDragging] = useState(false);

  console.log(snap.imageHeight);

  // Función para actualizar la posición del slider y el escalado de la imagen
  const updatePosition = (e) => {
    if (!isDragging) return;

    const sliderBounds = sliderRef.current.getBoundingClientRect();
    let newPos = ((e.clientX - sliderBounds.left) / sliderBounds.width) * 100;

    // Limitar el movimiento dentro del slider (0% a 100%)
    newPos = Math.max(0, Math.min(newPos, 100));

    setCirclePos(newPos);

    // Calcular el factor de escala basado en la posición del slider
    const scale = 1 + newPos / 100; // Escala entre 1 y 2

    // Calcular la nueva altura
    const newHeight = Math.max(1, Math.min(2, scale)); // Limita entre 1 y 2

    // Mantener la proporción del ancho basado en la nueva altura
    const aspectRatio = snap.imageWidth / snap.imageHeight;
    const newWidth = newHeight * aspectRatio;

    // Actualizar el tamaño de la imagen
    DijeValtio.imageWidth = newWidth;
    DijeValtio.imageHeight = newHeight;
  };

  // Función para detectar el inicio del drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  // Función para detectar el fin del drag
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Efecto para añadir y eliminar eventos globales de mousemove y mouseup
  useEffect(() => {
    if (isDragging) {
      // Añadir eventos al documento cuando se está arrastrando
      document.addEventListener("mousemove", updatePosition);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      // Eliminar eventos cuando no se está arrastrando
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    // Cleanup de los eventos cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Efecto para reiniciar el slider cuando `reset` es true
  useEffect(() => {
    if (reset) {
      setCirclePos(50); // Restaurar al centro
      setReset(false); // Restablecer el estado de `reset`
    }
  }, [reset, setReset]);

  return (
    <div className="relative ">
      <div className="w-5/6 left-1/2 -translate-x-1/2 absolute shadowbox top-1/2 -translate-y-1/2 rounded-xl h-3  " />
      <div
        ref={sliderRef}
        className="w-4/5 m-auto relative h-1  rounded-xl bg-[--primary] my-4"
        onMouseDown={handleMouseDown} // Inicio del arrastre
      >
        <span
          style={{ width: `${circlePos}%` }}
          className="absolute top-0 rounded-full h-1 bg-[#00cfff]"
        />
        <span
          style={{
            position: "absolute",
            left: `${circlePos}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            width: "30px",
            height: "30px",
            userSelect: "none",
          }}
        >
          <img
            className="pointer-events-none w-full h-full object-contain"
            src="/iconos/slideIcon.svg"
            alt=""
          />
        </span>
        <div className="w-full py-2  flex justify-between">
          <span>-</span>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};
