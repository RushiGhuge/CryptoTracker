import axios from "axios";

const Get100Coins = async () => {
  try {
    console.log("100 coins function call");
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    );
    return res.data;
  } catch (err) {
    alert(err.message);
  }
};

export default Get100Coins;
