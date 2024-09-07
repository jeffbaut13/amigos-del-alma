import React, { useEffect, useRef, useState } from "react";

import { convertToBraille } from "../helpers/BraileConverter";
import { animaitionsGroup } from "../helpers/AnimationIconSteps";
import { PasosIcons } from "./PasosIcons";
import { SliderPaso } from "./sliderPaso";
import { useSnapshot } from "valtio";
import { Arrows } from "./Arrows";
import { Price } from "./Price";

export const Pasos = ({ DijeValtio, setOpen, camMove, snap }) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [btnCompra, setBtnCompra] = useState(false);

  const handleCompra = async () => {
    // Verifica que todos los datos requeridos estén presentes
    if (
      !DijeValtio.usuario ||
      !DijeValtio.email ||
      !DijeValtio.contacto ||
      !DijeValtio.nombre ||
      !DijeValtio.Imagen
    ) {
      alert("Faltan datos necesarios para realizar la compra");
      return;
    }

    const formData = new FormData();
    formData.append("usuario", DijeValtio.usuario);
    formData.append("email", DijeValtio.email);
    formData.append("contacto", DijeValtio.contacto);
    formData.append("nombre", DijeValtio.nombre);

    try {
      // Descargar la imagen
      const response = await fetch(DijeValtio.Imagen);
      if (!response.ok) {
        throw new Error("No se pudo descargar la imagen");
      }
      const blob = await response.blob();

      // Agregar la imagen al FormData
      formData.append(
        "image",
        new File([blob], "imagen.jpg", { type: "image/jpeg" })
      );

      // Enviar la solicitud POST al servidor principal
      const res = await fetch("https://server-amigos.onrender.com/comprar", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Compra realizada con éxito");

        // Construir la cadena de consulta con el email
        const dataSend = {
          email: DijeValtio.email,
          usuario: DijeValtio.usuario,
          promoid: DijeValtio.promoid,
          // Solo el campo email
        };
        const queryString = Object.keys(dataSend)
          .map((key) => key + "=" + encodeURIComponent(dataSend[key]))
          .join("&");

        // Redirigir a la URL de "completacarrito" con la cadena de consulta
        const urlAlcarrito = "local/promo/addtocart";
        window.location.href = `${urlAlcarrito}?${queryString}`;
      } else {
        const errorText = await res.text();
        alert(`Error al realizar la compra: ${errorText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al realizar la compra");
    }
  };

  const resetBack = {
    position: [-1.5, -1, 3],
  };

  useEffect(() => {
    if (currentSlide == 2) {
      camMove(snap.reset);
    }
    if (currentSlide == 3) {
      camMove(snap.nameDog);
    }
    if (currentSlide == 4) {
      setOpen(false);
      camMove(snap.back);
    }
    if (currentSlide == 5) {
      camMove(snap.EditImage);

      setTimeout(() => {
        setOpen(true);
      }, 800);
    }
  }, [currentSlide]);

  const next = () => {
    sliderRef.current.slickNext();
    if (currentSlide === 0) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prev = () => {
    sliderRef.current.slickPrev();

    if (currentSlide === 0) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleInputChange = (e) => {
    const text = e.target.value.toUpperCase(); // Convierte el texto a mayúsculas

    DijeValtio.nombre = text;
    DijeValtio.braile = convertToBraille(text);
  };

  useEffect(() => {
    animaitionsGroup(currentSlide);
  }, [currentSlide]);

  return (
    <>
      <div className="  relative border-dashed border w-full h-full rounded-lg flex flex-col  items-start  ">
        <div
          className={`  relative border shadowbox w-full h-full rounded-lg flex flex-col  items-start `}
        >
          {/*         <PasosIcons currentSlide={currentSlide} />
           */}
          <SliderPaso
            handleCompra={handleCompra}
            setBtnCompra={setBtnCompra}
            next={next}
            sliderRef={sliderRef}
            DijeValtio={DijeValtio}
            setOpen={setOpen}
          />{" "}
          <div className="arrows flex justify-between w-full h-6 top-1/2 left-0 absolute z-50">
            {currentSlide >= 2 && (
              <figure
                onClick={prev}
                className="cursor-pointer bg-black hover:bg-transparent transition-all duration-500 group border border-black absolute left-2 rotate-180 w-6 h-6 inline-block p-1.5 rounded-full -translate-y-1/2"
              >
                <Arrows color={"stroke-white group-hover:stroke-black"} />
              </figure>
            )}
            {currentSlide > 1 && currentSlide <= 4 && (
              <figure
                onClick={next}
                className="cursor-pointer bg-black hover:bg-transparent transition-all duration-500 group border border-black absolute right-2 w-6 h-6 inline-block p-1.5 rounded-full -translate-y-1/2"
              >
                <Arrows color={"stroke-white group-hover:stroke-black"} />
              </figure>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
