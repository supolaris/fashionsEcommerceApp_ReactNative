import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

import SendIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Iprops {
  text: string;
}

const SendBadgeButton: FC<Iprops> = props => {
  return (
    <View style={styles.container}>
      <SendIcon name="send-circle" size={20} color={AppColors.Black} />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default SendBadgeButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: AppColors.LightGray2,
  },
  text: {
    paddingTop: 5,
    paddingLeft: 4,
    fontSize: 14,
    color: AppColors.Black,
    fontFamily: AppFonts.SemiBold,
  },
});
