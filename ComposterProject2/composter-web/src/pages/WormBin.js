import React from 'react';
import './WormBin.css';
import wormBinImage from '../assets/images/wormbin.jpg';

function WormBin() {
  return (
    <div className="wormbin-container">
      <h1>How the Worm Bin Works</h1>
      <img src={wormBinImage} alt="Worm Bin" className="wormbin-image" />
      <div className="infographic">
        <div className="info-box">
          <h2>Step 1: Set Up the Bin</h2>
          <p>Prepare your bin with bedding materials like shredded paper and coconut coir.</p>
        </div>
        <div className="info-box">
          <h2>Step 2: Add the Worms</h2>
          <p>Introduce the worms to their new home. Red wigglers are the best for composting.</p>
        </div>
        <div className="info-box">
          <h2>Step 3: Feed the Worms</h2>
          <p>Add food scraps like vegetable peels and fruit scraps regularly.</p>
        </div>
        <div className="info-box">
          <h2>Step 4: Maintain the Bin</h2>
          <p>Keep the bin moist and avoid adding too much food at once.</p>
        </div>
        <div className="info-box">
          <h2>Step 5: Harvest the Compost</h2>
          <p>After a few months, harvest the rich compost and use it in your garden.</p>
        </div>
      </div>
    </div>
  );
}

export default WormBin;
