import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ImgLoadDije } from "./ImgLoadDije";
import { CardUno } from "./CardUno";
import { CardDos } from "./CardDos";
import { CardTres } from "./CardTres";
import { CardCuatro } from "./CardCuatro";

export const SliderPaso = ({
  next,
  sliderRef,
  DijeValtio,
  setOpen,
  setBtnCompra,
  handleCompra,
  currentSlide,
  setDisable,
  disable,
}) => {
  const inputChangeRef = useRef();

  const settings = {
    dots: false,
    infinite: false,
    /* fade: true, */
    speed: 1000,
    slidesToShow: 1,
    centerPadding: "0",
    centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    touchMove: false,
  };

  const hanldeInputchange = () => {
    setInputChange(false);
    setTimeout(() => {
      if (inputChangeRef.current) {
        inputChangeRef.current.focus();
      }
    }, 0);
  };

  return (
    <Slider className="w-full h-full z-20" {...settings} ref={sliderRef}>
      <div>
        <CardUno next={next} />
      </div>
      <div>
        <CardDos
          DijeValtio={DijeValtio}
          next={next}
          setDisable={setDisable}
          disable={disable}
          currentSlide={currentSlide}
        />
      </div>
      <div>
        <CardTres
          DijeValtio={DijeValtio}
          next={next}
          currentSlide={currentSlide}
          setDisable={setDisable}
          disable={disable}
        />
      </div>
      <div>
        <CardCuatro
          currentSlide={currentSlide}
          DijeValtio={DijeValtio}
          next={next}
          setDisable={setDisable}
          disable={disable}
        />
      </div>
      <div>
        <ImgLoadDije
          DijeValtio={DijeValtio}
          setBtnCompra={setBtnCompra}
          handleCompra={handleCompra}
        />
      </div>
    </Slider>
  );
};
