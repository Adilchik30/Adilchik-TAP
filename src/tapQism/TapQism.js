import React, { useState, useEffect } from "react";
import { Username } from "../username/Username";
import "./TapQism.css";

function TapQism() {
  const [coins, setCoins] = useState(() => {
    const savedCoins = localStorage.getItem('coins');
    return savedCoins !== null ? Number(savedCoins) : 0;
  });

  useEffect(() => {
    localStorage.setItem('coins', coins);
  }, [coins]);

  const handleImageClick = (e) => {
    const newCoins = coins + 5;
    setCoins(newCoins);

    showClickEffect(e.clientX, e.clientY);
  };

  const showClickEffect = (x, y) => {
    const effect = document.createElement('div');
    effect.className = 'click-effect';
    effect.innerText = '+5';
    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;
    document.body.appendChild(effect);
    setTimeout(() => {
      document.body.removeChild(effect);
    }, 1000);
  };

  const formatCoins = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num;
  };

  return (
    <div className="tap_container">
      <div className="tap_username">
        <Username />
      </div>
      <div className="tap_part"><br />
        <div className="tap_profit_part">
          <div className="profit">
            <h3>Soatiga tajriba</h3>
            <h2>+1.6K</h2>
          </div>
        </div><br />
        <div className="tap_all_coins_part">
          <div>
            <img src="https://static.tildacdn.com/tild3534-6332-4033-a134-333334376266/uzum-logo-icon.png" alt="Logo" />
            <p>{formatCoins(coins)}</p><br />
          </div>
        </div>
        <div className="big_tap_btn_part">
          <img src="https://static.tildacdn.com/tild3534-6332-4033-a134-333334376266/uzum-logo-icon.png" alt="Logo" onClick={handleImageClick} />
        </div>
        <div className="boost_coin_part"></div>
        <div className="footer_part"></div>
      </div>
    </div>
  );
}

export default TapQism;
