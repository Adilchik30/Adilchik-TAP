import React, { useState, useEffect } from "react";
import { Username } from "../username/Username";
import { SlEnergy, SlInfo } from "react-icons/sl";
import "./TapQism.css";

function TapQism() {
  const initialCoins = 500;
  const [coins, setCoins] = useState(initialCoins);
  const [totalCoins, setTotalCoins] = useState(() => {
    const savedTotalCoins = localStorage.getItem('totalCoins');
    return savedTotalCoins !== null ? Number(savedTotalCoins) : 0;
  });
  const [boostCoins, setBoostCoins] = useState(0);
  const [boostIntervalId, setBoostIntervalId] = useState(null);

  useEffect(() => {
    localStorage.setItem('totalCoins', totalCoins);
  }, [totalCoins]);

  useEffect(() => {
    const id = setInterval(() => {
      setBoostCoins(prevBoostCoins => prevBoostCoins + 1);
    }, 1000);
    setBoostIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, []);

  const handleImageClick = (e) => {
    if (coins > 0) {
      setCoins(coins - 1);
      setTotalCoins(totalCoins + 1);
      setBoostCoins(prevBoostCoins => Math.max(prevBoostCoins - 1, 0));
    }
    const imgRect = e.target.getBoundingClientRect();
    showClickEffect(e.clientX - imgRect.left, e.clientY - imgRect.top, e.target);
  };

  const showClickEffect = (x, y, target) => {
    const effect = document.createElement('div');
    effect.className = 'click-effect';
    effect.innerText = '+1';
    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;
    target.appendChild(effect);
    setTimeout(() => {
      target.removeChild(effect);
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
      <div className="username_and_tap">
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
              <p>{formatCoins(totalCoins)}</p><br />
            </div>
          </div>
          <div className="big_tap_btn_part">
            <img src="https://static.tildacdn.com/tild3534-6332-4033-a134-333334376266/uzum-logo-icon.png" alt="Logo" onClick={handleImageClick} />
          </div>
          <div className="boost_coin_part">
            <div className="boost_info">
              <span><SlEnergy/>{formatCoins(boostCoins)} / 500</span>
            </div>
          </div>
          <div className="footer_part"></div>
        </div>
      </div>
    </div>
  );
}

export default TapQism;
