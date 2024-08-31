import React from "react";

export const Price = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-20 w-full border-t border-x border-[--borderOpacity] rounded-t-lg">
      <div className="relative rounded-t-lg h-full flex justify-around">
        <div className="amount flex flex-col justify-evenly py-6 items-start">
          <p className="w-full text-start text-[0.5rem]">Disponible</p>
          <hr className="my-1 w-20" />
          <p className="number text-2xl">1500</p>
        </div>
        <hr className="absolute w-[35%] border-t rotate-90 bottom-6 -translate-x-0.5" />
        <div className="price flex flex-col justify-evenly py-6 items-start">
          <p className="w-full text-start text-[0.5rem]">Precio</p>
          <hr className="my-1 w-20" />
          <p className="number text-2xl relative">
            <span className="text-sm absolute top-1/2 -left-4 -translate-y-1/2">
              $
            </span>
            30.000
          </p>
        </div>
      </div>
    </div>
  );
};
