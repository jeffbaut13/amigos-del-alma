import React, { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import { mobile, tablet } from "../helpers/Medidas";

export const CardTres = ({ DijeValtio, next, currentSlide }) => {
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
      }, 1000);
    }
  }, [currentSlide]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-around slide-uno">
      <div />
      <div className="w-1/2 mx-auto flex flex-col">
        <div className="w-full border-b ">
          <input
            ref={inputDog}
            maxLength={10}
            type="text"
            name="nameDog"
            onFocus={() => setActiveAviso(true)}
            onChange={(e) => (DijeValtio.nombre = e.target.value)}
            placeholder="¿Cómo se llama tu amigo?"
            className="focus:border-none focus:outline-none pt-4 text-center text-black"
            onKeyDown={(e) => {
              if (snap.nombre !== "" || snap.nombre !== "TOÑO") {
                if (e.key === "Enter" || e.key === "Done") {
                  next();
                }
              }
            }}
          />
          {ActiveAviso && responsive && (
            <span className="absolute left-1/2 -translate-x-1/2 top-24 text-black flex items-center justify-center space-x-2">
              <span>Mira como va quedando tu dije</span>
              <span role="img" aria-label="dedo apuntando hacia arriba">
                👆👆👆
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
