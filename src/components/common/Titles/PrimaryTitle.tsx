import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppFonts} from '../../../constants/AppFonts';
import {AppColors} from '../../../constants/AppColors';

interface Iprops {
  text: string;
}

const PrimaryTitle: FC<Iprops> = props => {
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
    fontSize: 22,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
});
