import React, { useState, useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import axios from "axios";
import "./Username.css";

export const Username = () => {
  const [firstName, setFirstName] = useState("Loading...");
  const [chatId, setChatId] = useState(null);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  useEffect(() => {
    // Temporarily hardcode chatId for testing
    const chatIdFromUrl = "5409529185"; // Replace with a valid test chatId
    setChatId(chatIdFromUrl);
  }, []);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const chatIdFromUrl = urlParams.get("chatId");
    setChatId(chatIdFromUrl);
    
    if (chatIdFromUrl) {
      // Fetch first name using the chatId
      const fetchFirstName = async () => {
        try {
          const response = await axios.get(
            `https://adilchik-tap.vercel.app/api/get-username/${chatIdFromUrl}`
          );
          console.log("API Response:", response);
          if (response.data && response.data.firstName) {
            const name = response.data.firstName.trim();
            setFirstName(name || "First name not available");
          } else {
            setFirstName("First name not available");
          }
        } catch (error) {
          console.error("Error fetching first name:", error.message);
          setFirstName("Error fetching first name");
        }
      };

      fetchFirstName();
    } else {
      setFirstName("😡 no username");
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
