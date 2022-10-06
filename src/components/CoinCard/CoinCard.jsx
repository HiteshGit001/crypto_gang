import React, { useEffect } from 'react'
import { Card, makeStyles } from '@mui/material';
import styles from "./CoinCard.module.css";
import { useData } from '../../dataContext/Context';
import { fetchCoins } from '../../services/fetchapi.service';
import { useNavigate } from 'react-router-dom';

const CoinCard = ({ icon, price, symbols, profit, priceChangePercent, coinId, getSelectedCoin }) => {
  const { selectedCoins, setSelectedCoins, loading } = useData()
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/coin/:${coinId}`);
  }
  const { symbol, currency } = useData();
  return (
    <Card onClick={() => {
      getSelectedCoin(coinId);
      handleNavigate();
    }} className={styles.coin_card}>
      <img className={styles.cr_img} src={icon} alt="" />
      <p className={styles.symbols}>{symbols}/{currency}</p>
      <p className={profit ? styles.profit : styles.loss}>{priceChangePercent.toFixed(3)}%</p>
      <p>{symbol}{price}</p>
    </Card>
  )
}

export default CoinCard