import React from 'react';
import './Tracks.css';

const Tracks = () => {
  return (
    <div className="tracks-container" id="tracks">
      <h2>Tracks</h2>
      <ul className="tracks-list">
        <li className="track-item track-game-dev">Game Dev</li>
        <li className="track-item track-blockchain">Blockchain</li>
        <li className="track-item track-jil">JIL</li>
        <li className="track-item track-al-ml">Al and ML</li>
        <li className="track-item track-lot">lOT</li>
        <li className="track-item track-epen">epen</li>
        <li className="track-item track-innovation">Innovation</li>
      </ul>
    </div>
  );
};

export default Tracks;