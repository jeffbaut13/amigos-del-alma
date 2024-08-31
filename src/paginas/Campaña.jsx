import React from "react";
import Comercial from "../components/Comercial";

import { RedesSociales } from "../components/RedesSociales";
import { DetrasDeCamaras } from "../components/DetrasDeCamaras";

export const Campaña = () => {
  return (
    <>
      <div>
        <Comercial />
      </div>
      <div>
        <DetrasDeCamaras />
      </div>
      <div>
        <RedesSociales />
      </div>
      ;
    </>
  );
};
