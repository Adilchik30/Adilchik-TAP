import React, { useState, useEffect } from "react";
import { SlEnergy } from "react-icons/sl";
import { FaMoneyBillTrendUp, FaGift, FaPeoplePulling } from "react-icons/fa6";
import { MdTaskAlt } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const initialCoins = 500;
  const [coins, setCoins] = useState(initialCoins);
  const [totalCoins, setTotalCoins] = useState(() => {
    const savedTotalCoins = localStorage.getItem("totalCoins");
    return savedTotalCoins !== null ? Number(savedTotalCoins) : 0;
  });
  const [boostCoins, setBoostCoins] = useState(() => {
    const savedBoostCoins = localStorage.getItem("boostCoins");
    return savedBoostCoins !== null ? Number(savedBoostCoins) : 0;
  });

  const t = {
    exchange: "Sahifa",
    mine: "Tajriba",
    friends: "Do'stlar",
    earn: "Vazifalar",
    airdrop: "Sovg'alar",
  };

  useEffect(() => {
    localStorage.setItem("totalCoins", totalCoins);
  }, [totalCoins]);

  useEffect(() => {
    localStorage.setItem("boostCoins", boostCoins);
  }, [boostCoins]);

  useEffect(() => {
    const incrementBoostCoins = () => {
      setBoostCoins((prevBoostCoins) => Math.min(prevBoostCoins + 1, 500));
    };

    if (boostCoins < 500) {
      const id = setInterval(incrementBoostCoins, 600);
      return () => clearInterval(id);
    }
  }, [boostCoins]);

  const handleImageClick = (e) => {
    if (coins > 0 && boostCoins > 0) {
      setCoins(coins - 1);
      setTotalCoins(totalCoins + 1);
      setBoostCoins((prevBoostCoins) => Math.max(prevBoostCoins - 1, 0));

      const imgRect = e.target.getBoundingClientRect();
      showClickEffect(
        e.clientX - imgRect.left,
        e.clientY - imgRect.top,
        e.target
      );
    }
  };

  const showClickEffect = (x, y, target) => {
    const effect = document.createElement("div");
    effect.className = "click-effect";
    
    const img = document.createElement("img");
    img.src = "https://i.pinimg.com/originals/95/e8/8d/95e88dd24ba9c7678bb969224f9873ce.png";
    img.className = "click-effect-image";

    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;
    effect.appendChild(img);
    target.appendChild(effect);

    setTimeout(() => {
      target.removeChild(effect);
    }, 1000); // Match this with your animation duration
  };

  return (
    <div className="tap_container">
      <div className="tap_part">
        <div className="username_and_tap">
          <br />
          <div className="tap_profit_part">
            <div className="profit">
              <h3>Soatiga tajriba</h3>
              <h2>+1.6K</h2>
            </div>
          </div>
          <br />
          <div className="tap_all_coins_part">
            <div>
              <img
                src="https://static.tildacdn.com/tild3534-6332-4033-a134-333334376266/uzum-logo-icon.png"
                alt="Logo"
              />
              <p>{totalCoins}</p>
              <br />
            </div>
          </div>
          <div className="big_tap_btn_part">
            <img
              src="https://static.tildacdn.com/tild3534-6332-4033-a134-333334376266/uzum-logo-icon.png"
              alt="Logo"
              onClick={handleImageClick}
            />
          </div>
          <div className="boost_coin_part">
            <div className="boost_info">
              <span>
                <SlEnergy />
                {boostCoins} / 500
              </span>
            </div>
          </div>
          <footer className="footer">
            <Link to="/">
              <div className="footer-item">
                <AiFillHome />
                {t.exchange}
              </div>
            </Link>
            <Link to="/mineCart">
              <div className="footer-item">
                <FaMoneyBillTrendUp />
                {t.mine}
              </div>
            </Link>
            <Link to="/addFriend">
              <div className="footer-item">
                <FaPeoplePulling />
                {t.friends}
              </div>
            </Link>
            <Link to="/earnPart">
              <div className="footer-item">
                <MdTaskAlt />
                {t.earn}
              </div>
            </Link>
            <Link to="/giftPart">
              <div className="footer-item">
                <FaGift />
                {t.airdrop}
              </div>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
