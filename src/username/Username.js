import React, { useState, useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import axios from "axios";
import "./Username.css";

export const Username = () => {
  const [username, setUsername] = useState("Loading...");
  const [chatId, setChatId] = useState(null);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const chatIdFromUrl = urlParams.get('chatId');
    setChatId(chatIdFromUrl);

    if (chatIdFromUrl) {
      // Agar chatId bo'lsa, foydalanuvchi ismini olishni boshlang
      const fetchUsername = async () => {
        try {
          const response = await axios.get(`https://adilchik-tap.vercel.app/api/get-username/${chatIdFromUrl}`);
          setUsername(response.data.username);
        } catch (error) {
          console.error("Error fetching username:", error);
          setUsername("Error fetching username");
        }
      };

      fetchUsername();
    } else {
      setUsername("No chat ID provided");
    }
  }, [chatId]);

  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  return (
    <div className="username">
      <div className="name">{username}</div>
      <div className="change-language" onClick={toggleLanguageOptions}>
        <CiSettings />
        {showLanguageOptions && (
          <div className="language-options">
            <div>Русский</div>
            <div>O'zbek</div>
            {/* Add more languages as needed */}
          </div>
        )}
      </div>
    </div>
  );
};
