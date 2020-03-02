import React from 'react';
import Auth from '../../templates/Auth';
import SignUpForm from '../../organisms/SignUpForm';

const SignUp: React.FC = () => {
  return <Auth title="회원 가입" Form={SignUpForm} />;
};

export default SignUp;
