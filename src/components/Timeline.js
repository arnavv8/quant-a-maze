import React from 'react';

const Timeline = () => {
  return (
    <section className="timeline" id="timeline">
      <h2>Timeline</h2>
      <p>
        Here's a timeline of the hackathon to help you plan your weekend:
      </p>
      <ul>
        <li>
          <strong>Friday, 12th January:</strong> Registration and welcome dinner
        </li>
        <li>
          <strong>Saturday, 13th January:</strong> Hackathon begins at 9am,
          workshops and mentoring throughout the day, and hacking until midnight
        </li>
        <li>
          <strong>Sunday, 14th January:</strong> Hacking resumes at 9am,
          final presentations and judging at 3pm, and awards ceremony at 5pm
        </li>
      </ul>
    </section>
  );
};

export default Timeline;