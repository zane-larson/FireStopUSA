import React from 'react';
import './styles/navbar.css'
function Navbar() {
  return (
    <div className='complete-nav-container'>
    <nav className="navbar">
      <div className="navbar-container nav-container">
        <input type="checkbox" name="" id="" />
        <a href="/home"><h1 className="logo">StopFireUSA</h1></a>
        <div className='list-container'>
        <ul className="menu-items">
          <div> <li><a href="/Home">Home</a></li></div>
       
        <li class="dropdown"><a href="/services">Services</a>
            {/* <div class="dropdown-content">
                <p class="dropdown-text">Wildfire Prepare your home</p>
                <p class="dropdown-text">Brush Clear</p>
                <p class="dropdown-text">Get a wildfire saftey report</p>
 
            </div> */}
          </li>
          
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/servicemap">Service Map</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        </div>
        
      </div>
    </nav>
    </div>
  );
}

export default Navbar;