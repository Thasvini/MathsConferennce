import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="slider">
      <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Dr Dumitru Baleanu</h3>
                  <span>Proffessor</span>
                </div>
              </div>
              <p>
                Lebanese American University, Beirut, Professor at Institute of
                Space Sciences, Bucharest.
              </p>
            </div>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Carlos Martin-Barreiro</h3>
                  <span>Proffessor</span>
                </div>
              </div>
              <p>
                Escuela Superior Politécnica del Litoral ESPOL (ROR 04qenc566),
                Ecuador.
              </p>
            </div>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Sakthivel Rathinasamy</h3>
                  <span>Proffessor</span>
                </div>
              </div>
              <p>Bharathiar University, Coimbatore, Tamilnadu, India.</p>
            </div>
      </div>
    </div>
  );
};

export default Testimonials;
