import React, {useState} from 'react';

import SignUp from '../components/screenUi/SignUp';

import {useAppNavigation} from '../@types/AppNavigation';
import {Alert} from 'react-native';

const SignUpScreen = () => {
  const navigation = useAppNavigation();

  const [usename, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isConfirmPasswordOpenEye, setIsConfirmPasswordOpenEye] =
    useState(false);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const onRegisterPressed = () => {
    let emailPattren = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let correctEmail = emailPattren.test(email);
    if (!usename) {
      Alert.alert('User Name Required', 'Please enter your user name');
    } else if (correctEmail !== true) {
      Alert.alert('Invalid Email', 'Please enter valid email address');
    } else if (password.length <= 5) {
      Alert.alert(
        'Incorrect Password',
        'Your password should be of at least 6 digits',
      );
    } else if (password !== confirmPassword) {
      Alert.alert('Password not matched', 'Please enter same password');
    } else if (toggleCheckBox !== true) {
      Alert.alert('Error', 'Please agree to our terms and conditions');
    } else {
      navigation.navigate('RegisterSuccess_Screen');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setToggleCheckBox(false);
    }
  };
  const onLoginPressed = () => {
    navigation.navigate('Login_Screen');
  };

  const onEyeOpenPressed = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  const onConfirmPasswordEyeOpenPressed = () => {
    setIsConfirmPasswordOpenEye(!isConfirmPasswordOpenEye);
  };

  const usenameOnChangeText = (val: any) => {
    setUsername(val);
  };
  const emailOnChangeText = (val: any) => {
    setEmail(val);
  };
  const passwordOnChangeText = (val: any) => {
    setPassword(val);
  };
  const confirmPasswordOnChangeText = (val: any) => {
    setConfirmPassword(val);
  };

  const onEmailEyeOpenPressed = () => {
    console.log('onEmailEyeOpenPressed');
  };

  const onUserNameEyeOpenPressed = () => {
    console.log('onUserNameEyeOpenPressed');
  };
  return (
    <SignUp
      passwordPlaceholder=""
      confirmPasswordPlaceholder=""
      useNamePlaceholder=""
      emailPlaceholder=""
      onEmailEyeOpenPressed={onEmailEyeOpenPressed}
      onUserNameEyeOpenPressed={onUserNameEyeOpenPressed}
      //username
      usernameValue={usename}
      usenameOnChangeText={usenameOnChangeText}
      //email
      emailValue={email}
      emailOnChangeText={emailOnChangeText}
      //password
      passwordValue={password}
      passwordOnChangeText={passwordOnChangeText}
      //confirm password
      confirmPasswordValue={confirmPassword}
      confirmPasswordOnChangeText={confirmPasswordOnChangeText}
      //checkbox
      toggleCheckBox={toggleCheckBox}
      onValueChange={(value: boolean) => setToggleCheckBox(value)}
      onRegisterPressed={onRegisterPressed}
      onLoginPressed={onLoginPressed}
      //secure text entry controlled
      isOpenEye={isEyeOpen}
      onEyeOpenPressed={onEyeOpenPressed}
      secureTextEntry={isEyeOpen}
      //confirm password secure text entry controlled
      isConfirmPasswordOpenEye={isConfirmPasswordOpenEye}
      onConfirmPasswordEyeOpenPressed={onConfirmPasswordEyeOpenPressed}
      confirmPasswordsecureTextEntry={isConfirmPasswordOpenEye}
    />
  );
};

export default SignUpScreen;
