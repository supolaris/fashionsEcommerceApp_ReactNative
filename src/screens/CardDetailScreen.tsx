import React, {useState} from 'react';

import CardDetail from '../components/screenUi/CardDetail';

import {useAppNavigation} from '../@types/AppNavigation';

const CardDetailScreen = () => {
  const navigation = useAppNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [cardValue, setCardValue] = useState('');
  const [expValue, setExpValue] = useState('');
  const [cvvValue, setCvvValue] = useState('');

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

  const onCancelButtonPressed = () => {
    console.log('onCancelButtonPressed');
  };

  const onCardChangeText = (val: any) => {
    setCardValue(val);
  };

  const onExpChangeText = (val: any) => {
    setExpValue(val);
  };

  const onCvvChangeText = (val: any) => {
    setCvvValue(val);
  };

  return (
    <CardDetail
      onBackArrowPressed={onBackArrowPressed}
      modalVisible={modalVisible}
      onRequestClose={onRequestClose}
      onModalButtonPressed={onModalButtonPressed}
      onCardSubmitConfirmPressed={onCardSubmitConfirmPressed}
      //card
      cardValue={cardValue}
      onCardChangeText={onCardChangeText}
      //cardNumberInput={cardValue}
      //exp
      expValue={expValue}
      onExpChangeText={onExpChangeText}
      cvvValue={cvvValue}
      onCvvChangeText={onCvvChangeText}
      onCancelButtonPressed={onCancelButtonPressed}
    />
  );
};

export default CardDetailScreen;
