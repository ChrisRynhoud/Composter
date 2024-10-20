import React, { useState } from 'react';
import axios from 'axios';
import GraphsSection from './GraphsSection';
import './PlantData.css';

function PlantData() {
  const [selectedGraph, setSelectedGraph] = useState('Compost Production');
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');
  const [plantData, setPlantData] = useState({ carrotHeight: '', composter: '1', date: '' });
  const [composterData, setComposterData] = useState({ composter: '1', compostProduced: '', date: '' });
  const [foodScrapData, setFoodScrapData] = useState({ foodScrapSaved: '', date: '' });

  const handlePlantChange = (e) => setPlantData({ ...plantData, [e.target.name]: e.target.value });
  const handleComposterChange = (e) => setComposterData({ ...composterData, [e.target.name]: e.target.value });
  const handleFoodScrapChange = (e) => setFoodScrapData({ ...foodScrapData, [e.target.name]: e.target.value });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let url;
    let data;
    if (formType === 'Carrot Height') {
      url = 'https://new-backend-app-35dbde982dde.herokuapp.com/submit-plant-data';
      data = plantData;
    } else if (formType === 'Compost Produced') {
      url = 'https://new-backend-app-35dbde982dde.herokuapp.com/submit-compost-data';
      data = composterData;
    } else if (formType === 'Food Scrap Saved') {
      url = 'https://new-backend-app-35dbde982dde.herokuapp.com/submit-food-scrap-data';
      data = foodScrapData;
    }
    axios.post(url, data).then(response => alert(response.data)).catch(error => console.error('Error:', error));
  };

  return (
    <div className="plant-container">
      <div className="graph-header">
        <select value={selectedGraph} onChange={(e) => setSelectedGraph(e.target.value)}>
          <option value="Compost Production">Compost Production</option>
          <option value="Food Scraps Saved">Food Scraps Saved</option>
          <option value="Average Carrot Height">Average Carrot Height</option>
        </select>
        <button onClick={() => setShowForm(!showForm)}>+</button>
      </div>
      
      <GraphsSection selectedGraph={selectedGraph} />

      {showForm && (
        <div className="data-submission">
          <select value={formType} onChange={(e) => setFormType(e.target.value)}>
            <option value="">Select Data Type</option>
            <option value="Carrot Height">Carrot Height</option>
            <option value="Compost Produced">Compost Produced</option>
            <option value="Food Scrap Saved">Food Scrap Saved</option>
          </select>

          {formType && (
            <form onSubmit={handleFormSubmit}>
              {formType === 'Carrot Height' && (
                <>
                  <label>
                    Carrot Height:
                    <input type="number" name="carrotHeight" value={plantData.carrotHeight} onChange={handlePlantChange} required />
                  </label>
                  <label>
                    Composter:
                    <select name="composter" value={plantData.composter} onChange={handlePlantChange}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </label>
                  <label>
                    Date:
                    <input type="date" name="date" value={plantData.date} onChange={handlePlantChange} required />
                  </label>
                </>
              )}
              {formType === 'Compost Produced' && (
                <>
                  <label>
                    Composter:
                    <select name="composter" value={composterData.composter} onChange={handleComposterChange}>
                      <option value="1">Electric Composter (Reencle)</option>
                      <option value="2">Worm Bin</option>
                      <option value="3">Tumbler</option>
                    </select>
                  </label>
                  <label>
                    Compost Produced:
                    <input type="number" name="compostProduced" value={composterData.compostProduced} onChange={handleComposterChange} />
                  </label>
                  <label>
                    Date:
                    <input type="date" name="date" value={composterData.date} onChange={handleComposterChange} />
                  </label>
                </>
              )}
              {formType === 'Food Scrap Saved' && (
                <>
                  <label>
                    Food Scrap Saved:
                    <input type="number" name="foodScrapSaved" value={foodScrapData.foodScrapSaved} onChange={handleFoodScrapChange} />
                  </label>
                  <label>
                    Date:
                    <input type="date" name="date" value={foodScrapData.date} onChange={handleFoodScrapChange} />
                  </label>
                </>
              )}
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default PlantData;
