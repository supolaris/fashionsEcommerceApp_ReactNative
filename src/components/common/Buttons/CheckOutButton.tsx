import React, {FC} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

import ArrowIcon from 'react-native-vector-icons/FontAwesome5';

interface Iprops {
  onPress: () => void;
  text: string;
  isDarkMode: boolean;
}

const CheckOutButton = (props: Iprops) => {
  return (
    <TouchableOpacity
      style={props.isDarkMode ? styles.darkModeContainer : styles.container}
      onPress={props.onPress}>
      <Text style={props.isDarkMode ? styles.darkModeText : styles.text}>
        {props.text}
      </Text>
      <ArrowIcon
        style={styles.icon}
        name="arrow-alt-circle-right"
        size={25}
        color={props.isDarkMode ? AppColors.Black : AppColors.White}
      />
    </TouchableOpacity>
  );
};

export default CheckOutButton;

const styles = StyleSheet.create({
  darkModeContainer: {
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: AppColors.Black,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  darkModeText: {
    color: AppColors.Black,
    fontSize: 18,
    fontFamily: AppFonts.SemiBold,
  },
  text: {
    color: AppColors.White,
    fontSize: 18,
    fontFamily: AppFonts.SemiBold,
  },
  icon: {},
});
