import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    card: {
      zIndex: 1,
      borderRadius: 10,
      minWidth: '400px',
    },
    title: {
      textAlign: 'center',
      textTransform: 'uppercase',
      cursor: 'inherit',
      padding: theme.spacing(3),
    },
  }),
);
