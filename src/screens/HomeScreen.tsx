import React, {useState} from 'react';

import Home from '../components/screenUi/Home';

import {useAppNavigation} from '../@types/AppNavigation';

const HomeScreen = () => {
  const navigation = useAppNavigation();
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);

  const onFilterIconPressed = () => {
    navigation.navigate('ProductsFilter_Screen');
  };

  const categoryPressed = (item: any) => {
    setSelectedCategoryId(item.id);
  };

  const onViewAllPresses = () => {
    navigation.navigate('Catagories_Screen');
  };

  return (
    <Home
      onFilterIconPressed={onFilterIconPressed}
      categoryPressed={categoryPressed}
      selectedCategory={selectedCategoryId}
      onViewAllPresses={onViewAllPresses}
    />
  );
};

export default HomeScreen;
