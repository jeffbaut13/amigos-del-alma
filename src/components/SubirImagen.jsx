import React, { useRef } from "react";
import { Arrows } from "./Arrows";

export const SubirImagen = ({ DijeValtio, handleImageUpload }) => {
  const inputRef = useRef(null);

  const openFileDialog = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <p>SUBE LA MEJOR FOTO EN FORMATO VERTICAL QUE TENGAS CON TU AMIGO</p>
      <button
        className="group px-10 py-2 flex items-center justify-normal"
        onClick={openFileDialog}
      >
        <span className="w-6 h-6 inline-block -rotate-90">
          <Arrows color={"stroke-white group-hover:stroke-black"} />
        </span>
      </button>
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        accept="image/jpeg, image/png, image/jpg"
        onChange={handleImageUpload}
      />
    </div>
  );
};
