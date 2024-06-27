import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';

import ArrowIcon from 'react-native-vector-icons/FontAwesome';
import SearchIcon from 'react-native-vector-icons/AntDesign';

const PrimaryHeader = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.arrowView}>
        <ArrowIcon
          style={styles.icon}
          name="arrow-left"
          size={20}
          color={AppColors.White}
        />
      </View>
      {props.showSearchIcon == true ? (
        <View style={styles.searchView}>
          <SearchIcon
            style={styles.icon}
            name="search1"
            size={28}
            color={AppColors.Black}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default PrimaryHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  arrowView: {
    borderRadius: 100,
    backgroundColor: 'black',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
  searchView: {
    paddingTop: 5,
  },
});
