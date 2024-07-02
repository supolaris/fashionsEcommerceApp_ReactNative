import React, {useState} from 'react';

import Home from '../components/screenUi/Home';

import {useAppNavigation} from '../@types/AppNavigation';

import {InterfaceProductTyping} from '../@types/AppTyping';
import {InterfaceProductCatagories} from '../@types/AppTyping';

const HomeScreen = () => {
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
  const searchOnChangeText = (text: string) => {
    setSearchValue(text);
  };

  return (
    <Home
      selectedCategory={selectedCategoryId}
      categoryPressed={categoryPressed}
      onHomeProductPressed={onHomeProductPressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
      onUserImagePressed={onUserImagePressed}
      searchValue={searchValue}
      searchOnChangeText={searchOnChangeText}
      textt={searchValue}
      onFilterIconPressed={onFilterIconPressed}
      onViewAllPresses={onViewAllPresses}
    />
  );
};

export default HomeScreen;
