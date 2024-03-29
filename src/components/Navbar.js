// NavbarComponent.js
import React from 'react';

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
      <button onClick={() => scrollToSection('hero')}>Hero</button>
      <button onClick={() => scrollToSection('tracks')}>Tracks</button>
      <button onClick={() => scrollToSection('prizes')}>Prizes</button>
      {/* Add more navigation buttons as needed */}
    </nav>
  );
};

export default NavbarComponent;
