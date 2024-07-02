import React, {FC} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

import EyeOpenIcon from 'react-native-vector-icons/Entypo';
import EyeCloseIcon from 'react-native-vector-icons/Entypo';

interface Iprops {
  labelText: string;
  placeholder: string;
  secureTextEntry: boolean;
  value: string;
  onChangeText: () => void;
  showIcon: boolean;
  isOpenEye: boolean;
  onEyeOpenPressed: () => void;
}

const LoginTextInput: FC<Iprops> = props => {
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
          <>
            {props.isOpenEye ? (
              <TouchableOpacity onPress={props.onEyeOpenPressed}>
                <EyeOpenIcon
                  style={styles.icon}
                  name="eye"
                  size={18}
                  color={AppColors.Black}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={props.onEyeOpenPressed}>
                <EyeCloseIcon
                  style={styles.icon}
                  name="eye-with-line"
                  size={18}
                  color={AppColors.Black}
                />
              </TouchableOpacity>
            )}
          </>
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
  textInput: {
    width: '90%',
  },
  icon: {
    paddingRight: 5,
  },
});
