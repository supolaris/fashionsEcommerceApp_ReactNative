import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

import SearchIcon from 'react-native-vector-icons/Feather';

const PrimaryTextInput = props => {
  return (
    <View style={styles.container}>
      <SearchIcon
        style={styles.icon}
        name="search"
        size={25}
        color={AppColors.Black}
      />
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={AppColors.GrayDescriptonText}
        style={styles.textInput}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default PrimaryTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.LightGray,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  icon: {
    paddingRight: 15,
  },
  textInput: {},
});
