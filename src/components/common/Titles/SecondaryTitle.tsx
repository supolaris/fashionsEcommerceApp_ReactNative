import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppFonts} from '../../../constants/AppFonts';
import {AppColors} from '../../../constants/AppColors';

import {AppContext} from '../../../utilities/AppContext';

interface Iprops {
  text: string;
  isDarkMode: boolean;
}

const SecondaryTitle = (props: Iprops) => {
  const AppCtx = useContext(AppContext);

  const isDarkMode = AppCtx.isDarkMode;

  return (
    <View style={styles.container}>
      <Text style={props.isDarkMode ? styles.darkModeText : styles.text}>
        {props.text}
      </Text>
    </View>
  );
};

export default SecondaryTitle;

const styles = StyleSheet.create({
  container: {},
  darkModeText: {
    fontSize: 18,
    color: AppColors.White,
    fontFamily: AppFonts.Bold,
  },
  text: {
    fontSize: 18,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
});
