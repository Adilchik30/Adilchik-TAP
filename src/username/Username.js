import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import "./Username.css";

export const Username = () => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  return (
    <div className="username">
      <div className="name">ADILCHIK 😎</div>
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
