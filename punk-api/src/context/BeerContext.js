import React, { createContext, useState } from 'react';
import { STATUS } from '../core/enums';
import { fetchBeers } from '../services/Api/beer';

const BeerProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);
  const [dataStatus, setDataStatus] = useState(STATUS.notInitialized);

  const getBeers = async () => {
    setDataStatus(STATUS.loading);
    let response = await fetchBeers();

    response.map(beer => {
      const [month, year] = beer?.first_brewed.split('/');
      beer.first_brewed = new Date(year, month);
      return beer;
    });
    setBeers(response);
    setDataStatus(STATUS.loaded);
  };

  const sortBeers = property => {
    beers.sort((a, b) => (a[property] > b[property] ? 1 : -1));
    setBeers([...beers]);
  };

  /*
  One method for API - getBeers;
  sortBeers for sorting done on FE side (since the amount of beers is small; the proper way to do this would be to have the sorting done on the BE side in order to maintain scalability)
  beers and loading indicator are set in local state and then used in the BeerContainer and components/containers included in it
  */

  const value = { beers, getBeers, dataStatus, sortBeers };

  return <BeerContext.Provider value={value}>{children}</BeerContext.Provider>;
};

export const BeerContext = createContext();
export default BeerContext;

export { BeerProvider };
