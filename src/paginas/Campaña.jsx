import React from "react";
import Comercial from "../components/Comercial";
import DetrasdeCamaras from "../components/DetrasDeCamaras";
import { RedesSociales } from "../components/RedesSociales";

export const Campaña = () => {
  return (
    <>
      <div>
        <Comercial />
      </div>
      <div>
        <DetrasdeCamaras />
      </div>
      <div>
        <RedesSociales />
      </div>
      ;
    </>
  );
};
