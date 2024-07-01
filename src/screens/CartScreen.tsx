import React, {useState, useEffect} from 'react';

import Cart from '../components/screenUi/Cart';

import {useAppNavigation} from '../@types/AppNavigation';

import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const navigation = useAppNavigation();
  const [cartProducts, setCartProducts] = useState([]);
  const [productCounter, setProductCounter] = useState(0);
  const [productNumber, setProductNumber] = useState();

  let AsyncCartProducts;

  const onMinusIconPressed = (id: any) => {
    cartProducts.map(item => {
      if (item.id === id) {
        let currentVal = item.NoOfProducts;
        if (currentVal >= 1) {
          let newNoOfProductsVal = currentVal - 1;
          console.log('newNoOfProductsVal', newNoOfProductsVal);
          item.NoOfProducts = newNoOfProductsVal;
          setProductNumber(newNoOfProductsVal);
        } else {
          return item.NoOfProducts;
        }
      }
    });
  };

  const onPlusIconPressed = (id: any) => {
    //console.log(cartProducts)
    cartProducts.map(item => {
      if (item.id === id) {
        let currentVal = item.NoOfProducts;
        let newNoOfProductsVal = currentVal + 1;
        item.NoOfProducts = newNoOfProductsVal;
        setProductNumber(newNoOfProductsVal);
        //console.log(item.NoOfProducts);
        //return item.NoOfProducts++;
      }
    });
    //setProductCounter(productCounter + 1);
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
      productCounterValue={productCounter}
      onMinusIconPressed={onMinusIconPressed}
      onPlusIconPressed={onPlusIconPressed}
      onCheckoutPressed={onCheckoutPressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
    />
  );
};

export default CartScreen;
