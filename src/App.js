import React from 'react';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import DynamicBackground from './components/DynamicBackground'; // Import DynamicBackground component
import './App.css';

const App = () => {
  return (
    <div className="App">
      <DynamicBackground />
      <NavbarComponent />
      <Hero />
      <Tracks />
      <Prizes />
      <Sponsors />
      <Timeline />
      <Contact />
    </div>
  );
};

export default App;
