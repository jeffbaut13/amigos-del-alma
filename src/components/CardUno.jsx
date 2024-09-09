import React from "react";

export const CardUno = ({ next }) => {
  return (
    <div className="h-full flex text-[#1B191D] flex-col items-center justify-evenly py-12 w-full rounded-lg slide-uno border-none">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl text-center">
          Collar <br />
          Amigos del Alma.
        </h2>
        <span className="text-xs">Por: Inter Rapidísimo</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl">$30.000</p>
        <p className="text-sm">Disponibles: 1500</p>
        <hr className="border-black border w-1/3 mt-4" />
      </div>

      <button className=" bg-black" onClick={next}>
        Siguiente
      </button>

      <p className="NeueHassRoman text-xs px-8 text-center w-5/6">
        Este collar de finas terminaciones enmarcado en un contenedor de cuero y
        un estético dije que llevará impresa su foto, será el símbolo ideal para
        que todo el mundo reconozca a tu Amigo del Alma.
      </p>
    </div>
  );
};
