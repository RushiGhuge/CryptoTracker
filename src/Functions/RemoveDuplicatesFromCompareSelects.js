function removeDuplicatesFromCoins(coin, coinsId) {
  let data = coinsId.filter((ele) => {
    return coin !== ele;
  });
  //   console.log(data);
  return data;
}

export default removeDuplicatesFromCoins;

// console.log(removeDuplicatesFromCoins("Rushi", ["bitcoin", "BTC", "Rushi"]));

// this function is remove the coin from coins 

