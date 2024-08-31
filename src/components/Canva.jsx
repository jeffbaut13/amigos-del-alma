import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  useProgress,
  Html,
  Environment,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";

import { Dijegbl } from "./Dijegbl";

function Loader() {
  const { progress, active } = useProgress();

  return (
    <Html center>
      <p className="text-black loader">{progress.toFixed(1)} % loaded</p>
    </Html>
  );
}

export const Canva = ({ open, snap, cameraControlRef }) => {
  return (
    <>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
        {/* <CameraControls
          ref={cameraControlRef}
          maxDistance={7}
          minDistance={3}
        /> */}
        <OrbitControls ref={cameraControlRef} enableZoom={false} />
        <ambientLight intensity={100} />
        <directionalLight position={[6, 10, 10]} intensity={20} />
        <directionalLight position={[-6, 10, 10]} intensity={20} />

        <directionalLight position={[6, 10, -10]} intensity={20} />
        <directionalLight position={[-6, 10, -10]} intensity={20} />
        <Suspense fallback={<Loader />}>
          <Dijegbl open={open} snap={snap} />
        </Suspense>
        <Environment
          //files="/dije2/backgroundEnviroment.hdr"
          preset="forest"
        />
        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={1}
          scale={6}
          blur={2.5}
          far={10}
          resolution={256}
          color="#000000"
        />
      </Canvas>
      <span className="absolute bottom-9 left-1/2 -translate-x-1/2 inline-block w-16 h-16">
        <img src="/iconos/icon360.svg" alt="" />
      </span>
    </>
  );
};
