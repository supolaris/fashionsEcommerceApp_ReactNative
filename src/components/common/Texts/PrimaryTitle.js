import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppFonts} from '../../../constants/AppFonts';
import {AppColors} from '../../../constants/AppColors';

const PrimaryTitle = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default PrimaryTitle;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 25,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
});
