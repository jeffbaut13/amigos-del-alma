import React, { useEffect, useRef, useState } from "react";
import { animaitionsGroup } from "../helpers/AnimationIconSteps";
import { SliderPaso } from "./sliderPaso";
import { Arrows } from "./Arrows";

export const Pasos = ({ DijeValtio, setOpen, camMove, snap, setabrirDije }) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [btnCompra, setBtnCompra] = useState(false);
  const [disable, setDisable] = useState(false);

  // Generar un número aleatorio de al menos 5 caracteres
  const generateRandomNumber = () => {
    return Math.random().toString(36).substring(2, 7); // Genera un número aleatorio de 5 caracteres
  };

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

    try {
      // Generar un número aleatorio
      const randomNumber = generateRandomNumber();

      // Modificar el email agregando el número aleatorio
      const emailConsecutivo = `${DijeValtio.email}-${randomNumber}`;
      const formData = new FormData();
      formData.append("usuario", DijeValtio.usuario);
      formData.append("email", emailConsecutivo);
      formData.append("contacto", DijeValtio.contacto);
      formData.append("nombre", DijeValtio.nombre);

      // Descargar la imagen
      const response = await fetch(DijeValtio.Imagen);
      if (!response.ok) {
        throw new Error("No se pudo descargar la imagen");
      }
      const blob = await response.blob();
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
        // Construir la cadena de consulta con el email modificado
        const dataSend = {
          email: emailConsecutivo,
          usuario: DijeValtio.usuario,
          promoid: DijeValtio.promoid,
        };
        const queryString = Object.keys(dataSend)
          .map((key) => key + "=" + encodeURIComponent(dataSend[key]))
          .join("&");

        // Redirigir a la URL de "completacarrito" con la cadena de consulta
        const urlAlcarrito = "https://www.alcarrito.com/promo/addtocart";
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
    if (currentSlide > 4) {
      setTimeout(() => {
        camMove(snap.EditImage);
        setOpen(true);
      }, 500);
      setTimeout(() => {
        DijeValtio.iconDije = true;
      }, 1500);
    } else {
      DijeValtio.iconDije = false;
    }
  }, [currentSlide]);

  const next = () => {
    sliderRef.current.slickNext();
    setCurrentSlide(currentSlide + 1);
  };

  const prev = () => {
    sliderRef.current.slickPrev();
    setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    animaitionsGroup(currentSlide);
  }, [currentSlide]);

  return (
    <>
      <div className="relative border-dashed border w-full h-full rounded-lg flex flex-col items-start">
        <div
          className={`NeueHassRoman relative border-none shadowbox w-full h-full flex flex-col items-start`}
        >
          <SliderPaso
            setabrirDije={setabrirDije}
            handleCompra={handleCompra}
            setBtnCompra={setBtnCompra}
            next={next}
            sliderRef={sliderRef}
            DijeValtio={DijeValtio}
            setOpen={setOpen}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            setDisable={setDisable}
            disable={disable}
          />
          {currentSlide >= 2 && (
            <figure
              onClick={prev}
              className={`z-50 top-1/2 cursor-pointer bg-black hover:bg-[--hoverBlack] transition-all duration-300 group border border-black absolute left-2 rotate-180 lg:w-6 lg:h-6 xs:w-11 xs:h-11 xs:p-3 inline-block lg:p-1.5 rounded-full -translate-y-1/2`}
            >
              <Arrows color={"stroke-white transition-all duration-300 "} />
            </figure>
          )}
          {currentSlide > 1 && currentSlide <= 4 && (
            <figure
              onClick={next}
              className={`${
                disable ? "" : "pointer-events-none opacity-30"
              } z-50 top-1/2 cursor-pointer bg-black hover:bg-[--hoverBlack] transition-all duration-300 group border border-black absolute right-2 lg:w-6 lg:h-6 xs:w-11 xs:h-11 xs:p-3 inline-block lg:p-1.5 rounded-full -translate-y-1/2`}
            >
              <Arrows color={"stroke-white transition-all duration-300 "} />
            </figure>
          )}
        </div>
      </div>
    </>
  );
};
