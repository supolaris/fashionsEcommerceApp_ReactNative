import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';

import TickIcon from 'react-native-vector-icons/MaterialIcons';

const ColorButton = props => {
  const [selected, setSelected] = useState();

  return (
    <View style={[styles.container, {backgroundColor: props.color}]}>
      <TickIcon name="done" size={20} color={AppColors.White} />
    </View>
  );
};

export default ColorButton;

const styles = StyleSheet.create({
  container: {
    padding: 2,
    borderRadius: 100,
  },
});
