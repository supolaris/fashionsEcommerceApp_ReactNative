import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';

import ArrowIcon from 'react-native-vector-icons/FontAwesome';
import SettingIcon from 'react-native-vector-icons/Feather';

interface Iprops {
  onBackArrowPressed: () => void;
  showSettingIcon: boolean;
  onSettingIconPressed: () => void;
  isDarkMode: boolean;
}

const TertiaryHeader = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={props.isDarkMode ? styles.darkModeArrowView : styles.arrowView}
        onPress={props.onBackArrowPressed}>
        <ArrowIcon
          style={styles.icon}
          name="arrow-left"
          size={20}
          color={props.isDarkMode ? AppColors.Black : AppColors.White}
        />
      </TouchableOpacity>
      {props.showSettingIcon == true ? (
        <TouchableOpacity
          style={styles.cartTouchable}
          onPress={props.onSettingIconPressed}>
          <SettingIcon
            style={styles.icon}
            name="settings"
            size={25}
            color={props.isDarkMode ? AppColors.White : AppColors.Black}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default TertiaryHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 50,
  },
  darkModeArrowView: {
    borderRadius: 100,
    backgroundColor: AppColors.White,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowView: {
    borderRadius: 100,
    backgroundColor: AppColors.Black,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 100,
  },
  icon: {},
  searchView: {
    paddingTop: 5,
  },
});
