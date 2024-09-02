import React, { useState } from "react";
import Comercial from "../components/Comercial";

import { RedesSociales } from "../components/RedesSociales";
import { EdicionDije } from "../components/EdicionDije";
import DetrasdeCamaras from "../components/DetrasdeCamaras";

export const Campaña = () => {
  const [abrirDije, setAbrirDije] = useState(false);
  return (
    <>
      <EdicionDije setAbrirDije={setAbrirDije} />
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
