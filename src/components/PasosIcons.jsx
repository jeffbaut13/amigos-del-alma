import React from "react";

export const PasosIcons = ({ currentSlide }) => {
  return (
    <div className="pasos relative h-9 w-12 text-xs ">
      <span className="number pasosNumer circuloUno ">0{currentSlide}</span>
      <span className="absolute circuloDos left-4 w-5 h-5 flex items-center justify-center numberBold">
        /
      </span>
      <span className="number circuloTres pasosNumer ">05</span>

      <span className="number circuloCuatro pasosNumer  "></span>
      <span className="number circuloCinco pasosNumer  "></span>
      <span className="number circuloSeis pasosNumer  "></span>
    </div>
  );
};
