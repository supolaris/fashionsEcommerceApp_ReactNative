import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

import {AppContext} from '../../../utilities/AppContext';

interface Iprops {
  text: string;
}

const QuaternaryTitle = (props: Iprops) => {
  const AppCtx = useContext(AppContext);
  const isDarkMode = AppCtx.isDarkMode;
  return (
    <View style={isDarkMode ? styles.darkModeContainer : styles.container}>
      <Text style={isDarkMode ? styles.darkModetext : styles.text}>
        {props.text}
      </Text>
    </View>
  );
};

export default QuaternaryTitle;

const styles = StyleSheet.create({
  darkModeContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: AppColors.White,
  },
  container: {
    borderBottomWidth: 0.5,
  },
  darkModetext: {
    fontSize: 16,
    color: AppColors.White,
    fontFamily: AppFonts.Medium,
    paddingLeft: 10,
  },
  text: {
    fontSize: 16,
    color: AppColors.Black,
    fontFamily: AppFonts.Medium,
    paddingLeft: 10,
  },
});
