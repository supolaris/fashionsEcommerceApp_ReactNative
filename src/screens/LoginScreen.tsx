import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Login from '../components/screenUi/Login';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLoginPressed = () => {
    console.log('Log in pressed');
  };

  const onSignUpPressed = () => {
    console.log('Sign up pressed');
  };

  return (
    <Login
      emailValue={email}
      emailOnChangeText={setEmail}
      passwordValue={password}
      passwordOnChangeText={setPassword}
      onLoginPressed={onLoginPressed}
      onSignUpPressed={onSignUpPressed}
    />
  );
};

export default LoginScreen;
