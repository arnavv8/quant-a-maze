// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import Sponsors from './components/Sponsors';
import Faq from './components/Faq';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/prizes" element={<Prizes />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;