import React, {FC} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';

interface Iprops {
  placeholder: string;
  value: string;
  onChangeText: () => void;
}

const SecondaryTextInput = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        placeholderTextColor={AppColors.Black}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default SecondaryTextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInput: {
    // paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: AppColors.GrayDescriptonText,
  },
});
