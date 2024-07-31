import React, { useState, useEffect } from "react";
import { Username } from "../username/Username";
import "./TapQism.css";
import logo from "../assets/logo2.png";

function TapQism() {
  const [coins, setCoins] = useState(() => {
    const savedCoins = localStorage.getItem('coins');
    return savedCoins !== null ? Number(savedCoins) : 0;
  });

  const [clickEffects, setClickEffects] = useState([]);

  useEffect(() => {
    localStorage.setItem('coins', coins);
  }, [coins]);

  const handleImageClick = (event) => {
    setCoins(coins + 1);

    const newEffect = {
      id: Date.now(),
      x: event.clientX,
      y: event.clientY,
    };

    setClickEffects((prevEffects) => [...prevEffects, newEffect]);

    setTimeout(() => {
      setClickEffects((prevEffects) =>
        prevEffects.filter((effect) => effect.id !== newEffect.id)
      );
    }, 1000);
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
            <img src={logo} alt="Logo" />
            <p>{coins}</p><br />
          </div>
        </div>
        <div className="big_tap_btn_part">
          <img src={logo} alt="Logo" onClick={handleImageClick} />
        </div>
        <div className="boost_coin_part"></div>
        <div className="footer_part"></div>
      </div>
      {clickEffects.map((effect) => (
        <div
          key={effect.id}
          className="click-effect"
          style={{ top: effect.y, left: effect.x }}
        ></div>
      ))}
    </div>
  );
}

export default TapQism;
