import { SelectedCoin, TrendingCoin } from '../config/api'

export const fetchTrending = async(currency) => {
  const response = await fetch(TrendingCoin(currency))
  const json = await response.json();
  // console.log(json,'json');
  return json;
}

export const fetchCoins = async(coinID) => {
  const response = await fetch(SelectedCoin(coinID))
  const json = await response.json();
  console.log(json, "jsfghon");
  return json;
}