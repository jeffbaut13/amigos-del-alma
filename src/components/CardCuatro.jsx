import React, { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import { mobile, tablet } from "../helpers/Medidas";

export const CardCuatro = ({ DijeValtio, next, currentSlide, setDisable }) => {
  const inputNum = useRef(null);
  const responsive = mobile || tablet;
  const [ActiveAviso, setActiveAviso] = useState(false);
  const snap = useSnapshot(DijeValtio);

  useEffect(() => {
    if (currentSlide === 3 || currentSlide === 5) {
      setActiveAviso(false);
    }
    if (currentSlide === 4) {
      setTimeout(() => {
        inputNum.current.focus();
      }, 1000);
    }
  }, [currentSlide]);

  useEffect(() => {
    if (
      snap.contacto !== "" &&
      snap.contacto.length > 6 &&
      currentSlide === 4
    ) {
      setTimeout(() => {
        setDisable(true);
      }, 500);
    }
    if (
      snap.contacto === "" ||
      (snap.contacto.length < 7 && currentSlide === 4)
    ) {
      setDisable(false);
    }
  }, [snap.contacto, currentSlide]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-around slide-uno relative">
      <div />
      <div className="w-5/6 mx-auto flex flex-col ">
        {ActiveAviso && responsive && (
          <span className="absolute left-1/2 -translate-x-1/2 top-24 text-black flex items-center justify-center space-x-2">
            <span className="w-full text-center relative">
              Después de completar los datos, <br />
              confirma cómo está quedando tu dije.{" "}
              <span className="w-6 h-6 inline-block absolute bottom-1 -right-7">
                <img src="/iconos/iconoArriba.svg" alt="" />
              </span>
            </span>
          </span>
        )}
        <p className="text-2xl text-center text-[#1B191D] mb-6">
          Si alguien se encuentra a tu amigo, <br />
          ¿a qué número debería llamar?
        </p>
        <div className="w-full border-b">
          <input
            ref={inputNum}
            maxLength={10}
            onFocus={() => setActiveAviso(true)}
            type="number"
            name="phone"
            onChange={(e) => (DijeValtio.contacto = e.target.value)}
            placeholder="EJ: 310 300 08 02"
            onKeyDown={(e) => {
              if (snap.contacto !== "" && snap.contacto.length > 6) {
                // Verificar si se presionó "Enter" o "Done"
                if (e.key === "Enter") {
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
          disabled={snap.contacto === "" || snap.contacto.length < 7}
          className={`${
            snap.contacto === "" || snap.contacto.length < 7
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
