import React from 'react';
import './Home.css';
import composter1 from '../assets/images/composter1.jpg';
import heroImage from '../assets/images/hero-image.jpg';
import composter2 from '../assets/images/composter2.jpg';
import composter3 from '../assets/images/composter3.jpg';
import dataVisualization from '../assets/images/data-visualization.jpg';
import carrots from '../assets/images/carrots.jpg';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section" data-aos="fade-up">
        <h1>Welcome to the Room N9 Special Ed Elyse Rynhoud Composter Project</h1>
        <p className="hero-subtitle">Exploring Sustainable Solutions with Ms. Rynhoud's Special Ed Class</p>
        <img src={heroImage} alt="Composter Project" className="hero-image" />
      </header>

      <section className="project-details" data-aos="fade-up">
        <h2>About the Project</h2>
        <div className="composter-images" data-aos="fade-right">
          <img src={composter1} alt="Composter 1" />
          <img src={composter2} alt="Composter 2" />
          <img src={composter3} alt="Composter 3" />
        </div>
      </section>

      <section className="website-info" data-aos="fade-up">
        <h2>Project Website</h2>
        <img src={dataVisualization} alt="Data Visualization" className="data-image" />
      </section>

      <section className="project-goals" data-aos="fade-up">
        <h2>Project Goals</h2>
        <ul>
          <li>Improve plant growth</li>
          <li>Enhance soil quality</li>
          <li>Promote sustainable practices</li>
        </ul>
        <img src={carrots} alt="Growing Carrots" className="carrot-image" />
      </section>

      <footer className="footer" data-aos="fade-in">
        <p>2024 Room N9 Special Ed Elyse Rynhoud Composter Project.</p>
      </footer>
    </div>
  );
}

export default Home;
