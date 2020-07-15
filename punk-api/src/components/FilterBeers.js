import React from 'react';
import { Switch } from './Switch';
import { Select } from './Select';
import { useStyles } from '../theme/customStyles';
import { beerItems } from '../core/beerItems';

const FilterBeers = ({ onChangeSwitch, onChangeSelect, grid }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.filterWrapper}>
        <Switch checked={grid === 6} onChange={onChangeSwitch} value={grid} />
      </div>
      <div className={classes.filterWrapper}>
        <Select defaultValue={'id'} onChange={onChangeSelect} items={beerItems} />
      </div>
    </>
  );
};

export default FilterBeers;
