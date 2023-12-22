import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './chart.css'



const CoinChart = ({ data, multiAxis = false }) => {
  console.log(data);
  const options = {
    responsive: true,

    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis'
      }
    },
    stacked: false,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left'
      },

      y1: {
        type: 'linear',
        display: true,
        position: 'right',

        grid: {
          drawOnChartArea: false,
        },
      }
    }
  }



  return (
    <div className='chart-container'>
      {multiAxis ? <h2 className='capital-text'>{data.datasets[0].label} & {data.datasets[1].label}</h2>
        : <h2 className='capital-text'>{data.datasets[0].label} </h2>
      }
      <Line data={data} options={options} />
    </div>
  );
};

export default CoinChart;
