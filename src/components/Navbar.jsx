import React from "react";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-between px-8 mt-6 w-full h-8">
      <figure>
        <img src="/prospero.svg" alt="" />
      </figure>
      <figure>
        <img src="/logo.svg" alt="" />
      </figure>

      <div className="burger w-8 py-1 h-full flex flex-col justify-between">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </div>
  );
};
