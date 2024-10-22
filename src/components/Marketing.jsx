import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EdicionDije } from "./EdicionDije";
import { AnimationMarketing } from "../helpers/AnimationMarketing";

export const Marketing = () => {
  const [abrirDije, setabrirDije] = useState(true);
  const [perro, setPerro] = useState(true);

  const dijeCanvaRef = useRef(null);

  const handleVideoEnd = () => {
    setabrirDije(true);

    //navigate("/comprar-dije");
  };

  useEffect(() => {
    AnimationMarketing(abrirDije, dijeCanvaRef, setPerro);
  }, [abrirDije]);

  return (
    <div
      id="comprar"
      style={{
        backgroundImage: "url(/imagenes/tono-caja.webp)",

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="snap-item section relative flex items-center justify-center lg:bg-top xs:bg-left-top"
    >
      <div className="BlurBack absolute opacity-0 backdrop-blur-md top-0 left-0 bg-black bg-opacity-20 w-full h-full" />
      <div className="absolute top-0 left-0 bg-[#00000082] w-full h-full" />
      <div className="absolute top-0 left-0 bg-gradient-to-b from-black to-30% w-full h-full" />
      <div className="contaiMarket z-10 relative w-4/5 h-full flex items-center justify-center">
        <div className="containMarket_child  p-2 flex max-lg:flex-col-reverse relative justify-between rounded-xl border w-full lg:h-2/5 xs:h-5/6 max-lg:gap-2  border-dashed border-[#E1C5B550]">
          {/* <div className="textoMarket whitespace-nowrap overflow-hidden lg:w-1/4 xs:w-full lg:h-full xs:h-1/2 flex flex-col rounded-xl border border-[#E1C5B550] items-center justify-center text-xs text-[--second]"> */}
          <div className="textoMarket whitespace-nowrap overflow-hidden lg:w-1/4 xs:w-full lg:h-full xs:h-1/2 flex flex-col rounded-xl items-center justify-center text-xs text-[--second]">
            <h2 className="text-center text-xl ">
              Ahora tu Amigo del Alma <br />
              tendrá una casa mágica <br />
              en la que podrá vivir <br />
              sus propias aventuras.
            </h2>
            <button
              onClick={handleVideoEnd}
              className="xs:inline-block lg:hidden btn-home text-base mt-12"
            >
              Cómprala acá
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
              Cómprala acá
            </button>
          </div>
          <div className="dijeMarket overflow-hidden lg:w-1/4 xs:w-full lg:h-full xs:h-1/2 bg-[--bg-clar] rounded-xl flex  items-center justify-center">
            <EdicionDije
              perro={perro}
              setabrirDije={setabrirDije}
              dijeCanvaRef={dijeCanvaRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
