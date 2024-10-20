import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import axios from 'axios';
import './GraphsSection.css';

function GraphsSection() {
  const [compostData, setCompostData] = useState([]);
  const [foodScrapData, setFoodScrapData] = useState([]);
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    axios.get('https://new-backend-app-35dbde982dde.herokuapp.com/compost-data')
      .then(response => setCompostData(aggregateCompostData(response.data)))
      .catch(error => console.error('Error fetching compost data:', error));

    axios.get('https://new-backend-app-35dbde982dde.herokuapp.com/food-scrap-data')
      .then(response => setFoodScrapData(aggregateFoodScrapData(response.data)))
      .catch(error => console.error('Error fetching food scrap data:', error));

    axios.get('https://new-backend-app-35dbde982dde.herokuapp.com/plant-data')
      .then(response => setPlantData(aggregatePlantData(response.data)))
      .catch(error => console.error('Error fetching plant data:', error));
  }, []);

  const aggregateCompostData = (data) => {
    const aggregated = data.reduce((acc, curr) => {
      const composter = curr.composter;
      const produced = Number(curr.compostProduced);
      const index = acc.findIndex(item => item.composter === composter);
      if (index === -1) {
        acc.push({ composter, compostProduced: produced });
      } else {
        acc[index].compostProduced += produced;
      }
      return acc;
    }, []);
    return aggregated;
  };

  const aggregateFoodScrapData = (data) => {
    const aggregated = data.reduce((acc, curr) => {
      const date = curr.date;
      const foodScrapSaved = Number(curr.foodScrapSaved);
      const index = acc.findIndex(item => item.date === date);
      if (index === -1) {
        acc.push({ date, foodScrapSaved });
      } else {
        acc[index].foodScrapSaved += foodScrapSaved;
      }
      return acc;
    }, []);
    return aggregated;
  };

  const aggregatePlantData = (data) => {
    const aggregated = data.reduce((acc, curr) => {
      const composter = curr.composter;
      const height = Number(curr.carrotHeight);
      const index = acc.findIndex(item => item.composter === composter);
      if (index === -1) {
        acc.push({ composter, carrotHeight: height });
      } else {
        acc[index].carrotHeight += height;
      }
      return acc;
    }, []);
    return aggregated;
  };

  return (
    <div className="graphs-section">
      <h2>Compost Production</h2>
      <BarChart width={600} height={300} data={compostData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="composter" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="compostProduced" fill="#82ca9d" />
      </BarChart>

      <h2>Food Scraps Saved from Landfill</h2>
      <LineChart width={600} height={300} data={foodScrapData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="foodScrapSaved" stroke="#8884d8" />
      </LineChart>

      <h2>Average Carrot Height</h2>
      <BarChart width={600} height={300} data={plantData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="composter" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="carrotHeight" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default GraphsSection;
