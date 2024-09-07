import React from "react";

export const CardTres = ({ DijeValtio, next }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-around slide-uno">
      <div />
      <div className="w-1/2 mx-auto flex flex-col">
        <div className="w-full border-b">
          <input
            maxLength={10}
            type="text"
            name="nameDog"
            onChange={(e) => (DijeValtio.nombre = e.target.value)}
            placeholder="¿Cómo se llama tu amigo?"
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
