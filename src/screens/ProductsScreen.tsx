import React from 'react';

import Products from '../components/screenUi/Products';

import {useAppNavigation} from '../@types/AppNavigation';

const ProductsScreen = () => {
  const navigation = useAppNavigation();

  const onProductPressed = (item: any) => {
    navigation.navigate('ProductDescripton_Screen', {item: item});
  };

  return <Products onProductPressed={onProductPressed} />;
};

export default ProductsScreen;
