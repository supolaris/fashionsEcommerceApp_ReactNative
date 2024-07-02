import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppFonts} from '../../../constants/AppFonts';
import {AppColors} from '../../../constants/AppColors';

interface Iprops {
  text: string;
}

const QuinaryTitle: FC<Iprops> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default QuinaryTitle;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 22,
    color: AppColors.White,
    fontFamily: AppFonts.Bold,
  },
});
