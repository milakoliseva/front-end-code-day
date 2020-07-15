import { createMuiTheme } from '@material-ui/core';

const ORANGE = '#e65437';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: ORANGE,
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        padding: '30px',
      },
    },

    MuiDialogTitle: {
      root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },

    MuiButton: {
      root: {
        boxShadow: 'none',
      },
      contained: {
        boxShadow: 'none',
      },
    },

    MuiDialogContent: {
      root: {
        minWidth: '300px',
      },
    },
  },
});

export default theme;
