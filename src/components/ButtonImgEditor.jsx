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
        className={`relative cursor-pointer inline-block group lg:w-16 lg:h-16 xs:w-20 h-20    rounded-full border ${rotate}`}
        onClick={handleclick}
        onMouseDown={handleOnMouseDown}
        onMouseUp={HandleOnMouseUp}
        onMouseLeave={handleOnMouseLeave}
      >
        <span className="inline-block transition-all duration-500 bg-[#f6f4ea] group-hover:bg-[#dad5bf] shadowbox lg:w-8 lg:h-8 xs:w-10 xs:h-10 absolute p-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
          <Arrows color={"stroke-black group-hover:stroke-black"} />
        </span>
      </span>
    </div>
  );
};
