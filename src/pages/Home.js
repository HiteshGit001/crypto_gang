import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import CoinCard from '../components/CoinCard/CoinCard';
import { useData } from '../dataContext/Context';
import { fetchCoins, fetchList, fetchTrending } from '../services/fetchapi.service';
import "./pages.css";
import { Box } from '@mui/material';
import GlobalMarket from '../components/GlobalMarket/GlobalMarket';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerClassName: 'super-app-theme--header', headerName: 'Coin', width: "200" },
  { field: 'current_price', headerClassName: 'super-app-theme--header', headerName: 'Current Price', width: "200" },
  { field: 'market_cap_rank', headerClassName: 'super-app-theme--header', headerName: 'Rank', width: "200" },
  {
    field: 'high_24h',
    headerName: 'High 24h',
    headerClassName: 'super-app-theme--header',
    type: 'number',
    width: "200",
  },
  {
    field: "low_24h",
    headerName: "Low 24h",
    headerClassName: 'super-app-theme--header',
    type: 'number',
    width: "200",
  },
  // {
  //   field: "image",
  //   headerName: "Image",
  //   headerClassName: 'super-app-theme--header',
  //   width: "250",
  // }
];
const Home = () => {
  const { trending, loading, setLoading, setTrending, currency, setSymbol, selectedCoins, setSelectedCoins, listing, setListing } = useData();
  const [rowData, setRowData] = useState([]);
  const getTrendingCoin = async (currency) => {
    const response = await fetchTrending(currency);
    setTrending(response);
  }
  const getSelectedCoin = async (coinId) => {
    const response = await fetchCoins(coinId);
    response.id === "" ? setLoading(true) : setLoading(false);
    setSelectedCoins(response);
  }
  const getList = async () => {
    const response = await fetchList(currency);
    setListing(response);
    console.log(listing, 'list');
  }
  useEffect(() => {
    getTrendingCoin(currency);
    getList();
    if (currency === "inr") {
      setSymbol("₹");
    }
    else {
      setSymbol("$");
    }
  }, [currency, selectedCoins]);
  useEffect(() => {
    setRowData(listing);
  })
  const numberWithCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const rows = rowData;
  return (
    <div>
      {trending === "" ? <Box sx={{ height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center", }}>
        <CircularProgress />
      </Box> :
        <>
          <h3>Trending Coins</h3>
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
          </div>
          <h3>Global Market Data</h3>
          {/* <GlobalMarket /> */}
          <h3>All </h3>

          <Box sx={{
            height: 300,
            width: '100%',
            '& .super-app-theme--header': {
              backgroundColor: '#FF971D',
            },
            display:"flex",
            justifyContent:"center",
          }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </Box>
        </>}
    </div>
  )
}

export default Home