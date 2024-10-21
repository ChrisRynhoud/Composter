import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import PlantData from './pages/PlantData';
import Electric from './pages/Electric';
import WormBin from './pages/WormBin';
import Tumbler from './pages/Tumbler';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import References from './pages/References';
import Timeline from './pages/Timeline';
import Showcase from './pages/Showcase';
import Compostle from './pages/Compostle';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plantdata" element={<PlantData />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/wormbin" element={<WormBin />} />
        <Route path="/tumbler" element={<Tumbler />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/references" element={<References />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/compostle" element={<Compostle />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
