import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const ReactVideo = ({ VideoReady, play, url, setEnd, contenedorWidth }) => {
  const [ancho, setAncho] = useState(0);
  const video = useRef(null);

  useEffect(() => {
    if (video.current) {
      const contenedorWidth = video.current.offsetWidth;
      setAncho(contenedorWidth);
    }
  }, [video]);

  const calcularAltura = (aspectoHorizontal, aspectoVertical, ancho) => {
    return Math.round((ancho / aspectoHorizontal) * aspectoVertical);
  };

  const altura = calcularAltura(
    16,
    9,
    contenedorWidth ? contenedorWidth : ancho
  );

  return (
    <div
      ref={video}
      className="w-full h-full flex items-center justify-center bg-black rounded-3xl z-10"
    >
      <ReactPlayer
        onReady={VideoReady}
        playing={play ? true : false}
        url={url}
        //onEnded={setEnd ? setEnd : null}
        className="react-player overflow-hidden "
        width={contenedorWidth ? contenedorWidth : ancho}
        height={`${altura}px`}
        controls
      />
    </div>
  );
};

export default ReactVideo;
