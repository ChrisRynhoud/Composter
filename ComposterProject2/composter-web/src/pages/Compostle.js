import React, { useState, useEffect } from 'react';
import './Compostle.css';
import trashBinImage from '../assets/images/trashbin.jpg';
import compostBinImage from '../assets/images/compostbin.jpg';
import recyclingBinImage from '../assets/images/recyclingbin.jpg';

const items = [
  { name: 'Soap', type: 'trash', info: 'Soap goes into the trash as it is not typically recyclable.' },
  { name: 'Banana Peel', type: 'compost', info: 'Banana peel goes into compost. It is one of the healthiest compost materials.' },
  { name: 'Plastic Bottle', type: 'recycling', info: 'Plastic bottles should be recycled. They are one of the most common recyclable items.' },
  { name: 'Apple Core', type: 'compost', info: 'Apple cores can be composted. They break down easily and add nutrients to the soil.' },
  { name: 'Cardboard Box', type: 'recycling', info: 'Cardboard boxes should be recycled. They are a valuable source of paper fibers.' },
  { name: 'Tissue', type: 'trash', info: 'Used tissues go in the trash. They cannot be recycled or composted.' },
  { name: 'Glass Bottle', type: 'recycling', info: 'Glass bottles should be recycled. They can be melted down and reformed into new glass products.' },
  { name: 'Eggshells', type: 'compost', info: 'Eggshells are great for compost. They add calcium to the compost mixture.' },
  { name: 'Aluminum Can', type: 'recycling', info: 'Aluminum cans should be recycled. They are one of the easiest materials to recycle.' },
  { name: 'Pizza Box', type: 'trash', info: 'Greasy pizza boxes go in the trash. They cannot be recycled due to the oil and food residue.' },
  // Add more items here
  { name: 'Coffee Grounds', type: 'compost', info: 'Coffee grounds are rich in nitrogen and make excellent compost material.' },
{ name: 'Juice Carton', type: 'recycling', info: 'Juice cartons can be recycled along with other paper products.' },
{ name: 'Meat Scraps', type: 'trash', info: 'Meat scraps go in the trash as they can attract pests and create odors in compost.' },
{ name: 'Cereal Box', type: 'recycling', info: 'Cereal boxes should be recycled with paper products.' },
{ name: 'Potato Peels', type: 'compost', info: 'Potato peels are great for compost as they add valuable nutrients to the soil.' },
{ name: 'Styrofoam', type: 'trash', info: 'Styrofoam should go in the trash as it is not recyclable.' },
{ name: 'Yogurt Container', type: 'recycling', info: 'Clean yogurt containers can be recycled with other plastics.' },
{ name: 'Tea Bags', type: 'compost', info: 'Tea bags can be composted, adding organic matter to the compost.' },
{ name: 'Cheese Wrapper', type: 'trash', info: 'Cheese wrappers go in the trash as they are not typically recyclable.' },
{ name: 'Paper Towel', type: 'compost', info: 'Used paper towels can be composted as long as they are free of chemicals.' },
//20
{ name: 'Napkin', type: 'compost', info: 'Used napkins can be composted as long as they are free of chemicals.' },
{ name: 'Aluminum Foil', type: 'recycling', info: 'Clean aluminum foil can be recycled.' },
{ name: 'Paper Cup', type: 'trash', info: 'Paper cups go in the trash as they often contain plastic lining.' },
{ name: 'Bread Crust', type: 'compost', info: 'Bread crusts can be composted, adding organic matter to the compost.' },
{ name: 'Magazines', type: 'recycling', info: 'Magazines should be recycled with other paper products.' },
{ name: 'Milk Carton', type: 'recycling', info: 'Milk cartons can be recycled with other paper products.' },
{ name: 'Pizza Crust', type: 'compost', info: 'Pizza crusts can be composted, adding nutrients to the soil.' },
{ name: 'Bubble Wrap', type: 'trash', info: 'Bubble wrap goes in the trash as it is not typically recyclable.' },
{ name: 'Broken Dish', type: 'trash', info: 'Broken dishes should be disposed of in the trash.' },
{ name: 'Fruit Peels', type: 'compost', info: 'Fruit peels are excellent for compost as they break down easily and add nutrients.' },
//30
{ name: 'Cooked Pasta', type: 'compost', info: 'Cooked pasta can be composted as it adds organic matter to the compost.' },
{ name: 'Plastic Bag', type: 'trash', info: 'Plastic bags should be disposed of in the trash as they are not typically recyclable.' },
{ name: 'Cucumber Peel', type: 'compost', info: 'Cucumber peels are great for compost, adding nutrients to the soil.' },
{ name: 'Junk Mail', type: 'recycling', info: 'Junk mail should be recycled with other paper products.' },
{ name: 'Chicken Bones', type: 'trash', info: 'Chicken bones go in the trash as they can attract pests and create odors in compost.' },
{ name: 'Wine Bottle', type: 'recycling', info: 'Wine bottles should be recycled with glass products.' },
{ name: 'Plastic Cutlery', type: 'trash', info: 'Plastic cutlery goes in the trash as it is not typically recyclable.' },
{ name: 'Nut Shells', type: 'compost', info: 'Nut shells can be composted, adding valuable nutrients to the compost.' },
{ name: 'Envelopes', type: 'recycling', info: 'Envelopes can be recycled with paper products.' },
{ name: 'Shredded Paper', type: 'compost', info: 'Shredded paper can be composted, providing carbon to the compost mixture.' },
//40
{ name: 'Peanut Shells', type: 'compost', info: 'Peanut shells can be composted and provide great nutrients.' },
{ name: 'Ketchup Packet', type: 'trash', info: 'Ketchup packets go in the trash as they are not recyclable.' },
{ name: 'Orange Peel', type: 'compost', info: 'Orange peels are perfect for compost, adding organic matter.' },
{ name: 'Batteries', type: 'trash', info: 'Batteries should be disposed of properly in the trash, not recycling.' },
{ name: 'Pencil Shavings', type: 'compost', info: 'Pencil shavings are a good addition to compost.' },
{ name: 'Beer Bottle Cap', type: 'trash', info: 'Bottle caps go in the trash as they are not recyclable.' },
{ name: 'Coconut Shell', type: 'compost', info: 'Coconut shells are compostable and add bulk to compost.' },
{ name: 'Receipt', type: 'trash', info: 'Receipts often contain chemicals and go in the trash.' },
{ name: 'Candy Wrapper', type: 'trash', info: 'Candy wrappers belong in the trash as they are not recyclable.' },
{ name: 'Grass Clippings', type: 'compost', info: 'Grass clippings are excellent for compost and provide nitrogen.' },
//50
{ name: 'Onion Skin', type: 'compost', info: 'Onion skins are great for compost and add nutrients to the soil.' },
{ name: 'Milk Jug', type: 'recycling', info: 'Milk jugs should be recycled with other plastic products.' },
{ name: 'Potato Chips Bag', type: 'trash', info: 'Potato chip bags go in the trash as they are not recyclable.' },
{ name: 'Egg Carton', type: 'recycling', info: 'Clean egg cartons can be recycled with paper products.' },
{ name: 'Dog Waste', type: 'trash', info: 'Dog waste should be disposed of in the trash, not compost.' },
{ name: 'Corn Cob', type: 'compost', info: 'Corn cobs are excellent for compost, adding bulk and nutrients.' },
{ name: 'Old Book', type: 'recycling', info: 'Old books can be recycled with other paper products.' },
{ name: 'Hair Clippings', type: 'compost', info: 'Hair clippings can be composted and add nitrogen to the compost.' },
{ name: 'Cotton Ball', type: 'trash', info: 'Cotton balls go in the trash as they are not recyclable.' },
{ name: 'Toothpaste Tube', type: 'trash', info: 'Toothpaste tubes go in the trash as they are not typically recyclable.' },
//60
{ name: 'Cotton Swabs', type: 'trash', info: 'Cotton swabs go in the trash as they are not recyclable.' },
{ name: 'Wine Cork', type: 'compost', info: 'Wine corks can be composted, adding bulk to the compost.' },
{ name: 'Plastic Bottle Cap', type: 'trash', info: 'Plastic bottle caps go in the trash as they are not recyclable.' },
{ name: 'Grass', type: 'compost', info: 'Grass clippings are excellent for compost and provide nitrogen.' },
{ name: 'Rubber Band', type: 'trash', info: 'Rubber bands go in the trash as they are not recyclable.' },
{ name: 'Sawdust', type: 'compost', info: 'Sawdust can be composted, adding carbon to the mixture.' },
{ name: 'Sponge', type: 'trash', info: 'Sponges go in the trash as they are not recyclable.' },
{ name: 'Leaves', type: 'compost', info: 'Leaves are great for compost, adding nutrients to the soil.' },
{ name: 'Ceramic Mug', type: 'trash', info: 'Broken ceramic mugs should be disposed of in the trash.' },
{ name: 'Candle Wax', type: 'trash', info: 'Candle wax goes in the trash as it is not recyclable.' },
//70
{ name: 'Dryer Lint', type: 'compost', info: 'Dryer lint can be composted as it consists of organic fibers.' },
{ name: 'Pencil', type: 'trash', info: 'Used pencils go in the trash as they are not recyclable.' },
{ name: 'Wood Chips', type: 'compost', info: 'Wood chips are great for compost, adding carbon and structure.' },
{ name: 'Plastic Straw', type: 'trash', info: 'Plastic straws go in the trash as they are not recyclable.' },
{ name: 'Cotton T-shirt', type: 'recycling', info: 'Old cotton T-shirts can be recycled into textile products.' },
{ name: 'Feathers', type: 'compost', info: 'Feathers can be composted, adding nitrogen to the compost.' },
{ name: 'Old Paint Can', type: 'trash', info: 'Old paint cans should be disposed of in the trash.' },
{ name: 'Peanut Butter Jar', type: 'recycling', info: 'Clean peanut butter jars can be recycled with plastics.' },
{ name: 'Wool Socks', type: 'compost', info: 'Wool socks can be composted, adding organic matter to the compost.' },
{ name: 'CD Case', type: 'trash', info: 'CD cases go in the trash as they are not recyclable.' },
//80
{ name: 'Bottle Cap', type: 'trash', info: 'Bottle caps go in the trash as they are not recyclable.' },
{ name: 'Fabric Scraps', type: 'compost', info: 'Fabric scraps can be composted if they are made of natural fibers.' },
{ name: 'Coffee Filter', type: 'compost', info: 'Coffee filters can be composted along with coffee grounds.' },
{ name: 'Rubber Gloves', type: 'trash', info: 'Rubber gloves go in the trash as they are not recyclable.' },
{ name: 'Dish Sponge', type: 'trash', info: 'Dish sponges should be disposed of in the trash.' },
{ name: 'Cardboard Tube', type: 'recycling', info: 'Cardboard tubes can be recycled with other paper products.' },
{ name: 'Clothing Tags', type: 'trash', info: 'Clothing tags go in the trash as they are not recyclable.' },
{ name: 'Grapefruit Peel', type: 'compost', info: 'Grapefruit peels are excellent for compost, adding nutrients to the soil.' },
{ name: 'Broken Glass', type: 'trash', info: 'Broken glass should be wrapped carefully and disposed of in the trash.' },
{ name: 'Floss', type: 'trash', info: 'Used floss goes in the trash as it is not recyclable.' },
//90
{ name: 'Wax Paper', type: 'trash', info: 'Wax paper goes in the trash as it is not recyclable.' },
{ name: 'Avocado Pit', type: 'compost', info: 'Avocado pits are great for compost, adding nutrients to the soil.' },
{ name: 'Paper Plate', type: 'compost', info: 'Paper plates can be composted if they are free of plastic lining.' },
{ name: 'Broken Mirror', type: 'trash', info: 'Broken mirrors should be carefully wrapped and disposed of in the trash.' },
{ name: 'Toilet Paper Roll', type: 'recycling', info: 'Toilet paper rolls can be recycled with other paper products.' },
{ name: 'Pine Needles', type: 'compost', info: 'Pine needles are excellent for compost, adding structure to the pile.' },
{ name: 'Soda Can', type: 'recycling', info: 'Soda cans should be recycled with other aluminum products.' },
{ name: 'Q-tips', type: 'trash', info: 'Q-tips go in the trash as they are not recyclable.' },
{ name: 'Toothbrush', type: 'trash', info: 'Toothbrushes go in the trash as they are not recyclable.' },
{ name: 'Cork', type: 'compost', info: 'Corks can be composted, adding bulk to the compost.' }

//100

];

function Compostle() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [randomItems, setRandomItems] = useState([]);
  const [correctOption, setCorrectOption] = useState('');

  useEffect(() => {
    const shuffledItems = items.sort(() => 0.5 - Math.random()).slice(0, 5); // Randomly select 5 items
    setRandomItems(shuffledItems);
  }, []);

  useEffect(() => {
    if (currentItemIndex >= 5) {
      setShowResult(true);
    }
  }, [currentItemIndex]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const correctAnswer = randomItems[currentItemIndex]?.type;
    setCorrectOption(correctAnswer);

    if (option === correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    setSelectedOption('');
    setCorrectOption('');
    setCurrentItemIndex(currentItemIndex + 1);
  };

  return (
    <div className="compostle-container">
      <h1>Compostle</h1>
      {randomItems.length > 0 ? (
        !showResult ? (
          <>
            <p>Where should this item go?</p>
            <h2>{randomItems[currentItemIndex]?.name}</h2>
            <div className="bin-images">
              <img 
                src={trashBinImage} 
                alt="Trash Bin" 
                className={`bin ${selectedOption === 'trash' ? (selectedOption === correctOption ? 'correct' : 'incorrect') : ''} ${correctOption === 'trash' && selectedOption !== 'trash' ? 'highlight-correct' : ''}`}
                onClick={() => handleOptionClick('trash')} 
              />
              <img 
                src={compostBinImage} 
                alt="Compost Bin" 
                className={`bin ${selectedOption === 'compost' ? (selectedOption === correctOption ? 'correct' : 'incorrect') : ''} ${correctOption === 'compost' && selectedOption !== 'compost' ? 'highlight-correct' : ''}`}
                onClick={() => handleOptionClick('compost')} 
              />
              <img 
                src={recyclingBinImage} 
                alt="Recycling Bin" 
                className={`bin ${selectedOption === 'recycling' ? (selectedOption === correctOption ? 'correct' : 'incorrect') : ''} ${correctOption === 'recycling' && selectedOption !== 'recycling' ? 'highlight-correct' : ''}`}
                onClick={() => handleOptionClick('recycling')} 
              />
            </div>
            {selectedOption && (
              <>
                <p>{selectedOption === correctOption ? `Correct! (${randomItems[currentItemIndex]?.info})` : `Incorrect! (${randomItems[currentItemIndex]?.info})`}</p>
                <button onClick={handleNextClick}>Next</button>
              </>
            )}
          </>
        ) : (
          <p>Your score is {score} out of 5.</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Compostle;
