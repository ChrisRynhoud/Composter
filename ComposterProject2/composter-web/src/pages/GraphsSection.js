import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import axios from 'axios';
import './GraphsSection.css';

function GraphsSection({ selectedGraph }) {
  const [compostData, setCompostData] = useState([]);
  const [foodScrapData, setFoodScrapData] = useState([]);
  const [plantData, setPlantData] = useState([]);

  const composterNames = {
    1: "Electric Composter (Reencle)",
    2: "Worm Bin",
    3: "Tumbler",
    4: "Control" // Only for plantData
  };

  useEffect(() => {
    const config = { headers: { 'Access-Control-Allow-Origin': '*' } };
    axios.get('https://new-backend-app-35dbde982dde.herokuapp.com/compost-data', config)
      .then(response => {
        console.log('Raw Compost Data:', response.data);
        setCompostData(aggregateCompostData(response.data));
      })
      .catch(error => console.error('Error fetching compost data:', error));

    axios.get('https://new-backend-app-35dbde982dde.herokuapp.com/food-scrap-data', config)
      .then(response => {
        console.log('Food Scrap Data:', response.data);
        setFoodScrapData(aggregateAndSortFoodScrapData(response.data));
      })
      .catch(error => console.error('Error fetching food scrap data:', error));

    axios.get('https://new-backend-app-35dbde982dde.herokuapp.com/plant-data', config)
      .then(response => {
        console.log('Plant Data:', response.data);
        setPlantData(aggregatePlantData(response.data));
      })
      .catch(error => console.error('Error fetching plant data:', error));
  }, []);

  const aggregateCompostData = (data) => {
    const aggregated = data.reduce((acc, curr) => {
      const composter = curr.composter || 'Unknown';
      const produced = Number(curr.compostProduced) || 0;
      if (!acc[composter]) {
        acc[composter] = { composter: composterNames[composter], compostProduced: 0 };
      }
      acc[composter].compostProduced += produced;
      return acc;
    }, {});
    return Object.values(aggregated);
  };

  const aggregateAndSortFoodScrapData = (data) => {
    const aggregated = data.reduce((acc, curr) => {
      const date = curr.date || 'Unknown';
      const foodScrapSaved = Number(curr.foodScrapSaved) || 0;
      if (!acc[date]) {
        acc[date] = { date, foodScrapSaved: 0 };
      }
      acc[date].foodScrapSaved += foodScrapSaved;
      return acc;
    }, {});
    return Object.values(aggregated).sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const aggregatePlantData = (data) => {
    const aggregated = data.reduce((acc, curr) => {
      const composter = curr.composter || 'Unknown';
      const height = Number(curr.carrotHeight) || 0;
      if (!acc[composter]) {
        acc[composter] = { composter: composterNames[composter], totalHeight: 0, count: 0 };
      }
      acc[composter].totalHeight += height;
      acc[composter].count += 1;
      return acc;
    }, {});

    const averageHeightData = Object.values(aggregated).map(item => ({
      composter: item.composter,
      carrotHeight: item.totalHeight / item.count
    }));
    return averageHeightData;
  };

  return (
    <div className="graphs-section">
      {selectedGraph === 'Compost Production' && (
        <>
          {console.log('Rendering Compost Data:', compostData)}
          <BarChart width={800} height={400} data={compostData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="composter" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="compostProduced" fill="#82ca9d" />
          </BarChart>
        </>
      )}
      {selectedGraph === 'Food Scraps Saved' && (
        <>
          {console.log('Rendering Food Scrap Data:', foodScrapData)}
          <LineChart width={800} height={400} data={foodScrapData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="foodScrapSaved" stroke="#8884d8" />
          </LineChart>
        </>
      )}
      {selectedGraph === 'Average Carrot Height' && (
        <>
          {console.log('Rendering Plant Data:', plantData)}
          <BarChart width={800} height={400} data={plantData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="composter" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="carrotHeight" fill="#82ca9d" />
          </BarChart>
        </>
      )}
    </div>
  );
}

export default GraphsSection;
