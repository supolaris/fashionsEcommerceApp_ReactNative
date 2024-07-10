import React, {useEffect, useRef, useState} from 'react';
import {Alert} from 'react-native';

import Otp from '../components/screenUi/Otp';

const OtpScreen = () => {
  const ot1 = useRef();
  const ot2 = useRef();
  const ot3 = useRef();
  const ot4 = useRef();

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

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
    let enteredOtp = input1 + input2 + input3 + input4;
    if (enteredOtp === otp) {
      Alert.alert('OTP verified', 'You entered right OTP');
    } else {
      Alert.alert('Invalid input', 'You entered wrong OTP');
    }
  };

  const onResendTimer = () => {
    setTimer(60);
  };

  const onChangeText1 = (input: any) => {
    setInput1(input);
    if (input.length >= 1) {
      ot2.current.focus();
    }
  };
  const onChangeText2 = (input: any) => {
    setInput2(input);
    if (input.length >= 1) {
      ot3.current.focus();
    } else if (input.length < 1) {
      ot1.current.focus();
    }
  };
  const onChangeText3 = (input: any) => {
    setInput3(input);
    if (input.length >= 1) {
      ot4.current.focus();
    } else if (input.length < 1) {
      ot2.current.focus();
    }
  };
  const onChangeText4 = (input: any) => {
    setInput4(input);
    if (input.length < 1) {
      ot3.current.focus();
    }
  };

  return (
    <Otp
      ot1={ot1}
      ot2={ot2}
      ot3={ot3}
      ot4={ot4}
      input1={input1}
      input2={input2}
      input3={input3}
      input4={input4}
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
