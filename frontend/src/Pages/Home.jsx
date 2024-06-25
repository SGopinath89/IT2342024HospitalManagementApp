import React, { useContext } from "react";
import Hero from "../components/Hero";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Vanni Healthcare | Your Health - Our Mission"
        }
      />
      <Departments/>
    </>
  );
};

export default Home;
