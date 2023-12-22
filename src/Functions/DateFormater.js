function formatDate(dateString) {
  const options = { day: "numeric", month: "short" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

export default formatDate;
