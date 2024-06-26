import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Login from '../components/screenUi/Login';

import {useAppNavigation} from '../@types/AppNavigation';

const LoginScreen = () => {
  const navigation = useAppNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLoginPressed = () => {
    console.log('Log in pressed');
    navigation.navigate('BottomNav');
  };

  const onSignUpPressed = () => {
    console.log('Sign up pressed');
    navigation.navigate('SignUp_Screen');
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
