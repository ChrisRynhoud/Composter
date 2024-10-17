import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Home from './pages/Home';
import About from './pages/About';
import SandDisplay from './SandDisplay';
import PlantData from './pages/PlantData';

const EMPTY = 0;
const METAL = 1;
const SAND = 2;
const WATER = 3;
const GAS = 4;
const FIRE = 5;

const App = () => {
  const numRows = 80; // Smaller grid size for performance
  const numCols = 80;
  const [grid, setGrid] = useState(() => createInitialGrid(numRows, numCols));
  const [speed, setSpeed] = useState(100); // Default speed
  const [running, setRunning] = useState(true); // Control for running the simulation
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedTool, setSelectedTool] = useState(SAND); // Example default tool
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

  const handleMouseDown = (e) => {
    if (e.button === 0) { // Left mouse button
      setIsMouseDown(true);
      const gridElement = e.target.closest('.grid'); // Get the grid element
      if (gridElement) {
        const rect = gridElement.getBoundingClientRect(); // Get the bounding rectangle of the grid
        const x = e.clientX - rect.left; // Calculate x relative to the grid
        const y = e.clientY - rect.top; // Calculate y relative to the grid
        const row = Math.floor((y / rect.height) * numRows);
        const col = Math.floor((x / rect.width) * numCols);
        locationClicked(row, col, selectedTool);
      }
    }
  };

  const handleMouseUp = (e) => {
    if (e.button === 0) { // Left mouse button
      setIsMouseDown(false);
    }
  };

  const handleMouseMove = (e) => {
    if (isMouseDown) {
      const gridElement = e.target.closest('.grid'); // Get the grid element
      if (gridElement) {
        const rect = gridElement.getBoundingClientRect(); // Get the bounding rectangle of the grid
        const x = e.clientX - rect.left; // Calculate x relative to the grid
        const y = e.clientY - rect.top; // Calculate y relative to the grid
        const row = Math.floor((y / rect.height) * numRows);
        const col = Math.floor((x / rect.width) * numCols);
        locationClicked(row, col, selectedTool);
      }
    }
  };

  const step = useCallback(() => {
    const newGrid = grid.map(arr => arr.slice());
    // Process each cell
    for (let x = numRows - 1; x >= 0; x--) {
      for (let y = 0; y < numCols; y++) {
        // Sand behavior
        if (newGrid[x][y] === SAND && x < numRows - 1 && (newGrid[x + 1][y] === EMPTY || newGrid[x + 1][y] === WATER || newGrid[x + 1][y] === GAS || newGrid[x + 1][y] === FIRE)) {
          newGrid[x][y] = newGrid[x + 1][y] === WATER ? WATER : EMPTY;
          newGrid[x + 1][y] = SAND;
        }
        // Water behavior
        if (newGrid[x][y] === WATER) {
          const direction = Math.random() > 0.5 ? 1 : -1;
          if (x < numRows - 1 && newGrid[x + 1][y] === EMPTY) {
            newGrid[x + 1][y] = WATER;
            newGrid[x][y] = EMPTY;
          } else if (y + direction >= 0 && y + direction < numCols && newGrid[x][y + direction] === EMPTY) {
            newGrid[x][y + direction] = WATER;
            newGrid[x][y] = EMPTY;
          }
        }
      }
    }
    // Process fire separately to ensure proper movement
    const fireQueue = [];
    for (let x = 0; x < numRows; x++) {
      for (let y = 0; y < numCols; y++) {
        if (newGrid[x][y] === FIRE) {
          fireQueue.push({ x, y });
        }
      }
    }
    // Update fire positions
    fireQueue.forEach(({ x, y }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      if (x > 0 && newGrid[x - 1][y] === EMPTY) {
        newGrid[x - 1][y] = FIRE;
        newGrid[x][y] = EMPTY;
      } else if (y + direction >= 0 && y + direction < numCols && newGrid[x][y + direction] === EMPTY) {
        newGrid[x][y + direction] = FIRE;
        newGrid[x][y] = EMPTY;
      }
    });
    // Process gas separately to ensure proper movement
    const gasQueue = [];
    for (let x = 0; x < numRows; x++) {
      for (let y = 0; y < numCols; y++) {
        if (newGrid[x][y] === GAS) {
          gasQueue.push({ x, y });
        }
      }
    }
    // Update gas positions
    gasQueue.forEach(({ x, y }) => {
      const gasDirection = Math.random() > 0.5 ? 1 : -1;
      if (x > 0 && newGrid[x - 1][y] === EMPTY) {
        newGrid[x - 1][y] = GAS;
        newGrid[x][y] = EMPTY;
      } else if (y + gasDirection >= 0 && y + gasDirection < numCols && newGrid[x][y + gasDirection] === EMPTY) {
        newGrid[x][y + gasDirection] = GAS;
        newGrid[x][y] = EMPTY;
      }
    });
    setGrid(newGrid);
    console.log('Step function executed');
  }, [grid, numRows, numCols]);

  useEffect(() => {
    console.log('useEffect executed, Speed:', speed); // Log useEffect execution and speed
    if (!running) return;
    const interval = setInterval(() => {
      console.log('Interval step called'); // Log to ensure interval is called
      step();
    }, speed);
    return () => clearInterval(interval); // Clean up interval on component unmount or when dependencies change
  }, [step, speed, running]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plantdata" element={<PlantData />} />
        <Route path="/sanddisplay" element={
          <div className="App"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onContextMenu={(e) => e.preventDefault()}>
            <div className="grid-container">
              <SandDisplay
                title="Falling Sand"
                numRows={numRows}
                numCols={numCols}
                buttonNames={buttonNames}
                onClick={(row, col, tool) => locationClicked(row, col, tool)}
                grid={grid}
                setSpeed={setSpeed}
                selectedTool={selectedTool}
                setSelectedTool={setSelectedTool}
              />
            </div>
            <button onClick={() => setRunning(!running)}>
              {running ? "Pause" : "Run"}
            </button>
            {buttonNames.map((name, index) => (
              <button key={index} onClick={() => setSelectedTool(index)}>
                {name}
              </button>
            ))}
          </div>
        } />
      </Routes>
    </>
  );
};

export default App;