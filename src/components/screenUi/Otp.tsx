import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';

const Otp = () => {
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

  return (
    <View style={styles.container}>
      <View style={styles.otpView}>
        <TextInput
          ref={ot1}
          maxLength={1}
          value={input1}
          style={[
            styles.otpTextInput,
            {borderColor: input1.length >= 1 ? 'green' : 'black'},
          ]}
          keyboardType="number-pad"
          onChangeText={input => {
            setInput1(input);
            if (input.length >= 1) {
              ot2.current.focus();
            }
          }}
        />
        <TextInput
          ref={ot2}
          maxLength={1}
          value={input2}
          style={[
            styles.otpTextInput,
            {borderColor: input2.length >= 1 ? 'green' : 'black'},
          ]}
          keyboardType="number-pad"
          onChangeText={input => {
            setInput2(input);
            if (input.length >= 1) {
              ot3.current.focus();
            } else if (input.length < 1) {
              ot1.current.focus();
            }
          }}
        />
        <TextInput
          ref={ot3}
          maxLength={1}
          value={input3}
          style={[
            styles.otpTextInput,
            {borderColor: input3.length >= 1 ? 'green' : 'black'},
          ]}
          keyboardType="number-pad"
          onChangeText={input => {
            setInput3(input);
            if (input.length >= 1) {
              ot4.current.focus();
            } else if (input.length < 1) {
              ot2.current.focus();
            }
          }}
        />
        <TextInput
          ref={ot4}
          maxLength={1}
          value={input4}
          style={[
            styles.otpTextInput,
            {borderColor: input4.length >= 1 ? 'green' : 'black'},
          ]}
          keyboardType="number-pad"
          onChangeText={input => {
            setInput4(input);
            if (input.length < 1) {
              ot3.current.focus();
            }
          }}
        />
      </View>

      <View style={styles.timerView}>
        <TouchableOpacity
          disabled={timer === 0 ? false : true}
          onPress={() => setTimer(10)}>
          <Text
            style={[
              styles.resendText,
              {
                color: timer == 0 ? 'blue' : 'gray',
              },
            ]}>
            Resend
          </Text>
        </TouchableOpacity>

        {timer !== 0 && <Text style={styles.timerText}>{timer} seconds</Text>}
      </View>

      <View>
        <TouchableOpacity
          onPress={verifyOtpPressed}
          disabled={
            input1 !== '' && input2 !== '' && input3 !== '' && input4 !== ''
              ? false
              : true
          }
          style={[
            styles.verifyOtpButtonTouchable,
            {
              backgroundColor:
                input1 !== '' && input2 !== '' && input3 !== '' && input4 !== ''
                  ? 'blue'
                  : 'gray',
            },
          ]}>
          <Text style={styles.verifyOtpButtonTouchableText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    justifyContent: 'center',
  },
  otpView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  otpTextInput: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 2,
    width: 40,
    borderColor: AppColors.Black,
    borderRadius: 10,
  },
  timerView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 40,
    justifyContent: 'center',
  },
  resendText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 20,
  },
  timerText: {
    fontWeight: 'bold',
    color: AppColors.Black,
    fontSize: 20,
  },
  verifyOtpButtonTouchable: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    width: '70%',
    paddingVertical: 10,
    borderRadius: 10,
  },
  verifyOtpButtonTouchableText: {
    fontSize: 20,
    textAlign: 'center',
    color: AppColors.White,
  },
});
