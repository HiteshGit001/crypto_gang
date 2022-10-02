import { useEffect } from 'react';
import CoinCard from '../components/CoinCard/CoinCard';
import { useData } from '../dataContext/Context';
import { fetchTrending } from '../services/fetchapi.service';
import "./pages.css";

const Home = () => {
  const { trending, setTrending, currency, setSymbol } = useData();
  const getTrendingCoin = async (currency) => {
    const response = await fetchTrending(currency);
    setTrending(response);
  }
  useEffect(() => {
    getTrendingCoin(currency);
    console.log(currency, "df");
    if(currency==="inr"){
      setSymbol("₹");
    }
    else{
      setSymbol("$");
    }
  }, [currency]);
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
                <CoinCard icon={trending[id].image} price={numberWithCommas(trending[id].current_price)} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home