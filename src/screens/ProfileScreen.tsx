import React, {useContext} from 'react';

import Profile from '../components/screenUi/Profile';

import {useAppNavigation} from '../@types/AppNavigation';

import {AppContext} from '../utilities/AppContext';

const ProfileScreen = () => {
  const AppCtx = useContext(AppContext);
  const isDarkMode = AppCtx.isDarkMode;

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
      isDarkModeActive={isDarkMode}
      onBackArrowPressed={onBackArrowPressed}
      onSettingIconPressed={onSettingIconPressed}
      onPersonalDetailsPressed={onPersonalDetailsPressed}
      onShippingAddressPressed={onShippingAddressPressed}
    />
  );
};

export default ProfileScreen;
