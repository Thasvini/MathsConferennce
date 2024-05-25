import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";
import ImportantDatesTable from "../ImportatDatesTable/ImportantDatesTable";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>FIRST INTERNATIONAL CONFERENCE ON MATHEMATICS IN SCIENCE AND TECHNOLOGY</h1>
        <h2>February 06, 07, 2025</h2>
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
        <ImportantDatesTable/>
      </div>
    </div>
  );
};

export default Hero;
