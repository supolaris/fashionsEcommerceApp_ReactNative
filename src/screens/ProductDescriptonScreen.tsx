import React, {useState, useContext} from 'react';

import ProductDescription from '../components/screenUi/ProductDescription';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useAppNavigation} from '../@types/AppNavigation';

import {InterfaceProductTyping} from '../@types/AppTyping';

import {AppContext} from '../utilities/AppContext';

const ProductDescriptonScreen = ({route}: {route: any}) => {
  const AppCtx = useContext(AppContext);
  const isDarkMode = AppCtx.isDarkMode;

  const {item} = route.params;
  const navigation = useAppNavigation();
  const [productNumber, setProductNumber] = useState<number>();
  const [productSelectedSize, setProductSelectedSize] = useState();

  const onMinusIconPressed = (item: InterfaceProductTyping) => {
    if (item.NoOfProducts >= 1) {
      item.NoOfProducts--;
      setProductNumber(item.NoOfProducts);
    } else {
      return item.NoOfProducts;
    }
  };

  const onPlusIconPressed = (item: InterfaceProductTyping) => {
    item.NoOfProducts++;
    setProductNumber(item.NoOfProducts);
  };

  const onAddToCartPressed = async () => {
    const PreviousProducts = await AsyncStorage.getItem('CartProducts');

    if (PreviousProducts !== null && PreviousProducts !== '') {
      let parsedPreviousProducts = [];
      parsedPreviousProducts = JSON.parse(PreviousProducts);

      const previousProductsArray = Array.isArray(parsedPreviousProducts)
        ? parsedPreviousProducts
        : [parsedPreviousProducts];

      const AllPreviousNewProducts = [...previousProductsArray, item];
      await AsyncStorage.setItem(
        'CartProducts',
        JSON.stringify(AllPreviousNewProducts),
      );
    } else {
      console.log('else entered');
      AsyncStorage.setItem('CartProducts', JSON.stringify(item));
    }
  };

  const onReviewPressed = () => {
    navigation.navigate('Review_Screen');
  };

  //header function
  const onBackArrowPressed = () => {
    navigation.goBack();
  };

  const onCartIconPressed = () => {
    navigation.navigate('CartScreen');
  };

  const onProductSizePressed = (id: any) => {
    setProductSelectedSize(id);
  };

  return (
    <ProductDescription
      isDarkModeActive={isDarkMode}
      item={item}
      onMinusIconPressed={onMinusIconPressed}
      onPlusIconPressed={onPlusIconPressed}
      onAddToCartPressed={onAddToCartPressed}
      onReviewPressed={onReviewPressed}
      onCartIconPressed={onCartIconPressed}
      onBackArrowPressed={onBackArrowPressed}
      onProductSizePressed={onProductSizePressed}
      selectedProductSize={productSelectedSize}
    />
  );
};

export default ProductDescriptonScreen;
