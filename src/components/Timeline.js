import React from 'react';
import './Timeline.css';
import timelineImage from '../img/timeline/timeline.png';
import timelineImage1 from '../img/timeline/timeline1.png';

const Timeline = (_) => {
  return (
    <section className="timeline-container" id="timeline">
      <div className="timeline-image">
        <div className="timeline-image-1">
          <img src={timelineImage} alt="Timeline" />
        </div>
        <div className="timeline-image-2">
          <img src={timelineImage1} alt="Timeline1" />
        </div>
      </div>
      <div className="timeline-content">
        {/* Add your timeline content here */}
      </div>
    </section>
  );
};

export default Timeline;