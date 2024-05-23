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
          <Link to="/">Home</Link>
        </li><li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span onClick={toggleDropdown}>Organizing Committee</span>
          <ul className={`dropdown-menu ${dropdown ? "show" : ""}`}>
            <li>
              <Link to="/instructions">Organizing Committee</Link>
            </li>
            <li>
              <Link to="/registrationfees">Keynote Speakers</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown" onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
          <span onClick={toggleDropdown}>Instruction For Authors</span>
          <ul className={`dropdown-menu ${dropdown2 ? "show" : ""}`}>
            <li>
              <Link to="/instructions">Instruction for authors</Link>
            </li>
            <li>
              <Link to="/registrationfees">Registration Fees</Link>
            </li>
            <li>
              <Link to="/plantravel">Plan Travel</Link>
            </li>
            <li>
              <Link to="/downloads">Downloads</Link>
            </li>
          </ul>
        </li>
        
        <li>
          <Link to="/contact" className="btn">Contact Us</Link>
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