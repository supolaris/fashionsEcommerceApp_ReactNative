import React, {useState} from 'react';

import ProductDescription from '../components/screenUi/ProductDescription';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useAppNavigation} from '../@types/AppNavigation';

const ProductDescriptonScreen = ({route}: {route: any}) => {
  const {item} = route.params;
  const navigation = useAppNavigation();
  const [productNumber, setProductNumber] = useState();
  const [productSelectedSize, setProductSelectedSize] = useState();

  const onMinusIconPressed = (item: any) => {
    if (item.NoOfProducts >= 1) {
      item.NoOfProducts--;
      setProductNumber(item.NoOfProducts);
    } else {
      return item.NoOfProducts;
    }
  };

  const onPlusIconPressed = (item: any) => {
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
