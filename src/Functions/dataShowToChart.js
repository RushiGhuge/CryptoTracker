import formatDate from "./DateFormater";

const setChartDataFunction = (
  dataShowToChart,
  setChartData,
  id = ['COIN_1', 'COIN_2'],
  dataShowToChart2
) => {

  if (dataShowToChart.length > 2) {
    if (dataShowToChart2) {

      const chartData = {

        labels: dataShowToChart.map((ele) => formatDate(new Date(ele[0]))),
        datasets: [
          {
            label: id[0],
            data: dataShowToChart.map((ele) => ele[1]),
            fill: false,
            borderColor: "#61c96f",
            tension: 0.5,
            yAxisID:'y'
          },
          {
            label: id[1],
            data: dataShowToChart2.map((ele) => ele[1]),
            fill: false,
            borderColor: "#3a80e9",
            tension: 0.5,
            yAxisID:'y1'
          },
        ],
      };

      console.log("multi data setedddddd....");
      console.log(chartData);
      setChartData(chartData);
    } 
    
    else {
      const chartData = {
        labels: dataShowToChart.map((ele) => formatDate(new Date(ele[0]))),
        datasets: [
          {
            label: `${id[0]}`,
            data: dataShowToChart.map((ele) => ele[1]),
            fill: true,
            borderColor: "white",
            tension: 0.5,
            yAxisId:'y'
          },
        ],
      };
      console.log("setting data of Charts....");
      setChartData(chartData);
    }
  }
};

export default setChartDataFunction;
