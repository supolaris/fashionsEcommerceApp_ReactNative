import React from 'react';

import Review from '../components/screenUi/Review';

import {useAppNavigation} from '../@types/AppNavigation';

const ReviewScreen = () => {
  const navigaiton = useAppNavigation();

  const onHeaderBackArrowPressed = () => {
    navigaiton.goBack();
  };

  return <Review onHeaderBackArrowPressed={onHeaderBackArrowPressed} />;
};

export default ReviewScreen;
