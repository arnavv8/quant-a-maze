// App.js

import React from 'react';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      <AboutUs /> {/* Add the AboutUs component */}
      <Tracks />
      <Prizes />
      <Sponsors />
      <Timeline />
      <Contact />
    </div>
  );
};

export default App;
