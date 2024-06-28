import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

const PromoTextInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholderTextColor={AppColors.Black}
        placeholder={props.placeholder}
      />
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.touchableText}>{props.touchableText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PromoTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: AppColors.LightGray2,
  },
  textinput: {
    color: AppColors.Black,
  },
  touchable: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: AppColors.Black,
  },
  touchableText: {
    fontSize: 14,
    color: AppColors.White,
    fontFamily: AppFonts.SemiBold,
  },
});
