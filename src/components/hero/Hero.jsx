import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>ICMST-2025</h1>
        <p>February 05, 06, 2025</p>
        <h2>
          1st INTERNATIONAL CONFERENCE ON MATHEMATICS IN SCIENCE AND TECHNOLOGY
        </h2>
        <button className="btn">
          {" "}
          Register Now <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
