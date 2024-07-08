import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

import ExitIcon from 'react-native-vector-icons/Ionicons';

import {AppContext} from '../../../utilities/AppContext';

interface Iprops {
  onPress: () => void;
  text: string;
  isDarkMode: boolean;
}

const PrimaryButton = (props: Iprops) => {
  const AppCtx = useContext(AppContext);
  const isDarkMode = AppCtx.isDarkMode;

  return (
    <TouchableOpacity
      style={props.isDarkMode ? styles.darkModecontainer : styles.container}
      onPress={props.onPress}>
      <View style={styles.iconTextView}>
        <ExitIcon
          style={styles.icon}
          name="exit"
          size={25}
          color={AppColors.White}
        />
        <Text style={isDarkMode ? styles.darkModetext : styles.text}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  darkModecontainer: {
    backgroundColor: AppColors.White,
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: AppColors.Black,
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 15,
  },
  darkModetext: {
    color: AppColors.Black,
    fontSize: 18,
    fontFamily: AppFonts.Medium,
  },
  text: {
    color: AppColors.White,
    fontSize: 18,
    fontFamily: AppFonts.Medium,
  },
});
