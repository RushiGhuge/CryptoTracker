import axios from "axios";

const getChartData = async (id = "bitcoin", days = 2) => {
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

  let res = await axios.get(url);
  return res.data;
};

export default getChartData;
