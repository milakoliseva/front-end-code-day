import React from 'react';
import { MenuItem, Select } from '@material-ui/core';

const PunkSelect = ({ defaultValue, onChange, items }) => {
  const menuItems = items.map(item => (
    <MenuItem key={item.id} value={item.id}>
      {item.name}
    </MenuItem>
  ));

  return (
    <Select defaultValue={defaultValue} onChange={onChange}>
      {menuItems}
    </Select>
  );
};

export { PunkSelect as Select };
