import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

const Wishlist = () => {
  return (
    <View style={styles.continer}>
      <Text>Wishlist</Text>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
  },
});
