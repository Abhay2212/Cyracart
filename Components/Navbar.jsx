import React from "react";
import Logo from "../Images/logo.jpg";
import "./Navbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  return (
    <div className="navbar-main">
        <h4>Sale is on! 10% off using CC10</h4>
      <nav className="navbar">
        <img src={Logo} alt="Logo" />
        <div className="nav4">
          <ul>
            <li className="home">Home</li>
            <li className="New">New</li>
            <li className="Men">Men</li>
            <li className="Women">Women</li>
          </ul>
        </div>
        <div className="nav3">
          <ul>
            <li><AccountCircleIcon/></li>
            <li>Login</li>
            <li>Cart</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
