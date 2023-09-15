import React from "react";
import Image from "next/image";
import style from "./style.css";
import Facebook from "../../assets/facebook.png";
import Google from "../../assets/Google.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import ArrowDown from '../../assets/ArrowDown.png'

function Header() {
  return (
    <div class="hero-section">
      <div className="nav-bar">
        <div className="nav-menu">
          <nav>
            <ul>
              <li class="nav-link">Home</li>
              <li class="nav-link">About</li>
              <li class="nav-link">Project</li>
              <li class="nav-link">Service</li>
              <li class="nav-link">Contact</li>
            </ul>
          </nav>
        </div>
        <div className="menu-title">
          <h1>Zahid Ali</h1>
          <p className="skill">Web Developer</p>
        </div>
        <div className="nav-social">
          <ul className="social-icon">
            <li>
              <Image src={Facebook} alt="facebook" />
            </li>
            <li>
              <Image src={Twitter} alt="twitter" />
            </li>
            <li>
              <Image src={Linkedin} alt="linkedin" />
            </li>
            <li>
              <Image src={Instagram} alt="instagram" />
            </li>
            <li>
              <Image src={Google} alt="Google" />
            </li>
          </ul>
        </div>
      </div>
      {/* Navbar end Here */}
      <div class="hero-text">
        <h1 class="header-text">
          Hey, It’s Marvin Richard.
          <br /> UI/UX & Product Designer
          <br /> Based on Los Angeles.
        </h1>
        <div className="scroll-down">
            <p>Scroll down</p>
            <Image src={ArrowDown} alt="ArrowDown" />
            
        </div>
      </div>
    </div>
  );
}

export default Header;
