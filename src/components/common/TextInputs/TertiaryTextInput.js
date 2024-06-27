import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {AppColors} from '../../../constants/AppColors';

const TertiaryTextInput = props => {
  return (
    <View style={styes.container}>
      <TextInput
        style={styes.textInput}
        placeholder={props.placeholder}
        placeholderTextColor={AppColors.GrayDescriptonText}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default TertiaryTextInput;

const styes = StyleSheet.create({
  container: {},
  textInput: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: AppColors.GrayDescriptonText,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: AppColors.Black,
  },
});
