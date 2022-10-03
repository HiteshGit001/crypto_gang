import React, { createContext, useContext, useState } from 'react'

const ContextData = createContext();

export const useData = () => useContext(ContextData);
const Context = ({ children }) => {
  const [currency,setCurrency] = useState("inr");
  const [symbol, setSymbol] = useState("₹");
  const [trending, setTrending] = useState([]);
  const [selectedCoins, setSelectedCoins] = useState('');
  const values ={
    trending, setTrending,
    currency, setCurrency,
    symbol, setSymbol,
    selectedCoins, setSelectedCoins,
  }
  return (
    <ContextData.Provider value={values}>
      {children}
    </ContextData.Provider>
  )
}

export default Context;
