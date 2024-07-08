import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppFonts} from '../../../constants/AppFonts';
import {AppColors} from '../../../constants/AppColors';

interface Iprops {
  text: string;
  isDarkMode: boolean;
}

const PrimaryTitle = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <Text style={props.isDarkMode ? styles.darkModetext : styles.text}>
        {props.text}
      </Text>
    </View>
  );
};

export default PrimaryTitle;

const styles = StyleSheet.create({
  container: {},
  darkModetext: {
    fontSize: 22,
    color: AppColors.White,
    fontFamily: AppFonts.Bold,
  },
  text: {
    fontSize: 22,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
});
