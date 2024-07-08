import React, {useCallback, useContext} from 'react';

import RegisterSuccess from '../components/screenUi/RegisterSuccess';

import {useAppNavigation} from '../@types/AppNavigation';

import {AppContext} from '../utilities/AppContext';

const RegisterSuccessScreen = () => {
  const AppCtx = useContext(AppContext);
  const isDarkMode = AppCtx.isDarkMode;

  const navigation = useAppNavigation();
  const onStartShoppingPressed = () => {
    navigation.navigate('Startup_Screen');
    console.log('onStartShoppingPressed');
  };

  return (
    <RegisterSuccess
      isDarkModeActive={isDarkMode}
      onStartShoppingPressed={onStartShoppingPressed}
    />
  );
};

export default RegisterSuccessScreen;
