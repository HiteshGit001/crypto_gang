import { HistoricalChart, SelectedCoin, TrendingCoin } from '../config/api'

export const fetchTrending = async (currency) => {
  const response = await fetch(TrendingCoin(currency))
  const json = await response.json();
  // console.log(json,'json');
  return json;
}

export const fetchCoins = async (coinID) => {
  const response = await fetch(SelectedCoin(coinID))
  const json = await response.json();
  console.log(json, "jsfdghon");
  return json;
}

export const fetchHistory = async () => {
  const response = await fetch(HistoricalChart("bitcoin",1,"inr"));
  const json = await response.json();
  console.log(json,"ke");
  return json;
}