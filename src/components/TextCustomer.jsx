import { Text } from "@react-three/drei";
import React from "react";

export const TextCustomer = ({
  materials,
  snap,
  position,
  fontSize,
  scale,
  maxWidth,
  rotation,
  letterSpacing,
  color,
  materialTrue,
  message,
  lineHeight,
  opacity,
  font,
}) => {
  return (
    <Text
      position={position}
      fontSize={fontSize}
      font={font ? font : "/font/Nord-Bold.ttf"}
      scale={scale}
      letterSpacing={letterSpacing}
      maxWidth={maxWidth}
      lineHeight={lineHeight ? lineHeight : 1}
      anchorX="center"
      anchorY="middle"
      textAlign="center"
      rotation={rotation}
    >
      {message ? `${message} ${snap}` : snap.toUpperCase()}
      {/* Copiando algunas propiedades del material */}
      <meshStandardMaterial
        color={color} // Color del material original
        opacity={opacity ? opacity : 0.5}
        roughness={materialTrue ? materials : null} // Ajustes de rugosidad
        metalness={materialTrue ? materials : null} // Ajustes de metalicidad
      />
    </Text>
  );
};
