import React, { useEffect, useState } from 'react'
import { useData } from '../../dataContext/Context'
import { fetchGlobalMarkte } from '../../services/fetchapi.service'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const GlobalMarket = () => {
  const { GlobalMarket, setGlobalMarket } = useData();
  const [label, setLabel] =useState([]);
  const [datas, setDatas] = useState(GlobalMarket?.data?.market_cap_percentage);
  const getGlobalMarketData = async () => {
    const response = await fetchGlobalMarkte();
    setGlobalMarket(response);
    console.log(GlobalMarket, "GM");
  };
  const data = {
    labels: label,
    datasets: [
      {
        label: '# of Votes',
        data: [20,30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  useEffect(() => {
    getGlobalMarketData();
    setLabel(GlobalMarket === "" || {} ? ["Loading"] : Object.keys(GlobalMarket?.data?.market_cap_percentage))
  }, []);
  return (
    <div>
      <h4>Active crypto currencies: {GlobalMarket?.data?.active_cryptocurrencies}</h4>
      <Doughnut data={data} />;
    </div>
  )
}

export default GlobalMarket