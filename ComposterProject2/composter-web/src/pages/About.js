import React, { useState } from 'react';
import './About.css';
import axios from 'axios';

function About() {
  const [composterData, setComposterData] = useState({ composter: '1', compostProduced: '', date: '' });
  const [foodScrapData, setFoodScrapData] = useState({ foodScrapSaved: '', date: '' });
  const [password, setPassword] = useState('');
  const [importData, setImportData] = useState('');

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
    <div className="about-container">
      <h1>About Us (Data Submission)</h1>
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
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button onClick={() => handleResetData('compost')}>Reset Compost Data</button>
          <button onClick={() => handleResetData('foodScrap')}>Reset Food Scrap Data</button>
        </div>
        <div>
          <label>
            Import Data (JSON):
            <textarea value={importData} onChange={handleImportChange}></textarea>
          </label>
          <button onClick={() => handleImportData('compost')}>Import Compost Data</button>
          <button onClick={() => handleImportData('foodScrap')}>Import Food Scrap Data</button>
        </div>
      </div>
    </div>
  );
}

export default About;
