import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import menu_open from "../../assets/menu-open.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  const [dropdown2, setDropdown2] = useState(false);
  const toggleDropdown2 = () => {
    setDropdown2(!dropdown2);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/speakers">KEYNOTE SPEAKERS</Link>
        </li>
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span onClick={toggleDropdown}>COMMITTEE</span>
          <ul className={`dropdown-menu ${dropdown ? "show" : ""}`}>
            <li>
              <Link to="/organizers">ORGANIZING COMMITTEE</Link>
            </li>
            <li>
              <Link to="/iabc">INTERNATIONAL ADVISORY BOARD COMMITTEE</Link>
            </li>
            <li>
              <Link to="/nabc">NATIONAL ADVISORY BOARD COMMITTEE</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown" onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
          <span onClick={toggleDropdown}>INSTRUCTION FOR AUTHORS</span>
          <ul className={`dropdown-menu ${dropdown2 ? "show" : ""}`}>
            <li>
              <Link to="/instructions">INSTRUCTION FOR AUTHORS</Link>
            </li>
            <li>
              <Link to="/registrationfees">REGISTRATION FEES</Link>
            </li>
            <li>
              <Link to="/plantravel">PLAN TRAVEL</Link>
            </li>
          </ul>
        </li>
        
        <li>
          <Link to="/contact" className="btn">Register</Link>
        </li>
      </ul>
      {mobileMenu ? (
        <img
          src={menu_open}
          alt="menu open icon"
          className="menu-icon"
          onClick={toggleMenu}
        />
      ) : (
        <img
          src={menu_icon}
          alt="menu icon"
          className="menu-icon"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;