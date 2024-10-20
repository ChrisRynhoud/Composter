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
          <li><NavLink to="/plantdata" activeClassName="active">Plant Data</NavLink></li>
          <li>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
            <ul>
              <li><NavLink to="/service1">Service 1</NavLink></li>
              <li><NavLink to="/service2">Service 2</NavLink></li>
              <li><NavLink to="/service3">Service 3</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </div>
      <div className="bottom-row">
        <ul>
          <li><NavLink to="/option1" activeClassName="active">Option 1</NavLink></li>
          <li><NavLink to="/option2" activeClassName="active">Option 2</NavLink></li>
          <li><NavLink to="/option3" activeClassName="active">Option 3</NavLink></li>
          <li><NavLink to="/option4" activeClassName="active">Option 4</NavLink></li>
          <li><NavLink to="/option5" activeClassName="active">Option 5</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
