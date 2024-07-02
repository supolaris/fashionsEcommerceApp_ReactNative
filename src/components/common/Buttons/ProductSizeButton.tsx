import React, {FC} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AppFonts} from '../../../constants/AppFonts';

interface Iprops {
  text: string;
}

const ProductSizeButton = (props: Iprops) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={[styles.text]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ProductSizeButton;

const styles = StyleSheet.create({
  container: {
    width: '20%',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 100,
    borderWidth: 0.5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: AppFonts.SemiBold,
  },
});
