import React, {useState, useContext} from 'react';

import Home from '../components/screenUi/Home';

import {useAppNavigation} from '../@types/AppNavigation';

import {BagsData} from '../constants/FlatlistData';

import {InterfaceProductTyping} from '../@types/AppTyping';
import {InterfaceProductCatagories} from '../@types/AppTyping';

import {AppContext} from '../utilities/AppContext';

const HomeScreen = () => {
  const AppCtx = useContext(AppContext);
  const isDarkMode = AppCtx.isDarkMode;

  const navigation = useAppNavigation();
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState<string>('');

  const onFilterIconPressed = () => {
    navigation.navigate('ProductsFilter_Screen');
  };

  const categoryPressed = (item: InterfaceProductCatagories) => {
    setSelectedCategoryId(item.id);
  };

  const onViewAllPresses = () => {
    navigation.navigate('Catagories_Screen');
  };

  const onUserImagePressed = () => {
    navigation.navigate('ProfileScreen');
  };

  const onHomeProductPressed = (item: InterfaceProductTyping) => {
    navigation.navigate('ProductDescripton_Screen', {item: item});
  };

  const onHeaderBackArrowPressed = () => {};

  const onSearchChangeText = (text: any) => {
    setSearchValue(text);
  };

  return (
    <Home
      isDarkModeActive={isDarkMode}
      selectedCategory={selectedCategoryId}
      categoryPressed={categoryPressed}
      onHomeProductPressed={onHomeProductPressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
      onUserImagePressed={onUserImagePressed}
      //search textinput
      searchValue={searchValue}
      onSearchChangeText={onSearchChangeText}
      //
      onFilterIconPressed={onFilterIconPressed}
      onViewAllPresses={onViewAllPresses}
      FlatlistData={BagsData}
    />
  );
};

export default HomeScreen;
