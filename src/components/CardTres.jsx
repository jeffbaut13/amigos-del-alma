import React, { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import { mobile, tablet } from "../helpers/Medidas";

export const CardTres = ({
  DijeValtio,
  next,
  currentSlide,
  setDisable,
  disable,
}) => {
  const inputDog = useRef(null);
  const responsive = mobile || tablet;
  const [ActiveAviso, setActiveAviso] = useState(false);
  const snap = useSnapshot(DijeValtio);

  useEffect(() => {
    if (currentSlide === 2 || currentSlide === 4) {
      setActiveAviso(false);
    }
    if (currentSlide === 3) {
      setTimeout(() => {
        inputDog.current.focus();
      }, 500);
    }
  }, [currentSlide]);

  useEffect(() => {
    if (snap.nombre !== "" && snap.nombre !== "TOÑO" && currentSlide == 3) {
      setTimeout(() => {
        setDisable(true);
      }, 500);
    }
    if ((snap.nombre === "" || snap.nombre === "TOÑO") && currentSlide == 3) {
      setDisable(false);
    }
  }, [snap.nombre, currentSlide]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-around slide-uno">
      <div />
      <div className="w-1/2 mx-auto flex flex-col">
        <div className="w-full border-b ">
          <input
            ref={inputDog}
            maxLength={11}
            type="text"
            name="nameDog"
            onFocus={() => setActiveAviso(true)}
            onChange={(e) => (DijeValtio.nombre = e.target.value)}
            placeholder="¿Cómo se llama tu amigo?"
            className="focus:border-none focus:outline-none pt-4 text-center text-black"
            onKeyDown={(e) => {
              if (snap.nombre !== "" && snap.nombre !== "TOÑO") {
                if (e.key === "Enter") {
                  next();
                }
              }
            }}
          />
          {ActiveAviso && responsive && (
            <span className="absolute left-1/2 -translate-x-1/2 top-6 text-black flex items-center justify-center space-x-2">
              <span className="w-full text-center relative">
                Después de completar los datos, <br />
                confirma cómo está quedando tu dije.{" "}
                <span className="w-6 h-6 inline-block absolute bottom-1 -right-7">
                  <img src="/iconos/iconoArriba.svg" alt="" />
                </span>
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <button
          disabled={snap.nombre === "" || snap.nombre === "TOÑO"}
          className={`${
            snap.nombre === "" || snap.nombre === "TOÑO"
              ? "opacity-30"
              : "opacity-100"
          }`}
          onClick={next}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
