import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

import ExitIcon from 'react-native-vector-icons/Ionicons';

interface Iprops {
  onPress: () => void;
  text: string;
}

const PrimaryButton: FC<Iprops> = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.iconTextView}>
        <ExitIcon
          style={styles.icon}
          name="exit"
          size={25}
          color={AppColors.White}
        />
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.Black,
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 15,
  },
  text: {
    color: AppColors.White,
    fontSize: 18,
    fontFamily: AppFonts.Medium,
  },
});
