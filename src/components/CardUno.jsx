import React, { useState, useEffect } from "react";
import axios from "axios";

export const CardUno = ({ next }) => {
  const [stockDije, setStockDije] = useState(null);

  useEffect(() => {
    const fetchStockDije = async () => {
      try {
        const response = await axios.get(
          "https://server-amigos.onrender.com/dijes"
        );

        setStockDije(response.data.stockDije || 0);
      } catch (error) {
        console.error("Error al obtener stockDije:", error.message);
        // Manejo de errores opcional
        setStockDije(0);
      }
    };

    fetchStockDije();
  }, []);

  return (
    <div className="NeueHaas-Medium h-full flex text-[#1B191D] flex-col items-center justify-evenly py-12 w-full rounded-lg slide-uno border-none">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl leading-5 text-center">
          Collar <br />
          Amigos del Alma.
        </h2>
        <span className="text-xs">Por: Inter Rapidísimo</span>
      </div>

      {stockDije > 1 ? (
        <>
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl leading-6">$89.000</p>
            <p className="text-xs stock">
              Disponibles: {stockDije !== null ? stockDije : "Cargando..."}
            </p>
            <hr className="border-black border w-1/3 mt-4" />
          </div>

          <button onClick={next}>Iniciar</button>

          <p className="NeueHassRoman text-black lg:text-xs xs:text-base px-8 text-center lg:w-[65%] xs:w-full">
            Este collar de finas terminaciones enmarcado en un contenedor de
            cuero y un estético dije que llevará impresa su foto, será el
            símbolo ideal para que todo el mundo reconozca a tu Amigo del Alma.
          </p>
        </>
      ) : (
        <>
          <p className="NeueHassRoman text-black lg:text-base xs:text-base px-8 text-center lg:w-[65%] xs:w-full">
            Las existencias de nuestro collar Amigos del Alma se han agotado.
            Gracias por querer sumarte a este homenaje a esos amigos que lo
            entregan todo.
          </p>
        </>
      )}
    </div>
  );
};
