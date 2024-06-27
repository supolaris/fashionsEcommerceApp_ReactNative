import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import First from '../components/screenUi/First';

import {useAppNavigation} from '../@types/AppNavigation';

const FirstScreen = () => {
  const navigation = useAppNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Second_Screen');
    }, 1000 * 2);
  }, []);

  return <First />;
};

export default FirstScreen;
