import React, {useState} from 'react';

import PaymentMethod from '../components/screenUi/PaymentMethod';

import {useAppNavigation} from '../@types/AppNavigation';

const PaymentMethodScreen = () => {
  const navigation = useAppNavigation();
  const [selectePaymentMethod, setSelectedPaymentMethod] = useState(0);

  const onPaymentMethodPressed = (item: any) => {
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
      onPaymentMethodPressed={onPaymentMethodPressed}
      selectedPaymentMethod={selectePaymentMethod}
      onAddCardPressed={onAddCardPressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
    />
  );
};

export default PaymentMethodScreen;
