import { useEffect } from 'react';
import CoinCard from '../components/CoinCard/CoinCard';
import { useData } from '../dataContext/Context';
import { fetchCoins, fetchTrending } from '../services/fetchapi.service';
import "./pages.css";

const Home = () => {
  const { trending, setTrending, currency, setSymbol, selectedCoins, setSelectedCoins } = useData();
  const getTrendingCoin = async (currency) => {
    const response = await fetchTrending(currency);
    setTrending(response);
  }
  const getSelectedCoin = async (coinId) => {
    const response = await fetchCoins(coinId);
    setSelectedCoins(response);
    console.log(selectedCoins,"sel");
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
      <div className="home_card_flex">
        {
          trending.map((item, id) => {
            return (
              <div key={id}>
                <CoinCard
                  icon={trending[id].image}
                  price={numberWithCommas(trending[id].current_price)}
                  symbols={trending[id].symbol}
                  profit={trending[id].price_change_percentage_24h >= 0}
                  priceChangePercent={trending[id].price_change_percentage_24h}
                  coinId={trending[id].id}
                  getSelectedCoin={getSelectedCoin}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home