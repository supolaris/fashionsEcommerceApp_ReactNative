import React, {useState} from 'react';

import Catagories from '../components/screenUi/Catagories';

import {useAppNavigation} from '../@types/AppNavigation';

import {InterfaceProductCatagoriesData} from '../@types/AppTyping';

const CatagoriesScreen = () => {
  const navigation = useAppNavigation();
  const [searchValue, setSearchValue] = useState('');

  const onHeaderBackArrowPressed = () => {
    navigation.goBack();
  };

  const onCatagoryPressed = (item: InterfaceProductCatagoriesData) => {
    navigation.navigate('Products_Screen', {item: item});
  };

  const onSearchChangeText = (val: any) => {
    setSearchValue(val);
  };
  return (
    <Catagories
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
      onCatagoryPressed={onCatagoryPressed}
      onSearchValue={searchValue}
      onSearchChangeText={onSearchChangeText}
    />
  );
};

export default CatagoriesScreen;
