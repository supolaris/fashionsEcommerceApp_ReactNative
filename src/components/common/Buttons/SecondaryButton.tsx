import React, {FC} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

interface Iprops {
  onPress: () => void;
  text: string;
}

const SecondaryButton: FC<Iprops> = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.Black,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: AppColors.White,
    fontFamily: AppFonts.SemiBold,
  },
});
