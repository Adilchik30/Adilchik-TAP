import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Username } from "../username/Username";
import { SlEnergy } from "react-icons/sl";
import { FaMoneyBillTrendUp, FaGift, FaPeoplePulling } from "react-icons/fa6";
import { MdTaskAlt } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import "./TapQism.css";

// Import your components
import Home from "../home/Home";
import MineCart from "../mineQism/mineQism";
import AddFriend from "../friendQism/friendQism";
import EarnPart from "../earnQism/earnQism";
import GiftPart from "../giftQism/giftQism";

function TapQism() {
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
    effect.innerText = "+1";
    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;
    target.appendChild(effect);
    setTimeout(() => {
      target.removeChild(effect);
    }, 1000); // Match this with your animation duration
  };

  return (
    <div className="tap_container">
      <div className="username_and_tap">
        <div className="tap_username">
          <Username />
        </div>
        <div className="route_content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mineCart" element={<MineCart />} />
            <Route path="/addFriend" element={<AddFriend />} />
            <Route path="/earnPart" element={<EarnPart />} />
            <Route path="/giftPart" element={<GiftPart />} />
          </Routes>
        </div>
      </div>
      <div className="footer">
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
      </div>
    </div>
  );
}

export default TapQism;
