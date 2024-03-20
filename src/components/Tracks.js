import React from 'react';

const Tracks = () => {
  return (
    <section className="tracks" id="tracks">
      <h2>Tracks</h2>
      <p>
        Choose from one of the following tracks to showcase your skills and
        creativity:
      </p>
      <ul>
        <li>
          <strong>Quantum Algorithms:</strong> Develop new quantum algorithms or
          improve existing ones to solve real-world problems.
        </li>
        <li>
          <strong>Quantum Simulation:</strong> Use quantum computers to simulate
          complex quantum systems and explore new physics.
        </li>
        <li>
          <strong>Quantum Machine Learning:</strong> Apply quantum computing to
          machine learning and artificial intelligence.
        </li>
        <li>
          <strong>Quantum Cryptography:</strong> Explore the use of quantum
          mechanics for secure communication and cryptography.
        </li>
      </ul>
    </section>
  );
};

export default Tracks;