import React from 'react';

import Second from '../components/screenUi/Second';

import {useAppNavigation} from '../@types/AppNavigation';

const SecondScreen = () => {
  const navigation = useAppNavigation();

  const onLoginPressed = () => {
    navigation.navigate('Login_Screen');
  };
  const onSignupPressed = () => {
    navigation.navigate('SignUp_Screen');
  };
  return (
    <Second onLoginPressed={onLoginPressed} onSignupPressed={onSignupPressed} />
  );
};

export default SecondScreen;
