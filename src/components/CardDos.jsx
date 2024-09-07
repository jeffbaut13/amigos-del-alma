import React from "react";

export const CardDos = ({ DijeValtio, next }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-around slide-uno">
      <div />
      <div className="w-1/2 mx-auto flex flex-col">
        <div className="w-full border-b">
          <input
            type="text"
            name="name"
            onChange={(e) => (DijeValtio.usuario = e.target.value)}
            placeholder="¿Cuál es tu nombre?"
            className="focus:border-none focus:outline-none pt-4 text-center text-black"
          />
        </div>
        <div className=" w-full pt-10 border-b">
          <input
            type="email"
            name="email"
            onChange={(e) => (DijeValtio.email = e.target.value)}
            placeholder="¿Tu correo?"
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
