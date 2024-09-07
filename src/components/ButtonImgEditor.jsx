import React from "react";
import { Arrows } from "./Arrows";

export const ButtonImgEditor = ({
  rotate,
  handleclick,
  handleOnMouseDown,
  HandleOnMouseUp,
  handleOnMouseLeave,
  position,
}) => {
  return (
    <div className={`${position}`}>
      <span
        className={`relative cursor-pointer inline-block group w-16 h-16    rounded-full border ${rotate}`}
        onClick={handleclick}
        onMouseDown={handleOnMouseDown}
        onMouseUp={HandleOnMouseUp}
        onMouseLeave={handleOnMouseLeave}
      >
        <span className="inline-block transition-all duration-500 bg-white border border-white hover:border-black group-hover:bg-transparent shadowbox w-8 h-8 absolute p-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
          <Arrows color={"stroke-black group-hover:stroke-black"} />
        </span>
      </span>
    </div>
  );
};
