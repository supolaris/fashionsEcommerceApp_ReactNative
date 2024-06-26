import React, {useState} from 'react';

import SignUp from '../components/screenUi/SignUp';

import {useAppNavigation} from '../@types/AppNavigation';

const SignUpScreen = () => {
  const navigation = useAppNavigation();

  const [usename, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const onRegisterPressed = () => {
    if (toggleCheckBox === true) {
      console.log('onRegisterPressed');
      navigation.navigate('RegisterSuccess_Screen');
    } else {
      console.log('select our terms and conditions');
    }
  };
  const onLoginPressed = () => {
    console.log('onLoginPressed');
    navigation.navigate('Login_Screen');
  };

  return (
    <SignUp
      usernameValue={usename}
      usenameOnChangeText={setUsername}
      emailValue={email}
      emailOnChangeText={setEmail}
      passwordValue={password}
      passwordOnChangeText={setPassword}
      confirmPasswordValue={confirmPassword}
      confirmPasswordOnChangeText={setConfirmPassword}
      //checkbox
      toggleCheckBox={toggleCheckBox}
      onValueChange={(value: boolean) => setToggleCheckBox(value)}
      onRegisterPressed={onRegisterPressed}
      onLoginPressed={onLoginPressed}
    />
  );
};

export default SignUpScreen;
