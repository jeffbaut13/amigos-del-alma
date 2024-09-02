import React from "react";
import backgroundImage from "/imagenes/making.jpg";

export const RedesSociales = () => {
  return (
    <div className="home h-screen w-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div className="flex flex-col items-center h-full relative">
        <div className="h-[60%] flex flex-col items-center justify-end mt-28">
          <h1 className="text-[--colorYellow] text-sm text-center">
            ¿Conoces a alguien que también <br />
            tenga un amigo inseparable?
          </h1>
          <h1 className="text-[--colorYellow] mt-32 text-sm text-center">
            Comparte la historia de <br />
            Toño y Alejo con más amigos
          </h1>
        </div>
        <div className=" flex mt-8 ">
            <button className=" border-none mx-4">
              <img className="w-8" src="/iconos/facebook.svg" alt="" />
            </button>
            <button className=" border-none mx-4">
              <img className="w-8" src="/iconos/instagram.svg" alt="" />
            </button>
            <button className=" border-none mx-4">
              <img className="w-8" src="/iconos/whatsapp.svg" alt="" />
            </button>
          </div>

      </div>
    </div>
  );
};
