import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#website">Website</a></li>
          <li><a href="#goals">Goals</a></li>
          <li><a href="#data-submission">Data Submission</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
        <p>&copy; 2024 Calmposting Composter Project</p>
      </div>
    </footer>
  );
}

export default Footer;
