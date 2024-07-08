import React, {useState, useContext} from 'react';

import PaymentMethod from '../components/screenUi/PaymentMethod';

import {useAppNavigation} from '../@types/AppNavigation';

import {InterfacePaymentMethodsData} from '../@types/AppTyping';

import {AppContext} from '../utilities/AppContext';

const PaymentMethodScreen = () => {
  const AppCtx = useContext(AppContext);
  const isDarkMode = AppCtx.isDarkMode;

  const navigation = useAppNavigation();
  const [selectePaymentMethod, setSelectedPaymentMethod] = useState(0);

  const onPaymentMethodPressed = (item: InterfacePaymentMethodsData) => {
    setSelectedPaymentMethod(item.id);
  };

  const onAddCardPressed = () => {
    navigation.navigate('CardDetail_Screen');
  };

  const onHeaderBackArrowPressed = () => {
    navigation.goBack();
  };

  return (
    <PaymentMethod
      isDarkModeActive={isDarkMode}
      onPaymentMethodPressed={onPaymentMethodPressed}
      selectedPaymentMethod={selectePaymentMethod}
      onAddCardPressed={onAddCardPressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
    />
  );
};

export default PaymentMethodScreen;
