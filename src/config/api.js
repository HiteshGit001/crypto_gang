import { BASE_URL } from "./config"

export const TrendingCoin = (currency) => `${BASE_URL}markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
export const SelectedCoin = (coinID = "bitcoin") => `${BASE_URL}${coinID}`;