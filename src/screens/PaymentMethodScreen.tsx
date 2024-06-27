import React, {useState} from 'react';

import PaymentMethod from '../components/screenUi/PaymentMethod';

const PaymentMethodScreen = () => {
  const [selectePaymentMethod, setSelectedPaymentMethod] = useState(0);

  const onPaymentMethodPressed = (item: any) => {
    setSelectedPaymentMethod(item.id);
  };

  return (
    <PaymentMethod
      onPaymentMethodPressed={onPaymentMethodPressed}
      selectedPaymentMethod={selectePaymentMethod}
    />
  );
};

export default PaymentMethodScreen;
