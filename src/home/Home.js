import React, { useState, useEffect, useRef } from "react";
import { SlEnergy } from "react-icons/sl";
import { FaMoneyBill, FaGift, FaPeoplePulling } from "react-icons/fa6";
import { MdTaskAlt } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import Mine from "../mineQism/mineQism";

function Home() {
  const initialCoins = 0;
  const initialBoostCoins = 100;

  const getValidNumber = (value, defaultValue) => {
    const number = Number(value);
    return !isNaN(number) && isFinite(number) ? number : defaultValue;
  };

  const [totalProfitPerHour, setTotalProfitPerHour] = useState(() => {
    const savedProfit = localStorage.getItem("totalProfitPerHour");
    return getValidNumber(savedProfit, 0);
  });

  const [coins, setCoins] = useState(() => {
    const savedCoins = localStorage.getItem("coins");
    return getValidNumber(savedCoins, initialCoins);
  });

  const [boostCoins, setBoostCoins] = useState(() => {
    const savedBoostCoins = localStorage.getItem("boostCoins");
    return getValidNumber(savedBoostCoins, initialBoostCoins);
  });

  const [effects, setEffects] = useState([]);
  const containerRef = useRef(null);

  const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const t = {
    exchange: "Sahifa",
    mine: "Tajriba",
    friends: "Do'stlar",
    earn: "Vazifalar",
    airdrop: "Sovg'alar",
  };

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");
    if (lastVisit) {
      const elapsedTime = Date.now() - Number(lastVisit);
      const hoursElapsed = elapsedTime / (1000 * 60 * 60);
      const profitWhileAway = (totalProfitPerHour / 60) * hoursElapsed;
      setCoins((prevCoins) => prevCoins + profitWhileAway);
    }
  }, [totalProfitPerHour]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("lastVisit", Date.now().toString());
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("coins", coins.toString());
  }, [coins]);

  useEffect(() => {
    localStorage.setItem("boostCoins", boostCoins.toString());
  }, [boostCoins]);

  useEffect(() => {
    localStorage.setItem("totalProfitPerHour", totalProfitPerHour.toString());
  }, [totalProfitPerHour]);

  useEffect(() => {
    const incrementBoostCoins = () => {
      setBoostCoins((prevBoostCoins) => Math.min(prevBoostCoins + 1, 500));
    };

    if (boostCoins < 500) {
      const id = setInterval(incrementBoostCoins, 600);
      return () => clearInterval(id);
    }
  }, [boostCoins]);

  useEffect(() => {
    const updateCoinsInterval = setInterval(() => {
      setCoins((prevTotal) => {
        const newTotal = prevTotal + (totalProfitPerHour / 1); // Add profit per minute
        if (!isFinite(newTotal)) return prevTotal; // Prevent infinity
        return Math.max(newTotal, 0); // Ensure coins do not go below 0
      });
    }, 60000); // Update every 1 minute

    return () => clearInterval(updateCoinsInterval);
  }, [totalProfitPerHour]);

  const showClickEffect = (x, y) => {
    setEffects((prevEffects) => [
      ...prevEffects,
      { x, y, id: Date.now() }
    ]);
    setTimeout(() => {
      setEffects((prevEffects) =>
        prevEffects.filter((effect) => effect.id !== Date.now())
      );
    }, 1000);
  };

  const handleImageClick = (e) => {
    if (boostCoins > 0) { // Only check for boostCoins
      setCoins((prevCoins) => Math.max(prevCoins + 1, 0));
      setBoostCoins((prevBoostCoins) => Math.max(prevBoostCoins - 1, 0));
  
      const imgRect = e.target.getBoundingClientRect();
      showClickEffect(
        e.clientX - imgRect.left,
        e.clientY - imgRect.top
      );
    } else {
      const messageElement = document.getElementById("coins-error");
      if (messageElement) {
        messageElement.style.display = "block";
        setTimeout(() => {
          messageElement.style.display = "none";
        }, 2000); // Hide message after 2 seconds
      }
    }
  };

  const updateTotalProfitPerHour = (profitPerHour) => {
    setTotalProfitPerHour((prevProfit) => prevProfit + profitPerHour);
  };

  return (
    <div className="tap_container" ref={containerRef}>
      <div className="tap_part">
        <div className="username_and_tap">
          <br />
          <div className="tap_profit_part">
            <div className="profit">
              <h3>Soatiga tajriba: {numberFormatter.format(totalProfitPerHour)}</h3>
            </div>
          </div>
          <div className="tap_all_coins_part">
            <div>
              <img
                src="https://static.tildacdn.com/tild3534-6332-4033-a134-333334376266/uzum-logo-icon.png"
                alt="Logo"
                onClick={handleImageClick}
              />
              <p>{Math.floor(coins)}</p>
              <br />
            </div>
          </div>
          <div className="big_tap_btn_part">
            <img
              src="https://static.tildacdn.com/tild3534-6332-4033-a134-333334376266/uzum-logo-icon.png"
              alt="Logo"
              onClick={handleImageClick}
            />
            <div className="boost_coin_part">
              <div className="boost_info">
                <span>
                  <SlEnergy />
                  {boostCoins} / 500
                </span>
              </div>
            </div>
          </div>
          <div id="coins-error" style={{ display: 'none', color: 'red' }}>
            Kuchaytirish uchun yetarli tanga yo'q!
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
                <FaMoneyBill />
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
            <NavLink className="navlink" to="/giftPart">
              <div className="footer-item">
                <FaGift />
                {t.airdrop}
              </div>
            </NavLink>
          </footer>
        </div>
        {effects.map((effect) => (
          <div
            key={effect.id}
            className="click-effect"
            style={{ left: effect.x, top: effect.y }}
          >
            +1
          </div>
        ))}
        <Mine
          updateTotalProfitPerHour={updateTotalProfitPerHour}
          coins={coins}
          setCoins={setCoins} // Pass setCoins to Mine
        />
      </div>
    </div>
  );
}

export default Home;
