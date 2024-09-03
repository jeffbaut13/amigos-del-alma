import React from "react";
import Comercial from "../components/Comercial";
import { Marketing } from "../components/Marketing";
import { MakingOfOne } from "../components/MakingOfOne";
import { MakingOfOTwo } from "../components/MakingOfOTwo";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Comercial />
      <Marketing />
      <MakingOfOne />
      <MakingOfOTwo />
      <Footer />
    </>
  );
};
