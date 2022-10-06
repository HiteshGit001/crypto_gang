import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useData } from '../dataContext/Context';
import { Box, Card } from '@mui/material';
import "./pages.css";
import Chart from '../components/Chart/Chart';

const Coins = ({ coinId }) => {
  const { selectedCoins, loading, currency, symbol } = useData();
  const parse = require('html-react-parser');
  const numberWithCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      {
        loading ? <Box sx={{ height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center", }}>
          <CircularProgress />
        </Box>
          :
          <div className="coin" style={{display:'flex'}}>
            <Card className="coin_card">
              <div className="coin_img">
                <img src={selectedCoins.image.large} alt={selectedCoins.name} />
              </div>
              <p className="coin_title">{selectedCoins.name}</p>
              <p className="coin_dis">{selectedCoins.description.en.split(". ")[0]}</p>
              <a href={selectedCoins.links.homepage[0]}>Read More</a>
              <p className="public_score">Public intrest score : {selectedCoins.public_interest_score}</p>
              <p className="coin_high">Today High: {symbol} {numberWithCommas(currency === "inr" ? selectedCoins.market_data.high_24h.inr : selectedCoins.market_data.high_24h.usd)}</p>
              <p className="coin_low">Today Low: {symbol} {numberWithCommas(currency === "inr" ? selectedCoins.market_data.low_24h.inr : selectedCoins.market_data.low_24h.usd)}</p>
              <p className="coin_dis">Redit average comments in 48h : <span style={{ color: "pink" }}>{selectedCoins.community_data.reddit_average_posts_48h}</span></p>
              <p className="coin_dis">Twitter followers : <span style={{ color: "skyblue" }}>{selectedCoins.community_data.twitter_followers}</span></p>
            </Card>
            <Chart />
          </div>
      }
    </>
  )
}

export default Coins