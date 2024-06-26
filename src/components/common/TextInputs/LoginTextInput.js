import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

import EyeOpenIcon from 'react-native-vector-icons/Entypo';
import EyeCloseIcon from 'react-native-vector-icons/Entypo';
import SecondaryTitle from '../Titles/SecondaryTitle';
//eye-with-line

const LoginTextInput = props => {
  return (
    <View style={styles.container}>
      <View style={styles.labelView}>
        <Text style={styles.labelText}>{props.labelText}</Text>
      </View>
      <View style={styles.textInputIconView}>
        <TextInput
          style={styles.textInput}
          placeholder={props.placeholder}
          placeholderTextColor={AppColors.Black}
          secureTextEntry={props.secureTextEntry}
          value={props.value}
          onChangeText={props.onChangeText}
        />
        {props.showIcon === true ? (
          <EyeOpenIcon
            style={styles.icon}
            name="eye"
            size={18}
            color={AppColors.Black}
          />
        ) : null}
      </View>
    </View>
  );
};

export default LoginTextInput;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  labelView: {},
  labelText: {
    fontSize: 18,
    color: AppColors.Black,
    fontFamily: AppFonts.SemiBold,
    height: 20,
  },
  textInputIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: AppColors.GrayDescriptonText,
  },
  textInput: {},
  icon: {
    paddingRight: 5,
  },
});
