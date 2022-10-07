import { GlobalMarket, HistoricalChart, List, SelectedCoin, TrendingCoin } from '../config/api'

export const fetchTrending = async (currency) => {
  const response = await fetch(TrendingCoin(currency))
  const json = await response.json();
  return json;
}

export const fetchCoins = async (coinID) => {
  const response = await fetch(SelectedCoin(coinID))
  const json = await response.json();
  return json;
}

export const fetchHistory = async (coin,days,currency) => {
  const response = await fetch(HistoricalChart(coin,days,currency));
  const json = await response.json();
  return json;
}

export const fetchGlobalMarkte = async () => {
  const response = await fetch(GlobalMarket());
  const json = await response.json();
  return json;
}

export const fetchList = async (currency) => {
  const response = await fetch(List(currency));
  const json = await response.json();
  return json;
}