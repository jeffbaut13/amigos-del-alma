import React, { useState } from "react";
import { Arrows } from "./Arrows";

const IncrementText = ({ DijeValtio }) => {
  const [point, setPoint] = useState(11);

  const increment = () => {
    if (point < 22) {
      setPoint((prev) => prev + 1);
      DijeValtio.fontSize += 0.01;
    }
  };

  const decrement = () => {
    if (point > 1) {
      setPoint((prev) => prev - 1);
      DijeValtio.fontSize -= 0.01;
    }
  };

  return (
    <div className="absolute right-1 w-10 h-4/5 border-l border-[--borderOpacity] top-1/2 -translate-y-1/2 py-2">
      <div className="arrowsText flex flex-col justify-between items-center h-full">
        <figure
          onClick={increment}
          className="cursor-pointer inline-block w-3 h-3 -rotate-90"
        >
          <Arrows color={"stroke-black"} />
        </figure>

        <figure
          onClick={decrement}
          className="cursor-pointer inline-block w-3 h-3 rotate-90"
        >
          <Arrows color={"stroke-black"} />
        </figure>
      </div>
    </div>
  );
};

export default IncrementText;
