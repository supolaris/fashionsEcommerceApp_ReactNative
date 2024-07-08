import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppFonts} from '../../../constants/AppFonts';
import {AppColors} from '../../../constants/AppColors';

interface Iprops {
  text: string | number;
  isDarkMode: boolean;
}

const QuinaryTitle = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <Text style={props.isDarkMode ? styles.darkModeText : styles.text}>
        {props.text}
      </Text>
    </View>
  );
};

export default QuinaryTitle;

const styles = StyleSheet.create({
  container: {},
  darkModeText: {
    fontSize: 22,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
  text: {
    fontSize: 22,
    color: AppColors.White,
    fontFamily: AppFonts.Bold,
  },
});
