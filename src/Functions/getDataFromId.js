import axios from "axios";

async function getDataFromId(id) {
  let res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  return res.data;
}

export default getDataFromId;
