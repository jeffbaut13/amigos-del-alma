import React from "react";
import Comercial from "../components/Comercial";

import { RedesSociales } from "../components/RedesSociales";

export const Campaña = () => {
  return (
    <>
      <div>
        <Comercial />
      </div>
      <div className="text-white">Detras de camaras</div>
      <div>
        <RedesSociales />
      </div>
      ;
    </>
  );
};
