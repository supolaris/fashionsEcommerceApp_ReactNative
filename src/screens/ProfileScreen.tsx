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

  return (
    <Profile
      onPersonalDetailsPressed={onPersonalDetailsPressed}
      onShippingAddressPressed={onShippingAddressPressed}
    />
  );
};

export default ProfileScreen;
