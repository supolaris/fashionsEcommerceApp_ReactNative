import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

const LoginButton1 = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.Black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    color: AppColors.White,
    fontFamily: AppFonts.SemiBold,
  },
});
