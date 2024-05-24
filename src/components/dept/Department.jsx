import React from "react";
import "./Department.css";
import about_img from "../../assets/about_dept.jpg";

const Department = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <p>
        The Department of Mathematics was established in 2008 to impart a robust understanding of 
        mathematics and its practical applications in engineering, spanning undergraduate and postgraduate levels. 
        The department has a highly qualified team of 17 faculty members, including 11 doctorates. Eight faculty members are TN-SET qualified. 
        The department has been recognized as an Anna University Research Centre. Faculty members engage in research across various
         areas, encompassing Differential Equations, Topology, Graph Theory, Fuzzy Graph Theory, Queueing Theory, Stochastic Processes, and Automata Theory. 
         The primary goal of the department is to educate and empower young minds to explore new horizons.
        </p>
      </div>
    </div>
  );
};

export default Department;
