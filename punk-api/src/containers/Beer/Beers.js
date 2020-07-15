import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import BeerContext from '../../context/BeerContext';
import Spinner from '../../components/Spinner';
import { STATUS } from '../../core/enums';
import Beer from '../../components/Beer';
import FilterBeers from '../../components/FilterBeers';
import { Typography, Box, Button } from '@material-ui/core';

const DEFAULT_VIEW_COLS = 3;
const NON_DEFAULT_VIEW_COLS = 6;

/*
  Beer container uses the Beer context and its methods
  Divided into smaller components; each beer is shown as a Beer component
  Filtering in selectbox and toggle is in FilterBeers component which include custom components
*/
const Beers = () => {
  const { beers, dataStatus, sortBeers, getBeers } = useContext(BeerContext);
  const [grid, setGrid] = useState(DEFAULT_VIEW_COLS);

  if (dataStatus === STATUS.loading) {
    return <Spinner />;
  }

  const elements = beers.map(beer => <Beer key={beer.id} beer={beer} grid={grid} />);

  return (
    <>
      <Box align="center">
        <Typography variant="h4"> Punk API </Typography>
        {!beers.length && (
          <Button variant="contained" color="primary" onClick={() => getBeers()}>
            Load some beers!
          </Button>
        )}
      </Box>

      {beers.length > 0 && (
        <>
          <FilterBeers
            onChangeSelect={event => sortBeers(event.target.value)}
            onChangeSwitch={() => (grid === NON_DEFAULT_VIEW_COLS ? setGrid(DEFAULT_VIEW_COLS) : setGrid(NON_DEFAULT_VIEW_COLS))}
            grid={grid}
          />
          <Grid container spacing={8}>
            {elements}
          </Grid>
        </>
      )}
    </>
  );
};

export default Beers;
