import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navigation.css';
import logo from './assets/images/logo.gif';

function Navigation() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchQuery.toLowerCase();

    const keywordToRouteMap = {
      'about': '/about',
      'project': '/about',
      'website': '/about',
      'goals': '/about',
      'data submission': '/about',
      'funding': '/about',
      'composting': '/electric',
      'electric composter': '/electric',
      'worm bin': '/wormbin',
      'tumbler': '/tumbler',
      'data': '/plantdata',
      'contact': '/contact',
      'resources': '/resources',
      'references': '/references',
      'timeline': '/timeline',
      'showcase': '/showcase',
      'compostle': '/compostle'
    };

    for (const keyword in keywordToRouteMap) {
      if (query.includes(keyword)) {
        navigate(keywordToRouteMap[keyword]);
        break;
      }
    }
  };

  return (
    <nav>
      <div className="top-row">
        <div className="logo">
          <NavLink exact to="/" className="logo-link">
            <img src={logo} alt="Calmposting Logo" className="logo-img" />
          </NavLink>
        </div>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li className="dropdown">
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <ul className="dropdown-menu">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/showcase">Showcase</NavLink></li>
              <li><NavLink to="/timeline">Timeline</NavLink></li>
            </ul>
          </li>
          <li className="dropdown">
            <NavLink to="/plantdata" activeClassName="active">Data</NavLink>
            <ul className="dropdown-menu">
              <li><NavLink to="/plantdata">Data</NavLink></li>
              <li><NavLink to="/compostle">Compostle</NavLink></li>
              <li><NavLink to="/resources">Resources</NavLink></li>
              <li><NavLink to="/references">References</NavLink></li>
            </ul>
          </li>
          <li className="dropdown">
            <NavLink to="/electric" activeClassName="active">Composters</NavLink>
            <ul className="dropdown-menu">
              <li><NavLink to="/electric">Electric</NavLink></li>
              <li><NavLink to="/wormbin">Worm Bin</NavLink></li>
              <li><NavLink to="/tumbler">Tumbler</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
