const AddFavLocalStorage = (id) => {
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

  // check id coin alredy fev...

  if (items.includes(id)) {
    return;
  }
  const val = JSON.stringify([...items, id]);
  localStorage.setItem("watchList", val);
};

export default AddFavLocalStorage;
