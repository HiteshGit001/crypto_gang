import { BASE_URL } from "./config"

export const TrendingCoin = (currency) => `${BASE_URL}markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
export const SelectedCoin = (coinID = "bitcoin") => `${BASE_URL}${coinID}`;
export const HistoricalChart = (id, days = 365, currency) =>
  `${BASE_URL}${id}/market_chart?vs_currency=${currency}&days=${days}`;
export const GlobalMarket = () => `https://api.coingecko.com/api/v3/global`;
export const List = (currency) => `${BASE_URL}markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;