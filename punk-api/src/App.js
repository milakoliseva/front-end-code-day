import React from 'react';
import { Container, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { ModalProvider } from './components/Modal';
import BeersContainer from './containers/Beer';

const App = () => (
  <ThemeProvider theme={theme}>
    <Container maxWidth={false}>
      <ModalProvider>
        <BeersContainer />
      </ModalProvider>
    </Container>
  </ThemeProvider>
);

export default App;
