import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export const Scroll = () => {
  useEffect(() => {
    gsap.to(".mouse", {
      rotate: "3deg",
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.to(".wheel", {
      translateY: "3px",
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.to(".scroll .one", {
      opacity: "1",

      repeat: -1,
      duration: 1,
      stagger: 0.5,
      ease: "power1.inOut",
    });
    gsap.to(".scroll .two", {
      opacity: "1",

      repeat: -1,
      duration: 1,
      stagger: 0.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <figure className="scroll fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] w-14 h-14 inline-block">
      <svg
        id="uuid-44a389f2-6148-4272-89d3-8b5380b3cbbc"
        data-name="Capa 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 23.39 73.03"
        className="fill-[#fff5ba]"
      >
        <g id="uuid-42bb6d8b-0d4b-4e14-9424-b38409275c35" data-name="Capa 1">
          <g>
            <g className="mouse">
              <path
                d="m19.96,20.78c-2.21-2.21-5.15-3.42-8.27-3.42s-6.06,1.22-8.27,3.42c-2.21,2.21-3.42,5.15-3.42,8.27v15.2c0,3.12,1.22,6.06,3.42,8.27,2.21,2.21,5.15,3.42,8.27,3.42s6.06-1.22,8.27-3.42c2.21-2.21,3.42-5.15,3.42-8.27v-15.2c0-3.12-1.22-6.06-3.42-8.27Zm1.83,23.47c0,5.57-4.53,10.1-10.1,10.1S1.6,49.82,1.6,44.25v-15.2c0-5.57,4.53-10.1,10.1-10.1h0c5.57,0,10.1,4.53,10.1,10.1v15.2Z"
                style={{ strokeWidth: "0px" }}
              />
              <rect
                className="wheel"
                x="10.9"
                y="24.52"
                width="1.6"
                height="6.31"
                style={{ strokeWidth: "0px" }}
              />
            </g>
            <polygon
              className="one opacity-0"
              points="11.69 65.59 7.16 61.06 6.03 62.18 11.69 67.84 17.35 62.18 16.23 61.06 11.69 65.59"
              style={{ strokeWidth: "0px" }}
            />
            <polygon
              className="two opacity-0"
              points="11.69 7.72 16.23 12.25 17.35 11.12 11.69 5.46 6.03 11.12 7.16 12.25 11.69 7.72"
              style={{ strokeWidth: "0px" }}
            />
            <polygon
              className="one opacity-0"
              points="11.69 1.81 15.34 5.46 16.25 4.55 11.69 0 7.14 4.55 8.05 5.46 11.69 1.81"
              style={{ strokeWidth: "0px" }}
            />
            <polygon
              className="two opacity-0"
              points="11.69 71.22 8.05 67.57 7.14 68.48 11.69 73.03 16.25 68.48 15.34 67.57 11.69 71.22"
              style={{ strokeWidth: "0px" }}
            />
          </g>
        </g>
      </svg>
    </figure>
  );
};
