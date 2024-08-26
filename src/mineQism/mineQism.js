import React, { useEffect, useState } from 'react';
import './mineQism.css';

function Mine({ updateTotalProfitPerHour, coins, setCoins }) {
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  useEffect(() => {
    localStorage.setItem('coins', coins); // Sync local storage whenever coins change
  }, [coins]);

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

  const handleBuyItem = (item) => {
    if (coins >= item.cost) {
      setCoins((prevCoins) => {
        const newCoins = prevCoins - item.cost;
        localStorage.setItem('coins', newCoins.toString());
        return newCoins;
      });
      updateTotalProfitPerHour(item.profitPerHour);
      setErrorMessage(''); // Clear error message after successful purchase
    } else {
      setErrorMessage('Yetarli tangangiz yo‘q!'); // Set error message when coins are insufficient

      // Remove the error message after 6 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 6000);
    }
  };

  return (
    <div className="mine-container">
      {/* Display error message at the top if there is one */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

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
              <button className="item-button" onClick={() => handleBuyItem(item)}>
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
