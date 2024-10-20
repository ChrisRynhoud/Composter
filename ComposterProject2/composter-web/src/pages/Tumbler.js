import React from 'react';
import './Tumbler.css';
import tumblerImage from '../assets/images/tumbler.jpg';

function Tumbler() {
  return (
    <div className="tumbler-container">
      <h1>How the Tumbler Works</h1>
      <img src={tumblerImage} alt="Tumbler Composter" className="tumbler-image" />
      <div className="infographic">
        <div className="info-box">
          <h2>Step 1: Add Compost Materials</h2>
          <p>Place a balanced mix of green and brown materials in the tumbler.</p>
        </div>
        <div className="info-box">
          <h2>Step 2: Rotate the Tumbler</h2>
          <p>Give the tumbler a spin every few days to aerate the compost.</p>
        </div>
        <div className="info-box">
          <h2>Step 3: Maintain Moisture</h2>
          <p>Ensure the compost remains moist but not too wet.</p>
        </div>
        <div className="info-box">
          <h2>Step 4: Monitor Temperature</h2>
          <p>Check that the compost is warm to ensure efficient decomposition.</p>
        </div>
        <div className="info-box">
          <h2>Step 5: Harvest Compost</h2>
          <p>After a few weeks, your compost is ready to enrich your garden.</p>
        </div>
      </div>
    </div>
  );
}

export default Tumbler;
