import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import Loader from "./components/Loader";

export const Layout = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const handleLoad = () => {
    console.log("loader");
  };
  return (
    <>
      <Navbar />
      {loader && <Loader setLoader={setLoader} />}
      <div className="w-full h-full snap">{children}</div>
    </>
  );
};
