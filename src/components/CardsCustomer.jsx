import React from "react";
import { Pasos } from "./Pasos";

export const CardsCustomer = ({
  setOpen,
  DijeValtio,

  camMove,
  snap,
}) => {
  return (
    <>
      <div className="card w-full h-full relative">
        <div className="w-5/6 h-full flex flex-col items-center justify-center relative pr-32">
          <Pasos
            DijeValtio={DijeValtio}
            setOpen={setOpen}
            camMove={camMove}
            snap={snap}
          />
          {/* <button onClick={() => camMove(snap.reset)}>Resetear</button> */}
        </div>
      </div>

      {/* <button onClick={() => setOpen(true)}>Abrir</button>
      <button onClick={() => setOpen(false)}>Cerrar</button>
      <button onClick={() => (DijeValtio.scaleX += 0.1)}>Aumentar</button>
      <button
        onClick={() =>
          (DijeValtio.scaleX = Math.max(DijeValtio.scaleX - 0.1, 0))
        }
      >
        Disminuir
      </button>
      <input
        type="text"
        maxLength={10}
        onChange={(e) => (DijeValtio.contacto = e.target.value)}
        placeholder="Escribe algo..."
      />

      <input
        maxLength={10}
        type="text"
        onChange={handleInputChange}
        placeholder="Nombre"
      /> */}
    </>
  );
};
