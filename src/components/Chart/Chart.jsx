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
  const { currency, history, setHistory } = useData()
  const getChartData = async () => {
    let response = await fetchHistory();
    setHistory(response);
    console.log(history, "hist");
  }
  useEffect(() => {
    getChartData();
  }, []);
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
    return ele[0];
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: history?.prices?.map((ele, id) => {
          return ele[1];
        }),
        borderColor: 'red',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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