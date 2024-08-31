import React, { useState } from "react";
import Comercial from "../components/Comercial";

import { RedesSociales } from "../components/RedesSociales";
import { EdicionDije } from "../components/EdicionDije";
import DetrasdeCamaras from "../components/DetrasdeCamaras";

export const Campaña = () => {
  const [abrirDije, setAbrirDije] = useState(false);
  return (
    <>
      {abrirDije && (
        <>
          <EdicionDije setAbrirDije={setAbrirDije} />
          <div
            onClick={() => setAbrirDije(false)}
            className="fixed top-0 left-0 bg-black bg-opacity-10 backdrop-blur-xl w-full h-full z-[99]"
          ></div>
        </>
      )}
      <div>
        <Comercial abrirDije={abrirDije} setAbrirDije={setAbrirDije} />
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
