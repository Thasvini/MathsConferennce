import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>ABOUT THE COLLEGE</h3>
        <h2>Sri Eshwar College Of Engineering</h2>
        <p>
          Sri Eshwar College of Engineering is an Autonomous Institution,
          approved by AICTE, New Delhi and Affiliated to Anna University,
          Chennai. The institution was established in the year 2008. With the
          view to provide holistic approach to education, the institution
          endeavours with a single minded focus to impart quality education.
        </p>
        <p>
          Sri Eshwar college that offer Eight UG Programmes, Three PG Programmes
          and Four Research Programmes. Sri Eshwar is located in a sprawling
          campus near Kinathukadavu, at a distance of 25km from Railway station,
          Coimbatore.
        </p>
      </div>
    </div>
  );
};

export default About;
