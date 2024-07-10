import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';

interface Iprops {
  ot1: any;
  ot2: any;
  ot3: any;
  ot4: any;
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  timer: number;
  verifyOtpPressed: () => void;
  onResendTimer: () => void;
  onChangeText1: (val: any) => void;
  onChangeText2: (val: any) => void;
  onChangeText3: (val: any) => void;
  onChangeText4: (val: any) => void;
}

const Otp = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <View style={styles.otpView}>
        <TextInput
          ref={props.ot1}
          maxLength={1}
          value={props.input1}
          style={[
            styles.otpTextInput,
            {borderColor: props.input1.length >= 1 ? 'green' : 'black'},
          ]}
          keyboardType="number-pad"
          onChangeText={(val: any) => props.onChangeText1(val)}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace' && props.input1.length == 0) {
              props.ot1.current.focus();
            } else if (
              props.input2.length == 1 &&
              nativeEvent.key !== 'Backspace'
            ) {
              props.ot1.current.focus();
            }
          }}
        />
        <TextInput
          ref={props.ot2}
          maxLength={1}
          value={props.input2}
          style={[
            styles.otpTextInput,
            {borderColor: props.input2.length >= 1 ? 'green' : 'black'},
          ]}
          keyboardType="number-pad"
          onChangeText={(val: any) => props.onChangeText2(val)}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace' && props.input2.length == 0) {
              props.ot1.current.focus();
            } else if (
              props.input2.length == 1 &&
              nativeEvent.key == 'Backspace'
            ) {
              props.ot2.current.focus();
            }
          }}
        />
        <TextInput
          ref={props.ot3}
          maxLength={1}
          value={props.input3}
          style={[
            styles.otpTextInput,
            {borderColor: props.input3.length >= 1 ? 'green' : 'black'},
          ]}
          keyboardType="number-pad"
          onChangeText={(val: any) => props.onChangeText3(val)}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace' && props.input3.length == 0) {
              props.ot2.current.focus();
            } else if (
              props.input3.length == 1 &&
              nativeEvent.key == 'Backspace'
            ) {
              props.ot3.current.focus();
            }
          }}
        />
        <TextInput
          ref={props.ot4}
          maxLength={1}
          value={props.input4}
          style={[
            styles.otpTextInput,
            {borderColor: props.input4.length >= 1 ? 'green' : 'black'},
          ]}
          keyboardType="number-pad"
          onChangeText={(val: any) => props.onChangeText4(val)}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace' && props.input4.length == 0) {
              props.ot3.current.focus();
            } else if (
              props.input4.length == 1 &&
              nativeEvent.key == 'Backspace'
            ) {
              props.ot4.current.focus();
            }
          }}
        />
      </View>

      <View style={styles.timerView}>
        <TouchableOpacity
          disabled={props.timer === 0 ? false : true}
          onPress={props.onResendTimer}>
          <Text
            style={[
              styles.resendText,
              {
                color: props.timer == 0 ? 'blue' : 'gray',
              },
            ]}>
            Resend
          </Text>
        </TouchableOpacity>

        {props.timer !== 0 && (
          <Text style={styles.timerText}>{props.timer} seconds</Text>
        )}
      </View>

      <View>
        <TouchableOpacity
          onPress={props.verifyOtpPressed}
          disabled={
            props.input1 !== '' &&
            props.input2 !== '' &&
            props.input3 !== '' &&
            props.input4 !== ''
              ? false
              : true
          }
          style={[
            styles.verifyOtpButtonTouchable,
            {
              backgroundColor:
                props.input1 !== '' &&
                props.input2 !== '' &&
                props.input3 !== '' &&
                props.input4 !== ''
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
