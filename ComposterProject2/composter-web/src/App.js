import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import SandDisplay from './SandDisplay';

const EMPTY = 0;
const METAL = 1;
const SAND = 2;
const WATER = 3;
const GAS = 4;
const FIRE = 5;

const App = () => {
  const numRows = 80;  // Smaller grid size for performance
  const numCols = 80;
  const [grid, setGrid] = useState(() => createInitialGrid(numRows, numCols));
  const [speed, setSpeed] = useState(100); // Default speed
  const [running, setRunning] = useState(true); // Control for running the simulation
  const buttonNames = ["Empty", "Metal", "Sand", "Water", "Gas", "Fire"];

  function createInitialGrid(rows, cols) {
    return Array.from({ length: rows }, () => Array(cols).fill(EMPTY));
  }

  const locationClicked = useCallback((row, col, tool) => {
    if (row >= numRows || col >= numCols || row < 0 || col < 0) {
      console.error('Invalid row or col:', row, col);
      return;
    }
    const newGrid = grid.map(arr => arr.slice());
    newGrid[row][col] = tool;
    setGrid(newGrid);
  }, [grid, numRows, numCols]);

  const step = useCallback(() => {
    const newGrid = grid.map(arr => arr.slice());
    const x = Math.floor(Math.random() * numRows);
    const y = Math.floor(Math.random() * numCols);

    if (newGrid[x][y] === SAND && x < numRows - 1 && (newGrid[x + 1][y] === EMPTY || newGrid[x + 1][y] === WATER || newGrid[x + 1][y] === GAS || newGrid[x + 1][y] === FIRE)) {
      newGrid[x][y] = newGrid[x + 1][y];
      newGrid[x + 1][y] = SAND;
    } else if (newGrid[x][y] === WATER) {
      const direction = Math.floor(Math.random() * 3);
      if (direction === 0 && x < numRows - 1 && newGrid[x + 1][y] === EMPTY) {
        newGrid[x][y] = EMPTY;
        newGrid[x + 1][y] = WATER;
      } else if (direction === 1 && y < numCols - 1 && newGrid[x][y + 1] === EMPTY) {
        newGrid[x][y] = EMPTY;
        newGrid[x][y + 1] = WATER;
      } else if (direction === 2 && y > 0 && newGrid[x][y - 1] === EMPTY) {
        newGrid[x][y] = EMPTY;
        newGrid[x][y - 1] = WATER;
      }
    } else if (newGrid[x][y] === GAS) {
      const direction = Math.floor(Math.random() * 3);
      if (direction === 0 && x > 0 && (newGrid[x - 1][y] === EMPTY || newGrid[x - 1][y] === WATER)) {
        newGrid[x][y] = newGrid[x - 1][y];
        newGrid[x - 1][y] = GAS;
      } else if (direction === 1 && y < numCols - 1 && newGrid[x][y + 1] === EMPTY) {
        newGrid[x][y] = EMPTY;
        newGrid[x][y + 1] = GAS;
      } else if (direction === 2 && y > 0 && newGrid[x][y - 1] === EMPTY) {
        newGrid[x][y] = EMPTY;
        newGrid[x][y - 1] = GAS;
      }
    } else if (newGrid[x][y] === FIRE) {
      const direction = Math.floor(Math.random() * 3);
      if (direction === 0 && x > 0 && newGrid[x - 1][y] === EMPTY) {
        newGrid[x][y] = EMPTY;
        newGrid[x - 1][y] = FIRE;
      } else if (direction === 1 && y < numCols - 1 && newGrid[x][y + 1] === EMPTY) {
        newGrid[x][y] = EMPTY;
        newGrid[x][y + 1] = FIRE;
      } else if (direction === 2 && y > 0 && newGrid[x][y - 1] === EMPTY) {
        newGrid[x][y] = EMPTY;
        newGrid[x][y - 1] = FIRE;
      }
    }
    setGrid(newGrid);
    console.log('Step called'); // Debugging log to ensure step is being called
  }, [grid, numRows, numCols]);

  useEffect(() => {
    const interval = setInterval(() => {
      step();
      setGrid(grid => [...grid]); // Force re-render
    }, speed);
    return () => clearInterval(interval);
  }, [step, speed]);

  return (
    <div className="App">
      <SandDisplay
        title="Falling Sand"
        numRows={numRows}
        numCols={numCols}
        buttonNames={buttonNames}
        onClick={(row, col, tool) => locationClicked(row, col, tool)}
        grid={grid}
        setSpeed={setSpeed}
      />
      <button onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Run"}
      </button>
    </div>
  );
};

export default App;
