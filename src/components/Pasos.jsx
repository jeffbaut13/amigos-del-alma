import React, { useEffect, useRef, useState } from "react";
import { animaitionsGroup } from "../helpers/AnimationIconSteps";
import { SliderPaso } from "./sliderPaso";
import { Arrows } from "./Arrows";

export const Pasos = ({ DijeValtio, setabrirDije }) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(1);

  const [disable, setDisable] = useState(false);

  const handleCompra = async () => {
    // Redirigir a la URL de "completacarrito" con la cadena de consulta
    const urlAlcarrito = "https://www.alcarrito.com/promo/addtocart";
    window.location.href = `${urlAlcarrito} `;
  };

  const next = () => {
    sliderRef.current.slickNext();
    setCurrentSlide(currentSlide + 1);
  };

  const prev = () => {
    sliderRef.current.slickPrev();
    setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    animaitionsGroup(currentSlide);
  }, [currentSlide]);

  return (
    <>
      <div className="relative border-dashed border w-full h-full rounded-lg flex flex-col items-start">
        <div
          className={`NeueHassRoman relative border-none shadowbox w-full h-full flex flex-col items-start`}
        >
          <SliderPaso
            setabrirDije={setabrirDije}
            handleCompra={handleCompra}
            next={next}
            sliderRef={sliderRef}
            DijeValtio={DijeValtio}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            setDisable={setDisable}
            disable={disable}
          />
          {currentSlide >= 2 && (
            <figure
              onClick={prev}
              className={`z-50 top-1/2 cursor-pointer bg-black hover:bg-[--hoverBlack] transition-all duration-300 group border border-black absolute left-2 rotate-180 lg:w-6 lg:h-6 xs:w-11 xs:h-11 xs:p-3 inline-block lg:p-1.5 rounded-full -translate-y-1/2`}
            >
              <Arrows color={"stroke-white transition-all duration-300 "} />
            </figure>
          )}
          {currentSlide > 1 && currentSlide <= 3 && (
            <figure
              onClick={next}
              className={`${
                disable ? "" : "pointer-events-none opacity-30"
              } z-50 top-1/2 cursor-pointer bg-black hover:bg-[--hoverBlack] transition-all duration-300 group border border-black absolute right-2 lg:w-6 lg:h-6 xs:w-11 xs:h-11 xs:p-3 inline-block lg:p-1.5 rounded-full -translate-y-1/2`}
            >
              <Arrows color={"stroke-white transition-all duration-300 "} />
            </figure>
          )}
        </div>
      </div>
    </>
  );
};
