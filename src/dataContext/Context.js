import React, { createContext, useContext, useState } from 'react'

const ContextData = createContext();

export const useData = () => useContext(ContextData);
const Context = ({ children }) => {
  const [currency,setCurrency] = useState("inr");
  const [symbol, setSymbol] = useState("₹");
  const [trending, setTrending] = useState([]);
  const [selectedCoins, setSelectedCoins] = useState('');
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);

  const values ={
    trending, setTrending,
    currency, setCurrency,
    symbol, setSymbol,
    selectedCoins, setSelectedCoins,
    loading, setLoading,
    history, setHistory
  }
  return (
    <ContextData.Provider value={values}>
      {children}
    </ContextData.Provider>
  )
}

export default Context;
