import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const instagramLink = 'https://www.instagram.com/qbits_nmit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
  const linkedinLink = 'https://www.linkedin.com/company/qbitsnmit/';
  const emailLink = 'mailto:quantumtechclub.nmit@gmail.com';

  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <h2>Contact us</h2>
      </div>
      <div className="contact-buttons">
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <img src={require('../img/contact/instagram.png')} alt="Instagram" />
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <img src={require('../img/contact/linkedin.png')} alt="Linkedin" />
        </a>
        <a href={emailLink} target="_blank" rel="noopener noreferrer">
          <img src={require('../img/contact/mail.png')} alt="Email" />
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
