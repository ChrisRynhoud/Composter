import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logo from './assets/images/logo.gif'; // Ensure this path is correct and the gif is in the assets folder

function Navigation() {
  return (
    <nav>
      <div className="top-row">
        <div className="logo">
          <NavLink exact to="/" className="logo-link">
            <img src={logo} alt="Calmposting Logo" className="logo-img" />
          </NavLink>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/plantdata" activeClassName="active">Data</NavLink></li>
          <li className="dropdown">
            <NavLink to="/electric" activeClassName="active">Composting</NavLink>
            <ul className="dropdown-menu">
              <li><NavLink to="/electric">Electric Composter</NavLink></li>
              <li><NavLink to="/wormbin">Worm Bin</NavLink></li>
              <li><NavLink to="/tumbler">Tumbler</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </div>
      <div className="bottom-row">
        <ul>
          <li><NavLink to="/showcase" activeClassName="active">Showcase</NavLink></li>
          <li><NavLink to="/timeline" activeClassName="active">Timeline</NavLink></li>
          <li><NavLink to="/compostle" activeClassName="active">Compostle</NavLink></li>
          <li><NavLink to="/resources" activeClassName="active">Resources</NavLink></li>
          <li><NavLink to="/references" activeClassName="active">References</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
