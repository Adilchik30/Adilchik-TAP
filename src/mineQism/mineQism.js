import React, { useState, useEffect } from 'react';
import './mineQism.css';

function Mine() {
  const [coins, setCoins] = useState(0);
  const [totalProfitPerHour, setTotalProfitPerHour] = useState(0);

  useEffect(() => {
    const savedCoins = Number(localStorage.getItem('coins')) || 0;
    const savedTotalProfitPerHour = Number(localStorage.getItem('totalProfitPerHour')) || 0;
    setCoins(savedCoins);
    setTotalProfitPerHour(savedTotalProfitPerHour);
  }, []);

  const items = [
    {
      id: 1,
      name: 'Shaxsiy brend',
      cost: 10,
      profitPerHour: 100,
      image:
        'https://www.shutterstock.com/image-vector/business-success-3d-vector-illustration-600nw-2191410963.jpg',
    },
    {
      id: 2,
      name: 'Muzokaralar olib borish',
      cost: 500,
      profitPerHour: 54,
      image:
        'https://t3.ftcdn.net/jpg/02/81/17/24/360_F_281172401_hoQeqc81IQ5dLOJWYigiBogo3RtUS8F0.jpg',
    },
    {
      id: 3,
      name: 'Vazifalarni topshirish',
      cost: 2500,
      profitPerHour: 240,
      image:
        'https://static.vecteezy.com/system/resources/previews/002/922/273/original/cute-successful-businessman-complete-the-task-cartoon-icon-illustration-free-vector.jpg',
    },
    {
      id: 4,
      name: "So'zga chiqish uchun",
      cost: 6000,
      profitPerHour: 1000,
      image:
        'https://t3.ftcdn.net/jpg/02/80/83/80/360_F_280838006_jjP9vcYiJHnjBlkuYdMuHSxvirB6chPC.jpg',
    },
  ];

  const canAfford = (cost) => coins >= cost;

  const handleBuyItem = (item) => {
    if (canAfford(item.cost)) {
      const newCoins = coins - item.cost;
      const newProfitPerHour = totalProfitPerHour + item.profitPerHour;

      setCoins(newCoins);
      setTotalProfitPerHour(newProfitPerHour);

      // Update localStorage
      localStorage.setItem('coins', newCoins.toString());
      localStorage.setItem('totalProfitPerHour', newProfitPerHour.toString());
    }
  };

  return (
    <div className="mine-container">
      <div className="items-list">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h2 className="item-name">{item.name}</h2>
              <p className="item-profit">Soatiga tajriba: +{item.profitPerHour}</p>
              <div className="item-cost">
                <img
                  src="https://static.tildacdn.com/tild3534-6332-4033-a134-333334376266/uzum-logo-icon.png"
                  alt="Coin Icon"
                  className="coin-icon"
                />
                <span>{item.cost}</span>
              </div>
              <button
                className="item-button"
                onClick={() => handleBuyItem(item)}
                disabled={!canAfford(item.cost)}
                style={{
                  backgroundColor: canAfford(item.cost) ? '#28a745' : '#ddd',
                  cursor: canAfford(item.cost) ? 'pointer' : 'not-allowed',
                }}
              >
                Sotib olish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mine;
