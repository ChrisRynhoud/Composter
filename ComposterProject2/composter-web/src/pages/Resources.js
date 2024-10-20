import React from 'react';
import './Resources.css';
import templateImage from '../assets/images/template.jpg';
import resource1Image from '../assets/images/resource1.jpg';
import resource2Image from '../assets/images/resource2.jpg';
import resource3Image from '../assets/images/resource3.jpg';

function Resources() {
  return (
    <div className="resources-container">
      <h1>Composting Resources</h1>
      <div className="template-download">
        <h2>Compost Data Collection Template</h2>
        <p>Download this template to start collecting your own compost data:</p>
        <a href={templateImage} download>
          <img src={templateImage} alt="Template" className="template-image" />
        </a>
      </div>

      <div className="resource-list">
        <h2>Educational Resources</h2>
        <div className="resource">
          <img src={resource1Image} alt="Resource 1" className="resource-image" />
          <div className="resource-info">
            <h3><a href="https://www.epa.gov/recycle/composting-home" target="_blank" rel="noopener noreferrer">Composting at Home - EPA</a></h3>
            <p>A comprehensive guide on the basics of composting, perfect for beginners.</p>
          </div>
        </div>

        <div className="resource">
          <img src={resource2Image} alt="Resource 2" className="resource-image" />
          <div className="resource-info">
            <h3><a href="https://www.usda.gov/peoples-garden/food-access-food-waste/composting" target="_blank" rel="noopener noreferrer">Composting - USDA</a></h3>
            <p>Learn about different composting methods and how to get started with composting at home.</p>
          </div>
        </div>

        <div className="resource">
          <img src={resource3Image} alt="Resource 3" className="resource-image" />
          <div className="resource-info">
            <h3><a href="https://helpmecompost.com/compost/materials/what-can-you-compost/" target="_blank" rel="noopener noreferrer">What Can You Compost?</a></h3>
            <p>An extensive list of composting ingredients to help you figure out what can and cannot be composted.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
