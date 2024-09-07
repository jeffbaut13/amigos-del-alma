import React from "react";

export const CardCuatro = ({ DijeValtio, next }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-around slide-uno">
      <div />
      <div className="w-5/6 mx-auto flex flex-col">
        <p className="text-2xl text-center text-[#1B191D] mb-6">
          Si alguien se encuentra a tu amigo, <br />
          ¿a qué número debería llamar?
        </p>
        <div className="w-full border-b">
          <input
            maxLength={10}
            type="number"
            name="phone"
            onChange={(e) => (DijeValtio.contacto = e.target.value)}
            placeholder="EJ: 320 378 08 02"
            className="focus:border-none focus:outline-none pt-4 text-center text-black"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <button onClick={next}>Siguiente</button>
      </div>
    </div>
  );
};
