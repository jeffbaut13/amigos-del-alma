import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const Prospero = ({ showLogo }) => {
  const svgRef = useRef(null);
  const secondSvgRef = useRef(null);
  const [showSecondSvg, setShowSecondSvg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition > viewportHeight / 2) {
        // Animamos el primer SVG para que se mueva 10rem
        gsap.to(svgRef.current, {
          x: "300%",
          duration: 0.5,
          opacity: 0,
          ease: "power3.out",
        });
        // Mostramos y animamos el segundo SVG
        setShowSecondSvg(true);
        gsap.to(secondSvgRef.current, {
          opacity: 1,
          x: "10%",
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        // Reseteamos la animación si el scroll vuelve a ser menor del 50%
        gsap.to(svgRef.current, {
          x: "-100%",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
        setShowSecondSvg(false);
        gsap.to(secondSvgRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <figure className="w-6 h-full inline-block absolute left-6  top-0 ">
        <svg
          className={"absolute w-6 fill-[--second]"}
          ref={svgRef}
          id="uuid-acb04939-5dee-4d33-b95d-d44bd88ca0ef"
          data-name="Capa 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.83 20.97"
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
      {showSecondSvg && (
        <figure className="w-auto h-6 inline-block absolute left-6 top-0">
          <svg
            ref={secondSvgRef}
            className="fill-[--second]"
            id="uuid-3c704194-1acb-4b69-8c42-3ac192f3ec5f"
            data-name="Capa_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 148.38 30.66"
          >
            <g
              id="uuid-a624c32c-09e8-4999-bc5f-d410d2d1f874"
              data-name="Capa_1"
            >
              <g>
                <path d="M32.55,19.04l4.35.03c1.73,0,3.1-.51,4.11-1.52.65-.63,1.21-1.46,1.7-2.49.27-.47.5-.89.69-1.26h-3.5c.03.06.06.11.07.18v.03c0,.26-.26.76-.77,1.49-.29.48-1.13.73-2.51.73h-2.57l1.33-2.43h-3.14l-4.54,8.13h3.15c.16-.18.7-1.14,1.63-2.89" />
                <path d="M34.18,10.45l-1.38,2.48h10.99c.14-.36.23-.65.22-.85-.01-.25-.06-.45-.13-.59-.38-.7-1.05-1-1.87-1h-.64l-7.15-.03h-.03Z" />
                <polygon points="44.59 21.91 49.16 13.8 45.97 13.8 41.43 21.93 44.57 21.93 44.59 21.91" />
                <polygon points="50.94 10.56 47.72 10.56 46.44 12.93 49.64 12.93 50.94 10.56" />
                <polygon points="63.97 21.91 68.54 13.8 65.35 13.8 60.81 21.93 63.95 21.93 63.97 21.91" />
                <polygon points="70.32 10.56 67.11 10.56 65.82 12.93 69.02 12.93 70.32 10.56" />
                <polygon points="82.67 21.91 87.24 13.8 84.05 13.8 79.51 21.93 82.65 21.93 82.67 21.91" />
                <polygon points="89.02 10.56 85.81 10.56 84.52 12.93 87.72 12.93 89.02 10.56" />
                <path d="M55.45,21.91c.51-.05.91-.12,1.2-.21,1.22-.38,2.18-1.06,2.87-2.04l2.71-4.88c.21-.36.39-.68.55-.98h-3.45s.03.07.03.11c0,.29-.49,1.15-1.37,2.85-.89,1.61-1.68,2.28-2.78,2.28h-3.28v-.03l2.88-5.2h-3.21l-4.49,8.13h3.16l5.16-.02Z" />
                <path d="M63.46,12.08c0-.24-.04-.45-.13-.62-.36-.67-1.14-1-2.34-1h-7.45l-.03.03-1.35,2.44h11.09c.14-.36.22-.64.22-.85" />
                <path d="M75.53,21.6c1.09-.35,2.04-1.1,2.87-2.25.91-1.45,1.37-2.38,1.37-2.8v-.24l-.07-.31c-.27-.58-.94-.87-2.01-.87h-4.68c.14-.22.32-.79,1.07-1.33h-3.62c-.68,1.07-1.17,2.13-.92,2.78.21.53,1.02.83,2.61.83h4.18c-.05.26-.31.68-.9,1.11-.51.37-1,.48-1.4.48h-5.6c-.08,0-.45,0-.84,0l-1.65,2.93h8.11c.42-.03.91-.14,1.48-.33" />
                <path d="M83.33,10.49h-7.6c-1.96,0-3.46.73-4.51,2.18-.06.09-.12.17-.18.26h10.95l1.34-2.44Z" />
                <path d="M108.22,12.01c0-.1-.05-.31-.07-.42-.14-.69-.99-1.04-2.51-1.04h-14.07l-1.32,2.37h17.75c.15-.38.24-.69.22-.92" />
                <path d="M107.53,13.8h-3.33s.04.07.04.11v.14c-.15.36-1.73,3.04-4.39,7.88h3.15l4.54-8.13Z" />
                <polygon points="92.95 13.8 89.77 13.8 85.26 21.93 88.37 21.93 92.95 13.8" />
                <polygon points="100.34 13.8 97.17 13.8 92.66 21.93 95.76 21.93 100.34 13.8" />
                <path d="M117.75,13.95v.1c0,.31-.42,1.29-1.15,2.63-.7,1.47-1.73,2.35-2.87,2.35h-2.1c-.58,0-.87-.2-.87-.59v-.07c0-.33.67-1.44,1.19-2.4.36-.66,1.21-1.77,1.83-2.18h-3.71c-.44.75-1.05,1.82-1.81,3.23-1.05,1.71-1.57,2.86-1.57,3.43,0,.15.03.33.1.55.28.55.81.86,1.6.92h5.08c.93-.04,1.66-.19,2.18-.44.66-.25,1.38-.81,2.14-1.66.31-.42,1.2-2.01,2.67-4.78.28-.47.51-.88.7-1.26h-3.46s.03.09.03.15" />
                <path d="M121.77,11.77c-.25-.85-.95-1.28-2.11-1.28h-4.65c-1.55,0-2.96.74-4.25,2.22-.05.06-.1.14-.16.23h10.95c.15-.39.23-.7.23-.92l-.03-.24Z" />
                <path d="M17.33,21.91c.96-1.8,1.48-2.75,1.57-2.84h4.75l-1.5,2.84h3.08c.09-.1,1.39-2.41,3.88-6.92.26-.44.48-.83.66-1.19h-3.4s.03.09.03.15v.14c0,.16-.4.89-1.2,2.18h-4.75c0-.06,1.07-2.28,1.8-2.47h-3.58l-3.16,5.66c-.41.75-.86,1.57-1.35,2.45v.02h3.15l.02-.02Z" />
                <path d="M30.37,12.11c0-.13-.03-.39-.07-.52-.22-.78-1.11-1.11-2.31-1.11l-4.78.03c-.7.05-1.37.26-2.01.62-.51.21-1.19.8-2.04,1.77,0,0,0,.01-.01.02h11c.13-.34.21-.55.21-.81" />
                <path d="M4.97,18.94h4.92l-1.63,2.99h3.34l1.62-2.91s.02-.05.03-.07c.25-.51.27-.56.25-.78-.04-.47-2.66-.66-3.13-.66l.03-.15s2.65,0,3.17-.14c.52-.13.97-.63,1.39-1.34l1.1-2.02h-3.44s-.16.49-.46.96c-.39.62-1.05,1.06-2.41,1.11-.12,0-.24.01-.36.01h-2.78c0-.07.38-.78,1.13-2.09.06-.1.12-.2.18-.32h-3.26L0,21.93h3.26l1.71-2.99Z" />
                <path d="M16.61,12.94l.02-.03c.23-.53.35-.93.35-1.19l-.04-.25c-.08-.32-.24-.59-.47-.8-.44-.41-1.13-.62-2.1-.62h-7.75l-1.61,2.89h11.6Z" />
                <path d="M16.62,12.94s0-.02.01-.03l-.02.03h0Z" />
                <path d="M13.61,8.41h1.63c.15-.24,2.31-4.19,2.31-4.19h-1.73c0,.07-.03.16-.07.28l-2.15,3.9Z" />
                <path d="M22.65,3.76l.68-1.21h-4s-.66,1.21-.66,1.21c.59,0,1.24,0,1.85,0,1.16,0,2.14,0,2.14,0" />
                <path d="M26.84,8.41l.83-1.46h-4.14s.44-.83.44-.83h2.3l.67-1.19h-2.28c.13-.26.29-.54.39-.7h-1.64c-.53.96-1.33,2.43-2.29,4.19h5.73Z" />
                <path d="M29.5,8.38l.85-1.49h2.43l-.82,1.51,1.66-.02.81-1.45s.01-.02.02-.03c.12-.25.13-.27.13-.39-.02-.23-1.32-.33-1.55-.33v-.07s1.33,0,1.58-.07c.26-.07.48-.31.69-.66l.6-1.15h-1.7s-.14.4-.29.63c-.19.3-.52.52-1.19.55-.06,0-.12,0-.18,0h-1.37s.19-.38.56-1.03c.03-.05.06-.1.09-.16h-1.61l-2.32,4.15h1.61Z" />
                <path d="M36.18,3.42l-.02-.13c-.04-.16-.12-.29-.23-.39-.22-.2-.56-.31-1.04-.31h-3.83l-.66,1.18h5.69c.05-.15.08-.26.08-.35" />
                <polygon points="9.19 8.39 11.54 4.22 9.9 4.22 7.56 8.41 9.17 8.41 9.19 8.39" />
                <polygon points="12.45 2.55 10.8 2.55 10.14 3.77 11.79 3.77 12.45 2.55" />
                <path d="M17.68,3.77h0c.1-.24.15-.41.15-.51v-.11c-.05-.14-.12-.25-.21-.34-.18-.17-.48-.26-.88-.26h-3.27l-.68,1.22h4.89Z" />
                <polygon points="19.59 4.22 17.25 8.41 18.86 8.41 18.88 8.39 21.23 4.22 19.59 4.22" />
                <polygon points="11.87 8.41 11.88 8.39 14.23 4.22 12.59 4.22 10.25 8.41 11.87 8.41" />
                <path d="M30.1,2.55h-5.79s-.25.43-.68,1.22h5.79l.68-1.22Z" />
                <path d="M141.51,4.35c1.2,0,2.17-.97,2.17-2.17s-.97-2.17-2.17-2.17-2.17.97-2.17,2.17.97,2.17,2.17,2.17" />
                <path d="M140.73,17.15c-.08-.06-.16-.11-.25-.16h0,0s-.06-.04-.09-.05l-1.24-.7-5.12-2.96h0s-.02,0-.02,0l-8.02,13.9-.37.63c-.05.07-.09.15-.13.23h0s0,0,0,0c-.01.02-.02.05-.03.07h0s0,.01,0,.01c-.1.23-.15.48-.15.75,0,.99.74,1.79,1.66,1.79.54,0,1.03-.28,1.33-.72l.46-.79,2.13-3.69,8.75-2.34c.1-.02.21-.05.31-.08l.09-.03h0c1.21-.45,2.07-1.68,2.07-3.13,0-.64-.17-1.24-.46-1.74-.23-.39-.53-.73-.89-.99M136.03,20.58l-2.79.75,2-3.46,1.02.59,2.44,1.41-2.67.71Z" />
                <path d="M126.16,15.7l.27.76.75-.13.2-.03,3.67-.62-1.57-.92,3.01-5.21,4.25-.9h0c.69-.18,1.2-.85,1.2-1.65,0-.93-.7-1.69-1.57-1.69-.14,0-.27.02-.39.05l-5.64,1.19h-.01s-3.75,6.49-3.75,6.49l-1.73-1.01,1.24,3.47.07.19Z" />
                <polygon points="124.67 12.12 122.32 16.15 125.89 15.54 124.67 12.12" />
                <polygon points="128.69 19.94 131.07 15.87 127.46 16.48 128.69 19.94" />
                <polygon points="127.26 16.52 126.5 16.65 126.3 16.68 126.23 16.49 125.96 15.73 122.32 16.35 128.49 19.97 127.26 16.52" />
                <path d="M146.79,4.94c-.59,0-1.11.33-1.38.81-.05.08-.09.17-.12.26h0s-.16.35-.16.35l-1.16,2.59s0,0,0,0h-3.42s0,0,0,0l-1.71,3.08s0,0,0,0h7.22s0,0,0,0v-.02s0,0,0,0c0,0,0,0,0,0l1.82-4.09.41-.93s0,0,0,0c.04-.15.07-.3.07-.46,0-.88-.71-1.59-1.59-1.59" />
              </g>
            </g>
          </svg>
        </figure>
      )}
    </div>
  );
};
