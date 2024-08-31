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
      <button
        className={`relative group w-12 h-12 bg-transparent p-3 rounded-full border border-[--borderOpacity] ${rotate}`}
        onClick={handleclick}
        onMouseDown={handleOnMouseDown}
        onMouseUp={HandleOnMouseUp}
        onMouseLeave={handleOnMouseLeave}
      >
        <span className="inline-block group-hover:bg-[--primary] custom_Shadow w-6 h-6 p-2 rounded-full">
          <Arrows color={"stroke-black group-hover:stroke-white"} />
        </span>
      </button>
    </div>
  );
};
