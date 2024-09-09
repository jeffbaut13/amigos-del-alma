import React, { useEffect, useRef, useState } from "react";
import { handleGsasp, resetAnimation } from "../helpers/VideoCards";
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
    <div className="relative border border-[--borderOpacity] rounded-xl w-full h-full videoCajas flex justify-center items-center overflow-hidden">
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
          className="cursor-pointer z-20 w-10 h-10 inline-block absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
