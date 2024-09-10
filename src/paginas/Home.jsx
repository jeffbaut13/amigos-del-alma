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

  const [isMobile, setIsMobile] = useState(false);
  const [scrollDelta, setScrollDelta] = useState(0); // Mantiene la cantidad acumulada de scroll

  // Umbral de scroll - Ajusta este número para controlar la cantidad de scroll necesaria
  const scrollThreshold = 350;

  // Detectar si el usuario está en un dispositivo móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile(); // Verificar inicialmente
    window.addEventListener("resize", checkIsMobile); // Actualizar al redimensionar

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Función para manejar el scroll con el evento wheel (solo en escritorio)
  const handleWheel = (e) => {
    if (!isMobile) {
      // Acumular el delta de scroll
      setScrollDelta((prevDelta) => prevDelta + e.deltaY);

      // Solo cambiar de sección si el desplazamiento es significativo
      if (scrollDelta > scrollThreshold) {
        // Scroll hacia abajo
        if (currentSection < sections.length - 1) {
          setCurrentSection((prev) => prev + 1);
        }
        setScrollDelta(0); // Resetear el acumulado de scroll
      } else if (scrollDelta < -scrollThreshold) {
        // Scroll hacia arriba
        if (currentSection > 0) {
          setCurrentSection((prev) => prev - 1);
        }
        setScrollDelta(0); // Resetear el acumulado de scroll
      }

      // Hacer scroll al componente correspondiente
      sections[currentSection]?.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div onWheel={handleWheel} style={{ overflowY: isMobile ? "scroll" : "hidden", height: "100vh" }}>
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
