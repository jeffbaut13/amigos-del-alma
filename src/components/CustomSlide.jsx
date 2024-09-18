import React, { useRef, useState, useEffect } from "react";
import { useSnapshot } from "valtio";

export const CustomSlide = ({
  DijeValtio,
  reset,
  setReset,
  setEdicion,
  setUpdateImg,
}) => {
  const snap = useSnapshot(DijeValtio);
  const sliderRef = useRef(null);
  const [circlePos, setCirclePos] = useState(50); // Posición del círculo (50 es el centro)
  const [isDragging, setIsDragging] = useState(false);

  // Función para actualizar la posición del slider y el escalado de la imagen
  const updatePosition = (clientX) => {
    const sliderBounds = sliderRef.current.getBoundingClientRect();
    let newPos = ((clientX - sliderBounds.left) / sliderBounds.width) * 100;

    // Limitar el movimiento dentro del slider (0% a 100%)
    newPos = Math.max(0, Math.min(newPos, 100));

    setCirclePos(newPos);

    // Calcular el factor de escala basado en la posición del slider
    const scale = 0.5 + newPos / 100; // Escala entre 1 y 2

    // Calcular la nueva altura
    const newHeight = Math.max(0.9, Math.min(2, scale)); // Limita entre 1 y 2

    // Mantener la proporción del ancho basado en la nueva altura
    const aspectRatio = snap.imageWidth / snap.imageHeight;
    const newWidth = newHeight * aspectRatio;

    // Actualizar el tamaño de la imagen
    DijeValtio.imageWidth = newWidth;
    DijeValtio.imageHeight = newHeight;
  };

  // Función para manejar el inicio del arrastre (ratón o toque)
  const startDragging = (e) => {
    setIsDragging(true);
    if (e.type === "mousedown") {
      updatePosition(e.clientX);
    } else if (e.type === "touchstart") {
      updatePosition(e.touches[0].clientX);
    }
  };

  // Función para detectar el fin del drag
  const stopDragging = () => {
    setIsDragging(false);
  };

  // Efecto para añadir y eliminar eventos globales de mousemove/touchmove y mouseup/touchend
  useEffect(() => {
    const handleMove = (e) => {
      if (isDragging) {
        if (e.type === "mousemove") {
          updatePosition(e.clientX);
        } else if (e.type === "touchmove") {
          updatePosition(e.touches[0].clientX);
        }
      }
    };

    if (isDragging) {
      // Añadir eventos al documento cuando se está arrastrando
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("touchmove", handleMove);
      document.addEventListener("mouseup", stopDragging);
      document.addEventListener("touchend", stopDragging);
    } else {
      // Eliminar eventos cuando no se está arrastrando
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("touchend", stopDragging);
    }

    // Cleanup de los eventos cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  // Efecto para reiniciar el slider cuando `reset` es true
  useEffect(() => {
    if (reset) {
      setUpdateImg(true);
      setEdicion(false);
      setCirclePos(50); // Restaurar al centro
      setReset(false); // Restablecer el estado de `reset`
    }
  }, [reset, setReset]);

  return (
    <div className="relative ">
      <div className="w-1/2 left-1/2 -translate-x-1/2 absolute shadowbox bg-white top-1/2 -translate-y-1/2 rounded-xl h-2  " />
      <div
        ref={sliderRef}
        className="w-1/2 m-auto relative h-0.5  rounded-xl bg-[--primary] lg:my-4 xs:my-2"
        onMouseDown={startDragging}
        onTouchStart={startDragging}
      >
        <span
          style={{ width: `${circlePos}%` }}
          className="absolute top-0 rounded-full h-0.5 bg-[#00cfff]"
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
