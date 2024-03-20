import React from 'react';
import './Header.css';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Quant-A-Maze 2024</h1>
        <p>Join us for a thrilling quantum computing hackathon experience.</p>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;