import React, {useState} from 'react';

import PersonalDetail from '../components/screenUi/PersonalDetail';

import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

import {useAppNavigation} from '../@types/AppNavigation';

const PersonalDetailScreen = () => {
  const navigation = useAppNavigation();
  //notification variable
  const [isNotificatonEnabled, setIsNotificatonEnabled] = useState(false);
  //dark mode variables
  const [darkModeValue, setDarkModeValue] = useState(false);
  const [darkModeOnOff, setDarkModeOnOff] = useState('Off');

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedUserImage, setSelectedUserImage] =
    useState<ImagePickerResponse>();

  //edit image function
  const onEditImagePressed = async () => {
    setModalVisible(!modalVisible);
  };

  //modal
  const onLaunchCameraPressed = async () => {
    const userImage: ImagePickerResponse = await launchCamera();
    setSelectedUserImage(userImage);
  };
  const onSelectFromLibraryPressed = async () => {
    const userImage: ImagePickerResponse = await launchImageLibrary();
    setSelectedUserImage(userImage);
  };

  const onModalRequestClose = () => {
    setModalVisible(!modalVisible);
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
      //modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onModalRequestClose}
      onLaunchCameraPressed={onLaunchCameraPressed}
      onSelectFromLibraryPressed={onSelectFromLibraryPressed}
      //edit image
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
