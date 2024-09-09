import React from "react";

export const Price = () => {
  return (
    <div className="NeueHaas-Ligth flex flex-col items-center justify-center text-[#1B191D] h-24 w-full border-t border-black">
      <div className="flex flex-col items-center w-full">
        <div className=" flex justify-between ">
          <h1 className="text-2xl">PRECIO:</h1>
          <span className=" text-2xl">$30.000</span>
        </div>
        <div className="text-xs flex items-center">
          <p className=" text-[10px]">UNIDADES DISPONIBLES:</p>
          <span className="text-2xl">500</span>
        </div>
      </div>
    </div>
  );
};
