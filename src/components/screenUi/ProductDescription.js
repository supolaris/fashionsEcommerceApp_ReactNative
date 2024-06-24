import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

const ProductDescription = () => {
  return (
    <View style={styles.container}>
      <Text>ProductDescription</Text>
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
  },
});
