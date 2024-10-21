import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './ScrollToTop';  // Import ScrollToTop

AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />  // Use ScrollToTop
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
