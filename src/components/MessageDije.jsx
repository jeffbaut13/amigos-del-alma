import gsap from "gsap";
import Lottie from "lottie-react";
import React, { useEffect, useRef } from "react";
import icono from "../lotties/iconoPosition.json";

export const MessageDije = () => {
  const lottieIcon = useRef(null);
  useEffect(() => {
    lottieIcon.current.setSpeed(0.7);
  }, [lottieIcon]);

  return (
    <div className="w-48 flex flex-col items-center justify-center">
      <span className="w-10 h-10 inline-block">
        <Lottie
          lottieRef={lottieIcon}
          animationData={icono}
          className="w-full h-full"
        />
      </span>
      <p className="text-black text-center text-xs">
        Ubica tu foto como quieres que se vea en el dije.
      </p>
    </div>
  );
};
