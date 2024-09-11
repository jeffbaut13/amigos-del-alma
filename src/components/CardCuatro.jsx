import React, { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { mobile, tablet } from "../helpers/Medidas";

export const CardCuatro = ({ DijeValtio, next, currentSlide }) => {
  const responsive = mobile || tablet;
  const [ActiveAviso, setActiveAviso] = useState(false);
  const snap = useSnapshot(DijeValtio);

  useEffect(() => {
    if (currentSlide === 3 || currentSlide === 5) {
      setActiveAviso(false);
    }
  }, [currentSlide]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-around slide-uno relative">
      <div />
      <div className="w-5/6 mx-auto flex flex-col ">
        {ActiveAviso && responsive && (
          <span className="absolute top-14 left-1/2 -translate-x-1/2 text-black flex items-center justify-center space-x-2">
            <span>Verifica tu dije</span>
            <span role="img" aria-label="dedo apuntando hacia arriba">
              👆👆👆
            </span>
          </span>
        )}
        <p className="text-2xl text-center text-[#1B191D] mb-6">
          Si alguien se encuentra a tu amigo, <br />
          ¿a qué número debería llamar?
        </p>
        <div className="w-full border-b">
          <input
            maxLength={10}
            onFocus={() => setActiveAviso(true)}
            type="number"
            name="phone"
            onChange={(e) => (DijeValtio.contacto = e.target.value)}
            placeholder="EJ: 310 300 08 02"
            onKeyDown={(e) => {
              if (snap.contacto !== "") {
                // Verificar si se presionó "Enter" o "Done"
                if (e.key === "Enter" || e.key === "Done") {
                  next();
                }
              }
            }}
            className="focus:border-none focus:outline-none pt-4 text-center text-black"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <button
          disabled={snap.contacto === ""}
          className={`${snap.contacto === "" ? "opacity-30" : "opacity-100"}`}
          onClick={next}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
