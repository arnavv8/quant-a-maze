import React from 'react';
import prizesbg from '../components/images/prizesbg.png';
import firstprize from '../components/images/1stprize.png';
import secondprize from '../components/images/2ndprize.png';
import thirdprize from '../components/images/3rdprize.png';
import './Prizes.css';

const Prizes = () => {
  return (
    <div className="prizes-container">
      <div className="prizes-header">
        <img src={prizesbg} alt="Prizes Header" />
      </div>
      <div className="prizes-list">
        <div className="prize-item">
          <img src={thirdprize} alt="3rd Prize" />
        </div>
        <div className="prize-item">
          <img src={secondprize} alt="2nd Prize" />
        </div>
        <div className="prize-item">
          <img src={firstprize} alt="1st Prize" />
        </div>
      </div>
    </div>
  );
};

export default Prizes;