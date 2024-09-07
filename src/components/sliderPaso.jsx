import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IncrementText from "./IncrementText";
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
}) => {
  const inputChangeRef = useRef();
  const inputEmail = useRef();
  const [inputChange, setInputChange] = useState(true);
  const [inputChangeTwo, setInputChangeTwo] = useState(true);

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
        <CardDos DijeValtio={DijeValtio} next={next} />
      </div>
      <div>
        <CardTres DijeValtio={DijeValtio} next={next} />
      </div>
      <div>
        <CardCuatro DijeValtio={DijeValtio} next={next} />
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
