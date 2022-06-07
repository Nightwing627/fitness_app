import React from 'react';
import { Link } from 'react-router-dom'


import Button from "../Button";

import './Navbar.scss';

import healthcareLogo from "../../assets/images/healthcarelogo.svg";

function Navbar() {

  return (
    <div className="container">
      <div className="header__nav">
        <Link to="/"><img src={healthcareLogo} alt="HealthLogo" /></Link>
        <div className="header__nav-items">
          <Link to="/About" className="nav-link ">About</Link>
          <Link to="/Article" className="nav-link ">Article</Link>
          <Link to="Services" className="nav-link ">Services</Link>
          <Button primary text="Get Started" />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
