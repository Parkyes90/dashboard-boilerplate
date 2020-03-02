import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../../organisms/Sidebar';
import Header from '../../organisms/Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

const Lorem = (): ReactElement => {
  return (
    <Typography paragraph>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
      non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
      imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
      Convallis convallis tellus id interdum velit laoreet id donec ultrices.
      Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
      adipiscing bibendum est ultricies integer quis. Cursus euismod quis
      viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
      fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
      tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
      varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
      Lorem donec massa sapien faucibus et molestie ac.`.repeat(100)}
    </Typography>
  );
};

const Main: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleToggleOpen = (): void => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <Header open={open} handleToggleOpen={handleToggleOpen} />
      <nav>
        <Sidebar open={open} handleToggleOpen={handleToggleOpen} />
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {Lorem()}
      </main>
    </div>
  );
};

export default Main;
