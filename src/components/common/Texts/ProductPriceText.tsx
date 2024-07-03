import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

interface Iprops {
  text: string | number;
}

const ProductPriceText = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>${props.text}</Text>
    </View>
  );
};

export default ProductPriceText;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 16,
    color: AppColors.Black,
    fontFamily: AppFonts.SemiBold,
  },
});
