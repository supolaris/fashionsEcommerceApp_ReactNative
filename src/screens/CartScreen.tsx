import React, {useState, useEffect, useCallback} from 'react';

import Cart from '../components/screenUi/Cart';

import {useAppNavigation} from '../@types/AppNavigation';
import {useFocusEffect} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const navigation = useAppNavigation();
  const [cartProducts, setCartProducts] = useState([]);
  const [productNumber, setProductNumber] = useState();

  let AsyncCartProducts;

  useFocusEffect(
    useCallback(() => {
      GetCartProducts();
    }, [cartProducts]),
  );

  const GetCartProducts = async () => {
    AsyncCartProducts = await AsyncStorage.getItem('CartProducts');
    setCartProducts(JSON.parse(AsyncCartProducts));
  };

  const onMinusIconPressed = (id: any) => {
    cartProducts.map(item => {
      if (item.id === id) {
        if (item.NoOfProducts >= 1) {
          item.NoOfProducts--;
          setProductNumber(item.NoOfProducts);
        } else {
          return item.NoOfProducts;
        }
      }
    });
  };

  const onPlusIconPressed = (id: any) => {
    cartProducts.map(item => {
      if (item.id === id) {
        item.NoOfProducts++;
        setProductNumber(item.NoOfProducts);
      }
    });
  };

  const onCheckoutPressed = () => {
    navigation.navigate('PaymentMethod_Screen');
  };

  const onHeaderBackArrowPressed = () => {
    navigation.goBack();
  };

  const onTrashIconPressed = async (id: any) => {
    const updateProducts = cartProducts.filter(item => item.id !== id);
    await AsyncStorage.setItem('CartProducts', JSON.stringify(updateProducts));
    setCartProducts(updateProducts);
  };

  return (
    <Cart
      cartProducts={cartProducts}
      onMinusIconPressed={onMinusIconPressed}
      onPlusIconPressed={onPlusIconPressed}
      onCheckoutPressed={onCheckoutPressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
      onTrashIconPressed={onTrashIconPressed}
    />
  );
};

export default CartScreen;
