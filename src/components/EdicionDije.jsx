import { useEffect, useRef, useState } from "react";

import { useSnapshot } from "valtio";
import { convertToBraille } from "../helpers/BraileConverter";
import DijeValtio from "../store/index";
import { Canva } from "../components/Canva";

import { Price } from "../components/Price";
import { CardsCustomer } from "../components/CardsCustomer";
import gsap from "gsap";

export const EdicionDije = ({ abrirDije, setabrirDije, dijeCanvaRef }) => {
  const snap = useSnapshot(DijeValtio);
  const controlsRef = useRef(null);
  const DijeRef = useRef(null);
  const [open, setOpen] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value.toUpperCase(); // Convierte el texto a mayúsculas

    DijeValtio.nombre = text;
    DijeValtio.braile = convertToBraille(text);
  };

  useEffect(() => {
    setTimeout(() => {
      if (abrirDije) {
        camMove(snap.reset);
      } else if (abrirDije == null || abrirDije == false) {
        camMove(snap.home);
      }
    }, 3000);
    if (!abrirDije) {
      DijeValtio.iconDije = false;
    }
  }, [abrirDije]);

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
    <div
      className={` relative text-[--second] edicion bg-[#FDFBF3] flex max-lg:flex-col w-full h-full`}
    >
      <span
        onClick={() => setabrirDije(false)}
        className="closeCard hidden z-[51] cursor-pointer absolute lg:right-4 xs:right-4 lg:top-4 xs:top-4 xs:w-6 xs:h-6 lg:w-4 lg:h-4"
      >
        {" "}
        <img src="/iconos/closeCardDije.svg" alt="" />
      </span>
      <div
        ref={dijeCanvaRef}
        className={`w-full dijeCanva bg-[#F3F3F3] h-full z-50 relative  `}
      >
        <Canva
          abrirDije={abrirDije}
          open={open}
          snap={snap}
          cameraControlRef={controlsRef}
          group={DijeRef}
        />
      </div>

      <div className="cardDije overflow-hidden lg:w-0 lg:h-full xs:h-0 xs:w-full flex flex-col items-center">
        <CardsCustomer
          setabrirDije={setabrirDije}
          setOpen={setOpen}
          DijeValtio={DijeValtio}
          snap={snap}
          handleInputChange={handleInputChange}
          camMove={camMove}
          abrirDije={abrirDije}
        />
      </div>
    </div>
  );
};

/* import DijeValtio from "../store/index";

import { CardsCustomer } from "../components/CardsCustomer";
import { useState } from "react";
import { SlideImg } from "./SlideImg";

export const EdicionDije = ({ perro, setabrirDije, dijeCanvaRef }) => {
  // Estado para almacenar la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState("/imagenes/caja-0.jpg");

  // Función para cambiar la imagen seleccionada
  const handleImageClick = (newSrc) => {
    setSelectedImage(newSrc);
  };

  return (
    <div
      className={` relative text-[--second] edicion bg-[#FDFBF3] flex max-lg:flex-col w-full h-full`}
    >
      <span
        onClick={() => setabrirDije(false)}
        className="closeCard hidden z-[51] cursor-pointer absolute lg:right-4 xs:right-4 lg:top-4 xs:top-4 xs:w-6 xs:h-6 lg:w-4 lg:h-4"
      >
        {" "}
        <img src="/iconos/closeCardDije.svg" alt="" />
      </span>
      <div
        ref={dijeCanvaRef}
        className={`w-full dijeCanva bg-white h-full z-50 relative  `}
      >
        {perro ? (
          <figure className="w-full h-full">
            <video
              className="w-full h-full object-contain"
              muted
              playsInline
              loop
              autoPlay
            >
              <source src="/Motionweb.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </figure>
        ) : (
          <SlideImg
            handleImageClick={handleImageClick}
            selectedImage={selectedImage}
          />
        )}
      </div>

      <div className="cardDije overflow-hidden lg:w-0 lg:h-full xs:h-0 xs:w-full flex flex-col items-center">
        <CardsCustomer setabrirDije={setabrirDije} DijeValtio={DijeValtio} />
      </div>
    </div>
  );
};
 

*/
