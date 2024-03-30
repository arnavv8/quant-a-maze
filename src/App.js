// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <div id="hero"> {/* Anchor point for Hero */}
        <Hero />
      </div>
      <div id="tracks"> {/* Anchor point for Tracks */}
        <Tracks />
      </div>
      <div id="prizes"> {/* Anchor point for Prizes */}
        <Prizes />
      </div>
      <div id="sponsors"> {/* Anchor point for Sponsors */}
        <Sponsors />
      </div>
      <div id="timeline"> {/* Anchor point for Timeline */}
        <Timeline />
      </div>
      <div id="contact"> {/* Anchor point for Contact */}
        <Contact />
      </div>
      {/* Add more components with anchor points as needed */}
    </div>
  );
};

export default App;
