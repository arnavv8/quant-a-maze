import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import Sponsors from './components/Sponsors';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Tracks />
      <Prizes />
      <Timeline />
      <Sponsors />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;