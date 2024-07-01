import React, {useState} from 'react';

import PersonalDetail from '../components/screenUi/PersonalDetail';

import {useAppNavigation} from '../@types/AppNavigation';

const PersonalDetailScreen = () => {
  const navigation = useAppNavigation();
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
    navigation.navigate('SelectLanguage_Screen');
  };

  //notification function
  const onNotificationValueChange = () => {
    setIsNotificatonEnabled(previousState => !previousState);
  };

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
    <PersonalDetail
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

export default PersonalDetailScreen;
