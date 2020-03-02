import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(5),
    },
    field: {
      marginBottom: theme.spacing(4),
    },
    button: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(1),
    },
  }),
);
