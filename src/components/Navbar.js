// NavbarComponent.js
import React from 'react';
import './Navbar.css'; // Corrected import statement

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
      <div className="navbar-items">
        <button onClick={() => scrollToSection('hero')}>Home</button>
        <button onClick={() => scrollToSection('about-us')}>About Us</button>
        <button onClick={() => scrollToSection('tracks')}>Tracks</button>
        <button onClick={() => scrollToSection('prizes')}>Prizes</button>
        <button onClick={() => scrollToSection('sponsors')}>Sponsors</button>
        <button onClick={() => scrollToSection('faq')}>FAQ</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
