import React, { useEffect, useState } from "react";
import Dije from "../store";

export const Gracias = () => {
  const [first, setfirst] = useState(true);
  useEffect(() => {
    if (first) {
      Dije.readyVideo = true;
    }
  }, [first]);

  return <div className="text-white">Gracias</div>;
};
