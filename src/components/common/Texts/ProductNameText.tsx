import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

interface Iprops {
  text: string;
  isDarkMode: boolean;
}

const ProductNameText = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <Text style={props.isDarkMode ? styles.darkModetext : styles.text}>
        {props.text}
      </Text>
    </View>
  );
};

export default ProductNameText;

const styles = StyleSheet.create({
  container: {},
  darkModetext: {
    fontSize: 17,
    color: AppColors.White,
    fontFamily: AppFonts.SemiBold,
  },
  text: {
    fontSize: 17,
    color: AppColors.Black,
    fontFamily: AppFonts.SemiBold,
  },
});
