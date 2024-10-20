import React, { useState } from 'react';
import axios from 'axios';
import GraphsSection from './GraphsSection';
import './PlantData.css';

function PlantData() {
  const [plantData, setPlantData] = useState({ carrotHeight: '', composter: '1', date: '' });
  const [composterData, setComposterData] = useState({ composter: '1', compostProduced: '', date: '' });
  const [foodScrapData, setFoodScrapData] = useState({ foodScrapSaved: '', date: '' });
  const [password, setPassword] = useState('');
  const [importData, setImportData] = useState('');

  const handlePlantChange = (e) => {
    const { name, value } = e.target;
    setPlantData({ ...plantData, [name]: value });
  };

  const handleComposterChange = (e) => {
    const { name, value } = e.target;
    setComposterData({ ...composterData, [name]: value });
  };

  const handleFoodScrapChange = (e) => {
    const { name, value } = e.target;
    setFoodScrapData({ ...foodScrapData, [name]: value });
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

  const handleComposterSubmit = (e) => {
    e.preventDefault();
    axios.post('https://new-backend-app-35dbde982dde.herokuapp.com/submit-compost-data', composterData)
      .then(response => alert(response.data))
      .catch(error => console.error('Error:', error));
  };

  const handleFoodScrapSubmit = (e) => {
    e.preventDefault();
    axios.post('https://new-backend-app-35dbde982dde.herokuapp.com/submit-food-scrap-data', foodScrapData)
      .then(response => alert(response.data))
      .catch(error => console.error('Error:', error));
  };

  const handleResetData = (type) => {
    axios.post('https://new-backend-app-35dbde982dde.herokuapp.com/reset-data', { password, type })
      .then(response => alert(response.data))
      .catch(error => console.error('Error:', error));
  };

  const handleImportData = (type) => {
    const data = JSON.parse(importData);
    axios.post('https://new-backend-app-35dbde982dde.herokuapp.com/import-data', { password, type, data })
      .then(response => alert(response.data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="plant-container">
      <GraphsSection />

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

      <div className="data-entry">
        <h2>Compost Data Submission</h2>
        <form onSubmit={handleComposterSubmit}>
          <label>
            Which Composter:
            <select name="composter" value={composterData.composter} onChange={handleComposterChange}>
              <option value="1">Electric Composter (Reencle)</option>
              <option value="2">Worm Bin</option>
              <option value="3">Tumbler</option>
            </select>
          </label>
          <label>
            How Much Compost Produced:
            <input type="number" name="compostProduced" value={composterData.compostProduced} onChange={handleComposterChange} />
          </label>
          <label>
            Date:
            <input type="date" name="date" value={composterData.date} onChange={handleComposterChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="data-entry">
        <h2>Food Scrap Data Submission</h2>
        <form onSubmit={handleFoodScrapSubmit}>
          <label>
            How Much Food Scrap Saved:
            <input type="number" name="foodScrapSaved" value={foodScrapData.foodScrapSaved} onChange={handleFoodScrapChange} />
          </label>
          <label>
            Date:
            <input type="date" name="date" value={foodScrapData.date} onChange={handleFoodScrapChange} />
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
          <button onClick={() => handleResetData('plant')}>Reset Plant Data</button>
          <button onClick={() => handleResetData('compost')}>Reset Compost Data</button>
          <button onClick={() => handleResetData('foodScrap')}>Reset Food Scrap Data</button>
        </div>
        <div>
          <label>
            Import Data (JSON):
            <textarea
              value={importData}
              onChange={handleImportChange}
            ></textarea>
          </label>
          <button onClick={() => handleImportData('plant')}>Import Plant Data</button>
          <button onClick={() => handleImportData('compost')}>Import Compost Data</button>
          <button onClick={() => handleImportData('foodScrap')}>Import Food Scrap Data</button>
        </div>
      </div>
    </div>
  );
}

export default PlantData;
