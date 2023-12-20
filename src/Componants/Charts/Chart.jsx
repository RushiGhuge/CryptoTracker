import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './chart.css'



const CoinChart = ({ data }) => {

  console.log(data);

  return (
    <div className='chart-container'>
      <h2>{data.datasets[0].label}</h2>
      <Line data={data} />
    </div>
  );
};

export default CoinChart;
