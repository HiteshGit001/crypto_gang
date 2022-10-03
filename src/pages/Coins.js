import React from 'react';
import { useData } from '../dataContext/Context';

const Coins = () => {
  const {selectedCoins} = useData();
  return (
    <div>{selectedCoins.id}</div>
  )
}

export default Coins