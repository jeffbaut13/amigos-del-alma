import React, { useRef, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import Loader from "./components/Loader";

export const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const [loader, setLoader] = useState(true);
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    // Define the function to check if scrolled past 100vh
    const checkScroll = () => {
      if (container) {
        const scrollTop = container.scrollTop;
        const viewportHeight = window.innerHeight;

        if (scrollTop >= viewportHeight) {
          setLogo(true);
        } else {
          setLogo(false);
        }
      }
    };

    // Add event listener for scroll
    container.addEventListener("scroll", checkScroll);

    // Cleanup event listener
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <>
      <Navbar logo={logo} />
      {loader && <Loader setLoader={setLoader} />}
      <div ref={containerRef} className="w-full h-full snap">
        {children}
      </div>
    </>
  );
};
