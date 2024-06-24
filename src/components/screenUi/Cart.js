import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../constants/AppColors';

const Cart = () => {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
  },
});
