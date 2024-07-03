import React, {useState} from 'react';
import {Alert} from 'react-native';

import Login from '../components/screenUi/Login';

import {useAppNavigation} from '../@types/AppNavigation';

const LoginScreen = () => {
  const navigation = useAppNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const onLoginPressed = () => {
    let emailPattren = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isCorrectEmail = emailPattren.test(email);
    if (isCorrectEmail !== true) {
      Alert.alert('Incorrect Email', 'Please enter correct email address');
    } else if (password.length <= 5) {
      Alert.alert('error', 'Your password should be of at least 6 digits');
    } else {
      navigation.navigate('Startup_Screen');
      setEmail('');
      setPassword('');
    }
  };

  const emailOnChangeText = (val: any) => {
    setEmail(val);
  };

  const passwordOnChangeText = (val: any) => {
    setPassword(val);
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp_Screen');
  };

  const onEyeOpenPressed = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  const onFacebookButtonPressed = () => {
    console.log('onApplebuttonPressed');
  };
  const onGoogleButtonPressed = () => {
    console.log('onApplebuttonPressed');
  };
  const onApplebuttonPressed = () => {
    console.log('onApplebuttonPressed');
  };

  return (
    <Login
      emailPlaceholder=""
      emailSecureTextEntry={false}
      emailValue={email}
      emailOnChangeText={emailOnChangeText}
      passwordValue={password}
      passwordOnChangeText={passwordOnChangeText}
      onLoginPressed={onLoginPressed}
      onSignUpPressed={onSignUpPressed}
      isOpenEye={isEyeOpen}
      onEyeOpenPressed={onEyeOpenPressed}
      secureTextEntry={isEyeOpen}
      onFacebookButtonPressed={onFacebookButtonPressed}
      onGoogleButtonPressed={onGoogleButtonPressed}
      onApplebuttonPressed={onApplebuttonPressed}
    />
  );
};

export default LoginScreen;
