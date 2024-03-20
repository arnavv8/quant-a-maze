import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Quant-A-Maze Hackathon. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;