import React, { useState, useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import "./Username.css";
import axios from "axios";

export const Username = ({ chatId }) => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [username, setUsername] = useState("Loading...");

  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(`https://adilchik-tap.vercel.app/api/get-username/${chatId}`);
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching username:", error);
        setUsername("Error fetching username");
      }
    };

    fetchUsername();
  }, [chatId]);

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
