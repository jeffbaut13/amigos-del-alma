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
      <div className="z-10 relative w-80 flex flex-col justify-center">
        <h2 className="text-center  ">
          Toño y Alejo, no solo compartieron miles de historias, también tenían
          una medalla que se convirtió en el símbolo de su amistad
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
  );
};
