import React, { useEffect } from 'react'
import { fetchHistory } from '../../services/fetchapi.service';
import { useData } from '../../dataContext/Context';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const { currency, history, setHistory, selectedCoins } = useData()
  const getChartData = async () => {
    let response = await fetchHistory(selectedCoins.id,1,currency);
    setHistory(response);
  }
  useEffect(() => {
    getChartData();
  }, [selectedCoins.id,currency]);
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = history?.prices?.map((ele, id) => {
    const timestamp = ele[0] // This would be the timestamp you want to format
    return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
  });

  const data = {
    labels,
    datasets: [
      {
        label: `${selectedCoins.name}`,
        data: history?.prices?.map((ele, id) => {
          return ele[1];
        }),
        borderColor: 'gold',
        backgroundColor: 'gold',
      },
    ],
  };
  return (
    <div style={{width:"100%"}}>
      <Line options={options} data={data} />
    </div>
  )
}

export default Chart