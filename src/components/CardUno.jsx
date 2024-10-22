import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const CardUno = ({ next, setabrirDije, handleCompra }) => {
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
          Caja
          <br />
          Amigos del Alma.
        </h2>
        <span className="text-xs">Por: Inter Rapidísimo</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl leading-6">
          <span className="text-xl">
            <strong>Empaque X3 unidades desde:</strong>$30.137
          </span>
        </p>
        <p className="text-xs stock">
          {/* Disponibles: {stockDije !== null ? stockDije : "Cargando..."} */}
          Disponibles: 1500
        </p>
        <hr className="border-black border w-1/2 mt-1" />
      </div>
      <div className="btnAnchor text-center">
        <h3>Compra para:</h3>
        <div className="mt-2 btnAnchor flex justify-between gap-4">
          <Link
            className="xs:text-base lg:text-sm py-3 px-5 bg-black text-white NeueHaas-Medium rounded-full hover:text-white hover:bg-[--hoverBlack] transition-all duration-300"
            to={
              "https://www.alcarrito.com/paquete-de-3-cajas-de-carton-grande-de-40x40x40-cm-con-divertido-motivo-de-perro.html"
            }
            target="_blank"
          >
            Tu perrito
          </Link>
          <Link
            className="max-lg:text-base lg:text-sm py-3 px-5 bg-black text-white NeueHaas-Medium rounded-full hover:text-white hover:bg-[--hoverBlack] transition-all duration-300"
            to={
              "https://www.alcarrito.com/paquete-de-3-cajas-de-carton-grande-de-40x40x40-cm-con-divertido-motivo-de-gato.html"
            }
            target="_blank"
          >
            Tu michi grande
          </Link>
          <Link
            className="max-lg:text-base lg:text-sm py-3 px-5 bg-black text-white NeueHaas-Medium rounded-full hover:text-white hover:bg-[--hoverBlack] transition-all duration-300"
            to={
              "https://www.alcarrito.com/paquete-de-3-cajas-de-carton-pequena-de-30x30x30-cm-con-divertido-motivo-de-gato.html"
            }
            target="_blank"
          >
            Tu michi pequeño
          </Link>
        </div>
      </div>
      <p className="NeueHassRoman text-black lg:text-xs xs:text-base px-8 text-center lg:w-[70%] xs:w-full">
        Convertirnos nuestras cajas de envíos en una casa para tu amigo del
        alma. Es de fácil armado ya que viene con figuras precortadas y la
        podrás personalizar con colores o stickers para hacerla única.
      </p>
    </div>
  );
};
