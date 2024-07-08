import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

interface Iprops {
  text: string | number;
  isDarkMode: boolean;
}

const ProductPriceText = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <Text style={props.isDarkMode ? styles.darkModetext : styles.text}>
        ${props.text}
      </Text>
    </View>
  );
};

export default ProductPriceText;

const styles = StyleSheet.create({
  container: {},
  darkModetext: {
    fontSize: 16,
    color: AppColors.White,
    fontFamily: AppFonts.SemiBold,
  },

  text: {
    fontSize: 16,
    color: AppColors.Black,
    fontFamily: AppFonts.SemiBold,
  },
});
