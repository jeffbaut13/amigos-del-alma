import React from "react";
import Comercial from "../components/Comercial";
import { Marketing } from "../components/Marketing";
import { MakingOfOne } from "../components/MakingOfOne";
import { MakingOfOTwo } from "../components/MakingOfOTwo";
import { Footer } from "../components/Footer";
import { Scroll } from "../components/Scroll";

export const Home = () => {
  return (
    <>
      <Scroll />
      <Comercial />
      <Marketing />
      <MakingOfOne />
      <MakingOfOTwo />
      <Footer />
    </>
  );
};
