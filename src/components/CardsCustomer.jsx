import React from "react";
import { Pasos } from "./Pasos";

export const CardsCustomer = ({
  setOpen,
  DijeValtio,
  abrirDije,
  camMove,
  snap,
}) => {
  return (
    <>
      <div className="card w-full h-full flex flex-col items-center justify-center relative">
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <Pasos
            DijeValtio={DijeValtio}
            setOpen={setOpen}
            camMove={camMove}
            snap={snap}
            abrirDije={abrirDije}
          />
        </div>
      </div>
    </>
  );
};
