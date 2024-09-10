import React, { useRef, useState } from "react";
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

  // Función para manejar el scroll con el evento wheel
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
