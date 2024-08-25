import React, { useState, useEffect } from 'react';
import './mineQism.css';

function Mine({ updateTotalProfitPerHour }) {
  const [localCoins, setLocalCoins] = useState(() => {
    const savedCoins = localStorage.getItem("coins");
    return Number(savedCoins) || 0;
  });

  useEffect(() => {
    setLocalCoins(() => {
      const savedCoins = localStorage.getItem("coins");
      return Number(savedCoins) || 0;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("coins", localCoins.toString());
  }, [localCoins]);

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

  const handleBuyItem = (item) => {
    if (localCoins >= item.cost) {
      setLocalCoins(localCoins - item.cost);
      updateTotalProfitPerHour(item.profitPerHour); // Update the total profit per hour
    } else {
      alert('Yetarli tangangiz yo\'q!');
    }
  };
  

  return (
    <div className="mine-container">
      <h1>Tajriba sotib olish</h1>
      <div className="items-list">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Narx: {item.cost} tangalar</p>
              <p>Soatlik daromad: {item.profitPerHour} tanga</p>
              <button onClick={() => handleBuyItem(item)}>Sotib olish</button>
            </div>
          </div>
        ))}
      </div>
      <div className="coins-display">
        <h2>Sizda {localCoins} tanga bor</h2>
      </div>
    </div>
  );
}

export default Mine;
