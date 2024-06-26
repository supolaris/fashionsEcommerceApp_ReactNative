import React from 'react';

import RegisterSuccess from '../components/screenUi/RegisterSuccess';

import {useAppNavigation} from '../@types/AppNavigation';

const RegisterSuccessScreen = () => {
  const navigation = useAppNavigation();
  const onStartShoppingPressed = () => {
    navigation.navigate('BottomNav');
    console.log('onStartShoppingPressed');
  };

  return <RegisterSuccess onStartShoppingPressed={onStartShoppingPressed} />;
};

export default RegisterSuccessScreen;
