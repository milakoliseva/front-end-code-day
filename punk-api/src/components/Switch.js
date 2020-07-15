import React from 'react';
import { Switch } from '@material-ui/core';

const PunkSwitch = ({ checked, onChange, value }) => {
  return <Switch color="primary" checked={checked} onChange={onChange} value={value}></Switch>;
};

export { PunkSwitch as Switch };
