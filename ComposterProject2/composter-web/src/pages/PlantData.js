import React, { useState } from 'react';
import axios from 'axios';
import DataVisualization from './DataVisualization';
import './PlantData.css';

function PlantData() {
  const [plantData, setPlantData] = useState({ carrotHeight: '', composter: '1', date: '' });
  const [password, setPassword] = useState('');
  const [importData, setImportData] = useState('');

  const handlePlantChange = (e) => {
    const { name, value } = e.target;
    setPlantData({ ...plantData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleImportChange = (e) => {
    setImportData(e.target.value);
  };

  const handlePlantSubmit = (e) => {
    e.preventDefault();
    axios.post('https://new-backend-app-35dbde982dde.herokuapp.com/submit-plant-data', plantData)
      .then(response => alert(response.data))
      .catch(error => console.error('Error:', error));
  };

  const handleResetData = () => {
    axios.post('https://new-backend-app-35dbde982dde.herokuapp.com/reset-plant-data', { password })
      .then(response => alert(response.data))
      .catch(error => console.error('Error:', error));
  };

  const handleImportData = () => {
    try {
      const data = JSON.parse(importData);
      axios.post('https://new-backend-app-35dbde982dde.herokuapp.com/import-plant-data', { password, data })
        .then(response => alert(response.data))
        .catch(error => console.error('Error:', error));
    } catch (error) {
      alert('Invalid JSON data format');
      console.error('Error:', error);
    }
  };

  return (
    <div className="plant-container">
      <h1>Plant Data Submission</h1>
      <div className="data-entry">
        <h2>Carrot Height Data Submission</h2>
        <form onSubmit={handlePlantSubmit}>
          <label>
            Carrot Height:
            <input
              type="number"
              name="carrotHeight"
              value={plantData.carrotHeight}
              onChange={handlePlantChange}
              required
            />
          </label>
          <label>
            Which Composter:
            <select
              name="composter"
              value={plantData.composter}
              onChange={handlePlantChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={plantData.date}
              onChange={handlePlantChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="data-reset-import">
        <h2>Data Management</h2>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <button onClick={handleResetData}>Reset Plant Data</button>
        </div>
        <div>
          <label>
            Import Data (JSON):
            <textarea
              value={importData}
              onChange={handleImportChange}
            ></textarea>
          </label>
          <button onClick={handleImportData}>Import Plant Data</button>
        </div>
      </div>
      <DataVisualization type="plant" />
    </div>
  );
}

export default PlantData;
