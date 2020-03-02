import { Button, InputAdornment, TextField } from '@material-ui/core';
import { AccountCircle, Email, Lock, LockOpen } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../SignUpForm/styles';

const SignInForm: React.FC = () => {
  const classes = styles();
  const history = useHistory();
  return (
    <form className={classes.form}>
      <TextField
        label="Email"
        className={classes.field}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Email />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Password"
        type="password"
        className={classes.field}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Lock />
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        startIcon={<LockOpen />}
      >
        로그인
      </Button>
      <Button
        component="button"
        variant="outlined"
        color="secondary"
        startIcon={<AccountCircle />}
        onClick={(): void => {
          history.push('/sign-up');
        }}
      >
        회원 가입
      </Button>
    </form>
  );
};

export default SignInForm;
