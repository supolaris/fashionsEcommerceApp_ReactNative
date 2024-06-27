import React from 'react';

import Startup2 from '../components/screenUi/Startup2';

import {useAppNavigation} from '../@types/AppNavigation';

const StartupScreen2 = () => {
  const navigation = useAppNavigation();

  const onGetStartedPressed = () => {
    navigation.navigate('Startup_Screen3');
  };
  return <Startup2 onGetStartedPressed={onGetStartedPressed} />;
};

export default StartupScreen2;
