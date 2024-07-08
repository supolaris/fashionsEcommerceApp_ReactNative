import React, {useState, useContext} from 'react';

import Catagories from '../components/screenUi/Catagories';

import {useAppNavigation} from '../@types/AppNavigation';

import {InterfaceProductCatagoriesData} from '../@types/AppTyping';

import {AppContext} from '../utilities/AppContext';

const CatagoriesScreen = () => {
  const AppCtx = useContext(AppContext);
  const isDarkMode = AppCtx.isDarkMode;
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
      isDarkModeActive={isDarkMode}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
      onCatagoryPressed={onCatagoryPressed}
      onSearchValue={searchValue}
      onSearchChangeText={onSearchChangeText}
    />
  );
};

export default CatagoriesScreen;
