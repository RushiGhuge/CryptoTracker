import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './chart.css'



const CoinChart = ({ data }) => {

  return (
    <div className='chart-container'>
      <h2>Simple Line Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default CoinChart;
