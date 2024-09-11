/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Text, Html } from "@react-three/drei";

import { ImageBox } from "./ImageBox";

import gsap from "gsap";
import { TextCustomer } from "./TextCustomer";
import { useFrame } from "@react-three/fiber";

export function Dijegbl({ open, snap, group, abrirDije }) {
  const placa = useRef();
  const [rotationDirection, setRotationDirection] = useState(1); // 1 para avanzar, -1 para retroceder
  const [rotationValue, setRotationValue] = useState(0); // Estado para controlar el ángulo de rotación

  const { nodes, materials } = useGLTF("/dije.glb");

  useEffect(() => {
    // Animar la rotación
    gsap.to(placa.current.rotation, {
      x: open ? -3 : -0.01,
      duration: 1, // Duración de la animación
      ease: "power2.out",
    });
  }, [open]);

  useFrame(() => {
    if (!abrirDije && group.current) {
      // Actualizamos el valor de rotación
      setTimeout(() => {
        setRotationValue((prev) => prev + 0.01 * rotationDirection);

        // Aplicamos la rotación al objeto
        group.current.rotation.y = rotationValue;

        // Cambiamos la dirección de la rotación cuando llega a 0 o a 360 grados (aproximadamente 2 * Math.PI)
        if (rotationValue >= Math.PI * 2) {
          setRotationDirection(-1); // Cambiar la dirección hacia atrás
        } else if (rotationValue <= 0) {
          setRotationDirection(1); // Cambiar la dirección hacia adelante
        }
      }, 1000);
    }
  });

  return (
    <group
      ref={group}
      rotation={[0, 0.4, 0.2]}
      position={[0, -0.5, 0]}
      scale={0.8}
      dispose={null}
    >
      <group name="Scene">
        <group
          name="vidrio"
          position={[1.59, -0.805, 0]}
          rotation={[1.572, 0, 0]}
          scale={55.57}
        />
        <group
          name="metalico"
          position={[1.59, -0.805, 0]}
          rotation={[1.572, 0, 0]}
          scale={55.57}
        >
          <mesh
            name="Mesh_11"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_11.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Mesh_12"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_12.geometry}
            material={materials.argolla}
          />
          <mesh
            name="Mesh_13"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_13.geometry}
            material={materials.argolla}
          />
          <mesh
            name="Mesh_14"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_14.geometry}
            material={materials.Material_0}
          >
            <TextCustomer
              materials={materials.Material_0}
              snap={"AUNQUE NO     TE PUEDA VER, SIEMPRE TE LLEVO CONMIGO."}
              position={[-0.028, 0.0036, -0.005]}
              fontSize={0.26}
              scale={0.01}
              maxWidth={3.2}
              rotation={[Math.PI / 2, Math.PI / 1, Math.PI / 1.006]}
              letterSpacing={0.2}
              color={"#DBBFA7"}
              lineHeight={2}
              opacity={0.4}
            />
          </mesh>
          <mesh
            name="Mesh_6"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_6.geometry}
            material={materials.Material_0}
          />
          <mesh
            name="Mesh_8"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_8.geometry}
            material={materials.argolla}
          />
          <mesh
            name="Placa"
            ref={placa}
            castShadow
            receiveShadow
            geometry={nodes.Placa.geometry}
            material={materials.placa}
            position={[-0.028, 0.004, -0.032]}
            rotation={[snap.rotation, 0, 0]}
          >
            <ImageBox material={materials.placa} snap={snap} />

            <TextCustomer
              materials={materials.Material_0}
              snap={snap.nombre}
              //position={[0, 0.001248, 0.023]}
              position={[0, 0.001248, 0.027]}
              fontSize={snap.fontSize}
              scale={0.02}
              maxWidth={1.5}
              rotation={[Math.PI / 2, Math.PI / 1, Math.PI / 1.006]}
              letterSpacing={0.3}
              color={"black"}
              materialTrue={true}
              font={"/font/ArtifexCF-Bold.ttf"}
            />

            {/*  <TextCustomer
              materials={materials.Material_0}
              snap={snap.braile}
              position={[0, 0.001248, 0.032]}
              fontSize={0.2}
              scale={0.025}
              maxWidth={1.5}
              rotation={[Math.PI / 2, Math.PI / 1, Math.PI / 1.006]}
              letterSpacing={-0.1}
              color={"black"}
              materialTrue={true}
            /> */}
          </mesh>
        </group>
        <group
          name="cuero"
          position={[1.59, -0.805, 0]}
          rotation={[1.572, 0, 0]}
          scale={55.57}
        >
          <mesh
            name="Mesh_10"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_10.geometry}
            material={materials.Material_0}
          />
          <mesh
            name="Mesh_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_3.geometry}
            material={materials.Material_0}
          />
          <mesh
            name="Mesh_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_4.geometry}
            material={materials.Material_0}
          />
          <mesh
            name="Mesh_7"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_7.geometry}
            material={materials.Material_0}
          />
          <mesh
            name="Mesh_9"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_9.geometry}
            material={materials.Material_0}
          >
            <TextCustomer
              materials={materials.Material_0}
              snap={snap.contacto}
              position={[-0.028, -0.0001, -0.005]}
              fontSize={0.26}
              scale={0.01}
              maxWidth={2.5}
              rotation={[Math.PI / 2, 0, Math.PI / -1]}
              letterSpacing={0.2}
              color={"#DBBFA7"}
              message={"LLAMA A       MI AMIGO DEL ALMA"}
              lineHeight={2}
              opacity={0.4}
            />
          </mesh>
        </group>
        <group
          name="Default"
          position={[1.59, -0.805, 0]}
          rotation={[1.572, 0, 0]}
          scale={55.57}
        >
          <mesh
            name="Mesh_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_5.geometry}
            material={materials.Material_0}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/dije3.glb");
