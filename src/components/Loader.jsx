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
          {first ? (
            <>
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
            </>
          ) : (
            <span className="w-12 h-12 inline-block" role="status">
              <svg
                aria-hidden="true"
                class="animate-spin dark:text-gray-600 fill-[--second]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loader;
