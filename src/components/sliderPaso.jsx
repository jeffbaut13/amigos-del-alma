import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IncrementText from "./IncrementText";
import { ImgLoadDije } from "./ImgLoadDije";

export const SliderPaso = ({ next, sliderRef, DijeValtio, setOpen }) => {
  const inputChangeRef = useRef();
  const inputEmail = useRef();
  const [inputChange, setInputChange] = useState(true);
  const [inputChangeTwo, setInputChangeTwo] = useState(true);

  const settings = {
    dots: false,
    infinite: false,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    centerPadding: "0",
    centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    touchMove: false,
  };

  /*   const handleKeyDown = (e) => {
      if (sliderRef.current) {
        if (e.key === "Enter") {
          sliderRef.current.slickNext();
        } else if (e.key === "Tab" && e.shiftKey) {
          sliderRef.current.slickPrev();
        } else if (e.key === "Tab") {
          sliderRef.current.slickNext();
        }
      }
    };
   */

  const hanldeInputchange = () => {
    setInputChange(false);
    setTimeout(() => {
      if (inputChangeRef.current) {
        inputChangeRef.current.focus();
      }
    }, 0);
  };
console.log(DijeValtio.usuario);

  return (
    <Slider className="w-full h-full z-20" {...settings} ref={sliderRef}>
      <div>
        <div className="h-full flex flex-col items-center justify-center w-full rounded-lg slide-uno">
          <p className="text-base text-center">
            Ahora tú y tu amigo del alma también podrán tener su propio símbolo
            personalizado.
          </p>
          <hr className="w-1/2 my-4" />

          <button onClick={next}>Siguiente</button>
        </div>
      </div>
      <div>
        <div className="h-full flex  flex-col items-start justify-center w-full slide-uno">
          <div className=" w-full py-2">
            <input
              type="text"
              name="name"
              onChange={(e)=>DijeValtio.usuario=e.target.value}
              placeholder="¿Cuál es tu nombre?"
              className="focus:border-none focus:outline-none"
            />

            <hr className="w-full" />
          </div>
          <div className=" w-full py-2">
            <input
              type="email"
              name="email"
              onChange={(e)=>DijeValtio.usuario=e.target.value}
              placeholder="¿Tu correo?"
              className="focus:border-none focus:outline-none"
            />

            <hr className="w-full" />
          </div>
        </div>
      </div>
      <div>
        <div className="h-full flex  flex-col items-start justify-center w-full slide-uno">
          <div className=" w-full py-2 px-0.5 relative">
            {inputChange ? (
              <p
                onClick={hanldeInputchange}
                className="border border-[--borderOpacity] rounded-md text-center py-4 px-1 text-sm"
              >
                ¿Cómo se llama tu amigo(a)?
              </p>
            ) : (
              <>
                <input
                  ref={inputChangeRef}
                  maxLength={10}
                  type="text"
                  name="nameDog"
                  className="border uppercase border-[--borderOpacity] rounded-md  text-sm"
                  onChange={(e) => (DijeValtio.nombre = e.target.value)}
                  //placeholder="¿CÓMO SE LLAMA TU AMIGO(A)?"
                />
              </>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="h-full flex  flex-col items-start justify-center w-full slide-uno">
          <div className=" w-full py-2 px-1">
            <p className="text-base text-center">
              Si alguien se encuentra a tu amigo,
              <br />
              ¿a qué número llamar?
            </p>
            <input
              maxLength={10}
              type="number"
              name="nameDog"
              className="border text-center mt-6 border-[--borderOpacity] rounded-xl focus:border-[--primary] text-sm NeueHaas-Thin"
              onChange={(e) => (DijeValtio.contacto = e.target.value)}
              placeholder="EJ: 320 378 08 02"
            />
          </div>
        </div>
      </div>
      <div>
        <ImgLoadDije DijeValtio={DijeValtio} />
      </div>
    </Slider>
  );
};
