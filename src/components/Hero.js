// Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-heading">
        <h1>
          QUANT-<span className="yellow">A</span>-MAZE
        </h1>
        <h2>48-Hour Hackathon</h2>
        <button className="register-button yellow-button" onClick={registerNow}>
        Register Now
      </button>
      </div>
      
      <div className="hero-subheading">
        <div class="event-date">
          Dates - To be announced
        </div>
        <div class="event-venue">
          Nitte Meenakshi Institute of Technology, Bangalore
        </div>
        
      </div>
    </section>
  );
};

const registerNow = () => {
  // Implement your registerNow function logic here
};

export default Hero;