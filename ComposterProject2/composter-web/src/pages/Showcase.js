import React, { useState } from 'react';
import './Showcase.css';

// Importing placeholders
import placeholder1 from '../assets/images/setUpGardening.jpg';
import placeholder2 from '../assets/images/AllComposters.jpg';
import placeholder3 from '../assets/images/wormsarrived.jpg';
import placeholder4 from '../assets/images/wormmixing.jpg';
import placeholder5 from '../assets/images/comingtogether.jpg';
import placeholder6 from '../assets/images/1.jpg';
import placeholder7 from '../assets/images/2.jpg';
import placeholder8 from '../assets/images/3.jpg';
import placeholder9 from '../assets/images/4.jpg';
import placeholder10 from '../assets/images/5.jpg';
import placeholder11 from '../assets/images/6.jpg';
import placeholder12 from '../assets/images/7.jpg';
import placeholder13 from '../assets/images/8.jpg';
import placeholder14 from '../assets/images/9.jpg';
import placeholder15 from '../assets/images/10.jpg';
import placeholder16 from '../assets/images/11.jpg';
import placeholder17 from '../assets/images/12.jpg';
import placeholder18 from '../assets/images/13.jpg';
import placeholder19 from '../assets/images/14.jpg';
import placeholder20 from '../assets/images/15.jpg';
import placeholder21 from '../assets/images/16.jpg';
import placeholder22 from '../assets/images/17.jpg';
import placeholder23 from '../assets/images/18.jpg';
import placeholder24 from '../assets/images/19.jpg';
import placeholder25 from '../assets/images/20.jpg';
import placeholder26 from '../assets/images/21.jpg';
import placeholder27 from '../assets/images/22.jpg';
import placeholder28 from '../assets/images/23.jpg';
import placeholder29 from '../assets/images/24.jpg';
import placeholder30 from '../assets/images/25.jpg';

const Showcase = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const gallery = [
    { src: placeholder1, name: 'Gardening Setup!', date: '10/30/2024', tidbit: 'The students set up the gardening area!' },
    { src: placeholder2, name: 'Our Composters Arrived!', date: '10/30/2024', tidbit: 'All of our composters have finally arrived!' },
    { src: placeholder3, name: 'Ooh Worms!', date: '11/5/2024', tidbit: 'A bunch of our worms showed up!' },
    { src: placeholder4, name: 'Stir it Up!', date: '11/5/2024', tidbit: 'Ms. Elyse is showing us how to stir up some worm paydirt!' },
    { src: placeholder5, name: 'Things Are Really Coming Together!', date: '11/5/2024', tidbit: 'Wow, everything is really shaping up here!' },
    { src: placeholder6, name: 'Bugs Are Attacking!', date: '04/17/2025', tidbit: 'A bunch of bugs are eating our plants!' },
    { src: placeholder7, name: 'Our Planter Boxes Are Beautiful!', date: '05/29/2025', tidbit: 'Look at all the plants we are growing!' },
    { src: placeholder8, name: 'Our Succulents Are Healthy!', date: '11/15/2024', tidbit: 'Look at how healthy our succulents are.' },
    { src: placeholder9, name: 'Flowers Are Blooming!', date: '03/12/2025', tidbit: 'Look at all of our flowers blooming.' },
    { src: placeholder10, name: 'Plenty Of Rain!', date: '12/16/2024', tidbit: 'All of our plants are getting tons of rain.' },
    { src: placeholder11, name: 'Lush Garden!', date: '03/12/2025', tidbit: 'Look at how lush and full our garden is!' },
    { src: placeholder12, name: 'Cauliflower Is Coming Along!', date: '03/12/2025', tidbit: 'Our cauliflower is looking healthier than ever.' },
    { src: placeholder13, name: 'Pistachio Shells!', date: '04/17/2025', tidbit: 'Pistachio shells are great for making soil healthy!' },
    { src: placeholder14, name: 'The Mountains!', date: '01/06/2025', tidbit: 'Look how close our garden is to our beautiful mountains!' },
    { src: placeholder15, name: 'Pink Flowers Are Blooming!', date: '01/06/2025', tidbit: 'Look at these beautiful pink flowers that are blooming.' },
    { src: placeholder16, name: 'Beautiful Red Plant!', date: '01/06/2025', tidbit: 'Look at the beautiful red stem of this plant.' },
    { src: placeholder17, name: 'Picking Some Produce!', date: '01/21/2025', tidbit: 'We are just picking some crops to taste test!' },
    { src: placeholder18, name: 'Loading The Compost!', date: '11/13/2024', tidbit: 'Ms. Elyse is loading up some compost!' },
    { src: placeholder19, name: 'I Just Cannot Look Away!', date: '11/13/2024', tidbit: 'It is hard on the eyes, but great on the soil!' },
    { src: placeholder20, name: 'These Worms Are Chewing Away!', date: '11/13/2024', tidbit: 'Look at one of our helper worms who makes our compost!' },
    { src: placeholder21, name: 'Look How Much We Saved!', date: '11/13/2024', tidbit: 'Look at all these foods scraps that would have gone to waste!' },
    { src: placeholder22, name: 'Pink Cauliflower!', date: '01/31/2025', tidbit: 'Look at the pink hue on our cauliflower!' },
    { src: placeholder23, name: 'Purple Petals!', date: '01/30/2025', tidbit: 'Well these are just the most gorgeous flowers ever!' },
    { src: placeholder24, name: 'Our Planter Boxes Are Stuffed!', date: '02/07/2025', tidbit: 'Look how full our planter boxes have become!' },
    { src: placeholder25, name: 'Baby Plants!', date: '11/18/2024', tidbit: 'I wish they would stay this small because they are adorable!' },
    { src: placeholder26, name: 'Stir Fry Time!', date: '01/29/2025', tidbit: 'We are cutting up our crops to make stir fry!' },
    { src: placeholder27, name: 'Bok Choy Time!', date: '02/13/2025', tidbit: 'This bok choy we grew is going to be so yummy!' },
    { src: placeholder28, name: 'Checking It Out!', date: '11/15/2024', tidbit: 'Ms. Elyse is checking up on our baby crops!' },
    { src: placeholder29, name: 'Bok Choy Galore!', date: '02/12/2025', tidbit: 'I think we hit the bok choy motherload!' },
    { src: placeholder30, name: 'Loving The Compost!', date: '11/18/2024', tidbit: 'Our crops are just loving this compost!' },
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

