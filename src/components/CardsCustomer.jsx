import React from "react";
import { Pasos } from "./Pasos";

export const CardsCustomer = ({ setabrirDije, DijeValtio }) => {
  return (
    <>
      <div className="card w-full h-full flex flex-col items-center justify-center relative">
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <Pasos setabrirDije={setabrirDije} DijeValtio={DijeValtio} />
        </div>
      </div>
    </>
  );
};
