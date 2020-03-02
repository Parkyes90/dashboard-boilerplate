import React, { ReactElement } from 'react';
import { Card, CardHeader, Container, Typography } from '@material-ui/core';
import styles from './styles';

type AuthProps = {
  Form: React.FC;
  title: string;
};

const Auth: React.FC<AuthProps> = ({ Form, title }) => {
  const classes = styles();
  return (
    <Container className={classes.root} maxWidth={false}>
      <div className={classes.wrapper} />
      <Card className={classes.card}>
        <CardHeader
          component={(): ReactElement => (
            <Typography className={classes.title} variant="h5" color="primary">
              {title}
            </Typography>
          )}
        />
        <Form />
      </Card>
    </Container>
  );
};

export default Auth;
