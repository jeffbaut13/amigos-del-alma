import React from "react";
import { useNavigate } from "react-router-dom";

export const Marketing = () => {
  const navigate = useNavigate(); // Inicializar useNavigate

  const handleVideoEnd = () => {
    navigate("/comprar-dije");
  };

  return (
    <div
      id="comprar"
      style={{
        backgroundImage: "url(/imagenes/foto_perro_retocar.webp)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="section relative AddingtonCF-light flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-video" />
      <div className="z-10 relative w-full mx-40 h-full flex justify-center items-center">
        <div className="w-2/5" />
        <div className="flex-1 p-2 flex rounded-xl border h-4/6 border-dashed border-[--second]">
          <div className="w-1/2 bg-[--bg-clar] rounded-xl flex items-center justify-center">
            <figure className="w-2/5 h-full inline-block">
              <img src="/imagenes/dijemarket.png" alt="" />
            </figure>
          </div>
          <div className="w-1/2 flex flex-col rounded-xl border border-[--second] ml-2 items-center justify-center text-xs text-[--bg-clar]">
            <h2 className="text-center  ">
              Toño y Alejo, no solo compartieron <br />
              miles de historias, también tenían una <br />
              medalla que se convirtió en el símbolo <br /> de su amistad
              incondicional.
            </h2>
            <h2 className="text-center  my-8">
              ahora, tú también puedes <br /> personalizar la tuya para que haga{" "}
              <br /> parte de tu historia con tu amigo <br /> del alma.
            </h2>
            <button onClick={handleVideoEnd} className="btn-home text-xs">
              Adquiere el tuyo aquí{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
