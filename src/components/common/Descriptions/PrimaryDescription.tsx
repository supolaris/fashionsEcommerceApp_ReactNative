import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppFonts} from '../../../constants/AppFonts';
import {AppColors} from '../../../constants/AppColors';

interface Iprops {
  text: string;
}

const PrimaryDescription = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default PrimaryDescription;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 16,
    color: AppColors.GrayDescriptonText,
    fontFamily: AppFonts.Regular,
  },
});
