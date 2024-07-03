import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';

import SearchIcon from 'react-native-vector-icons/Feather';

interface Iprops {
  placeholder: string;
  value: string;
  onChangeText: (val: any) => void;
}

const PrimaryTextInput = (props: Iprops) => {
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
  textInput: {
    width: '90%',
  },
});
