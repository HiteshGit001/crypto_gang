import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import CoinCard from '../components/CoinCard/CoinCard';
import { useData } from '../dataContext/Context';
import { fetchCoins, fetchTrending } from '../services/fetchapi.service';
import "./pages.css";
import { Box } from '@mui/material';

const Home = () => {
  const { trending,loading, setLoading, setTrending, currency, setSymbol, selectedCoins, setSelectedCoins } = useData();
  const getTrendingCoin = async (currency) => {
    const response = await fetchTrending(currency);
    setTrending(response);
  }
  const getSelectedCoin = async (coinId) => {
    const response = await fetchCoins(coinId);
    response.id === ""?setLoading(true):setLoading(false);
    console.log(loading,"kg");
    setSelectedCoins(response);
    console.log(selectedCoins, "sel");
  }
  useEffect(() => {
    getTrendingCoin(currency);
    console.log(currency, "df");
    if (currency === "inr") {
      setSymbol("₹");
    }
    else {
      setSymbol("$");
    }
  }, [currency, selectedCoins]);
  const numberWithCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      {trending === "" ? <Box sx={{height:"100vh", display: 'flex', justifyContent: "center", alignItems: "center", }}>
        <CircularProgress />
      </Box> :
        <div className="home_card_flex">
          {
            trending.map((item, id) => {
              return (
                <div key={id}>
                  <CoinCard
                    icon={trending[id]?.image}
                    price={numberWithCommas(trending[id]?.current_price)}
                    symbols={trending[id]?.symbol}
                    profit={trending[id]?.price_change_percentage_24h >= 0}
                    priceChangePercent={trending[id]?.price_change_percentage_24h}
                    coinId={trending[id]?.id}
                    getSelectedCoin={getSelectedCoin}
                    loading={loading}
                  />
                </div>
              )
            })
          }
        </div>}
    </div>
  )
}

export default Home