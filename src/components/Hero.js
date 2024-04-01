// Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-heading">
        <h1>
          QUANT<span className="yellow">-</span>A<span className="yellow">-</span>MAZE
        </h1>
        <h2>48-Hour Hackathon</h2>
      </div>
      <button className="register-button yellow-button" onClick={registerNow}>
        Register Now
      </button>
      <div className="hero-subheading">
        <p>24th - 26th April</p>
        <p>Nitte Meenakshi Institute of Technology, Bangalore</p>
      </div>
    </section>
  );
};

const registerNow = () => {
  // Implement your registerNow function logic here
};

export default Hero;