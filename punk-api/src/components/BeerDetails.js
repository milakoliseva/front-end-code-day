import React from 'react';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { timestampToString } from '../services/dateTime';

const BeerDetails = props => {
  const { description, first_brewed, brewer_tips, boil_volume, volume, brewers_tips, contributed_by, food_pairing, ibu, srm, ebc, tagline } = props;

  return (
    <Box>
      <Typography variant="body2">{description}</Typography>
      <Typography variant="body2">First brewed: {timestampToString(first_brewed)}</Typography>
      <Typography variant="body2">Brewer tips: {brewer_tips}</Typography>
      <Typography variant="body2">
        Boil volume: {boil_volume?.value} {boil_volume?.unit}
      </Typography>
      <Typography variant="body2">
        Volume: {volume?.value} {volume?.unit}
      </Typography>
      <Typography variant="body2">Brewer tips: {brewers_tips} </Typography>
      <Typography variant="body2">Contributed by: {contributed_by} </Typography>
      <Typography variant="body2">Ebc: {ebc} </Typography>
      <Typography variant="body2">Food pairing: {food_pairing.join(', ')}</Typography>
      <Typography variant="body2">Ibu: {ibu} </Typography>
      <Typography variant="body2">Ebc: {ebc} </Typography>
      <Typography variant="body2">Srm: {srm} </Typography>
      <Typography variant="body2">Tagline: {tagline} </Typography>
    </Box>
  );
};

export default BeerDetails;
