import React from "react";
import { Navbar } from "./components/Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full">{children}</div>
    </>
  );
};
