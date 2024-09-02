import { useRef, useState } from "react";

import { useSnapshot } from "valtio";
import { convertToBraille } from "../helpers/BraileConverter";
import DijeValtio from "../store/index";
import { Canva } from "../components/Canva";

import { Price } from "../components/Price";
import { CardsCustomer } from "../components/CardsCustomer";
import gsap from "gsap";

export const EdicionDije = ({ setAbrirDije }) => {
  const snap = useSnapshot(DijeValtio);
  const controlsRef = useRef(null);
  const DijeRef = useRef(null);
  const [open, setOpen] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value.toUpperCase(); // Convierte el texto a mayúsculas

    DijeValtio.nombre = text;
    DijeValtio.braile = convertToBraille(text);
  };

  const handleButtonClick = (parte, zoom) => {
    if (DijeRef.current) {
      gsap.to(DijeRef.current.rotation, {
        // <-- Actualización aquí
        x: parte.rotation[0],
        y: parte.rotation[1],
        z: parte.rotation[2],
        duration: 1,
        ease: "power1.inOut",
        onUpdate: controlsRef.current.update,
      });
      gsap.to(DijeRef.current.position, {
        // <-- Actualización aquí
        x: parte.position[0],
        y: parte.position[1],
        z: parte.position[2],
        duration: 1,
        ease: "power1.inOut",
        onUpdate: controlsRef.current.update,
      });
    }
    if (controlsRef.current) {
      gsap.to(controlsRef.current.object, {
        zoom: parte.zoom,
        duration: 1,
        onUpdate: () => {
          controlsRef.current.object.updateProjectionMatrix();
          controlsRef.current.update();
        },
      });
    }
  };

  const camMove = (eject) => {
    handleButtonClick(eject);
  };

  return (
    <div className="AddingtonCF-regular text-[--second] edicion bg-[--second] flex h-screen">
      {/* <div className="AddingtonCF-light edicion w-[85%] h-4/5 rounded-xl fixed top-1/2 z-[100] -translate-y-1/2 -translate-x-1/2 left-1/2 bg-[--second] flex"> */}
      {/* <div className="backgroundStyle" />
      <div className="fixed top-0 left-0 z-50 flex justify-between px-8 mt-6 w-full h-8">
        <figure></figure>
        <figure>
          <img src="/logo.svg" alt="" />
        </figure>

        <div className=" "></div>
      </div> */}
      <div className="w-1/2 h-full z-50 relative">
        <Canva
          open={open}
          snap={snap}
          cameraControlRef={controlsRef}
          group={DijeRef}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-evenly items-center bg-[--bg-black]">
        <CardsCustomer
          setOpen={setOpen}
          DijeValtio={DijeValtio}
          snap={snap}
          handleInputChange={handleInputChange}
          camMove={camMove}
        />
        <div className="w-[18%] uppercase absolute h-full z-50  overflow-hidden pointer-events-none">
          <Price />
        </div>
      </div>
    </div>
  );
};
