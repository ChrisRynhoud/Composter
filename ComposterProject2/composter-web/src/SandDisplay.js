import React, { useState } from 'react';
import './SandDisplay.css';

const SandDisplay = ({ title, numRows, numCols, buttonNames, onClick, grid, setSpeed }) => {
  const [tool, setTool] = useState(2); // Default tool set to SAND
  const [sliderValue, setSliderValue] = useState(50);

  function handleMouseDown(row, col) {
    onClick(row, col, tool);
  }

  function handleSliderChange(event) {
    const newValue = event.target.value;
    setSliderValue(newValue);
    setSpeed(Math.pow(10, 0.03 * newValue + 3));
  }

  function handleToolChange(toolIndex) {
    setTool(toolIndex);
  }

  return (
    <div className="sand-display">
      <h1>{title}</h1>
      <div className="grid">
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
      <div className="controls">
        {buttonNames.map((name, index) => (
          <button
            key={index}
            onClick={() => handleToolChange(index)}
            className={tool === index ? 'selected' : ''}
          >
            {name}
          </button>
        ))}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default SandDisplay;
