
import './styles/navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';

function Navbar() {
  
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDrodownopen, setDropdownopen] = useState(false);
    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
      setDropdownopen(!isDrodownopen);

    };
  return (
    <div className='complete-nav-container'>
    <nav className="navbar">
      <div className="navbar-container nav-container">
        <input type="checkbox" name="" id="" />
        <a href="/home"><h1 className="logo">StopFireUSA</h1>
        <img alt="logo" className="logo"src="/favicon.png"/>
        </a>
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
        <label htmlFor='menu-checkbox' className='menu-icon' onClick={handleMenuClick}>
            &#9776; {/* Unicode for "hamburger" icon */}
          </label>
          
          
      </div>
    </nav>
    <div className={`dropdown-container ${isDrodownopen ? 'open' : ''}`}>
            {menuOpen ? (
              <ul className='dropdown-items'>
                <li>
                  <a href='/home'>Home</a>
                </li>
                <li className='dropdown'>
                  <a href='/services'>Services</a>
                </li>
                <li>
                  <a href='/aboutus'>About Us</a>
                </li>
                <li>
                  <a href='/servicemap'>Service Map</a>
                </li>
                <li>
                  <a href='/contact'>Contact</a>
                </li>
              </ul>
            ) : null}
          </div>
    </div>
  );
}

export default Navbar;