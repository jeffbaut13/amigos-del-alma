import React from "react";
import { Box, Decal, useTexture } from "@react-three/drei";

export const ImageBox = ({ material, snap }) => {
  const texture = useTexture(snap.Imagen);

  /*  console.log("alto de la image" + " " + snap.imageHeight);
  console.log("Ancho de la image" + " " + snap.imageWidth); */

  return (
    <Box
      material={material}
      position={[0, 0, 0.0265]}
      scale={[0.026, 0.038, 0.0007]}
      rotation={[Math.PI / 2, 0, 0]}
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
