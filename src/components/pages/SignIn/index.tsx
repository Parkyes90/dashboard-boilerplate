import React from 'react';
import Auth from '../../templates/Auth';
import SignInForm from '../../organisms/SignInForm';

const SignIn: React.FC = () => {
  return <Auth title="로그인" Form={SignInForm} />;
};

export default SignIn;
