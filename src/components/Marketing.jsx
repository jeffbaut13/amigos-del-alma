import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EdicionDije } from "./EdicionDije";

export const Marketing = () => {
  const [abrirDije, setabrirDije] = useState(null);

  const dijeCanvaRef = useRef(null);

  const handleVideoEnd = () => {
    setabrirDije(true);

    //navigate("/comprar-dije");
  };

  useEffect(() => {
    const easeAnim = "power1.inOut";
    const time = 0.3;
    const tl = gsap.timeline();
    if (abrirDije) {
      tl.fromTo(
        dijeCanvaRef.current,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          ease: easeAnim,
          duration: 0.5,
        }
      );

      tl.fromTo(
        ".textoMarket",
        {
          width: "25%",
        },
        {
          width: "0%",
          ease: easeAnim,
          duration: time,
        }
      );
      tl.fromTo(
        ".btnMarket",
        {
          width: "50%",
        },
        {
          width: "0%",
          ease: easeAnim,
          duration: time,
        },
        "<"
      );
      tl.fromTo(
        ".dijeMarket",
        {
          width: "25%",
        },
        {
          width: "100%",
          ease: easeAnim,
          duration: time,
        }
      );
      tl.fromTo(
        ".cardDije",
        {
          width: "0%",
        },
        {
          width: "50%",
          ease: easeAnim,
          duration: time,
        }
      );

      tl.fromTo(
        ".dijeCanva",
        { width: "100%", height: "100%" },
        {
          width: "50%",
          height: "100%",
          ease: easeAnim,
          duration: time,
        },
        "<"
      );
      tl.to(
        dijeCanvaRef.current,

        {
          opacity: 1,
          ease: easeAnim,
          duration: time,
        },
        ">+=0.5"
      );
      tl.fromTo(
        ".cardDije",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: easeAnim,
          duration: time,
        },
        "<+=0.3"
      );
    } else if (abrirDije == false) {
      tl.to(
        dijeCanvaRef.current,

        {
          opacity: 0,
          ease: easeAnim,
          duration: time,
        }
      );

      tl.to(".dijeCanva", { width: "100%", height: "100%" });
      tl.to(
        ".cardDije",
        {
          width: "0%",
        },
        "<"
      );

      tl.to(".dijeMarket", {
        width: "25%",
      });

      tl.to(".btnMarket", {
        width: "50%",
      });
      tl.to(
        ".textoMarket",
        {
          width: "25%",
        },
        "<"
      );
      tl.to(dijeCanvaRef.current, {
        opacity: 1,
      });
    }
  }, [abrirDije]);

  return (
    <div
      id="comprar"
      style={{
        backgroundImage: "url(/imagenes/tono.webp)",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="section relative flex items-center justify-center"
    >
      {/* <div className="absolute top-0 left-0 z-0 w-full h-full bg-video" /> */}
      <div className="z-10 relative w-4/5 h-full flex items-center justify-center">
        <div className="p-2 flex relative  justify-between rounded-xl border w-full h-4/6 border-dashed border-[#E1C5B550]">
          <div className="textoMarket whitespace-nowrap overflow-hidden w-1/4 flex flex-col rounded-xl border border-[#E1C5B550] items-center justify-center text-xs text-[--second]">
            <h2 className="text-center text-2xl ">
              Ahora tú <br />
              y tu amigo del alma
              <br />
              también podrán <br />
              tener un símbolo <br />
              que selle su amistad <br />
              incondicional.,
            </h2>
          </div>
          <div className="btnMarket  whitespace-nowrap overflow-hidden w-1/2 flex items-center justify-center">
            <button onClick={handleVideoEnd} className="btn-home text-base">
              Personaliza el tuyo aquí
            </button>
          </div>
          <div className="dijeMarket overflow-hidden w-1/4 bg-[--bg-clar] rounded-xl flex items-center justify-center">
            <EdicionDije
              abrirDije={abrirDije}
              setabrirDije={setabrirDije}
              dijeCanvaRef={dijeCanvaRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
