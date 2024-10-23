import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import calmImage from '../assets/images/calm.jpg';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Home() {
  const [totalFoodScraps, setTotalFoodScraps] = useState(0);

  useEffect(() => {
    axios.get('https://new-backend-app-35dbde982dde.herokuapp.com/food-scrap-data')
      .then(response => {
        const total = response.data.reduce((acc, curr) => acc + (curr.foodScrapSaved ? Number(curr.foodScrapSaved) : 0), 0); // Direct access like GraphsSection.js
        console.log('Total Food Scraps:', total);
        setTotalFoodScraps(total);
      })
      .catch(error => console.error('Error fetching food scrap data:', error));
  }, []);

  const data = [{ name: 'Total Food Scraps Saved From the Landfill', totalFoodScraps }];

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to the Calmposting Composter Project</h1>
        <p className="hero-subtitle">Promoting Sustainable Solutions in Education</p>
        <img src={calmImage} alt="Calm" className="hero-image" />
      </header>
      <div className="content">
        <section className="introduction">
          <h2>About Our Project</h2>
          <p>Our project aims to reduce green waste in schools by composting kitchen and cooking scraps right in the classroom.</p>
        </section>
        <section className="graph-section">
          <h2>Total Food Scraps Saved From the Landfill</h2>
          <BarChart width={800} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalFoodScraps" fill="#82ca9d" />
          </BarChart>
        </section>
        <section className="gallery">
          <div className="gallery-item">
            <img src={image1} alt="Gallery 1" />
            <p>Exploring composting techniques in the classroom.</p>
          </div>
          <div className="gallery-item">
            <img src={image2} alt="Gallery 2" />
            <p>Students learning about sustainability.</p>
          </div>
          <div className="gallery-item">
            <img src={image3} alt="Gallery 3" />
            <p>Turning waste into valuable compost.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
