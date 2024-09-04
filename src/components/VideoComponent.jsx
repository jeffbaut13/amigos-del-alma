import React, { useRef, useState } from "react";

export const VideoComponent = ({ videoCss, urlVideo }) => {
  const videoRef = useRef(null);
  const [videoPlay, setVideoPlay] = useState(true);

  const handlePlay = () => {
    if (videoPlay) {
      videoRef.current.play();
      setVideoPlay(false);
    }
  };

  return (
    <div className={`${videoCss} relative`}>
      {videoPlay && (
        <figure
          onClick={handlePlay}
          className="cursor-pointer z-10 w-10 h-10 inline-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img src={"/iconos/playVideos.svg"} alt="" />
        </figure>
      )}
      <video
        ref={videoRef}
        onPause={() => setVideoPlay(true)}
        className="video w-full h-full object-cover z-10 rounded-md"
        controls={videoPlay ? false : true}
      >
        <source src={urlVideo} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  );
};
