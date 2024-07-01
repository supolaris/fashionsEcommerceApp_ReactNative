import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PrimaryTitle from '../common/Titles/PrimaryTitle';
import PrimaryDescription from '../common/Descriptions/PrimaryDescription';
import LoginTextInput from '../common/TextInputs/LoginTextInput';
import LoginButton1 from '../common/Buttons/LoginButton1';

import CheckBox from '@react-native-community/checkbox';

const SignUp = props => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View style={styles.logoImageView}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/images/fashionAppLogo.png')}
        />
      </View>
      <View style={styles.titleDescriptionView}>
        <View style={styles.titleView}>
          <PrimaryTitle text="Sign Up" />
        </View>
        <View style={styles.descriptionView}>
          <PrimaryDescription text="Create a new account" />
        </View>
      </View>
      <View style={styles.textInputsView}>
        <LoginTextInput
          labelText="User Name"
          value={props.usernameValue}
          onChangeText={props.usenameOnChangeText}
        />
        <LoginTextInput
          labelText="Email"
          value={props.emailValue}
          onChangeText={props.emailOnChangeText}
        />
        <LoginTextInput
          labelText="Password"
          isOpenEye={props.isOpenEye}
          onEyeOpenPressed={props.onEyeOpenPressed}
          secureTextEntry={props.secureTextEntry}
          showIcon={true}
          value={props.passwordValue}
          onChangeText={props.passwordOnChangeText}
        />
        <LoginTextInput
          labelText="Confrim Password"
          isOpenEye={props.isConfirmPasswordOpenEye}
          onEyeOpenPressed={props.onConfirmPasswordEyeOpenPressed}
          secureTextEntry={props.confirmPasswordsecureTextEntry}
          showIcon={true}
          value={props.confirmPasswordValue}
          onChangeText={props.confirmPasswordOnChangeText}
        />
      </View>

      <View style={styles.termsConditionsView}>
        <CheckBox
          // disabled={props.disabled}
          value={props.toggleCheckBox}
          onValueChange={props.onValueChange}
        />
        <View style={styles.termsConditonTextView}>
          <PrimaryDescription text="By creating an account you have to agree with our terms and conditions" />
        </View>
      </View>

      <View style={styles.loginButtonView}>
        <LoginButton1 text="Register" onPress={props.onRegisterPressed} />
      </View>

      <View style={styles.signUpView}>
        <Text style={styles.signUpSelectText}>
          Already have account?{' '}
          <Text style={styles.signUpText} onPress={props.onLoginPressed}>
            Log In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
  },
  logoImageView: {
    alignItems: 'center',
  },
  logoImage: {
    height: 250,
    width: 250,
  },
  titleDescriptionView: {},
  titleView: {},
  descriptionView: {},
  textInputsView: {
    paddingTop: 30,
    paddingBottom: 20,
  },
  loginButtonView: {},
  termsConditionsView: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  termsConditonTextView: {
    paddingLeft: 10,
    width: '90%',
  },
  saperatorView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  leftSaperator: {},
  saperatorText: {
    textAlign: 'center',
    fontSize: 18,
    color: AppColors.Black,
    fontFamily: AppFonts.Medium,
  },
  rightSaperator: {},
  socialLoginButtonsView: {},
  socialButtonView: {
    marginTop: 15,
  },
  signUpView: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  signUpSelectText: {
    fontSize: 16,
    color: AppColors.Black,
    fontFamily: AppFonts.Medium,
  },
  signUpText: {
    fontFamily: AppFonts.Bold,
  },
});
