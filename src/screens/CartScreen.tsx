import React, {useState, useCallback} from 'react';

import Cart from '../components/screenUi/Cart';

import {useAppNavigation} from '../@types/AppNavigation';
import {useFocusEffect} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {InterfaceProductTyping} from '../@types/AppTyping';

const CartScreen = () => {
  const navigation = useAppNavigation();
  const [cartProducts, setCartProducts] = useState<InterfaceProductTyping[]>(
    [],
  );
  const [productNumber, setProductNumber] = useState<number>();

  let AsyncCartProducts;

  useFocusEffect(
    useCallback(() => {
      GetCartProducts();
    }, []),
  );

  const GetCartProducts = async () => {
    AsyncCartProducts = await AsyncStorage.getItem('CartProducts');
    setCartProducts(JSON.parse(AsyncCartProducts));
  };

  const onMinusIconPressed = (id: number) => {
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

  const onTrashIconPressed = async (id: number) => {
    const updateProducts = cartProducts.filter(item => item.id !== id);
    await AsyncStorage.setItem('CartProducts', JSON.stringify(updateProducts));
    setCartProducts(updateProducts);
  };

  return (
    <Cart
      cartProductsData={cartProducts}
      onMinusIconPressed={onMinusIconPressed}
      onPlusIconPressed={onPlusIconPressed}
      onCheckoutPressed={onCheckoutPressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
      onTrashIconPressed={onTrashIconPressed}
    />
  );
};

export default CartScreen;
