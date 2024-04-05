// HeroWithNav.js
import React from 'react';
import Hero from './Hero.js';
import Navbar from './Navbar.js'
import './HeroWithNav.css';

const HeroWithNav = () => {
  return (
      
    <section className="herowithnav">
      <div class="blurBackground"></div>
      <Navbar/>
      <Hero/>

    </section>
  );
};


export default HeroWithNav;