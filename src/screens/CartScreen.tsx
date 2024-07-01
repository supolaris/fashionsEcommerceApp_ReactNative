import React, {useState, useEffect} from 'react';

import Cart from '../components/screenUi/Cart';

import {useAppNavigation} from '../@types/AppNavigation';

import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const navigation = useAppNavigation();
  const [cartProducts, setCartProducts] = useState([]);
  const [productNumber, setProductNumber] = useState();

  let AsyncCartProducts;

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

  useEffect(() => {
    GetCartProducts();
    // AsyncStorage.removeItem('CartProducts');
  }, []);

  const GetCartProducts = async () => {
    AsyncCartProducts = await AsyncStorage.getItem('CartProducts');
    setCartProducts(JSON.parse(AsyncCartProducts));
  };

  const onCheckoutPressed = () => {
    navigation.navigate('PaymentMethod_Screen');
  };

  const onHeaderBackArrowPressed = () => {
    navigation.goBack();
  };

  return (
    <Cart
      cartProducts={cartProducts}
      //productCounterValue={productCounter}
      onMinusIconPressed={onMinusIconPressed}
      onPlusIconPressed={onPlusIconPressed}
      onCheckoutPressed={onCheckoutPressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
    />
  );
};

export default CartScreen;
