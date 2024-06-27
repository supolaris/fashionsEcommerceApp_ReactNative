import React, {useState} from 'react';

import CardDetail from '../components/screenUi/CardDetail';

import {useAppNavigation} from '../@types/AppNavigation';

const CardDetailScreen = () => {
  const navigation = useAppNavigation();

  const [modalVisible, setModalVisible] = useState(true);

  const onBackArrowPressed = () => {
    navigation.goBack();
  };

  const onRequestClose = () => {
    setModalVisible(!modalVisible);
  };

  const onModalButtonPressed = () => {
    setModalVisible(false);
  };

  const onCardSubmitConfirmPressed = () => {
    setModalVisible(true);
  };
  return (
    <CardDetail
      onBackArrowPressed={onBackArrowPressed}
      modalVisible={modalVisible}
      onRequestClose={onRequestClose}
      onModalButtonPressed={onModalButtonPressed}
      onCardSubmitConfirmPressed={onCardSubmitConfirmPressed}
    />
  );
};

export default CardDetailScreen;
