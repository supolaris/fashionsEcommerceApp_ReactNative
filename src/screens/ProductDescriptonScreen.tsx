import React, {useState} from 'react';

import ProductDescription from '../components/screenUi/ProductDescription';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useAppNavigation} from '../@types/AppNavigation';

const ProductDescriptonScreen = ({route}) => {
  const navigation = useAppNavigation();
  const {item} = route.params;

  //console.log('Item: ', item);

  const [productCounter, setProductCounter] = useState(0);

  const onMinusIconPressed = () => {
    if (productCounter >= 1) {
      return setProductCounter(productCounter - 1);
    } else {
      return productCounter;
    }
  };

  const onPlusIconPressed = () => {
    setProductCounter(productCounter + 1);
  };

  const onAddToCartPressed = async () => {
    //getting old products from async
    // AsyncStorage.removeItem('CartProducts');
    const PreviousProducts = await AsyncStorage.getItem('CartProducts');

    //logic
    if (PreviousProducts !== null && PreviousProducts !== '') {
      // Converting PreviousProducts to object (parse)
      let parsedPreviousProducts = [];
      parsedPreviousProducts = JSON.parse(PreviousProducts);

      // Check if parsedPreviousProducts is an array
      const previousProductsArray = Array.isArray(parsedPreviousProducts)
        ? parsedPreviousProducts
        : [parsedPreviousProducts];

      // Setting up old and new products
      //console.log('parsedPreviousProducts', previousProductsArray);
      const AllPreviousNewProducts = [...previousProductsArray, item];
      //console.log('AllPreviousNewProducts', AllPreviousNewProducts);

      // Store the updated list back to AsyncStorage
      await AsyncStorage.setItem(
        'CartProducts',
        JSON.stringify(AllPreviousNewProducts),
      );
    } else {
      console.log('else entered');
      AsyncStorage.setItem('CartProducts', JSON.stringify(item));
    }

    // const data = await AsyncStorage.getItem('CartProducts');

    // console.log('data:' + data);
  };

  //header function
  const onBackArrowPressed = () => {
    navigation.goBack();
  };

  const onCartIconPressed = () => {
    navigation.navigate('Cart_Screen');
  };

  return (
    <ProductDescription
      item={item}
      productCounterValue={productCounter}
      onMinusIconPressed={onMinusIconPressed}
      onPlusIconPressed={onPlusIconPressed}
      onAddToCartPressed={onAddToCartPressed}
      //header functions
      onCartIconPressed={onCartIconPressed}
      onBackArrowPressed={onBackArrowPressed}
    />
  );
};

export default ProductDescriptonScreen;
