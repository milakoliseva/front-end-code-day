import React from 'react';

import { BeerProvider } from '../../context/BeerContext';
import Beers from './Beers';

const BeersContainer = () => (
  <BeerProvider>
    <Beers />
  </BeerProvider>
);

export default BeersContainer;
