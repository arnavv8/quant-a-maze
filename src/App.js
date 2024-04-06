import React from 'react';
import './components/fonts.css'
import HeroWithNav from './components/HeroWithNav';
import AboutUs from './components/AboutUs';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HeroWithNav/>
      <AboutUs />
      <Tracks />
      <Prizes />
      <Sponsors />
      <Timeline />
      <Contact />
    </div>
  );
};

export default App;
