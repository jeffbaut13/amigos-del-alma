import React, { useEffect } from "react";
import { useSnapshot } from "valtio";

export const CardDos = ({
  DijeValtio,
  next,
  setDisable,
  disable,
  currentSlide,
}) => {
  const snap = useSnapshot(DijeValtio);

  const validacion = snap.usuario !== "" && snap.email !== "";

  useEffect(() => {
    if (validacion && currentSlide == 2) {
      setDisable(true);
    }
    if (!validacion && currentSlide == 2) {
      setDisable(false);
    }
  }, [validacion, currentSlide]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-around slide-uno">
      <div />
      <div className="w-1/2 mx-auto flex flex-col">
        <div className="w-full border-b">
          <input
            type="text"
            name="name"
            onChange={(e) => (DijeValtio.usuario = e.target.value)}
            placeholder="¿Cuál es tu nombre?"
            className="focus:border-none focus:outline-none pt-4 text-center text-black"
            onKeyDown={(e) => {
              if (snap.usuario !== "") {
                // Verificar si se presionó "Enter" o "Done"
                if (e.key === "Enter" || e.key === "Done") {
                  document.querySelector(".email").focus();
                }
              }
            }}
          />
        </div>
        <div className=" w-full pt-10 border-b">
          <input
            type="email"
            name="email"
            onChange={(e) => (DijeValtio.email = e.target.value)}
            onKeyDown={(e) => {
              if (snap.email !== "") {
                // Verificar si se presionó "Enter" o "Done"
                if (e.key === "Enter" || e.key === "Done") {
                  next();
                }
              }
            }}
            placeholder="¿Tu correo?"
            className="email focus:border-none focus:outline-none pt-4 text-center text-black"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <button
          disabled={!validacion}
          className={`${!validacion ? "opacity-30" : "opacity-100"}`}
          onClick={next}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
