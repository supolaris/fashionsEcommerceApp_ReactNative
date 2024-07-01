import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';

import Login from '../components/screenUi/Login';

import {useAppNavigation} from '../@types/AppNavigation';

const LoginScreen = () => {
  const navigation = useAppNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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

  const onSignUpPressed = () => {
    navigation.navigate('SignUp_Screen');
  };

  const onEyeOpenPressed = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  return (
    <Login
      //email
      emailValue={email}
      emailOnChangeText={setEmail}
      //password
      passwordValue={password}
      passwordOnChangeText={setPassword}
      onLoginPressed={onLoginPressed}
      onSignUpPressed={onSignUpPressed}
      isOpenEye={isEyeOpen}
      onEyeOpenPressed={onEyeOpenPressed}
      secureTextEntry={isEyeOpen}
    />
  );
};

export default LoginScreen;
