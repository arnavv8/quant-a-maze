// AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUsContent = () => {
  return (
    <div className="about-us-content">
      <h2>About Us</h2>
      <p>
        Quantum Tech Club is a student club that aims to bring primary quantum  computing resources. We provide resources for students who are just  beginning to learn about quantum computing to those who are looking for  internships and jobs in the quantum computing area.
      </p>
      <p>
        Throughout the year, the club will host events that expose students to new ideas in the  field of quantum computing, including Ted talks, blog writing, panel discussion, educational workshops, field trips, Hackathons, social events but not limited to.
      </p>
    </div>
  );
};

const AboutUsStats = () => {
  return (
    <div className="about-us-stats">
      <div className="stat-item">
        <h3>150+</h3>
        <p>Members</p>
      </div>
      <div className="stat-item">
        <h3>1250+</h3>
        <p>Followers</p>
      </div>
      <div className="stat-item">
        <h3>15,000+</h3>
        <p>Applications</p>
      </div>
    </div>
  );
};

const AboutUsImage = () => {
  return (
    <div className="about-us-image">
      <img src="your-image-source-url.png" alt="About Us Image" />
    </div>
  );
};

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us-section">
      <div className="about-us-main">
        <div className="about-us-content-wrapper">
          <AboutUsContent />
          <AboutUsStats />
        </div>
        <AboutUsImage />
      </div>
    </section>
  );
};

export default AboutUs;