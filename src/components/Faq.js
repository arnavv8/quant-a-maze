import React from 'react';

const Faq = () => {
  return (
    <section className="faq" id="faq">
      <h2>FAQ</h2>
      <p>
        Here are some frequently asked questions about the hackathon:
      </p>
      <ul>
        <li>
          <strong>Who can participate?</strong> The hackathon is open to all
          students, regardless of major or experience level.
        </li>
        <li>
          <strong>Do I need to have a team?</strong> No, you can participate
          individually or in teams of up to 5 people.
        </li>
        <li>
          <strong>What should I bring?</strong> You should bring your laptop,
          charger, and any other equipment you need to work on your project.
        </li>
        <li>
          <strong>What if I don't have an idea?</strong> Don't worry, we will
          provide you with a list of challenges and resources to help you get
          started.
        </li>
        <li>
          <strong>What if I have a question?</strong> You can ask a mentor or
          organizer for help at any time during the hackathon.
        </li>
      </ul>
    </section>
  );
};

export default Faq;