import React from "react";
import "./Hero.css";
import Men from '../Images/men.jpg'
import Women from '../Images/women.jpg'
import Cosmetic from '../Images/cosmetic.jpg'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>cyracart</h1>
        <p>There’s One for Everyone</p>
      </div>
      <div className="hero-img">
        <img className="men" src={Men} alt="" />
        <img className="cosmetic" src={Cosmetic} alt="" />
        <img className="women" src={Women} alt="" />
      </div>
    </div>
  );
}

export default Hero;
