import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hero">Hero</Link></li>
        <li><Link to="/tracks">Tracks</Link></li>
        <li><Link to="/prizes">Prizes</Link></li>
        <li><Link to="/timeline">Timeline</Link></li>
        <li><Link to="/sponsors">Sponsors</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
