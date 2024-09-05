import React, { useEffect, useRef, useState } from "react";

import { convertToBraille } from "../helpers/BraileConverter";
import { animaitionsGroup } from "../helpers/AnimationIconSteps";
import { PasosIcons } from "./PasosIcons";
import { SliderPaso } from "./sliderPaso";
import { useSnapshot } from "valtio";
import { Arrows } from "./Arrows";
import { Price } from "./Price";

export const Pasos = ({ DijeValtio, setOpen, camMove, snap }) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [btnCompra, setBtnCompra] = useState(false);

const handleCompra = async () => {
  const formData = new FormData();
  formData.append('usuario', DijeValtio.usuario);
  formData.append('email', DijeValtio.email);
  formData.append('contacto', DijeValtio.contacto);
  formData.append('nombre', DijeValtio.nombre);

  const response = await fetch(DijeValtio.Imagen);
  const blob = await response.blob();

  formData.append('image', new File([blob], 'imagen.jpg', { type: 'image/jpeg' }));

  try {
    const res = await fetch('https://server-amigos.onrender.com/comprar', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('Compra realizada con éxito');
    } else {
      alert('Error al realizar la compra');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

  const resetBack = {
    position: [-1.5, -1, 3],
  };

  useEffect(() => {
    if (currentSlide == 2) {
      camMove(snap.reset);
    }
    if (currentSlide == 3) {
      camMove(snap.nameDog);
    }
    if (currentSlide == 4) {
      setOpen(false);
      camMove(snap.back);
    }
    if (currentSlide == 5) {
      camMove(snap.EditImage);

      setTimeout(() => {
        setOpen(true);
      }, 800);
    }
  }, [currentSlide]);

  const next = () => {
    sliderRef.current.slickNext();
    if (currentSlide === 0) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prev = () => {
    sliderRef.current.slickPrev();

    if (currentSlide === 0) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleInputChange = (e) => {
    const text = e.target.value.toUpperCase(); // Convierte el texto a mayúsculas

    DijeValtio.nombre = text;
    DijeValtio.braile = convertToBraille(text);
  };

  useEffect(() => {
    animaitionsGroup(currentSlide);
  }, [currentSlide]);

  return (
    <>
    <div className=" p-2  border-[--borderCircle] relative border-dashed border w-full h-full rounded-lg flex flex-col  items-start  ">
      <div
        className={`p-6  border-[--borderCircle] relative border shadowbox w-full h-full rounded-lg flex flex-col  items-start `}
      >
        <PasosIcons currentSlide={currentSlide} />

        <SliderPaso
          setBtnCompra={setBtnCompra}
          next={next}
          sliderRef={sliderRef}
          DijeValtio={DijeValtio}
          setOpen={setOpen}
        />
        <button
          disabled={!btnCompra}
          onClick={handleCompra}
          className={`${
            btnCompra ? "block" : "hidden"
          } absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2`}
        >
          Comprar
        </button>
        <div className="arrows flex justify-between w-full h-6 top-1/2 left-0 absolute z-10">
          {currentSlide >= 3 && (
            <figure
              onClick={prev}
              className="cursor-pointer bg-[--second] hover:bg-black transition-all duration-500 group border border-[--borderOpacity] absolute -left-10 rotate-180 w-6 h-6 inline-block p-1.5 rounded-full -translate-y-1/2"
            >
              <Arrows color={"stroke-[--primary] group-hover:stroke-white"} />
            </figure>
          )}
          {currentSlide > 1 && currentSlide <= 4 && (
            <figure
              onClick={next}
              className="cursor-pointer bg-[--second] hover:bg-black transition-all duration-500 group border border-[--borderOpacity] absolute -right-10 w-6 h-6 inline-block p-1.5 rounded-full -translate-y-1/2"
            >
              <Arrows color={"stroke-[--primary] group-hover:stroke-white"} />
            </figure>
          )}
        </div>
        <Price />
      </div>

    </div>
    </>
  );
};
