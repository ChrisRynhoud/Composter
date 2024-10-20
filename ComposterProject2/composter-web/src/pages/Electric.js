import React from 'react';
import './Electric.css';
import reencleImage from '../assets/images/reencle.jpg';

function Electric() {
  return (
    <div className="electric-container">
      <h1>How the Reencle Works</h1>
      <img src={reencleImage} alt="Reencle Composter" className="reencle-image" />
      <div className="infographic">
        <div className="info-box">
          <h2>Step 1: Add Food Waste</h2>
          <p>Place your food scraps in the Reencle composter.</p>
        </div>
        <div className="info-box">
          <h2>Step 2: Automated Mixing</h2>
          <p>The Reencle automatically mixes the waste to speed up decomposition.</p>
        </div>
        <div className="info-box">
          <h2>Step 3: Temperature Control</h2>
          <p>Maintains optimal temperature for effective composting.</p>
        </div>
        <div className="info-box">
          <h2>Step 4: Odor Control</h2>
          <p>Equipped with a deodorizer to keep unpleasant smells at bay.</p>
        </div>
        <div className="info-box">
          <h2>Step 5: Compost Ready</h2>
          <p>In just a few weeks, your compost is ready to use in your garden.</p>
        </div>
      </div>
    </div>
  );
}

export default Electric;
