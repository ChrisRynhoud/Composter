import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/plantdata">Data</NavLink></li>
          <li><NavLink to="/electric">Composting</NavLink></li>
          <li><NavLink to="/wormbin">Worm Bin</NavLink></li>
          <li><NavLink to="/tumbler">Tumbler</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/showcase">Showcase</NavLink></li>
          <li><NavLink to="/timeline">Timeline</NavLink></li>
          <li><NavLink to="/compostle">Compostle</NavLink></li>
          <li><NavLink to="/resources">Resources</NavLink></li>
          <li><NavLink to="/references">References</NavLink></li>
        </ul>
        <p>2024 Calmposting Composter Project</p>
      </div>
    </footer>
  );
}

export default Footer;
