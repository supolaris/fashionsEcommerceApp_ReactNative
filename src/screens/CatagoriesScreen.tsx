import React from 'react';

import Catagories from '../components/screenUi/Catagories';

import {useAppNavigation} from '../@types/AppNavigation';

const CatagoriesScreen = () => {
  const navigation = useAppNavigation();

  const onHeaderBackArrowPressed = () => {
    navigation.goBack();
  };

  const onCatagoryPressed = () => {
    navigation.navigate('Products_Screen');
  };
  return (
    <Catagories
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
      onCatagoryPressed={onCatagoryPressed}
    />
  );
};

export default CatagoriesScreen;
