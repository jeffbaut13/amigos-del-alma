import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Si estás usando react-router-dom
import { Burger } from "./Burger";
import { Prospero } from "./Prospero";
import { LinkRouter } from "./LinkRouter";
import gsap from "gsap";

export const Navbar = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [active, setActive] = useState(false);
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

  const handleClick = () => {
    setActive((prevActive) => !prevActive);
  };
  useEffect(() => {
    if (active) {
      gsap.to(".menuLink", {
        opacity: 1,
        display: "flex",
        paddingTop: "3rem",
        ease: "power1.inOut",
        duration: 0.5,
      });
      /* gsap.to(".cerrarMenu", {
        display: "block",
      }); */
    } else {
      gsap.to(".menuLink", {
        opacity: 0,
        display: "none",
        paddingTop: "0rem",
        ease: "power1.inOut",
        duration: 0.5,
      });
      /*  gsap.to(".cerrarMenu", {
        display: "none",
      }); */
    }
  }, [active]);

  return (
    <div className="fixed top-0 left-0 z-[200] flex justify-start items-center px-8 mt-6 w-full h-6">
      <Prospero showLogo={showLogo} />

      <Burger handleClick={handleClick} showLogo={showLogo} active={active} />
      <LinkRouter setActive={setActive} showLogo={showLogo} />
    </div>
  );
};
