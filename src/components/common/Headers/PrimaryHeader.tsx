import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';

import ArrowIcon from 'react-native-vector-icons/FontAwesome';
import SearchIcon from 'react-native-vector-icons/AntDesign';

interface Iprops {
  onHeaderBackArrowPressed: () => void;
  showSearchIcon: boolean;
  isDarkMode: boolean;
}

const PrimaryHeader = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={props.isDarkMode ? styles.darkModeArrowView : styles.arrowView}
        onPress={props.onHeaderBackArrowPressed}>
        <ArrowIcon
          style={styles.icon}
          name="arrow-left"
          size={20}
          color={props.isDarkMode ? AppColors.Black : AppColors.White}
        />
      </TouchableOpacity>
      {props.showSearchIcon == true ? (
        <TouchableOpacity style={styles.searchView}>
          <SearchIcon
            style={styles.icon}
            name="search1"
            size={28}
            color={props.isDarkMode ? AppColors.White : AppColors.Black}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default PrimaryHeader;

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
  icon: {},
  searchView: {
    paddingTop: 5,
  },
});
