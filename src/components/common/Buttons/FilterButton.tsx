import React, {FC} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';

import FilterIcon from 'react-native-vector-icons/FontAwesome';

interface Iprops {
  onPress: () => void;
}

const FilterButton: FC<Iprops> = props => {
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
