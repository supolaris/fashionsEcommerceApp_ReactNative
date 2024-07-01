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

  const onUserImagePressed = () => {
    navigation.navigate('ProfileScreen');
  };

  const onHomeProductPressed = (item: any) => {
    navigation.navigate('ProductDescripton_Screen', {item: item});
  };

  return (
    <Home
      onFilterIconPressed={onFilterIconPressed}
      categoryPressed={categoryPressed}
      selectedCategory={selectedCategoryId}
      onViewAllPresses={onViewAllPresses}
      onUserImagePressed={onUserImagePressed}
      onHomeProductPressed={onHomeProductPressed}
    />
  );
};

export default HomeScreen;
