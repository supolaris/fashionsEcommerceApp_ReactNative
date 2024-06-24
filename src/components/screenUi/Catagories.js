import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../constants/AppColors';

import PrimaryHeader from '../common/Headers/PrimaryHeader';

const Catagories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <PrimaryHeader />
      </View>
    </View>
  );
};

export default Catagories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    padding: 15,
  },
  headerView: {
    alignItems: 'flex-start',
  },
});
