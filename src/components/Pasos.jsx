import React, { useEffect, useRef, useState } from "react";

import { convertToBraille } from "../helpers/BraileConverter";
import { animaitionsGroup } from "../helpers/AnimationIconSteps";
import { PasosIcons } from "./PasosIcons";
import { SliderPaso } from "./sliderPaso";
import { useSnapshot } from "valtio";
import { Arrows } from "./Arrows";

export const Pasos = ({ DijeValtio, setOpen, camMove, snap }) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(1);

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
      camMove(resetBack);
      setTimeout(() => {
        setOpen(false);
        camMove(snap.back);
      }, 700);
    }
    if (currentSlide == 5) {
      camMove(snap.reset);

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
      <div
        className={`box w-full h-full rounded-lg flex flex-col justify-center items-start px-4`}
      >
        <PasosIcons currentSlide={currentSlide} />

        <SliderPaso
          next={next}
          sliderRef={sliderRef}
          DijeValtio={DijeValtio}
          setOpen={setOpen}
        />
      </div>

      <div className="arrows flex justify-between w-full absolute">
        {currentSlide >= 3 && (
          <figure
            onClick={prev}
            className="cursor-pointer hover:bg-black transition-all duration-500 group border border-[--borderOpacity] absolute left-0 rotate-180 w-6 h-6 inline-block p-1.5 rounded-full -translate-y-1/2"
          >
            <Arrows color={"stroke-black group-hover:stroke-white"} />
          </figure>
        )}
        {currentSlide > 1 && currentSlide <= 4 && (
          <figure
            onClick={next}
            className="cursor-pointer hover:bg-black transition-all duration-500 group border border-[--borderOpacity] absolute right-0 w-6 h-6 inline-block p-1.5 rounded-full -translate-y-1/2"
          >
            <Arrows color={"stroke-black group-hover:stroke-white"} />
          </figure>
        )}
      </div>
    </>
  );
};
