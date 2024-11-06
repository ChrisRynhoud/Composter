import React, { useState } from 'react';
import './Showcase.css';

// Importing placeholders
import placeholder1 from '../assets/images/setUpGardening.jpg';
import placeholder2 from '../assets/images/AllComposters.jpg';
import placeholder3 from '../assets/images/wormsarrived.jpg';
import placeholder4 from '../assets/images/wormmixing.jpg';
import placeholder5 from '../assets/images/comingtogether.jpg';
import placeholder6 from '../assets/images/placeholder.jpg';
import placeholder7 from '../assets/images/placeholder.jpg';
import placeholder8 from '../assets/images/placeholder.jpg';
import placeholder9 from '../assets/images/placeholder.jpg';
import placeholder10 from '../assets/images/placeholder.jpg';
import placeholder11 from '../assets/images/placeholder.jpg';
import placeholder12 from '../assets/images/placeholder.jpg';
import placeholder13 from '../assets/images/placeholder.jpg';
import placeholder14 from '../assets/images/placeholder.jpg';
import placeholder15 from '../assets/images/placeholder.jpg';
import placeholder16 from '../assets/images/placeholder.jpg';
import placeholder17 from '../assets/images/placeholder.jpg';
import placeholder18 from '../assets/images/placeholder.jpg';
import placeholder19 from '../assets/images/placeholder.jpg';
import placeholder20 from '../assets/images/placeholder.jpg';
import placeholder21 from '../assets/images/placeholder.jpg';
import placeholder22 from '../assets/images/placeholder.jpg';
import placeholder23 from '../assets/images/placeholder.jpg';
import placeholder24 from '../assets/images/placeholder.jpg';
import placeholder25 from '../assets/images/placeholder.jpg';
import placeholder26 from '../assets/images/placeholder.jpg';
import placeholder27 from '../assets/images/placeholder.jpg';
import placeholder28 from '../assets/images/placeholder.jpg';
import placeholder29 from '../assets/images/placeholder.jpg';
import placeholder30 from '../assets/images/placeholder.jpg';

const Showcase = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const gallery = [
    { src: placeholder1, name: 'Gardening Setup!', date: '10/30/2024', tidbit: 'The students set up the gardening area!' },
    { src: placeholder2, name: 'Our Composters Arrived!', date: '10/30/2024', tidbit: 'All of our composters have finally arrived!' },
    { src: placeholder3, name: 'Ooh Worms!', date: '11/5/2024', tidbit: 'A bunch of our worms showed up!' },
    { src: placeholder4, name: 'Stir it Up!', date: '11/5/2024', tidbit: 'Ms. Elyse is showing us how to stir up some worm paydirt!' },
    { src: placeholder5, name: 'Things Are Really Coming Together!', date: '11/5/2024', tidbit: 'Wow, everything is really shaping up here!' },
    { src: placeholder6, name: 'Photo 6', date: '06/01/2021', tidbit: 'A vibrant sunset.' },
    { src: placeholder7, name: 'Photo 7', date: '07/01/2021', tidbit: 'A colorful market.' },
    { src: placeholder8, name: 'Photo 8', date: '08/01/2021', tidbit: 'A peaceful lake.' },
    { src: placeholder9, name: 'Photo 9', date: '09/01/2021', tidbit: 'A historic landmark.' },
    { src: placeholder10, name: 'Photo 10', date: '10/01/2021', tidbit: 'A lively festival.' },
    { src: placeholder11, name: 'Photo 11', date: '11/01/2021', tidbit: 'A majestic waterfall.' },
    { src: placeholder12, name: 'Photo 12', date: '12/01/2021', tidbit: 'A cozy village.' },
    { src: placeholder13, name: 'Photo 13', date: '13/01/2021', tidbit: 'A mysterious cave.' },
    { src: placeholder14, name: 'Photo 14', date: '14/01/2021', tidbit: 'A thriving city.' },
    { src: placeholder15, name: 'Photo 15', date: '15/01/2021', tidbit: 'A charming street.' },
    { src: placeholder16, name: 'Photo 16', date: '16/01/2021', tidbit: 'A vibrant garden.' },
    { src: placeholder17, name: 'Photo 17', date: '17/01/2021', tidbit: 'A bustling port.' },
    { src: placeholder18, name: 'Photo 18', date: '18/01/2021', tidbit: 'A serene river.' },
    { src: placeholder19, name: 'Photo 19', date: '19/01/2021', tidbit: 'A picturesque valley.' },
    { src: placeholder20, name: 'Photo 20', date: '20/01/2021', tidbit: 'A grand palace.' },
    { src: placeholder21, name: 'Photo 21', date: '21/01/2021', tidbit: 'A wild safari.' },
    { src: placeholder22, name: 'Photo 22', date: '22/01/2021', tidbit: 'A quiet park.' },
    { src: placeholder23, name: 'Photo 23', date: '23/01/2021', tidbit: 'A towering skyscraper.' },
    { src: placeholder24, name: 'Photo 24', date: '24/01/2021', tidbit: 'A rustic farm.' },
    { src: placeholder25, name: 'Photo 25', date: '25/01/2021', tidbit: 'A golden desert.' },
    { src: placeholder26, name: 'Photo 26', date: '26/01/2021', tidbit: 'A mysterious island.' },
    { src: placeholder27, name: 'Photo 27', date: '27/01/2021', tidbit: 'A hidden waterfall.' },
    { src: placeholder28, name: 'Photo 28', date: '28/01/2021', tidbit: 'A lively street market.' },
    { src: placeholder29, name: 'Photo 29', date: '29/01/2021', tidbit: 'A majestic castle.' },
    { src: placeholder30, name: 'Photo 30', date: '30/01/2021', tidbit: 'A peaceful meadow.' },
  ];

  const handleClick = (src) => { 
    setModalImage(src); 
    setModalVisible(true); 
  };

  const closeModal = () => { 
    setModalVisible(false); 
  };

  
  return (
    <div>
      <div className="advanced-gallery">
        {gallery.map((item, index) => (
          <div key={index} className="advanced-photo" onClick={() => handleClick(item.src)}>
            <img src={item.src} alt={item.name} />
            <div className="advanced-info">
              <h2>{item.name}</h2>
              <p>{item.date}</p> 
              <p>{item.tidbit}</p>
            </div>
          </div>
        ))}
      </div>
      
      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={modalImage} alt="" />
        </div>
      )}
    </div>
  );
};

export default Showcase;

