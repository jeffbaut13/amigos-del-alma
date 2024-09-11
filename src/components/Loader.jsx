import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import Piano from "../lotties/loader-amigosdelalma.json";
import PianoTwo from "../lotties/loader-amigosdelalmaTwo.json";
import Dije from "../store";
import { useSnapshot } from "valtio";
import gsap from "gsap";

const Loader = ({ setLoader }) => {
  const lottieRef = useRef(null);
  const [percentage, setPercentage] = useState(0);
  const [first, setfirst] = useState(null);
  const [loading, setloading] = useState(true);

  const snap = useSnapshot(Dije);

  useEffect(() => {
    setfirst(snap.readyVideo);

    if (first) {
      const interval = setInterval(() => {
        setPercentage((oldPercentage) => {
          if (oldPercentage >= 100) {
            clearInterval(interval);
            return 100;
          } else if (oldPercentage >= 99) {
            setloading(false);
          }
          return oldPercentage + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [first, snap]);

  useEffect(() => {
    const tl = gsap.timeline();
    if (!loading) {
      tl.to(".loading", {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.5,
      });
      tl.to(".loadingBox", {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.5,
      });
      tl.add(() => setLoader(false));
    }
  }, [loading]);

  useEffect(() => {
    if (lottieRef.current) {
      const animation = lottieRef.current;

      // Usamos el porcentaje para avanzar o detener la animación
      const totalFrames = animation.getDuration(true); // Obtiene la duración en frames
      const frame = (percentage / 100) * totalFrames; // Calcula el frame correspondiente al porcentaje
      animation.goToAndStop(frame, true);
    }
  }, [percentage]);

  useEffect(() => {
    gsap.to(".loading", {
      opacity: 1,
      ease: "power1.inOut",
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <div className="bg-black flex justify-center fixed top-0 left-0 loadingBox items-center flex-col w-full h-full z-[205]">
      <div className="mask1 w-96 h-96 inline-block">
        <div className="loading opacity-0 w-full h-full flex flex-col items-center justify-center">
          <Lottie
            lottieRef={lottieRef}
            animationData={Piano}
            className="w-full h-24"
          />
          {/*  <Lottie
            lottieRef={lottieRef}
            animationData={PianoTwo}
            className="w-full h-full"
          /> */}
          <span className="-translate-y-4 text-[--second] NeueHaas-Thin">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
