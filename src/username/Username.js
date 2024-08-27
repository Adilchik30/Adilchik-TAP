import React, { useState, useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import axios from "axios";
import "./Username.css";

export const Username = () => {
  const [firstName, setFirstName] = useState("Loading...");
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const chatIdFromUrl = urlParams.get("chatId");

    if (chatIdFromUrl) {
      const fetchFirstName = async () => {
        try {
          const response = await axios.get(
            `/api/get-username/${chatIdFromUrl}`
          );

          if (response.data && response.data.firstName) {
            setFirstName(response.data.firstName.trim());
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
  }, []);

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
          </div>
        )}
      </div>
    </div>
  );
};
