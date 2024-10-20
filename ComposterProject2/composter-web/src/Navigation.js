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

    // Define keyword mapping to page routes
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

    // Check if search query matches any keywords
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
