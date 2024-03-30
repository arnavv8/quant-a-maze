import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-heading">
        <h1>Quant-A-Maze</h1>
        <h2>24-hour Hackathon</h2>
      </div>
      <button className="register-button" onClick={registerNow}>Register Now</button>
      <p>June 2024</p>
      <p>Nitte Meenakshi Institute of Technology, Bangalore</p>
    </section>
  );
};

const registerNow = () => {
  // Implement your registerNow function logic here
};

export default Hero;
