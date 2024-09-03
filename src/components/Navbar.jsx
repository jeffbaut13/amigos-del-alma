import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Si estás usando react-router-dom

export const Navbar = () => {
  const [showLogo, setShowLogo] = useState(true);
  const location = useLocation(); // Hook para obtener la ubicación actual

  useEffect(() => {
    // Verifica si la URL contiene alguno de los slugs
    const currentPath = location.pathname;
    if (currentPath.includes("/comprar-dije")) {
      setShowLogo(false); // Oculta el logo si la URL coincide
    } else {
      setShowLogo(true); // Muestra el logo en cualquier otro caso
    }
  }, [location]);

  return (
    <div className="fixed top-0 left-0 z-[200] flex justify-between items-center px-8 mt-6 w-full h-6">
      <figure className="h-full inline-block">
        <svg
          id="uuid-acb04939-5dee-4d33-b95d-d44bd88ca0ef"
          data-name="Capa 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.83 20.97"
          className={` ${showLogo ? "fill-[--second]" : "fill-[--primary]"}`}
        >
          <g id="uuid-4aff4409-4332-48c0-a892-37a81e1d19e5" data-name="Capa 1">
            <g>
              <path
                d="m13.13,2.97c.82,0,1.49-.67,1.49-1.49s-.67-1.49-1.49-1.49-1.49.67-1.49,1.49.67,1.49,1.49,1.49"
                style={{ strokeWidth: "0px" }}
              />
              <path
                d="m12.6,11.73c-.05-.04-.11-.08-.17-.11h0,0s-.04-.02-.06-.03l-.85-.48-3.5-2.02h0s-.01,0-.01,0l-5.49,9.51-.25.43s-.06.1-.09.16h0s0,0,0,0c0,.02-.02.03-.02.05h0s0,0,0,0c-.07.16-.1.33-.1.51,0,.68.51,1.22,1.14,1.22.37,0,.7-.19.91-.49l.32-.54,1.46-2.52,5.98-1.6c.07-.02.14-.03.21-.06l.06-.02h0c.82-.31,1.42-1.15,1.42-2.14,0-.44-.12-.84-.32-1.19-.16-.27-.36-.5-.61-.68m-3.21,2.35l-1.91.51,1.37-2.37.7.4,1.67.96-1.82.49Z"
                style={{ strokeWidth: "0px" }}
              />
              <path
                d="m2.63,10.74l.18.52.52-.09.14-.02,2.51-.43-1.07-.63,2.06-3.56,2.9-.61h0c.47-.13.82-.58.82-1.13,0-.64-.48-1.15-1.07-1.15-.09,0-.18.01-.27.04l-3.86.82h0s-2.57,4.44-2.57,4.44l-1.18-.69.85,2.38.05.13Z"
                style={{ strokeWidth: "0px" }}
              />
              <polygon
                points="1.61 8.29 0 11.05 2.45 10.63 1.61 8.29"
                style={{ strokeWidth: "0px" }}
              />
              <polygon
                points="4.36 13.64 5.99 10.86 3.52 11.28 4.36 13.64"
                style={{ strokeWidth: "0px" }}
              />
              <polygon
                points="3.38 11.3 2.86 11.39 2.73 11.41 2.68 11.28 2.49 10.76 0 11.18 4.22 13.66 3.38 11.3"
                style={{ strokeWidth: "0px" }}
              />
              <path
                d="m16.74,3.38c-.41,0-.76.22-.95.55-.03.06-.06.12-.08.18h0s-.11.24-.11.24l-.79,1.77s0,0,0,0h-2.34s0,0,0,0l-1.17,2.11s0,0,0,0h4.94s0,0,0,0h0s0-.02,0-.02c0,0,0,0,0,0l1.25-2.79.28-.64s0,0,0,0c.03-.1.05-.21.05-.32,0-.6-.49-1.08-1.09-1.08"
                style={{ strokeWidth: "0px" }}
              />
            </g>
          </g>
        </svg>
      </figure>
      {/* <div className="">
        {showLogo && (
          <img className="" src="/iconos/textoLogo.svg" alt="Textologo" />
        )}
      </div> */}

      <div className="burger w-6 py-1 h-full flex flex-col justify-between">
        <div className="line bg-[--colorYellow]" />
        <div className="line bg-[--colorYellow]" />
        <div className="line bg-[--colorYellow]" />
      </div>
    </div>
  );
};
