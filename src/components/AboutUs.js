// AboutUs.js
import React from "react";
import "./AboutUs.css";

const AboutUsContent = () => {
  return (
    <div className="about-us-content">
      <div class="about-us-main-heading">About Us</div>
      <div class="about-us-desc">
        Quantum Tech Club is a student club that aims to bring primary quantum
        computing resources. We provide resources for students who are just
        beginning to learn about quantum computing to those who are looking for
        internships and jobs in the quantum computing area. Throughout the year,
        the club will host events that expose students to new ideas in the field
        of quantum computing, including Ted talks, blog writing ,panel
        discussion, educational workshops, field trips, Hackathons, social
        events but not limited to.
      </div>
    </div>
  );
};

const AboutUsStats = () => {
  return (
    <div className="about-us-stats">
      <div className="stat-item">
        <div class="stat-number">150+</div>
        <div>Members</div>
      </div>
      <div className="stat-item">
        <div class="stat-number">1250+</div>
        <div>Followers</div>
      </div>
      <div className="stat-item">
        <div class="stat-number">15,000+</div>
        <div>Applications</div>
      </div>
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
        <div className="left-about-us-design"></div>
        <div className="right-about-us-design">
          <div className="design-holder">
            <div className="main-circle"></div>
            <div className="bg-looper"></div>
            <div className="bg-circle"></div>
            <div className="bg-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
