import React from 'react';

import Startup from '../components/screenUi/Startup';

import {useNavigation} from '@react-navigation/native';

const StartupScreen = () => {
  const navigation = useNavigation();

  const onGetStartedPressed = () => {
    navigation.navigate('BottomNav');
  };
  return <Startup onGetStartedPressed={onGetStartedPressed} />;
};

export default StartupScreen;
