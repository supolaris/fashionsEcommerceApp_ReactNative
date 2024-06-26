import React, {useState} from 'react';
import {View, Text} from 'react-native';

import ProductDescription from '../components/screenUi/ProductDescription';

const ProductDescriptonScreen = () => {
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

  return (
    <ProductDescription
      productCounterValue={productCounter}
      onMinusIconPressed={onMinusIconPressed}
      onPlusIconPressed={onPlusIconPressed}
    />
  );
};

export default ProductDescriptonScreen;
