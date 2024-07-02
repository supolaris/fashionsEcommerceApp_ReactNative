import React from 'react';
import {View, Text} from 'react-native';

import Profile from '../components/screenUi/Profile';

import {useAppNavigation} from '../@types/AppNavigation';

const ProfileScreen = () => {
  const navigation = useAppNavigation();

  const onPersonalDetailsPressed = () => {
    navigation.navigate('PersonalDetail_Screen');
  };

  const onShippingAddressPressed = () => {
    navigation.navigate('ProductTracking_Screen');
  };

  const onSettingIconPressed = () => {
    console.log('Setting icon pressed');
  };

  const onBackArrowPressed = () => [navigation.goBack()];

  return (
    <Profile
      onBackArrowPressed={onBackArrowPressed}
      onSettingIconPressed={onSettingIconPressed}
      onPersonalDetailsPressed={onPersonalDetailsPressed}
      onShippingAddressPressed={onShippingAddressPressed}
    />
  );
};

export default ProfileScreen;
