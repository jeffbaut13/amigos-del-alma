import React, { useEffect, useRef, useState } from "react";
import { handleGsasp, resetAnimation } from "../helpers/VideoCards";
import gsap from "gsap";
import ReactPlayer from "react-player";

export const VideoComponent = ({
  reset,
  urlVideo,
  setTextActive,
  isActive,
  isPlaying,
  videoNameCss,
  poster,
}) => {
  const videoRef = useRef(null);
  const [localIsPlaying, setLocalIsPlaying] = useState(false);
  const [playvideoNew, setPlayvideoNew] = useState(false);

  useEffect(() => {
    if (reset) {
      setPlayvideoNew(false);
      resetAnimation(videoNameCss);
    }
  }, [reset]);

  useEffect(() => {
    if (isActive) {
      setLocalIsPlaying(true);
    } else {
      setLocalIsPlaying(false);
    }
  }, [isActive]);

  useEffect(() => {
    if (!isPlaying && localIsPlaying) {
      setLocalIsPlaying(false);
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (localIsPlaying) {
      setLocalIsPlaying(false);
      setTextActive(); // Marca este video como inactivo
    } else {
      setLocalIsPlaying(true);
      setTextActive(); // Marca este video como activo
      setPlayvideoNew(true);
    }
  };

  return (
    <div className="relative border border-[--borderOpacity] rounded-xl w-full h-full videoCajas flex justify-center items-center overflow-hidden">
      {!localIsPlaying && (
        <figure
          onClick={() => {
            if (!playvideoNew) {
              handleGsasp(videoNameCss, handlePlayPause);
            } else {
              setLocalIsPlaying(true);
            }
          }}
          className="cursor-pointer z-20 w-10 h-10 inline-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img src={"/iconos/playVideos.svg"} alt="Play" />
        </figure>
      )}

      <figure
        className={`${
          !localIsPlaying
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-opacity duration-1000 ease-in-out z-[19] absolute top-0 left-0 h-full w-full inline-block`}
      >
        <img className="object-cover" src={poster} alt="" />
      </figure>

      <ReactPlayer
        className="video w-full h-full object-cover z-10 rounded-md"
        controls
        playing={localIsPlaying ? true : false} // Controla el estado de reproducción
        ref={videoRef}
        url={urlVideo}
        width="100%"
        height="100%"
      />
    </div>
  );
};
