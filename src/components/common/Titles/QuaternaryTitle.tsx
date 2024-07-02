import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

interface Iprops {
  text: string;
}

const QuaternaryTitle = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default QuaternaryTitle;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
  },
  text: {
    fontSize: 16,
    color: AppColors.Black,
    fontFamily: AppFonts.Medium,
    paddingLeft: 10,
  },
});
