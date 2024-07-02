import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

interface Iprops {
  text: string;
}

const ProductNameText: FC<Iprops> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default ProductNameText;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 17,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
});
