import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';

import ArrowIcon from 'react-native-vector-icons/FontAwesome';

interface Iprops {
  onPress: () => void;
}

const StartupButton: FC<Iprops> = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <ArrowIcon
        style={styles.icon}
        name="arrow-right"
        size={20}
        color={AppColors.White}
      />
    </TouchableOpacity>
  );
};

export default StartupButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
});
