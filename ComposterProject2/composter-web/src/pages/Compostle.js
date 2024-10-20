import React, { useState, useEffect } from 'react';
import './Compostle.css';
import fruitImage1 from '../assets/images/fruit1.jpg';
import fruitImage2 from '../assets/images/fruit2.jpg';
import fruitImage3 from '../assets/images/fruit3.jpg';
import fruitImage4 from '../assets/images/fruit4.jpg';
import fruitImage5 from '../assets/images/fruit5.jpg';
import metalImage1 from '../assets/images/metal1.jpg';
import metalImage2 from '../assets/images/metal2.jpg';
import metalImage3 from '../assets/images/metal3.jpg';
import metalImage4 from '../assets/images/metal4.jpg';
import metalImage5 from '../assets/images/metal5.jpg';
import trashBinImage from '../assets/images/trashbin.jpg';
import compostBinImage from '../assets/images/compostbin.jpg';

const items = [
  { name: 'Fruit 1', type: 'compost', image: fruitImage1 },
  { name: 'Fruit 2', type: 'compost', image: fruitImage2 },
  { name: 'Fruit 3', type: 'compost', image: fruitImage3 },
  { name: 'Fruit 4', type: 'compost', image: fruitImage4 },
  { name: 'Fruit 5', type: 'compost', image: fruitImage5 },
  { name: 'Metal 1', type: 'trash', image: metalImage1 },
  { name: 'Metal 2', type: 'trash', image: metalImage2 },
  { name: 'Metal 3', type: 'trash', image: metalImage3 },
  { name: 'Metal 4', type: 'trash', image: metalImage4 },
  { name: 'Metal 5', type: 'trash', image: metalImage5 },
];

function Compostle() {
  const [currentItem, setCurrentItem] = useState(items[0]);
  const [points, setPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(70);  // 1:10 is 70 seconds
  const [streak, setStreak] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleDrop = (e, binType) => {
    e.preventDefault();
    const draggedItemType = e.dataTransfer.getData('type');
    if (draggedItemType === binType) {
      setPoints(points + 10 * multiplier);
      setStreak(streak + 1);
      if (streak + 1 >= 3) {
        setMultiplier(multiplier + 1);
      }
    } else {
      setPoints(points - 5);
      setStreak(0);
      setMultiplier(1);
    }
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setCurrentItem(randomItem);
  };

  const handleDragStart = (e, type) => {
    e.dataTransfer.setData('type', type);
  };

  return (
    <div className="compostle-container">
      <h1>Compostle</h1>
      <p>Drag the items to the correct bin.</p>
      <div className="game-info">
        <p>Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</p>
        <p>Points: {points}</p>
        <p>Streak: {streak}</p>
        <p>Multiplier: {multiplier}</p>
      </div>
      <div className="game-board">
        <img
          src={currentItem.image}
          alt={currentItem.name}
          className="item"
          draggable="true"
          onDragStart={(e) => handleDragStart(e, currentItem.type)}
        />
        <div className="bins">
          <div
            className="bin compost-bin"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, 'compost')}
          >
            <img src={compostBinImage} alt="Compost Bin" />
          </div>
          <div
            className="bin trash-bin"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, 'trash')}
          >
            <img src={trashBinImage} alt="Trash Bin" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compostle;
