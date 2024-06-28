import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

const ProductDescriptionText = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default ProductDescriptionText;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 15,
    color: AppColors.GrayDescriptonText,
    fontFamily: AppFonts.Regular,
  },
});
