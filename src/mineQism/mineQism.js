import React, { useState } from 'react';
import './mineQism.css';

function Mine({updateTotalProfitPerHour }) {
  // Example items data
  const items = [
    {
      id: 1,
      name: 'Tajriba Oltin',
      cost: 100,
      profitPerHour: 10,
      description: 'Eng yuqori darajadagi tajriba oltin.',
      image: 'path/to/gold-icon.png',
    },
    {
      id: 2,
      name: 'Tajriba Kumush',
      cost: 50,
      profitPerHour: 5,
      description: 'O\'rtacha darajadagi tajriba kumush.',
      image: 'path/to/silver-icon.png',
    },
    {
      id: 3,
      name: 'Tajriba Mis',
      cost: 10,
      profitPerHour: 1,
      description: 'Past darajadagi tajriba mis.',
      image: 'path/to/bronze-icon.png',
    },
  ];
  const handlePurchase = (cost, profitPerHour) => {
    setCoins((prevCoins) => {
      if (prevCoins >= cost) {
        const newCoins = prevCoins - cost;
        updateTotalProfitPerHour(profitPerHour);
        console.log(`Purchase successful. Coins updated from ${prevCoins} to ${newCoins}`);
        return newCoins;
      } else {
        console.log(`Not enough coins. Current coins: ${prevCoins}, Required: ${cost}`);
        alert('Yetarli tangalar mavjud emas!');
        return prevCoins; // Return the previous value if not enough coins
      }
    });
  };
  const [coins, setCoins] = useState(0); // Example initial value
  

  return (
    <div className="mine-container">
      <h2 className="mine-title">Tajriba Konlari</h2>
      <div className="mine-items">
        {items.map((item) => (
          <div key={item.id} className="mine-item">
            <img src={item.image} alt={item.name} className="mine-item-image" />
            <h3 className="mine-item-name">{item.name}</h3>
            <p className="mine-item-description">{item.description}</p>
            <div className="mine-item-details">
              <span>Narxi: {item.cost} tanga</span>
              <span>Soatiga foyda: {item.profitPerHour}</span>
            </div>
            <button
              className="mine-item-button"
              onClick={() => handlePurchase(item.cost, item.profitPerHour)}
            >
              Sotib olish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mine;
