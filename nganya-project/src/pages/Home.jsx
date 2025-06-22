import React from "react";
import Intro from "../components/intro.jsx";
import TopMatatus from "../components/top-matatus.jsx";
import DriverContainer from "../components/Drivers.jsx";
import HomeHero from "../components/home-hero.jsx";

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <Intro />
      <TopMatatus />
      <DriverContainer />
    </div>
  );
};

export default Home;