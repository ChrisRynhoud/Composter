import React from 'react';
import './Timeline.css';

function Timeline() {
  return (
    <div className="timeline-container">
      <h1>Project Timeline</h1>
      <div className="timeline">
        <div className="timeline-event">
          <div className="timeline-icon">1</div>
          <div className="timeline-content">
            <h2>Phase 1: Setup</h2>
            <p>(September - October)</p>
          </div>
        </div>

        <div className="timeline-event">
          <div className="timeline-icon">2</div>
          <div className="timeline-content">
            <h2>Phase 2: Composting</h2>
            <p>(November - July)</p>
          </div>
        </div>

        <div className="timeline-event">
          <div className="timeline-icon">2.5</div>
          <div className="timeline-content">
            <h2>Phase 2.5: Preliminary Report</h2>
            <p>(December)</p>
          </div>
        </div>

        <div className="timeline-event">
          <div className="timeline-icon">3</div>
          <div className="timeline-content">
            <h2>Phase 3: Conclusion</h2>
            <p>(May)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
