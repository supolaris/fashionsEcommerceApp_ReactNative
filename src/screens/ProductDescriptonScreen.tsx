import React, {useState, useContext, useEffect} from 'react';

import ProductDescription from '../components/screenUi/ProductDescription';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useAppNavigation} from '../@types/AppNavigation';

import {InterfaceProductTyping} from '../@types/AppTyping';

import {AppContext} from '../utilities/AppContext';

const ProductDescriptonScreen = ({route}: {route: any}) => {
  const {item} = route.params;

  const [isItemInCart, setIsItemInCart] = useState(false);

  useEffect(() => {
    checkIfItemInCart();
  }, [item]);

  //check if product in the cart then disable the add to cart button
  const checkIfItemInCart = async () => {
    const PreviousProducts = await AsyncStorage.getItem('CartProducts');
    if (PreviousProducts !== null && PreviousProducts !== '') {
      const parsedPreviousProducts = JSON.parse(PreviousProducts);
      const previousProductsArray = Array.isArray(parsedPreviousProducts)
        ? parsedPreviousProducts
        : [parsedPreviousProducts];

      const itemExists = previousProductsArray.some(
        product => product.id === item.id,
      );
      setIsItemInCart(itemExists);
    }
  };

  const AppCtx = useContext(AppContext);
  const isDarkMode = AppCtx.isDarkMode;

  const navigation = useAppNavigation();
  const [productNumber, setProductNumber] = useState<number>();
  const [productSelectedSize, setProductSelectedSize] = useState();

  const [iteminCart, setIteminCart] = useState();

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
    // console.log(item);
    // item.ProductInTheCart = true;
    // itemInMyCart = item.ProductInTheCart;
    // setIteminCart(itemInMyCart);

    //console.log('isItemInCart', itemInMyCart);
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
    setIsItemInCart(true);
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
      isItemInCart={isItemInCart}
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
