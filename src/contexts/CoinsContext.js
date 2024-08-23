import React, { createContext, useState } from 'react';

export const CoinsContext = createContext();

export const CoinsProvider = ({ children }) => {
  const [coins, setCoins] = useState(0);
  const [totalProfitPerHour, setTotalProfitPerHour] = useState(0);
  const [boostCoins, setBoostCoins] = useState(0);

  return (
    <CoinsContext.Provider value={{ coins, setCoins, totalProfitPerHour, setTotalProfitPerHour, boostCoins, setBoostCoins }}>
      {children}
    </CoinsContext.Provider>
  );
};
