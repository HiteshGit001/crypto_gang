import { TrendingCoin } from '../config/api'

export const fetchTrending = async(currency) => {
  const response = await fetch(TrendingCoin(currency))
  const json = await response.json();
  console.log(json,'json');
  return json;
}