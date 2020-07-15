const fetchBeers = async () => {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT_URL}/beers`).then(response => response.json());
};

export { fetchBeers };
