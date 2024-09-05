import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IncrementText from "./IncrementText";
import { ImgLoadDije } from "./ImgLoadDije";

export const SliderPaso = ({
  next,
  sliderRef,
  DijeValtio,
  setOpen,
  setBtnCompra,
}) => {
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
        <div className="h-full flex text-[#1B191D] flex-col items-center justify-center w-full rounded-lg slide-uno">
          <p className="text-base moires px-8 text-center">
            Ahora tú y tu amigo del<br/> alma también podrán<br/> tener su propio símbolo<br/>
            personalizado.
          </p>
          <hr className="w-1/2 my-4" />

          <button className=" bg-black" onClick={next}>Siguiente</button>
        </div>
      </div>
      <div>
        <div className="h-full flex  flex-col items-center justify-end   w-full slide-uno">
          <div className=" w-full pt-6  border-b">
            <input
              type="text"
              name="name"
              onChange={(e) => (DijeValtio.usuario = e.target.value)}
              placeholder="¿Cuál es tu nombre?"
              className="focus:border-none focus:outline-none pt-4 text-center pla placeholder-[#E2D6AF]"
            />

          </div>
          <div className=" w-full pt-10 border-b">
            <input
              type="email"
              name="email"
              onChange={(e) => (DijeValtio.email = e.target.value)}
              placeholder="¿Tu correo?"
              className="focus:border-none focus:outline-none pt-4 text-center placeholder-[#E2D6AF]"
            />

          </div>
          <div className=" w-full h-full flex flex-col items-center justify-center">
          <button className=" bg-black" onClick={next}>Siguiente</button>

          </div>

        </div>
      </div>
      <div>
        <div className="h-full flex  flex-col items-start justify-center w-full slide-uno">
          <div className=" w-full py-2 px-0.5 relative">
            {inputChange ? (
              <p
                onClick={hanldeInputchange}
                className="border-b border-black text-[#E2D6AF]  text-center py-4 px-1 text-xl"
              >
                ¿Cómo se llama tu amigo?
              </p>
            ) : (
              <>
                <input
                  ref={inputChangeRef}
                  maxLength={10}
                  type="text"
                  name="nameDog"
                  className="border-b border-black uppercase   text-xl"
                  onChange={(e) => (DijeValtio.nombre = e.target.value)}
                  //placeholder="¿CÓMO SE LLAMA TU AMIGO(A)?"
                />
              </>
            )}
                      <div className=" w-full h-full flex flex-col items-center justify-center">
          <button className=" bg-black" onClick={next}>Siguiente</button>

          </div>

          </div>
          
        </div>
      </div>
      <div>
        <div className="h-full flex  flex-col items-start justify-center w-full slide-uno">
          <div className=" w-full pt-8 pb-2 px-1 border-b border-black">
            <p className="text-base text-center text-[#1B191D]">
              Si alguien se encuentra a tu amigo,
              <br />
              ¿a qué número llamar?
            </p>
            <input
              maxLength={10}
              type="number"
              name="nameDog"
              className="border text-center mt-6 border-[--borderOpacity] rounded-xl focus:border-[--primary] placeholder-[#E2D6AF] text-sm NeueHaas-Thin"
              onChange={(e) => (DijeValtio.contacto = e.target.value)}
              placeholder="EJ: 320 378 08 02"
            />
          </div>
          <div className=" w-full h-full flex flex-col items-center justify-center">
          <button className=" bg-black" onClick={next}>Siguiente</button>

          </div>

        </div>
      </div>
      <div>
        <ImgLoadDije DijeValtio={DijeValtio} setBtnCompra={setBtnCompra} />
      </div>
    </Slider>
  );
};
