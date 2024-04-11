import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const instagramLink = 'https://www.instagram.com/';
  const linkedinLink = 'https://www.linkedin.com/';
  const emailLink = 'mailto:g@gmail.com';

  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <h2>Contact us</h2>
      </div>
      <div className="contact-buttons">
        <a href={instagramLink}>
          <img src={require('../img/contact/instagram.png')} alt="Instagram" />
        </a>
        <a href={linkedinLink}>
          <img src={require('../img/contact/linkedin.png')} alt="Linkedin" />
        </a>
        <a href={emailLink}>
          <img src={require('../img/contact/mail.png')} alt="Email" />
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
