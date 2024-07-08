import React, {useState, useCallback, useContext} from 'react';

import Cart from '../components/screenUi/Cart';

import {useAppNavigation} from '../@types/AppNavigation';
import {useFocusEffect} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {InterfaceProductTyping} from '../@types/AppTyping';
import {StackParmList} from '../@types/ParamsList';

import {AppContext} from '../utilities/AppContext';

const CartScreen: StackParmList['CartScreen'] = () => {
  const AppCtx = useContext(AppContext);
  const isDarkMode = AppCtx.isDarkMode;
  const navigation = useAppNavigation();
  const [cartProducts, setCartProducts] = useState<InterfaceProductTyping[]>(
    [],
  );
  const [productNumber, setProductNumber] = useState<number>();

  useFocusEffect(
    useCallback(() => {
      GetCartProducts();
    }, []),
  );

  const GetCartProducts = async () => {
    let AsyncCartProducts: string | null = await AsyncStorage.getItem(
      'CartProducts',
    );
    if (AsyncCartProducts !== null) {
      setCartProducts(JSON.parse(AsyncCartProducts));
    } else {
      setCartProducts([]);
    }
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
      isDarkModeActive={isDarkMode}
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
