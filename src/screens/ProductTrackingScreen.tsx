import React, {useContext} from 'react';

import ProductTracking from '../components/screenUi/ProductTracking';

import {useAppNavigation} from '../@types/AppNavigation';

import {AppContext} from '../utilities/AppContext';

const ProductTrackingScreen = () => {
  const AppCtx = useContext(AppContext);
  const isDarkMode = AppCtx.isDarkMode;

  const navigation = useAppNavigation();

  const onHeaderBackArrowPressed = () => {
    navigation.goBack();
  };
  return (
    <ProductTracking
      isDarkModeActive={isDarkMode}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
    />
  );
};

export default ProductTrackingScreen;
