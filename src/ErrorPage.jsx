import React, { useEffect, useState } from "react";
import Dije from "./store";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const [first, setfirst] = useState(true);
  useEffect(() => {
    if (first) {
      Dije.readyVideo = true;
    }
  }, [first]);

  return (
    <div
      style={{
        backgroundImage: "url(/imagenes/bg-videos-section.webp)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="section relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 bg-black bg-opacity-60 w-full h-full" />

      <div className="z-10 flex flex-col items-center justify-center overflow-hidden">
        <p className="text-[15rem] leading-[14rem] notFound">404</p>
        <p className="text-4xl">Página no encontrada</p>
        <button onClick={() => navigate("/")} className="btn-home mt-12">
          Volver al inicio
        </button>
      </div>
    </div>
  );
};
