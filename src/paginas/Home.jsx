import React, { useRef, useState, useEffect } from "react";
import Comercial from "../components/Comercial";
import { Marketing } from "../components/Marketing";
import { MakingOfOne } from "../components/MakingOfOne";
import { Footer } from "../components/Footer";

export const Home = () => {
  // Crear referencias para cada componente
  const comercialRef = useRef(null);
  const marketingRef = useRef(null);
  const makingOfOneRef = useRef(null);
  const footerRef = useRef(null);

  const [currentSection, setCurrentSection] = useState(0); // Mantiene el índice de la sección actual
  const sections = [comercialRef, marketingRef, makingOfOneRef, footerRef];

  // Para manejar el deslizamiento táctil
  let touchStartY = 0;
  let touchEndY = 0;

  // Función para manejar el scroll con el evento wheel (escritorio)
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      // Scroll hacia abajo
      if (currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      }
    } else {
      // Scroll hacia arriba
      if (currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }
    }

    // Hacer scroll al componente correspondiente
    sections[currentSection]?.current.scrollIntoView({ behavior: "smooth" });
  };

  // Funciones para manejar el swipe en dispositivos móviles
  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY; // Guardar el punto inicial del toque
  };

  const handleTouchMove = (e) => {
    touchEndY = e.touches[0].clientY; // Guardar el punto final del toque
  };

  const handleTouchEnd = () => {
    if (touchStartY - touchEndY > 50) {
      // Swipe hacia arriba
      if (currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      }
    } else if (touchEndY - touchStartY > 50) {
      // Swipe hacia abajo
      if (currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }
    }

    // Hacer scroll al componente correspondiente
    sections[currentSection]?.current.scrollIntoView({ behavior: "smooth" });
  };

  // Agregar event listeners para gestos táctiles en móviles
  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSection]);

  return (
    <div onWheel={handleWheel} style={{ overflow: "hidden", height: "100vh" }}>
      <div ref={comercialRef} style={{ height: "100vh" }}>
        <Comercial />
      </div>
      <div ref={marketingRef} style={{ height: "100vh" }}>
        <Marketing />
      </div>
      <div ref={makingOfOneRef} style={{ height: "100vh" }}>
        <MakingOfOne />
      </div>
      <div ref={footerRef} style={{ height: "100vh" }}>
        <Footer />
      </div>
    </div>
  );
};
