import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

const Spinner = () => {
  return (
    <Box width="100%" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <CircularProgress size={40} />
    </Box>
  );
};

export default Spinner;
