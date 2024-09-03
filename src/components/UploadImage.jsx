import React, { useRef } from "react";
import { Arrows } from "./Arrows";

// Función para calcular el máximo común divisor (MCD)
const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

export const UploadImage = ({
  DijeValtio,
  controles,
  setControles,
  setReset,
  setBtnCompra,
}) => {
  const inputRef = useRef(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg")
    ) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          const width = img.width;
          const height = img.height;

          // Calcular el MCD y la proporción base
          const divisor = gcd(width, height);
          const aspectWidth = width / divisor;
          const aspectHeight = height / divisor;

          // Normalizar para que el máximo sea 2 y el mínimo sea 1 o más
          let normalizedWidth, normalizedHeight;
          if (aspectWidth > aspectHeight) {
            // Normalizar el ancho a 2 y calcular el alto
            normalizedWidth = 4;
            normalizedHeight = Math.max(0, (aspectHeight / aspectWidth) * 4);
          } else {
            // Normalizar el alto a 2 y calcular el ancho
            normalizedHeight = 4;
            normalizedWidth = Math.max(0, (aspectWidth / aspectHeight) * 4);
          }

          // Asegurar que los valores estén entre 1 y 2
          DijeValtio.imageWidth = normalizedWidth.toFixed(3); // Formato decimal
          DijeValtio.imageHeight = normalizedHeight.toFixed(3); // Formato decimal
          setReset(true);
        };
        img.src = reader.result;
        DijeValtio.Imagen = reader.result;
      };
      reader.readAsDataURL(file);
      setControles(true);
      setBtnCompra(true);
    } else {
      alert("Solo se permiten imágenes JPG, JPEG o PNG.");
    }
  };

  const openFileDialog = () => {
    inputRef.current.click();
  };

  return (
    <>
      {!controles ? (
        <>
          <p className="text-center mb-2">
            Sube la mejor foto que tengas con tu amigo
          </p>

          <button
            className="group w-44 h-12 flex flex-col items-center justify-normal"
            onClick={openFileDialog}
          >
            <span className=" w-4 h-4 inline-block -rotate-90">
              <Arrows
                color={"stroke-[--primary]  group-hover:stroke-[--second]"}
              />
            </span>{" "}
            <div className="w-4 mt-2 h-[1px] bg-[--primary] group-hover:bg-[--second]" />
          </button>
        </>
      ) : (
        <>
          <button onClick={openFileDialog} className="editorbtn">
            Subir imagen
          </button>
        </>
      )}

      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        accept="image/jpeg, image/png, image/jpg"
        onChange={handleImageUpload}
      />
    </>
  );
};
