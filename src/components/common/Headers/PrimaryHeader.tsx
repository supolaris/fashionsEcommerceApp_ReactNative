import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';

import ArrowIcon from 'react-native-vector-icons/FontAwesome';
import SearchIcon from 'react-native-vector-icons/AntDesign';

interface Iprops {
  onHeaderBackArrowPressed: () => void
  showSearchIcon: boolean
}

const PrimaryHeader: FC<Iprops> = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrowView}
        onPress={props.onHeaderBackArrowPressed}>
        <ArrowIcon
          style={styles.icon}
          name="arrow-left"
          size={20}
          color={AppColors.White}
        />
      </TouchableOpacity>
      {props.showSearchIcon == true ? (
        <TouchableOpacity style={styles.searchView}>
          <SearchIcon
            style={styles.icon}
            name="search1"
            size={28}
            color={AppColors.Black}
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
