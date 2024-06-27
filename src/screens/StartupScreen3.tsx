import React from 'react';

import Startup3 from '../components/screenUi/Startup3';

import {useAppNavigation} from '../@types/AppNavigation';

const StartupScreen3 = () => {
  const navigation = useAppNavigation();

  const onGetStartedPressed = () => {
    navigation.navigate('BottomNav');
  };
  return <Startup3 onGetStartedPressed={onGetStartedPressed} />;
};

export default StartupScreen3;
