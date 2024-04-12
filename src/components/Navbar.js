// NavbarComponent.js
import React from 'react';
import './Navbar.css';

const NavbarComponent = () => {
  // Function to handle scrolling to the corresponding section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div class="logo-holder">
        <div className="qbit-logo"></div>
      </div>
      <div class="link-holder">
      <div className="navbar-links">
        <button class = "link-btn" onClick={() => scrollToSection('hero')}>Home</button>
        <button class = "link-btn" onClick={() => scrollToSection('about-us')}>About Us</button>
        <button class = "link-btn" onClick={() => scrollToSection('tracks')}>Tracks</button>
        <button class = "link-btn" onClick={() => scrollToSection('prizes')}>Prizes</button>
        <button class = "link-btn" onClick={() => scrollToSection('timeline')}>Timeline</button>
        <button class = "link-btn" onClick={() => scrollToSection('sponsors')}>Sponsors</button>
        <button class = "link-btn" onClick={() => scrollToSection('contact')}>Contact us</button>
      </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
