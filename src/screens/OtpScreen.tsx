import React, {useEffect, useRef, useState} from 'react';
import {Alert} from 'react-native';

import Otp from '../components/screenUi/Otp';

const OtpScreen = () => {
  const ot1 = useRef();
  const ot2 = useRef();
  const ot3 = useRef(null);
  const ot4 = useRef();

  const [inputs, setInputs] = useState(['', '', '', '']);

  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer === 0) {
        clearInterval(timerInterval);
      } else {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);

  const verifyOtpPressed = () => {
    let otp = '1234';
    let enteredOtp = inputs[0] + inputs[1] + inputs[2] + inputs[3];
    if (enteredOtp === otp) {
      Alert.alert('OTP verified', 'You entered right OTP');
    } else {
      Alert.alert('Invalid input', 'You entered wrong OTP');
    }
  };

  const onResendTimer = () => {
    setTimer(60);
  };

  const onChangeText1 = (input: any, index: any) => {
    let updateOtp = [...inputs];
    updateOtp[index] = input;
    setInputs(updateOtp);
    if (input.length >= 1) {
      ot2.current?.focus();
    }
  };
  const onChangeText2 = (input: any, index: any) => {
    let updateOtp = [...inputs];
    updateOtp[index] = input;
    setInputs(updateOtp);
    if (input.length >= 1) {
      ot3.current?.focus();
    }
  };
  const onChangeText3 = (input: any, index: any) => {
    let updateOtp = [...inputs];
    updateOtp[index] = input;
    setInputs(updateOtp);
    if (input.length >= 1) {
      ot4.current?.focus();
    }
  };
  const onChangeText4 = (input: any, index: any) => {
    let updateOtp = [...inputs];
    updateOtp[index] = input;
    setInputs(updateOtp);
  };

  return (
    <Otp
      inputs={inputs}
      ot1={ot1}
      ot2={ot2}
      ot3={ot3}
      ot4={ot4}
      // input1={input1}
      // input2={input2}
      // input3={input3}
      // input4={input4}
      timer={timer}
      verifyOtpPressed={verifyOtpPressed}
      onResendTimer={onResendTimer}
      onChangeText1={onChangeText1}
      onChangeText2={onChangeText2}
      onChangeText3={onChangeText3}
      onChangeText4={onChangeText4}
    />
  );
};

export default OtpScreen;
