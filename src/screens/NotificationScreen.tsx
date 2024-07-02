import React from 'react';

import Notification from '../components/screenUi/Notification';

import {useAppNavigation} from '../@types/AppNavigation';

const NotificationScreen = () => {
  const navigation = useAppNavigation();

  const onHeaderBackArrowPressed = () => {
    navigation.goBack();
  };

  return <Notification onHeaderBackArrowPressed={onHeaderBackArrowPressed} />;
};

export default NotificationScreen;
