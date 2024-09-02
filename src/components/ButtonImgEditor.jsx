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
    <div className={`absolute ${position}`}>
      <span
        className={`relative cursor-pointer inline-block group w-10 h-10 bg-transparent hover:bg-[--second] rounded-full border border-[--borderOpacity] ${rotate}`}
        onClick={handleclick}
        onMouseDown={handleOnMouseDown}
        onMouseUp={HandleOnMouseUp}
        onMouseLeave={handleOnMouseLeave}
      >
        <span className="inline-block transition-all duration-500 bg-[--second] group-hover:bg-black shadowbox w-5 h-5 absolute p-1.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
          <Arrows color={"stroke-[--primary] group-hover:stroke-[--second]"} />
        </span>
      </span>
    </div>
  );
};
