import React from 'react';
import './styles/navbar.css'
function Navbar() {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-container nav-container">
        <input type="checkbox" name="" id="" />
        <ul className="menu-items">
        <li><a href="/Home">Home</a></li>
        <li class="dropdown"><a href="/services">Services</a>
            <div class="dropdown-content">
                <p class="dropdown-text">Wildfire Prepare your home</p>
                <p class="dropdown-text">Brush Clear</p>
                <p class="dropdown-text">Get a wildfire saftey report</p>
 
            </div>
          </li>
          
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <h1 className="logo">StopFireUSA</h1>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;