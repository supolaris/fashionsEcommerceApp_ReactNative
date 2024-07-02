import React, {FC} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

interface Iprops {
  onPress: () => void;
  text: string;
}

const LoginButton1: FC<Iprops> = props => {
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
