import React, { useState } from "react";
import Comercial from "../components/Comercial";

import { RedesSociales } from "../components/RedesSociales";
import { EdicionDije } from "../components/EdicionDije";

export const Campaña = () => {
  const [dije, setDije] = useState(false);
  return (
    <>
      {dije && (
        <>
          <EdicionDije setDije={setDije} />
        </>
      )}
      <div>
        <Comercial setDije={setDije} />
      </div>
      <div className="text-white">Detras de camaras</div>
      <div>
        <RedesSociales />
      </div>
      ;
    </>
  );
};
