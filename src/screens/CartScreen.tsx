import React, {useState, useEffect} from 'react';

import Cart from '../components/screenUi/Cart';

import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [productCounter, setProductCounter] = useState(0);
  let AsyncCartProducts;

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

  useEffect(() => {
    GetCartProducts();
    //AsyncStorage.removeItem('CartProducts');
  }, []);

  const GetCartProducts = async () => {
    AsyncCartProducts = await AsyncStorage.getItem('CartProducts');
    setCartProducts(JSON.parse(AsyncCartProducts));
  };

  return (
    <Cart
      cartProducts={cartProducts}
      productCounterValue={productCounter}
      onMinusIconPressed={onMinusIconPressed}
      onPlusIconPressed={onPlusIconPressed}
    />
  );
};

export default CartScreen;
