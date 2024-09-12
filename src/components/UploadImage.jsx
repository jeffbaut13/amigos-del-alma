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
            normalizedWidth = 2.5;
            normalizedHeight = Math.max(0, (aspectHeight / aspectWidth) * 2.5);
          } else {
            // Normalizar el alto a 2 y calcular el ancho
            normalizedHeight = 2.5;
            normalizedWidth = Math.max(0, (aspectWidth / aspectHeight) * 2.5);
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
        <div className="lg:w-2/5 xs:w-[45%] flex flex-col justify-center items-center h-full">
          <p className="lg:text-2xl xs:text-xl text-start mb-4 text-black">
            Sube la mejor foto que tengas con tu amigo.
          </p>

          <button className="w-full" onClick={openFileDialog}>
            <span className="lg:w-4 xs:w-10 lg:h-4 xs:h-10 inline-block">
              <svg
                id="uuid-bdd3d4bd-bb1d-42e4-8673-61b974f9d6e1"
                data-name="Capa_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14.93 21.31"
                className="fill-white"
              >
                <g
                  id="uuid-a6379814-cb4b-43b7-b39e-0dcd591706f7"
                  data-name="Capa_1"
                >
                  <g>
                    <path d="M2.38,21.31c-1.31,0-2.38-1.07-2.38-2.38v-10.17c0-1.31,1.07-2.38,2.38-2.38h2.68v1.09h-2.68c-.71,0-1.29.58-1.29,1.29v10.17c0,.71.58,1.29,1.29,1.29h10.17c.71,0,1.29-.58,1.29-1.29v-10.17c0-.71-.58-1.29-1.29-1.29h-2.68v-1.09h2.68c1.31,0,2.38,1.07,2.38,2.38v10.17c0,1.31-1.07,2.38-2.38,2.38H2.38Z" />
                    <path d="M7.47,14.39c-.3,0-.54-.24-.54-.54V1.86l-2.13,2.13c-.1.1-.24.16-.39.16s-.28-.06-.39-.16c-.21-.21-.21-.56,0-.77L7.08.16l.08-.07.09-.05.1-.03h.11s.11,0,.11,0l.1.03.11.06.09.07,3.05,3.05c.21.21.21.56,0,.77-.1.1-.24.16-.39.16s-.28-.06-.39-.16l-2.13-2.13v11.98c0,.3-.24.54-.54.54Z" />
                  </g>
                </g>
              </svg>
            </span>{" "}
          </button>
        </div>
      ) : (
        <>
          <button onClick={openFileDialog}>Usar otra imagen</button>
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
