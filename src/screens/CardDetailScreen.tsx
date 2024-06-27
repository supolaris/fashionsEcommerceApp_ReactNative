import React from 'react';
import {View, Text} from 'react-native';

import CardDetail from '../components/screenUi/CardDetail';

import {useAppNavigation} from '../@types/AppNavigation';

const CardDetailScreen = () => {
  const navigation = useAppNavigation();

  const onBackArrowPressed = () => {
    navigation.goBack();
  };
  return <CardDetail onBackArrowPressed={onBackArrowPressed} />;
};

export default CardDetailScreen;
