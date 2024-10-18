import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import './DataVisualization.css';

function DataVisualization({ type }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = type === 'plant' ? 'https://new-backend-app-35dbde982dde.herokuapp.com/plant-data' 
                : type === 'foodscrap' ? 'https://new-backend-app-35dbde982dde.herokuapp.com/food-scrap-data'
                : 'https://new-backend-app-35dbde982dde.herokuapp.com/compost-data';

    axios.get(url)
      .then(response => {
        if (type === 'plant') {
          const composterHeights = response.data.reduce((acc, curr) => {
            const composter = curr.composter;
            const height = Number(curr.carrotHeight);
            if (!acc[composter]) {
              acc[composter] = { totalHeight: 0, count: 0 };
            }
            acc[composter].totalHeight += height;
            acc[composter].count += 1;
            return acc;
          }, {});

          const averageHeights = Object.keys(composterHeights).map(composter => ({
            composter,
            averageHeight: composterHeights[composter].totalHeight / composterHeights[composter].count
          }));

          setData(averageHeights);
        } else if (type === 'foodscrap') {
          const totalFoodScrap = response.data.reduce((acc, curr) => acc + Number(curr.foodScrapSaved), 0);
          setData([{ name: 'Total Food Scraps Saved', foodScrapSaved: totalFoodScrap }]);
        } else {
          const composterData = response.data.reduce((acc, curr) => {
            const index = acc.findIndex(item => item.composter === curr.composter);
            if (index === -1) {
              acc.push({ composter: curr.composter, compostProduced: Number(curr.compostProduced) });
            } else {
              acc[index].compostProduced += Number(curr.compostProduced);
            }
            return acc;
          }, []);
          setData(composterData);
        }
      })
      .catch(error => console.error('Error:', error));
  }, [type]);

  return (
    <div className="data-visualization">
      <h2>{type === 'plant' ? 'Average Carrot Height' : type === 'foodscrap' ? 'Food Scraps Saved' : 'Compost Production'}</h2>
      <BarChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={type === 'plant' ? 'composter' : type === 'foodscrap' ? 'name' : 'composter'} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={type === 'plant' ? 'averageHeight' : type === 'foodscrap' ? 'foodScrapSaved' : 'compostProduced'} fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default DataVisualization;
