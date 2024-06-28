import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';

import ArrowIcon from 'react-native-vector-icons/FontAwesome';
import CartIcon from 'react-native-vector-icons/SimpleLineIcons';

const SecondaryHeader = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrowView}
        onPress={props.onBackArrowPressed}>
        <ArrowIcon
          style={styles.icon}
          name="arrow-left"
          size={20}
          color={AppColors.White}
        />
      </TouchableOpacity>
      {props.showCartIcon == true ? (
        <TouchableOpacity
          style={styles.searchView}
          onPress={props.onCartIconPressed}>
          <CartIcon
            style={styles.icon}
            name="handbag"
            size={28}
            color={AppColors.Black}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SecondaryHeader;

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
