import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logo from '../assets/logo.png'; // Make sure to replace with your logo path

function Navigation() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Calmposting Logo" />
        <NavLink exact to="/">Calmposting</NavLink>
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
    </nav>
  );
}

export default Navigation;
