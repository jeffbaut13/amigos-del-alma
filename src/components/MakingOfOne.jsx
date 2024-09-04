import React from "react";
import { VideoComponent } from "./VideoComponent";

const videos = [
  { videoCss: "firstVideo w-[60%]", urlVideo: "/imagenes/videoplaybackk.mp4" },
  {
    videoCss: "secondVideo w-[18%] opacity-30",
    urlVideo: "/imagenes/videoplaybackk.mp4",
  },
  {
    videoCss: "thirtVideo w-[18%] opacity-30",
    urlVideo: "/imagenes/videoplaybackk.mp4",
  },
];

export const MakingOfOne = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/imagenes/bg-videos-section.webp)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="section relative AddingtonCF-light flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 bg-black bg-opacity-80 w-full h-full" />
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-video" />
      <div className="z-10 relative w-full h-full flex flex-col justify-evenly">
        <h2 className="text-center moires  ">
          detrás de la emotiva producción <br />
          amigos del alma, hay historias de vida <br />
          que nos inspiraron y que deberías conocer.
        </h2>
        <div className="videos w-5/6 flex justify-between">
          {videos.map((video, index) => (
            <VideoComponent
              key={index}
              videoCss={video.videoCss}
              urlVideo={video.urlVideo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
