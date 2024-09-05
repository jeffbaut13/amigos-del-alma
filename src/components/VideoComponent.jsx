import React, { useEffect, useRef, useState } from "react";
import { handleGsasp } from "../helpers/VideoCards";
import gsap from "gsap";

export const VideoComponent = ({
  reset,
  urlVideo,
  setTextActive,
  isActive,
  isPlaying,
  videoNameCss,
}) => {
  const videoRef = useRef(null);
  const [localIsPlaying, setLocalIsPlaying] = useState(false);

  const [playvideoNew, setPlayvideoNew] = useState(false);

  useEffect(() => {
    if (reset) {
      setPlayvideoNew(false);

      const resetAnimation = (activeBox) => {
        const tl = gsap.timeline();
        const time = 1;
        const easeEffect = "power4.inOut";

        tl.to(
          ".cajaTitulos",

          {
            bottom: "2rem",
            ease: easeEffect,
            opacity: 0,
            duration: time,
          }
        );
        tl.to(
          ".titulos",
          {
            transform: "translate3d(0vw, 0vw, 0px)",
            //opacity: 1,
            width: "60%",
            ease: easeEffect,
            duration: time,
          },
          "<"
        );
        tl.to(
          ".videos",
          {
            width: "40%",
            left: "0%",
            translateX: "0%",
            ease: easeEffect,
            duration: time,
          },
          "<"
        );
        gsap.to(
          ".videoCajas",
          {
            height: "100%",
            ease: easeEffect,
            //opacity: 0,
            duration: time,
          },
          "<"
        );

        if (activeBox === "secondVideo") {
          console.log(activeBox);
          tl.fromTo(
            ".secondVideo",
            {
              height: "100%",
              width: "100%",
            },
            {
              height: "50%",
              width: "50%",
              ease: easeEffect,
              duration: time,
            },
            "<"
          );

          gsap.to(".thirtVideo", {
            transform: "translate3d(0, 0vh, 0px)",
            ease: easeEffect,
            //opacity: 0,
            duration: time,
          });
          gsap.to(".firstVideo", {
            transform: "translate3d(0vw, 0vh, 0px) ",
            ease: easeEffect,
            //opacity: 0,
            duration: time,
          });
        }
        if (activeBox === "thirtVideo") {
          console.log(activeBox);
          tl.fromTo(
            ".thirtVideo",
            {
              height: "100%",
              left: "0%",
              width: "100%",
            },
            {
              height: "50%",
              left: "50%",
              width: "50%",
              ease: easeEffect,
              duration: time,
            },
            "<"
          );

          gsap.to(".secondVideo", {
            transform: "translate3d(0, 0vh, 0px)",
            ease: easeEffect,
            //opacity: 0,
            duration: time,
          });
          gsap.to(".firstVideo", {
            transform: "translate3d(0vw, 0vh, 0px) ",
            ease: easeEffect,
            //opacity: 0,
            duration: time,
          });
        }
        if (activeBox === "firstVideo") {
          tl.fromTo(
            ".firstVideo",
            {
              top: "0%",
              bottom: "50%",
              height: "100%",
            },
            {
              top: "50%",
              bottom: "0%",
              height: "50%",
              ease: easeEffect,
              duration: time,
            },
            "<"
          );
          gsap.to(".secondVideo", {
            transform: "translate3d(0vw, 0, 0px)",

            ease: easeEffect,
            //opacity: 0,
            duration: time,
          });
          gsap.to(".thirtVideo", {
            transform: "translate3d(0, 0vh, 0px)",
            ease: easeEffect,
            //opacity: 0,
            duration: time,
          });
        }
        tl.to(
          ".cajaTitulos",
          {
            position: "absolute",
          },
          "<-=2"
        );

        tl.to(`.titleCard`, {
          textAlign: "start",
          fontSize: "0.75rem",
          lineHeight: "1rem",
        });
        tl.to(`.${activeBox} br`, {
          display: "block",
        });
        tl.to(".contenidoCard ", {
          display: "none",
        });
      };

      resetAnimation(videoNameCss);
    }
  }, [reset]);

  useEffect(() => {
    if (isActive) {
      if (videoRef.current) {
        videoRef.current.play();
        setLocalIsPlaying(true);
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
        setLocalIsPlaying(false);
      }
    }
  }, [isActive]);

  useEffect(() => {
    if (!isPlaying && localIsPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
        setLocalIsPlaying(false);
      }
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (localIsPlaying) {
      videoRef.current.pause();
      setLocalIsPlaying(false);
      setTextActive(); // Marca este video como inactivo
    } else {
      videoRef.current.play();
      setLocalIsPlaying(true);
      setTextActive(); // Marca este video como activo
      setPlayvideoNew(true);
    }
  };

  return (
    <div className="relative border border-[--second] rounded-xl w-full h-full videoCajas flex justify-center items-center p-2">
      {!localIsPlaying && (
        <figure
          onClick={() => {
            if (!playvideoNew) {
              handleGsasp(videoNameCss, handlePlayPause);
            } else {
              videoRef.current.play();
              setLocalIsPlaying(true);
            }
          }}
          className="cursor-pointer z-20 w-10 h-10 inline-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img src={"/iconos/playVideos.svg"} alt="Play" />
        </figure>
      )}
      <video
        ref={videoRef}
        //onPause={() => {
        //setPlayvideoNew(true);
        //setLocalIsPlaying(false);
        //}}
        //onPlay={() => setLocalIsPlaying(true)}
        className="video w-full h-full object-cover z-10 rounded-md"
        controls={localIsPlaying}
      >
        <source src={urlVideo} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  );
};
