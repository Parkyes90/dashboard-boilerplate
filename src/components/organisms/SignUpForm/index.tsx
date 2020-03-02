import { Button, InputAdornment, TextField } from '@material-ui/core';
import {
  AccountCircle,
  Check,
  Email,
  Lock,
  LockOpen,
} from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './styles';

const SignUpForm: React.FC = () => {
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
      <TextField
        label="Password 확인"
        type="password"
        className={classes.field}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Check />
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        startIcon={<AccountCircle />}
      >
        회원 가입
      </Button>
      <Button
        component="button"
        variant="outlined"
        color="secondary"
        startIcon={<LockOpen />}
        onClick={(): void => {
          history.push('/sign-in');
        }}
      >
        로그인
      </Button>
    </form>
  );
};

export default SignUpForm;
