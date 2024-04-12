import React from 'react';
import './components/fonts.css'
import HeroWithNav from './components/HeroWithNav';
import AboutUs from './components/AboutUs';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Timeline from './components/Timeline';
import ContactUs from './components/ContactUs';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div class = "hero-block">
        <HeroWithNav/>
      </div>
      <div className="about-block">
        <AboutUs />
      </div>
      <div className="tracks-block">
        <Tracks />
      </div>
      <div className="prizes-block">
        <Prizes />
      </div>
      <div className="timline-block">
        <Timeline />
      </div>
      <div className="sponsors-block">
        <Sponsors />
      </div>
      <div className="contact-block">
        <ContactUs />
      </div>
      
    </div>
  );
};

export default App;
