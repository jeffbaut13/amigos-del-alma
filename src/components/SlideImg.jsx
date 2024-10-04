import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SlideImg = ({ handleImageClick, selectedImage }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="w-full h-full relative">
        <img
          className="w-5/6 m-auto"
          src={selectedImage}
          alt="Imagen seleccionada"
        />

        <div className="absolute bottom-4 flex gap-4 left-0 w-full justify-center">
          <Slider
            className="lg:w-1/2 xs:w-[55%] h-full z-20"
            {...settings}
            ref={sliderRef}
          >
            {Array.from({ length: 13 }, (_, i) => (
              <div key={i}>
                <div className="w-full flex justify-center items-center">
                  <img
                    onClick={() => handleImageClick(`/imagenes/caja-${i}.jpg`)}
                    className="cursor-pointer w-20 h-20 rounded-xl object-cover shadow-md"
                    src={`/imagenes/caja-${i}.jpg`}
                    alt="caja troquelada forma perro"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <span
            onClick={next}
            className="cursor-pointer absolute top-1/2 -translate-y-1/2 lg:w-6 lg:h-6 xs:w-8 xs:h-8 inline-block lg:right-28 xs:right-16 bg-black p-2 rounded-full"
          >
            <img className="invert" src="/iconos/arrow.svg" alt="" />
          </span>
          <span
            onClick={prev}
            className="cursor-pointer absolute top-1/2 -translate-y-1/2 lg:w-6 lg:h-6 xs:w-8 xs:h-8  inline-block lg:left-28 xs:left-16 bg-black p-2 rounded-full rotate-180"
          >
            <img className="invert" src="/iconos/arrow.svg" alt="" />
          </span>
        </div>
      </div>
    </>
  );
};
