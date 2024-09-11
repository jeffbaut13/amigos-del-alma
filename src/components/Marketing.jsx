import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EdicionDije } from "./EdicionDije";
import { AnimationMarketing } from "../helpers/AnimationMarketing";

export const Marketing = () => {
  const [abrirDije, setabrirDije] = useState(null);

  const dijeCanvaRef = useRef(null);

  const handleVideoEnd = () => {
    setabrirDije(true);

    //navigate("/comprar-dije");
  };

  useEffect(() => {
    AnimationMarketing(abrirDije, dijeCanvaRef);
  }, [abrirDije]);

  return (
    <div
      id="comprar"
      style={{
        backgroundImage: "url(/imagenes/tono.webp)",

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="snap-item section relative flex items-center justify-center lg:bg-top xs:bg-left-top"
    >
      {/* <div className="absolute top-0 left-0 z-0 w-full h-full bg-video" /> */}
      <div className="z-10 relative w-4/5 h-full lg:items-center flex xs:items-start max-lg:pt-40 justify-center">
        <div className="p-2 flex max-lg:flex-col-reverse relative justify-between rounded-xl border w-full lg:h-4/6 xs:h-5/6 max-lg:gap-2  border-dashed border-[#E1C5B550]">
          <div className="textoMarket whitespace-nowrap overflow-hidden lg:w-1/4 xs:w-full lg:h-full xs:h-1/2 flex flex-col rounded-xl border border-[#E1C5B550] items-center justify-center text-xs text-[--second]">
            <h2 className="text-center text-2xl ">
              Ahora tú y tu <br /> Amigo del Alma también
              <br /> podrán tener un símbolo <br />
              que selle su amistad <br />
              incondicional.
            </h2>
            <button
              onClick={handleVideoEnd}
              className="xs:inline-block lg:hidden btn-home text-base mt-12"
            >
              Personaliza el tuyo aquí
            </button>
          </div>
          <div
            id="btn-observer"
            className=" btnMarket whitespace-nowrap overflow-hidden w-1/2 lg:flex xs:hidden items-center justify-center"
          >
            <button
              onClick={handleVideoEnd}
              className="btn-home hover:bg-white text-base"
            >
              Personaliza el tuyo aquí
            </button>
          </div>
          <div className="dijeMarket overflow-hidden lg:w-1/4 xs:w-full lg:h-full xs:h-1/2 bg-[--bg-clar] rounded-xl flex  items-center justify-center">
            <EdicionDije
              abrirDije={abrirDije}
              setabrirDije={setabrirDije}
              dijeCanvaRef={dijeCanvaRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
