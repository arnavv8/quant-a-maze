import React from 'react';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
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
