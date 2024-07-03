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
import FacebookButton from '../common/Buttons/SocialButtons/FacebookButton';
import GoogleButton from '../common/Buttons/SocialButtons/GoogleButton';
import AppleButton from '../common/Buttons/SocialButtons/AppleButton';

interface Iprops {
  emailValue: string;
  secureTextEntry: boolean;
  passwordValue: string;
  isOpenEye: boolean;
  emailPlaceholder: string;
  emailSecureTextEntry: boolean;
  passwordOnChangeText: (val: any) => void;
  emailOnChangeText: (val: any) => void;
  onEyeOpenPressed: () => void;
  onLoginPressed: () => void;
  onSignUpPressed: () => void;
  onFacebookButtonPressed: () => void;
  onGoogleButtonPressed: () => void;
  onApplebuttonPressed: () => void;
}

const Login = (props: Iprops) => {
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
          <PrimaryTitle text="Welcome!" />
        </View>
        <View style={styles.descriptionView}>
          <PrimaryDescription text="Please login or signup to continue our app" />
        </View>
      </View>
      <View style={styles.textInputsView}>
        <LoginTextInput
          placeholder={props.emailPlaceholder}
          secureTextEntry={props.emailSecureTextEntry}
          showIcon={false}
          isOpenEye={false}
          onEyeOpenPressed={props.onEyeOpenPressed}
          labelText="Email"
          value={props.emailValue}
          onChangeText={(val: any) => props.emailOnChangeText(val)}
        />
        <LoginTextInput
          placeholder={props.emailPlaceholder}
          labelText="Password"
          secureTextEntry={props.secureTextEntry}
          showIcon={true}
          value={props.passwordValue}
          isOpenEye={props.isOpenEye}
          onEyeOpenPressed={props.onEyeOpenPressed}
          onChangeText={(val: any) => props.passwordOnChangeText(val)}
        />
      </View>
      <View style={styles.loginButtonView}>
        <LoginButton1 text="Login" onPress={props.onLoginPressed} />
      </View>

      <View style={styles.saperatorView}>
        <View style={styles.leftSaperator}></View>
        <Text style={styles.saperatorText}>Or</Text>
        <View style={styles.rightSaperator}></View>
      </View>

      <View style={styles.socialLoginButtonsView}>
        <View style={styles.socialButtonView}>
          <FacebookButton onPress={props.onFacebookButtonPressed} />
        </View>
        <View style={styles.socialButtonView}>
          <GoogleButton onPress={props.onGoogleButtonPressed} />
        </View>
        <View style={styles.socialButtonView}>
          <AppleButton onPress={props.onApplebuttonPressed} />
        </View>
      </View>
      <View style={styles.signUpView}>
        <Text style={styles.signUpSelectText}>
          Don't have account?{' '}
          <Text style={styles.signUpText} onPress={props.onSignUpPressed}>
            Sign Up
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;

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
    paddingVertical: 30,
  },
  loginButtonView: {},
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
