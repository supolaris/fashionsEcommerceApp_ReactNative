import React, {useContext} from 'react';

import Notification from '../components/screenUi/Notification';

import {useAppNavigation} from '../@types/AppNavigation';

import {AppContext} from '../utilities/AppContext';

const NotificationScreen = () => {
  const AppCtx = useContext(AppContext);
  const isDarkMode = AppCtx.isDarkMode;

  const navigation = useAppNavigation();

  const onHeaderBackArrowPressed = () => {
    navigation.goBack();
  };

  return (
    <Notification
      isDarkModeActive={isDarkMode}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
    />
  );
};

export default NotificationScreen;
