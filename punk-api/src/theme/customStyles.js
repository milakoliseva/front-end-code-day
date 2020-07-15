import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  filterWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '10px',
    marginBottom: '10px',
  },
  imageWrapper: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  imageBox: {
    border: '3px solid black',
    width: '250px',
    height: '250px',
    padding: '15px 0px',
    cursor: 'pointer',
  },
}));

export { useStyles };
