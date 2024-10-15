import React, { useState } from 'react';
import './SandDisplay.css';

const SandDisplay = ({ title, numRows, numCols, buttonNames, onClick, grid, setSpeed, selectedTool, setSelectedTool }) => {
  const [sliderValue, setSliderValue] = useState(50);

  function handleMouseDown(row, col) {
    onClick(row, col, selectedTool);
  }

  function handleSliderChange(event) {
  const newValue = event.target.value;
  setSliderValue(newValue);
  const calculatedSpeed = 1000 / newValue;  // Ensure the speed is properly calculated
  console.log(`Slider value: ${newValue}, Speed set to: ${calculatedSpeed}`);
  setSpeed(calculatedSpeed);  // Inverse relationship for intuitive control
}





  return (
    <div className="sand-display">
      <h1>{title}</h1>
      <div className="grid" key={JSON.stringify(grid)}>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell type-${cell}`}
                onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default SandDisplay;
