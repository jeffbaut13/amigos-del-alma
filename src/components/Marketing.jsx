import React from "react";
import { useNavigate } from "react-router-dom";

export const Marketing = () => {
  const navigate = useNavigate(); // Inicializar useNavigate

  const handleVideoEnd = () => {
    //navigate("/comprar-dije");
  };

  return (
    <div
      id="comprar"
      style={{
        backgroundImage: "url(/imagenes/tono.webp)",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="section relative flex items-center justify-center"
    >
      {/* <div className="absolute top-0 left-0 z-0 w-full h-full bg-video" /> */}
      <div className="z-10 relative w-full h-full mx-40 flex items-center justify-center">
        <div className="p-2 flex  justify-between rounded-xl border w-full h-4/6 border-dashed border-[#E1C5B550]">
          <div className="w-1/4 flex flex-col rounded-xl border border-[#E1C5B550] items-center justify-center text-xs text-[--second]">
            <h2 className="text-center text-2xl ">
              Ahora tú <br />
              y tu amigo del alma
              <br />
              también podrán <br />
              tener un símbolo <br />
              que selle su amistad <br />
              incondicional.,
            </h2>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <button onClick={handleVideoEnd} className="btn-home text-base">
              Personaliza el tuyo aquí
            </button>
          </div>
          <div className="w-1/4 bg-[--bg-clar] rounded-xl flex items-center justify-center">
            <figure className="w-2/5 h-full inline-block">
              <img src="/imagenes/dijemarket.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
