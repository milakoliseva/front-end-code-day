import Grid from '@material-ui/core/Grid';
import React, { useContext, useState } from 'react';
import Modal, { ModalContext } from './Modal';
import BeerDetails from './BeerDetails';
import { Box } from '@material-ui/core';
import { useStyles } from '../theme/customStyles';

const Beer = ({ beer, grid }) => {
  const [chosenBeer, setChosenBeer] = useState(null);
  const { openModal } = useContext(ModalContext);
  const styles = useStyles();

  return (
    <>
      <Grid item key={beer.id} xs={12} s={3} md={4} lg={grid} align="center">
        <Box
          className={styles.imageBox}
          onClick={() => {
            setChosenBeer(beer);
            openModal(beer.id);
          }}
        >
          <img className={styles.imageWrapper} alt={beer.id} src={beer.image_url} />
          <Box display="flex" margin="20px 0px" flexDirection="row" justifyContent="space-between">
            <span>
              <b>{beer.name}</b>
            </span>
            <span>{beer.ph}%</span>
          </Box>
        </Box>
      </Grid>

      <Modal id={chosenBeer?.id} title={chosenBeer?.name}>
        <BeerDetails {...chosenBeer} />
      </Modal>
    </>
  );
};

export default Beer;
