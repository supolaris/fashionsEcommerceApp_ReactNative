import React from 'react';

import Catagories from '../components/screenUi/Catagories';

import {useAppNavigation} from '../@types/AppNavigation';

const CatagoriesScreen = () => {
  const navigation = useAppNavigation();

  const onHeaderBackArrowPressed = () => {
    navigation.goBack();
  };

  const onCatagoryPressed = (item: any) => {
    navigation.navigate('Products_Screen', {item: item});
  };
  return (
    <Catagories
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
      onCatagoryPressed={onCatagoryPressed}
    />
  );
};

export default CatagoriesScreen;
