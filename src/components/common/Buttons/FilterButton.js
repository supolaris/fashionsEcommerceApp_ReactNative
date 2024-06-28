import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

import FilterIcon from 'react-native-vector-icons/FontAwesome';
//filter

const FilterButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <FilterIcon
        style={styles.icon}
        name="filter"
        size={20}
        color={AppColors.White}
      />
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
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
