import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Si estás usando react-router-dom

export const Navbar = () => {
  const [showLogo, setShowLogo] = useState(true);
  const location = useLocation(); // Hook para obtener la ubicación actual

  useEffect(() => {
    // Verifica si la URL contiene alguno de los slugs
    const currentPath = location.pathname;
    if (
      currentPath.includes("/collage") ||
      currentPath.includes("/campana-amigos-del-alma")
    ) {
      setShowLogo(false); // Oculta el logo si la URL coincide
    } else {
      setShowLogo(true); // Muestra el logo en cualquier otro caso
    }
  }, [location]);

  return (
    <div className="fixed top-0 left-0 z-50 flex justify-between items-center px-8 mt-6 w-full h-6">
      <figure className="h-full inline-block">
        <img className="h-full" src="/prospero.svg" alt="Logo" />
      </figure>
      <div className="">
        {showLogo && (
          <img className="" src="/iconos/textoLogo.svg" alt="Textologo" />
        )}
      </div>

      <div className="burger w-6 py-1 h-full flex flex-col justify-between">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </div>
  );
};
