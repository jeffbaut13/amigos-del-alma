import React from "react";

export const Burger = ({ active, handleClick, showLogo }) => {
  return (
    <span
      onClick={handleClick}
      className={`${
        active ? "active" : ""
      } burger w-6 cursor-pointer relative items-center h-5/6 flex flex-col justify-between z-[201]`}
    >
      <div
        className={`line ${
          showLogo ? "bg-[--second]" : "bg-[--primary]"
        } lineBurger lineBurger1 `}
      ></div>
      <div
        className={`line ${
          showLogo ? "bg-[--second]" : "bg-[--primary]"
        } lineBurger lineBurger2 `}
      ></div>
      <div
        className={`line ${
          showLogo ? "bg-[--second]" : "bg-[--primary]"
        } lineBurger lineBurger3 `}
      ></div>
    </span>
  );
};
