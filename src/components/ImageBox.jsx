import React, { useState } from "react";
import { Box, Decal, Html, useTexture } from "@react-three/drei";
import Dije from "../store/index";
import { useSnapshot } from "valtio";

export const ImageBox = ({ material }) => {
  const snap = useSnapshot(Dije);
  const texture = useTexture(snap.Imagen);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 }); // Posición inicial del mouse/touch
  const [initialImagePos, setInitialImagePos] = useState({
    x: snap.imagePositionX,
    y: snap.imagePositionY,
  }); // Posición inicial de la imagen

  // Función para manejar el inicio del drag
  const handlePointerDown = (e) => {
    e.stopPropagation(); // Evitar la propagación del evento

    // Registrar la posición inicial del mouse/touch en coordenadas normalizadas
    setStartPos({ x: e.uv.x, y: e.uv.y });

    // Guardar la posición actual de la imagen para usarla como referencia
    setInitialImagePos({
      x: snap.imagePositionX,
      y: snap.imagePositionY,
    });

    setIsDragging(true);
  };

  // Función para manejar el fin del drag
  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Función para manejar el movimiento del drag
  const handlePointerMove = (e) => {
    if (!isDragging) return;

    e.stopPropagation();

    // Obtener las coordenadas del evento en relación con el contenedor de la caja
    const { x: mouseX, y: mouseY } = e.uv;

    // Calcular el cambio relativo del mouse/touch respecto a la posición inicial
    const deltaX = mouseX - startPos.x;
    const deltaY = mouseY - startPos.y;

    // Ajustar el movimiento para que sea suave
    Dije.imagePositionX = initialImagePos.x + deltaX * 0.2; // Ajustar el multiplicador si es necesario
    Dije.imagePositionY = initialImagePos.y + deltaY * 0.2;
  };

  return (
    <Box
      material={material}
      position={[0, 0, 0.0265]}
      scale={[0.026, 0.038, 0.0007]}
      rotation={[Math.PI / 2, 0, 0]}
      onPointerDown={handlePointerDown} // Inicia el drag
      onPointerUp={handlePointerUp} // Finaliza el drag
      onPointerMove={handlePointerMove} // Mueve la imagen durante el drag
    >
      <meshStandardMaterial attach="material" {...material} />

      <Decal
        depthTest={true}
        depthWrite={true}
        position={[snap.imagePositionX, snap.imagePositionY, 0.5]}
        scale={[snap.imageWidth, snap.imageHeight, 0]}
        map={texture}
        center={[0, 0]}
        rotation={[0, 0, 0]}
      />
    </Box>
  );
};
