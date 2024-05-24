import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>1st INTERNATIONAL CONFERENCE ON MATHEMATICS IN SCIENCE AND TECHNOLOGY</h1>
        <p>February 05, 06, 2025</p>
        <h1>
        ICMST-2025
        </h1>
       <button className="btn">
       <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
          >
            Register Now
         <img src={dark_arrow} alt="" /> </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
