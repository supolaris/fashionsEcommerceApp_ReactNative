import React, {FC} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

import ArrowIcon from 'react-native-vector-icons/FontAwesome5';

interface Iprops {
  onPress: () => void;
  text: string;
}

const CheckOutButton = (props: Iprops) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
      <ArrowIcon
        style={styles.icon}
        name="arrow-alt-circle-right"
        size={25}
        color={AppColors.White}
      />
    </TouchableOpacity>
  );
};

export default CheckOutButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.Black,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    // width: '80%',
    color: AppColors.White,
    fontSize: 18,
    fontFamily: AppFonts.SemiBold,
  },
  icon: {
    //  width: '20%',
  },
});
