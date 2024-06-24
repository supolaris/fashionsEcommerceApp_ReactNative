import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Profile from '../components/screenUi/Profile';

const ProfileScreen = () => {
  //notification variable
  const [isNotificatonEnabled, setIsNotificatonEnabled] = useState(false);
  //dark mode variables
  const [darkModeValue, setDarkModeValue] = useState(false);
  const [darkModeOnOff, setDarkModeOnOff] = useState('Off');

  //edit image function
  const onEditImagePressed = () => {
    console.log('onEditImagePressed');
  };

  //langauge fucntion
  const onSelectLanguagePressed = () => {
    console.log('onSelectLanguagePressed');
  };

  //notification function
  const onNotificationValueChange = () =>
    setIsNotificatonEnabled(previousState => !previousState);

  //dark mode funciton
  const onDarkModeValueChange = () => {
    if (darkModeValue === true) {
      setDarkModeOnOff('Off');
    } else {
      setDarkModeOnOff('On');
    }
    setDarkModeValue(previousState => !previousState);
  };

  //help center function
  const onHelpCenterPressed = () => {
    console.log('onHelpCenterPressed');
  };

  //log out funciton
  const onLogOutPressed = () => {
    console.log('onLogOutPressed');
  };

  return (
    <Profile
      onEditImagePressed={onEditImagePressed}
      onSelectLanguagePressed={onSelectLanguagePressed}
      //Notification
      isNotificatonEnabled={isNotificatonEnabled}
      onNotificationValueChange={onNotificationValueChange}
      notificatonValue={isNotificatonEnabled}
      //Dark Mode
      isDarkMode={darkModeValue}
      onDarkModeValueChange={onDarkModeValueChange}
      darkModevalue={darkModeValue}
      darkModeOnOffText={darkModeOnOff}
      //help center
      onHelpCenterPressed={onHelpCenterPressed}
      //logout
      onLogOutPressed={onLogOutPressed}
    />
  );
};

export default ProfileScreen;
