const RemoveFavLocalStorage = (id,setFavIds) => {
  let items;

  try {
    const storedValue = localStorage.getItem("watchList");
    items = storedValue ? JSON.parse(storedValue) : [];
    if (!Array.isArray(items)) {
      items = []; // Handle cases where the stored value is not a valid array
    }
    } catch (error) {
    console.error("Error parsing localStorage:", error);
    items = []; // Handle parsing errors
  }

  if (items.includes(id)) {
    // remove the coin
    let newItems = items.filter((item) => {
      return item !== id;
    });
    const val = JSON.stringify(newItems);
    localStorage.setItem("watchList", val);
    setFavIds(val)
  }
};

export default RemoveFavLocalStorage;
