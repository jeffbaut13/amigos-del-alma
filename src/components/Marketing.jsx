import React from "react";
import { useNavigate } from "react-router-dom";

export const Marketing = () => {
  const navigate = useNavigate(); // Inicializar useNavigate

  const handleVideoEnd = () => {
    navigate("/comprar-dije");
  };

  return (
    <div
      style={{
        backgroundImage: "url(/imagenes/foto_perro_retocar.webp)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="section relative AddingtonCF-light flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-video" />
      <div className="z-10 relative w-5/6 m-auto flex justify-center items-center">
        <div className="w-1/3"></div>
        <div className="w-1/3 flex items-center justify-center">
          <figure className="w-60 h-60 inline-block">
            <img src="/imagenes/dijemarket.png" alt="" />
          </figure>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center text-sm text-[--bg-clar]">
          <figure className="w-40 h-40 inline-block mb-6">
            <img src="/imagenes/dijemarketabierto.png" alt="" />
          </figure>
          <h2 className="text-center  ">
            Toño y Alejo, no solo compartieron <br />
            miles de historias, también tenían una <br />
            medalla que se convirtió en el símbolo <br /> de su amistad
            incondicional.
          </h2>
          <h2 className="text-center  my-8">
            ahora, tú también puedes personalizar la tuya para que haga parte de
            tu historia con tu amigo del alma.
          </h2>
          <button onClick={handleVideoEnd} className="btn-home text-xs">
            Adquiere el tuyo aquí{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
