import React from 'react';
import {View, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';

import ArrowIcon from 'react-native-vector-icons/FontAwesome';

const PrimaryHeader = () => {
  return (
    <View style={styles.container}>
      <ArrowIcon
        style={styles.icon}
        name="arrow-left"
        size={20}
        color={AppColors.White}
      />
    </View>
  );
};

export default PrimaryHeader;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    backgroundColor: 'black',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
});
