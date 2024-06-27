import React from 'react';

import Startup from '../components/screenUi/Startup';

import {useAppNavigation} from '../@types/AppNavigation';

const StartupScreen = () => {
  const navigation = useAppNavigation();

  const onGetStartedPressed = () => {
    navigation.navigate('Startup_Screen2');
  };
  return <Startup onGetStartedPressed={onGetStartedPressed} />;
};

export default StartupScreen;
