import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

interface Iprops {
  onPress: () => void;
  text: string;
}

const QuaternaryButton = (props: Iprops) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.iconTextView}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuaternaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.Black,
    borderRadius: 25,
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
