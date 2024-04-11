import React from 'react';
import './Timeline.css';
import timelineimage from '../img/timeline/timeline.png';

const Timeline = ({ imagePath }) => {
  return (
    <section className="timeline-container" id="timeline">
      <div className="timeline-image">
        <img src={timelineimage} alt="Timeline" />
      </div>
      <div className="timeline-content">
        {/* Add your timeline content here */}
      </div>
    </section>
  );
};

export default Timeline;