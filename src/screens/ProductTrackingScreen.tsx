import React from 'react';

import ProductTracking from '../components/screenUi/ProductTracking';

import {useAppNavigation} from '../@types/AppNavigation';

const ProductTrackingScreen = () => {
  const navigation = useAppNavigation();

  const onHeaderBackArrowPressed = () => {
    navigation.goBack();
  };
  return (
    <ProductTracking onHeaderBackArrowPressed={onHeaderBackArrowPressed} />
  );
};

export default ProductTrackingScreen;
