import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {AppColors} from '../../../constants/AppColors';

interface Iprops {
  placeholder: string;
  value: string;
  onChangeText: (val: any) => void;
}

const TertiaryTextInput = (props: Iprops) => {
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
