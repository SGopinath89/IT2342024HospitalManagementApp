import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
        </div>
        <div className="banner">
        </div>
      </div>
    </>
  );
};

export default Hero;
