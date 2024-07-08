import React, {FC} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';

import FilterIcon from 'react-native-vector-icons/FontAwesome';

interface Iprops {
  onPress: () => void;
  isDarkMode: boolean;
}

const FilterButton = (props: Iprops) => {
  return (
    <TouchableOpacity
      style={props.isDarkMode ? styles.darkModeContainer : styles.container}
      onPress={props.onPress}>
      <FilterIcon
        style={styles.icon}
        name="filter"
        size={20}
        color={props.isDarkMode ? AppColors.Black : AppColors.White}
      />
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  darkModeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 100,
    backgroundColor: AppColors.White,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 100,
    backgroundColor: AppColors.Black,
  },
  icon: {},
});
