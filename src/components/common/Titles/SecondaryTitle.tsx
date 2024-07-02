import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppFonts} from '../../../constants/AppFonts';
import {AppColors} from '../../../constants/AppColors';

interface Iprops {
  text: string;
}

const SecondaryTitle: FC<Iprops> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default SecondaryTitle;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 18,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
});
