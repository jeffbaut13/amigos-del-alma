import DijeValtio from "../store/index";

import { CardsCustomer } from "../components/CardsCustomer";
import { useState } from "react";
import { SlideImg } from "./SlideImg";

export const EdicionDije = ({ perro, setabrirDije, dijeCanvaRef }) => {
  // Estado para almacenar la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState("/imagenes/caja-0.jpg");

  // Función para cambiar la imagen seleccionada
  const handleImageClick = (newSrc) => {
    setSelectedImage(newSrc);
  };

  return (
    <div
      className={` relative text-[--second] edicion bg-[#FDFBF3] flex max-lg:flex-col w-full h-full`}
    >
      <span
        onClick={() => setabrirDije(false)}
        className="closeCard hidden z-[51] cursor-pointer absolute lg:right-4 xs:right-4 lg:top-4 xs:top-4 xs:w-6 xs:h-6 lg:w-4 lg:h-4"
      >
        {" "}
        <img src="/iconos/closeCardDije.svg" alt="" />
      </span>
      <div
        ref={dijeCanvaRef}
        className={`w-full dijeCanva bg-white h-full z-50 relative  `}
      >
        {perro ? (
          <figure className="w-full h-full">
            <video
              className="w-full h-full object-contain"
              muted
              playsInline
              loop
              autoPlay
            >
              <source src="/Motionweb.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </figure>
        ) : (
          <SlideImg
            handleImageClick={handleImageClick}
            selectedImage={selectedImage}
          />
        )}
      </div>

      <div className="cardDije overflow-hidden lg:w-0 lg:h-full xs:h-0 xs:w-full flex flex-col items-center">
        <CardsCustomer setabrirDije={setabrirDije} DijeValtio={DijeValtio} />
      </div>
    </div>
  );
};
