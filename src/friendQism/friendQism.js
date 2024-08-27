import React, { useState } from 'react';
import "./friendQism.css";
import { FiRefreshCcw, FiRefreshCw, FiCopy } from "react-icons/fi";

const FriendQism = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const link = "adilchik-tap.vercel.app";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopySuccess('Nusxa olindi!');
    });
  };

  return (
    <div className='friend_part'>
      <div className="add_friend">
        <h2>Do'stlaringizni taklif qiling!</h2>
        <p>Do'stingiz darajasi oshgani uchun darhol +5K va bonuslar olasiz</p>
      </div>
      <br />
      <div className="add_friend_img">
        <div className="gift_icon"></div>
        <div className="friend_text">
          <p className="invite_text">Do'st taklif qilish</p>
          <p className="bonus_text">
            <span className="coin_icon"></span>
            <span className="bonus_amount">+5K</span> <p> taklif uchun</p>
          </p>
        </div>
      </div>
      <br />
      <div className="friend_list">
        <div className="refresh_part">
          <p>Do'stlar ro'yxati</p>
        </div>
        <span>Siz hali hech kimni taklif qilmagansiz</span>
      </div>
      <br /><br />
      <div className="copy_part">
        <input type="text" value={link} readOnly className="copy_input" />
        <button onClick={copyToClipboard} className="copy_button">
          <FiCopy /> Nusxa olish
        </button>
        {copySuccess && <p className="copy_success">{copySuccess}</p>}
      </div>
    </div>
  );
};

export default FriendQism;
