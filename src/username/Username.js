import React, { useState, useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import axios from "axios";
import "./Username.css";

export const Username = () => {
  const [firstName, setFirstName] = useState("Loading...");
  const [chatId, setChatId] = useState(null);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const chatIdFromUrl = urlParams.get('chatId');
    setChatId(chatIdFromUrl);

    if (chatIdFromUrl) {
        // Fetch first name using the chatId
        const fetchFirstName = async () => {
            try {
                const response = await axios.get(`https://adilchik-tap.vercel.app/api/get-username/${chatIdFromUrl}`);
                const name = response.data.firstName.trim(); // Use trim() to handle any extra spaces
                setFirstName(name || "First name not available"); // Handle empty values
            } catch (error) {
                console.error("Error fetching first name:", error);
                setFirstName("Error fetching first name");
            }
        };

        fetchFirstName();
    } else {
        setFirstName("No chat ID provided");
    }
  }, [chatId]);

  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  return (
    <div className="username">
      <div className="name">{firstName}</div>
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
