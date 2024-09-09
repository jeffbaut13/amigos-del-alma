import React from "react";

export const PasosIcons = ({ currentSlide }) => {
  return (
    <div className="pasos relative h-10 w-12 text-xs ">
      <span className=" pasosNumer circuloUno ">0{currentSlide}</span>
      <span className="absolute circuloDos left-4 w-5 h-5 flex items-center justify-center">
        /
      </span>
      <span className=" circuloTres pasosNumer ">05</span>

      <span className=" circuloCuatro pasosNumer  "></span>
      <span className=" circuloCinco pasosNumer  "></span>
      <span className=" circuloSeis pasosNumer  "></span>
    </div>
  );
};
