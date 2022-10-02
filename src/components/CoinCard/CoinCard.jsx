import React, { useEffect } from 'react'
import { Card, makeStyles } from '@mui/material';
import styles from "./CoinCard.module.css";
import { useData } from '../../dataContext/Context';

const CoinCard = ({ icon, price }) => {
  const{symbol} = useData();
  return (
    <Card className={styles.coin_card}>
      <img className={styles.cr_img} src={icon} alt="" />
      <p>{symbol}{price}</p>
    </Card>
  )
}

export default CoinCard